import React from 'react'
import { motion } from 'framer-motion'

const GiftGuide = () => {
  const guides = [
    {
      title: 'For The Bride',
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Timeless pieces for your special day'
    },
    {
      title: 'For The Achiever',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Celebrate milestones in style'
    },
    {
      title: 'For The Minimalist',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Elegant simplicity, maximum impact'
    },
  ]

  return (
    <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-8 md:px-12 lg:px-20 bg-[#FAF9F6]">
      <div className="max-w-[1800px] mx-auto">
        <div className="text-center mb-12 md:mb-20">
          <span className="text-gold-600 uppercase tracking-[0.5em] text-[10px] md:text-[11px] font-bold block mb-4 opacity-80">Gift with Meaning</span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-light text-primary">The Gift Guide</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
          {guides.map((guide, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden mb-6 md:mb-8 bg-white shadow-sm group-hover:shadow-md transition-shadow duration-500">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                  src={guide.image}
                  alt={guide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-700"></div>
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                   <div className="w-10 h-[1px] bg-white/60 mb-4 group-hover:w-20 transition-all duration-700"></div>
                </div>
              </div>
              <div className="text-center md:text-left px-2">
                <h3 className="text-xl md:text-2xl font-serif font-light mb-2 text-primary tracking-wide">{guide.title}</h3>
                <p className="text-xs md:text-sm text-gray-500 font-light tracking-wider uppercase mb-4">{guide.description}</p>
                <span className="text-[9px] tracking-[0.4em] uppercase text-gold-600 font-bold border-b border-gold-500/30 pb-1">Shop Guide</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GiftGuide
