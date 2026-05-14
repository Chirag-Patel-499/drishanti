import React from 'react'
import { motion } from 'framer-motion'

const Partitions = () => {
  const partitions = [
    { title: 'GOLD', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
    { title: 'SILVER', image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
    { title: 'STORY', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' },
    { title: 'READY TO SHIP', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80' }
  ]

  return (
    <section className="py-16 md:py-24 px-4 sm:px-8 md:px-12 lg:px-20 bg-white">
      <div className="max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10">
          {partitions.map((partition, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="relative h-[400px] md:h-[500px] overflow-hidden group cursor-pointer"
            >
              <img
                src={partition.image}
                alt={partition.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all duration-700"></div>
              
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                <div className="w-12 h-[1px] bg-gold-200/50 mb-6 group-hover:w-24 transition-all duration-700"></div>
                <h3 className="text-white text-3xl md:text-5xl font-serif font-light tracking-[0.1em] text-center">{partition.title}</h3>
                <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                   <span className="text-[10px] tracking-[0.4em] uppercase text-white border-b border-white/30 pb-1 font-bold">Discover</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Partitions