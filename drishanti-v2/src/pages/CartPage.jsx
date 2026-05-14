import React from 'react';
import { motion } from 'framer-motion';
import { X, Minus, Plus, ShoppingBag, ArrowRight, Loader2, ShieldCheck, Truck, RefreshCw } from 'lucide-react';
import { useCart } from '../context/CartContext.jsx';
import { Link } from 'react-router-dom';
import API_BASE_URL from '../services/api';

const CartPage = () => {
  const { cart, cartTotal, removeFromCart, updateQuantity, loading } = useCart();

  if (loading) {
    return (
      <div className="min-h-screen pt-32 flex justify-center items-center">
        <Loader2 className="animate-spin text-primary" size={48} />
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#fdfcfb] pt-32 pb-20 px-4 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif text-primary mb-6">Shopping Bag</h1>
          <p className="text-sm text-gray-400 uppercase tracking-[0.3em]">
            {cart.length} Sacred Pieces Reserved for You
          </p>
        </div>

        {cart.length === 0 ? (
          <div className="text-center py-20 space-y-8 bg-white rounded-[2rem] shadow-sm border border-gray-100">
            <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mx-auto">
              <ShoppingBag size={40} className="text-gray-200" strokeWidth={1} />
            </div>
            <p className="font-serif italic text-gray-400 text-lg">Your bag is currently empty.</p>
            <Link 
              to="/shop" 
              className="inline-flex items-center gap-3 text-[10px] tracking-[0.4em] uppercase border border-primary px-10 py-4 font-bold hover:bg-primary hover:text-white transition-all duration-500"
            >
              Discover Collection
              <ArrowRight size={14} />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Cart Items List */}
            <div className="lg:col-span-2 space-y-8">
              {cart.map((item, idx) => {
                const imageUrl = item.image.startsWith('http') ? item.image : `${API_BASE_URL}${item.image}`;
                return (
                  <motion.div
                    key={`${item.id}-${item.size}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex flex-col sm:flex-row gap-8 bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100 group"
                  >
                    <div className="w-full sm:w-40 aspect-[3/4] overflow-hidden rounded-2xl bg-gray-50">
                      <img src={imageUrl} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    
                    <div className="flex-1 flex flex-col justify-between py-2">
                      <div className="space-y-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-xl font-serif text-primary mb-1">{item.name}</h3>
                            <p className="text-[10px] tracking-widest uppercase text-amber-700 font-bold">
                              {item.material} / {item.size}
                            </p>
                          </div>
                          <button 
                            onClick={() => removeFromCart(item.id, item.size)}
                            className="text-gray-300 hover:text-red-500 transition-colors p-2"
                          >
                            <X size={20} />
                          </button>
                        </div>
                        <p className="text-sm text-gray-500 font-light line-clamp-2">
                          {item.description || "A sacred piece crafted with devotion."}
                        </p>
                      </div>

                      <div className="flex justify-between items-end mt-8">
                        <div className="flex items-center border border-gray-100 rounded-full px-4 py-2 bg-gray-50/50">
                          <button 
                            onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                            className="p-1 text-gray-400 hover:text-primary transition-colors"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-12 text-center text-sm font-bold">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                            className="p-1 text-gray-400 hover:text-primary transition-colors"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <div className="text-right">
                           <p className="text-xs text-gray-400 mb-1">Total Price</p>
                           <p className="text-xl font-medium text-primary">₹{(item.price * item.quantity).toLocaleString()}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-gray-100/50 border border-gray-100 sticky top-32">
                <h2 className="text-2xl font-serif text-primary mb-8 pb-6 border-b border-gray-50">Order Summary</h2>
                
                <div className="space-y-6 mb-8">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500 uppercase tracking-widest text-[10px] font-bold">Subtotal</span>
                    <span className="font-medium text-primary">₹{cartTotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500 uppercase tracking-widest text-[10px] font-bold">Shipping</span>
                    <span className="text-green-600 font-bold text-[10px] tracking-widest uppercase">Complimentary</span>
                  </div>
                  <div className="pt-6 border-t border-gray-50 flex justify-between items-center">
                    <span className="text-primary uppercase tracking-[0.2em] font-bold">Total</span>
                    <span className="text-3xl font-serif text-primary">₹{cartTotal.toLocaleString()}</span>
                  </div>
                </div>

                <Link 
                  to="/checkout"
                  className="w-full bg-primary text-white h-16 rounded-2xl flex items-center justify-center gap-3 text-[11px] tracking-[0.4em] font-bold uppercase hover:bg-black transition-all duration-500 shadow-lg shadow-primary/20 mb-8"
                >
                  Proceed to Checkout
                  <ArrowRight size={18} />
                </Link>

                {/* Trust Elements */}
                <div className="space-y-4 pt-8 border-t border-gray-50">
                  <div className="flex items-center gap-4 text-gray-500">
                    <ShieldCheck size={18} className="text-amber-700" />
                    <span className="text-[10px] uppercase tracking-widest font-bold">Secure Checkout</span>
                  </div>
                  <div className="flex items-center gap-4 text-gray-500">
                    <Truck size={18} className="text-amber-700" />
                    <span className="text-[10px] uppercase tracking-widest font-bold">Insured Shipping</span>
                  </div>
                  <div className="flex items-center gap-4 text-gray-500">
                    <RefreshCw size={18} className="text-amber-700" />
                    <span className="text-[10px] uppercase tracking-widest font-bold">Easy Returns</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default CartPage;
