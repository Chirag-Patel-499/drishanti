import React, { createContext, useContext, useState, useEffect } from 'react';
import API_BASE_URL, { API_URLS } from '../services/api';

const WishlistContext = createContext();

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) throw new Error('useWishlist must be used within a WishlistProvider');
  return context;
};

const getSessionId = () => {
  let sessionId = localStorage.getItem('drishanti_session_id');
  if (!sessionId) {
    sessionId = 'session_' + Math.random().toString(36).substr(2, 9);
    localStorage.setItem('drishanti_session_id', sessionId);
  }
  return sessionId;
};

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);
  const sessionId = getSessionId();

  const fetchWishlist = async () => {
    try {
      const response = await fetch(`${API_URLS.WISHLIST}?session_id=${sessionId}`);
      const data = await response.json();
      const transformedWishlist = data.map(item => ({
        ...item.product_details,
        wishlist_item_id: item.id
      }));
      setWishlist(transformedWishlist);
    } catch (err) {
      console.error('Error fetching wishlist:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWishlist();
  }, []);

  const toggleWishlist = async (product) => {
    try {
      await fetch(API_URLS.WISHLIST, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ session_id: sessionId, product_id: product.id })
      });
      fetchWishlist();
    } catch (err) {
      console.error('Error toggling wishlist:', err);
    }
  };

  const isInWishlist = (productId) => {
    return wishlist.some(item => item.id === productId);
  };

  const wishlistCount = wishlist.length;

  return (
    <WishlistContext.Provider value={{ 
      wishlist, 
      loading,
      toggleWishlist, 
      isInWishlist, 
      wishlistCount 
    }}>
      {children}
    </WishlistContext.Provider>
  );
};
