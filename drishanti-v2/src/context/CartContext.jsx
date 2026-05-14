import React, { createContext, useContext, useState, useEffect } from 'react';
import API_BASE_URL, { API_URLS } from '../services/api';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
};

// Simple session ID generator
const getSessionId = () => {
  let sessionId = localStorage.getItem('drishanti_session_id');
  if (!sessionId) {
    sessionId = 'session_' + Math.random().toString(36).substr(2, 9);
    localStorage.setItem('drishanti_session_id', sessionId);
  }
  return sessionId;
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const sessionId = getSessionId();

  const fetchCart = async () => {
    try {
      const response = await fetch(`${API_URLS.CART}?session_id=${sessionId}`);
      const data = await response.json();
      // Transform backend Cart model to frontend cart format
      const transformedCart = data.map(item => ({
        ...item.product_details,
        quantity: item.quantity,
        size: item.size,
        cart_item_id: item.id
      }));
      setCart(transformedCart);
    } catch (err) {
      console.error('Error fetching cart:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const addToCart = async (product, quantity, size) => {
    try {
      const response = await fetch(API_URLS.CART, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          session_id: sessionId,
          product_id: product.id,
          quantity: quantity,
          size: size
        })
      });
      if (response.ok) fetchCart();
    } catch (err) {
      console.error('Error adding to cart:', err);
    }
  };

  const removeFromCart = async (productId, size) => {
    try {
      await fetch(API_URLS.CART, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ session_id: sessionId, product_id: productId, size: size })
      });
      fetchCart();
    } catch (err) {
      console.error('Error removing from cart:', err);
    }
  };

  const updateQuantity = async (productId, size, newQuantity) => {
    if (newQuantity < 1) return;
    try {
      await fetch(API_URLS.CART, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          session_id: sessionId,
          product_id: productId,
          size: size,
          quantity: newQuantity
        })
      });
      fetchCart();
    } catch (err) {
      console.error('Error updating quantity:', err);
    }
  };

  const clearCart = async () => {
    try {
      await fetch(API_URLS.CLEAR_CART, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ session_id: sessionId })
      });
      setCart([]);
    } catch (err) {
      console.error('Error clearing cart:', err);
    }
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <CartContext.Provider value={{ 
      cart, 
      loading,
      addToCart, 
      removeFromCart, 
      updateQuantity, 
      clearCart, 
      cartCount, 
      cartTotal 
    }}>
      {children}
    </CartContext.Provider>
  );
};
