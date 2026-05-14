import React from 'react'
import { motion } from 'framer-motion'

const BestSellers = () => {
  const products = [
    {
      id: 1,
      name: 'Silver Plain Bracelet (Women)',
      price: '₹1,299',
      image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      name: 'Silver Stripes Nazariya (Kids)',
      price: '₹899',
      image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      name: 'Silver Swastik Double Chain (Women)',
      price: '₹1,799',
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 4,
      name: 'Gold OM Swastik Thread Bracelet (Adults)',
      price: '₹1,499',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80'
    },
  ]

  return (
    <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-8 md:px-12 lg:px-20 bg-[#FAF9F6]">
      <div className="max-w-[1800px] mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-12 md:mb-20">
          <span className="text-gold-600 uppercase tracking-[0.5em] text-[10px] md:text-[11px] font-bold block mb-4 opacity-80">
            Our Favorites
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-light text-primary tracking-tight">
            Best Sellers
          </h2>
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 md:gap-x-12 gap-y-12 md:gap-y-16">
          
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              
              {/* Image */}
              <div className="relative aspect-[4/5] overflow-hidden bg-white mb-6 md:mb-8 shadow-sm group-hover:shadow-md transition-shadow duration-500">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.5 }}
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/[0.03] transition-colors duration-500"></div>
              </div>
              
              {/* Content */}
              <div className="text-center px-2">
                <h3 className="text-base md:text-lg font-serif font-light text-primary tracking-wide mb-2">
                  {product.name}
                </h3>
                <p className="text-gold-600 text-xs md:text-sm font-bold tracking-widest">
                  {product.price}
                </p>

                <div className="mt-4 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-[9px] tracking-[0.3em] uppercase border-b border-gold-500/40 pb-1 text-gold-600 font-bold">
                    View Details
                  </span>
                </div>
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default BestSellers