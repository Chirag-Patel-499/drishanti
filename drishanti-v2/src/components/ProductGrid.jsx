import React from 'react'
import { motion } from 'framer-motion'
import { Heart, ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useWishlist } from '../context/WishlistContext.jsx'
import { useCart } from '../context/CartContext.jsx'
import API_BASE_URL from '../services/api'

const ProductGrid = ({ products = [] }) => {
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { addToCart } = useCart();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
      {products.map((product, idx) => {
        const imageUrl = product.image.startsWith('http') ? product.image : `${API_BASE_URL}${product.image}`;
        return (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="group flex flex-col"
          >
            <div className="relative overflow-hidden bg-[#f5f1ea] border border-transparent group-hover:border-[#d4af37]/50 transition-all duration-700 shadow-sm hover:shadow-xl aspect-[4/5] flex-shrink-0">
              <Link to={`/product/${product.slug || product.id}`} className="block w-full h-full">
                <motion.img
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                  src={imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover object-center"
                />
              </Link>
              
              <button 
                onClick={() => toggleWishlist(product)}
                className={`absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center transition-all duration-500 hover:bg-[#d4af37] ${
                  isInWishlist(product.id) ? 'text-white bg-[#d4af37]' : 'text-white'
                }`}
              >
                <Heart size={16} fill={isInWishlist(product.id) ? 'currentColor' : 'none'} strokeWidth={1.5} />
              </button>

              <div className="absolute inset-x-0 bottom-0 p-6 translate-y-[120%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                <button 
                  onClick={() => addToCart(product, 1, 'Standard')}
                  className="w-full bg-[#0f0f0f] text-[#d4af37] py-4 text-[9px] tracking-[0.3em] uppercase font-bold hover:bg-[#d4af37] hover:text-black transition-colors duration-500 flex items-center justify-center gap-2"
                >
                  <ShoppingBag size={14} />
                  Add to Cart
                </button>
              </div>
            </div>

            <div className="pt-6 text-center px-2 flex-grow flex flex-col justify-between">
              <div>
                <p className="text-[9px] tracking-[0.4em] uppercase text-[#d4af37] mb-2 font-bold opacity-80">{product.material}</p>
                <Link to={`/product/${product.slug || product.id}`}>
                  <h3 className="text-sm md:text-base font-serif text-[#0f0f0f] mb-3 line-clamp-2 hover:text-[#d4af37] transition-colors leading-relaxed tracking-wide">{product.name}</h3>
                </Link>
              </div>
              <p className="text-[#0f0f0f] font-medium tracking-widest text-sm mt-auto">₹{product.price.toLocaleString()}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  )
}

export default ProductGrid
