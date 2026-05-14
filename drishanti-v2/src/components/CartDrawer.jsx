import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext.jsx';
import { Link } from 'react-router-dom';
import API_BASE_URL from '../services/api';

const CartDrawer = ({ isOpen, onClose }) => {
  const { cart, cartTotal, removeFromCart, updateQuantity } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[150]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 w-full sm:w-[450px] bg-white z-[160] shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="p-8 border-b border-[#f5f1ea] flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-serif text-[#0f0f0f]">Your Shopping Bag</h2>
                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mt-1">
                  {cart.length} Consecrated Pieces
                </p>
              </div>
              <button onClick={onClose} className="p-2 hover:rotate-90 transition-transform duration-300">
                <X size={24} strokeWidth={1.5} />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-8 space-y-8">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
                  <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center">
                    <ShoppingBag size={32} className="text-gray-300" strokeWidth={1} />
                  </div>
                  <p className="font-serif italic text-gray-400">Your bag is currently empty.</p>
                  <button 
                    onClick={onClose}
                    className="text-[10px] tracking-[0.3em] uppercase border-b border-[#d4af37] pb-1 font-bold text-[#0f0f0f] hover:text-[#d4af37] transition-colors"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                cart.map((item, idx) => {
                   const imageUrl = item.image.startsWith('http') ? item.image : `${API_BASE_URL}${item.image}`;
                   return (
                    <motion.div 
                      key={`${item.id}-${item.size}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex gap-6"
                    >
                      <div className="w-24 aspect-[3/4] bg-gray-50 overflow-hidden rounded-xl">
                        <img src={imageUrl} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 flex flex-col justify-between py-1">
                        <div>
                          <div className="flex justify-between items-start">
                            <h3 className="text-sm font-serif text-[#0f0f0f] leading-relaxed">{item.name}</h3>
                            <button 
                              onClick={() => removeFromCart(item.id, item.size)}
                              className="text-gray-400 hover:text-red-500 transition-colors"
                            >
                              <X size={16} />
                            </button>
                          </div>
                          <p className="text-[10px] tracking-widest uppercase text-gray-400 mt-2">
                            {item.material} / {item.size}
                          </p>
                        </div>

                        <div className="flex justify-between items-end">
                          <div className="flex items-center border border-gray-100 rounded-full px-3 py-1">
                            <button onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)} className="p-1 text-gray-400 hover:text-[#0f0f0f]"><Minus size={12} /></button>
                            <span className="w-8 text-center text-xs font-bold">{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)} className="p-1 text-gray-400 hover:text-[#0f0f0f]"><Plus size={12} /></button>
                          </div>
                          <p className="text-sm font-medium">₹{(item.price * item.quantity).toLocaleString()}</p>
                        </div>
                      </div>
                    </motion.div>
                   );
                })
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="p-8 bg-[#fafafa] border-t border-[#f5f1ea] space-y-6">
                <div className="flex justify-between items-center text-[#0f0f0f]">
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Subtotal</span>
                  <span className="text-xl font-serif">₹{cartTotal.toLocaleString()}</span>
                </div>
                <p className="text-[10px] text-gray-400 text-center italic">
                  Shipping and taxes calculated at checkout.
                </p>
                <Link 
                  to="/checkout"
                  onClick={onClose}
                  className="w-full bg-[#0f0f0f] text-[#d4af37] h-14 flex items-center justify-center gap-3 text-[10px] tracking-[0.3em] font-bold uppercase hover:bg-[#d4af37] hover:text-[#0f0f0f] transition-colors duration-500"
                >
                  Proceed to Checkout
                  <ArrowRight size={16} />
                </Link>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
