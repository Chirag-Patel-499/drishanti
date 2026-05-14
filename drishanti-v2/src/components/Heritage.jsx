import React from 'react'
import { motion } from 'framer-motion'

const Heritage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
  }

  return (
    <section className="py-20 md:py-32 lg:py-48 px-4 sm:px-8 md:px-12 lg:px-20 bg-primary text-white overflow-hidden relative">
      <div className="max-w-[1200px] mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center space-y-12 md:space-y-20"
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <span className="text-gold-500 font-serif italic tracking-[0.4em] uppercase text-xs md:text-sm font-bold">Our Sacred Legacy</span>
            <h2 className="text-4xl md:text-6xl lg:text-8xl font-serif font-light tracking-tight leading-tight">Crafted with Purpose</h2>
          </motion.div>
          
          <motion.p variants={itemVariants} className="text-lg md:text-2xl lg:text-3xl font-light leading-relaxed text-gray-300 max-w-4xl mx-auto italic opacity-90">
            "Every piece of DRISHANTI jewellery carries the essence of intention and purpose. Inspired by Jain traditions, we create not just ornaments, but personal vows to oneself."
          </motion.p>

          <motion.div variants={itemVariants} className="pt-16 md:pt-24 grid grid-cols-1 sm:grid-cols-3 gap-12 md:gap-16 border-t border-white/10">
            <div className="text-center group px-4">
              <h3 className="text-2xl md:text-3xl font-serif font-light mb-4 text-gold-400 group-hover:text-gold-500 transition-colors duration-500">18kt Gold</h3>
              <p className="text-gray-400 font-bold text-[9px] md:text-[10px] uppercase tracking-[0.3em] opacity-60">Premium Purity & Luster</p>
            </div>
            <div className="text-center group px-4">
              <h3 className="text-2xl md:text-3xl font-serif font-light mb-4 text-gold-400 group-hover:text-gold-500 transition-colors duration-500">German Enamel</h3>
              <p className="text-gray-400 font-bold text-[9px] md:text-[10px] uppercase tracking-[0.3em] opacity-60">Precision Artistry</p>
            </div>
            <div className="text-center group px-4">
              <h3 className="text-2xl md:text-3xl font-serif font-light mb-4 text-gold-400 group-hover:text-gold-500 transition-colors duration-500">Handcrafted</h3>
              <p className="text-gray-400 font-bold text-[9px] md:text-[10px] uppercase tracking-[0.3em] opacity-60">Master Artisan Heritage</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Background Element */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full scale-150"></div>
      </div>
    </section>
  )
}

export default Heritage
