import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Heart, Loader2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useWishlist } from '../context/WishlistContext.jsx'
import API_BASE_URL, { API_URLS } from '../services/api'

const Bestsellers = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const { toggleWishlist, isInWishlist } = useWishlist()

  useEffect(() => {
    const fetchBestsellers = async () => {
      try {
        const response = await fetch(API_URLS.BESTSELLERS)
        if (!response.ok) throw new Error('Failed to fetch bestsellers')
        const data = await response.json()
        setProducts(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchBestsellers()
  }, [])

  if (loading) {
    return (
      <div className="py-20 flex justify-center items-center">
        <Loader2 className="animate-spin text-primary" size={40} />
      </div>
    )
  }

  if (error) {
    return (
      <div className="py-20 text-center text-red-500 font-serif">
        Error: {error}
      </div>
    )
  }

  return (
    <section className="py-20 md:py-32 bg-white px-4 sm:px-8 md:px-12 lg:px-20 border-b border-[#f5f1ea]">
      <div className="max-w-[1600px] mx-auto">

        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <span className="text-[#d4af37] uppercase tracking-[0.5em] text-[10px] md:text-[11px] font-bold block mb-4">
            Curated Excellence
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-light text-[#0f0f0f] tracking-tight">
            Our Bestsellers
          </h2>
          <div className="w-16 h-[1px] bg-[#d4af37] mx-auto mt-8"></div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 md:gap-x-12 gap-y-12 md:gap-y-16">
          {products.map((product, idx) => {
            const imageUrl = product.image.startsWith('http') 
              ? product.image 
              : `${API_BASE_URL}${product.image}`;

            return (
              <div key={product.id} className="group relative">
                <Link
                  to={`/product/${product.slug || product.id}`}
                  className="block cursor-pointer h-full"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="h-full"
                  >
                    <div className="relative aspect-[4/5] overflow-hidden bg-[#f5f1ea] border border-transparent group-hover:border-[#d4af37]/40 transition-all duration-700 shadow-sm hover:shadow-lg mb-6 md:mb-8">
                      {/* Image */}
                      <motion.img 
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                        src={imageUrl} 
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />

                      {/* Dark Overlay + CTA */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-700 flex items-center justify-center">
                        <motion.span 
                          className="text-[#d4af37] text-[9px] tracking-[0.3em] uppercase font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-700 border border-[#d4af37] px-8 py-4 bg-[#0f0f0f]/80 backdrop-blur-sm hover:bg-[#d4af37] hover:text-black"
                        >
                          View Details
                        </motion.span>
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="text-center px-2">
                      <p className="text-[9px] md:text-[10px] tracking-[0.4em] uppercase text-[#d4af37] mb-3 font-bold opacity-80">
                        {product.material}
                      </p>
                      <h3 className="text-sm md:text-base font-serif font-light text-[#0f0f0f] tracking-wide mb-3 line-clamp-2 hover:text-[#d4af37] transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-[#0f0f0f] text-xs md:text-sm font-medium tracking-widest">
                        ₹{product.price.toLocaleString()}
                      </p>
                    </div>
                  </motion.div>
                </Link>

                {/* Wishlist Icon - Outside Link to avoid navigation on click */}
                <button 
                  onClick={() => toggleWishlist(product)}
                  className={`absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center transition-all duration-500 hover:bg-[#d4af37] ${
                    isInWishlist(product.id) ? 'text-white bg-[#d4af37]' : 'text-white'
                  }`}
                >
                  <Heart size={16} fill={isInWishlist(product.id) ? 'currentColor' : 'none'} strokeWidth={1.5} />
                </button>
              </div>
            )
          })}
        </div>

        {/* ✅ CENTER BUTTON */}
        <div className="flex justify-center mt-20">
          <Link
            to="/shop"
            className="text-[10px] tracking-[0.4em] uppercase border border-[#0f0f0f] text-[#0f0f0f] px-12 py-4 hover:bg-[#0f0f0f] hover:text-[#d4af37] transition-all duration-500 font-bold"
          >
            Discover All Creations
          </Link>
        </div>

      </div>
    </section>
  )
}

export default Bestsellers
