import React from 'react'
import { motion } from 'framer-motion'

const GoldSilver = () => {
  const items = [
    {
      title: 'Gold',
      description: 'Crafted in luminous gold, each piece reflects timeless elegance and enduring beauty.',
      image: './images/gold.jpg',
      tag: 'Maison Drishanti'
    },
    {
      title: 'Silver',
      description: 'Refined in sterling silver, designed for modern grace with a classic soul.',
      image: './images/silver.jpg',
      tag: 'Maison Drishanti'
    }
  ]

  return (
    <section className="bg-white py-6 md:py-8 lg:py-10">

      {/* HEADING SECTION */}
      <div className="text-center mb-4 md:mb-6 px-4">
        <span className="text-[10px] md:text-[11px] tracking-[0.5em] uppercase text-gold-500 block mb-4 font-bold">
          Maison Drishanti
        </span>

        <h2 className="text-3xl md:text-5xl lg:text-5xl font-serif font-light text-primary">
          Discover Our Collections
        </h2>
      </div>

      {/* GOLD / SILVER SPLIT */}
      <div className="flex flex-col lg:flex-row min-h-[60vh] lg:min-h-[80vh]">
        {items.map((item, index) => (
          <motion.div 
            key={index}
            className="relative w-full lg:w-1/2 h-[500px] lg:h-auto overflow-hidden group cursor-pointer border-b lg:border-b-0 lg:border-r border-gray-100 last:border-r-0"
          >
            {/* Image Container */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0"
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover object-center transition-all duration-1000 group-hover:brightness-90" 
              />
              <div className="absolute inset-0 bg-black/30 lg:bg-black/20 group-hover:bg-black/40 transition-all duration-700"></div>
            </motion.div>

            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-8 sm:px-12 z-10">
              
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-[10px] tracking-[0.4em] uppercase mb-4 md:mb-6 text-gold-200 font-bold"
              >
                {item.tag}
              </motion.span>

              <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif font-light mb-4 md:mb-6 tracking-wide">
                {item.title}
              </h2>

              <p className="max-w-xs md:max-w-sm text-xs md:text-sm lg:text-base text-white/90 mb-8 md:mb-10 leading-relaxed font-light">
                {item.description}
              </p>

              <div className="w-12 h-[1px] bg-white/50 mb-8 md:mb-10 transition-all duration-700 group-hover:w-24"></div>

              <button className="text-[10px] tracking-[0.4em] uppercase border border-white px-8 md:px-10 py-3 md:py-4 transition-all duration-500 hover:bg-white hover:text-black font-bold">
                Explore Collection
              </button>
            </div>
            
            {/* Gradient Detail */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40"></div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default GoldSilver