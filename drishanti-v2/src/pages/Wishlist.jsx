import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ShoppingBag, X, ArrowRight, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useWishlist } from '../context/WishlistContext.jsx';
import { useCart } from '../context/CartContext.jsx';
import API_BASE_URL from '../services/api';

const WishlistPage = () => {
  const { wishlist, toggleWishlist, loading } = useWishlist();
  const { addToCart } = useCart();

  if (loading) {
    return (
      <div className="min-h-screen pt-32 flex justify-center items-center">
        <Loader2 className="animate-spin text-primary" size={48} />
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white pt-32 pb-20 px-4 md:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif text-primary mb-6">Your Wishlist</h1>
          <p className="text-sm text-gray-400 uppercase tracking-[0.3em]">
            {wishlist.length} Sacred Pieces Saved
          </p>
        </div>

        {wishlist.length === 0 ? (
          <div className="text-center py-20 space-y-8">
            <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mx-auto">
              <Heart size={40} className="text-gray-200" strokeWidth={1} />
            </div>
            <p className="font-serif italic text-gray-400 text-lg">Your wishlist is empty.</p>
            <Link 
              to="/shop" 
              className="inline-flex items-center gap-3 text-[10px] tracking-[0.4em] uppercase border border-primary px-10 py-4 font-bold hover:bg-primary hover:text-white transition-all duration-500"
            >
              Explore Collection
              <ArrowRight size={14} />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {wishlist.map((item, idx) => {
              const imageUrl = item.image.startsWith('http') ? item.image : `${API_BASE_URL}${item.image}`;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="group"
                >
                  <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] bg-gray-50 mb-6 shadow-md">
                    <Link to={`/product/${item.slug || item.id}`}>
                      <img src={imageUrl} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    </Link>
                    <button 
                      onClick={() => toggleWishlist(item)}
                      className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-red-500 shadow-sm hover:bg-red-500 hover:text-white transition-all"
                    >
                      <X size={18} />
                    </button>
                    <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <button 
                        onClick={() => addToCart(item, 1, 'Standard')}
                        className="w-full bg-primary/90 backdrop-blur-md text-white py-3 text-[10px] tracking-[0.3em] uppercase font-bold rounded-2xl hover:bg-black"
                      >
                        Add to Bag
                      </button>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-[9px] tracking-[0.3em] uppercase text-gold-600 mb-2 font-bold">{item.material}</p>
                    <h3 className="text-base font-serif text-primary mb-2 line-clamp-1">{item.name}</h3>
                    <p className="text-primary font-medium">₹{item.price.toLocaleString()}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
};

export default WishlistPage;
