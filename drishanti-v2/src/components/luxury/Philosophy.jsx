import React from 'react';
import { motion } from 'framer-motion';

const Philosophy = () => {
  return (
    <section className="min-h-screen bg-[#F9F7F2] py-24 px-6 md:px-12 lg:px-24 overflow-hidden relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Editorial Image Side */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1] }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-2xl relative z-10">
            <img 
              src="./images/heritage.jpg" 
              alt="Sacred Protection Philosophy" 
              className="w-full h-full object-cover grayscale-[0.2] transition-transform duration-[2000ms] ease-out group-hover:scale-110"
            />
            {/* Subtle overlay on hover */}
            <div className="absolute inset-0 bg-gold-900/5 group-hover:bg-transparent transition-colors duration-700"></div>
          </div>
          
          {/* Decorative floating elements */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="absolute -bottom-10 -left-10 w-40 h-40 border border-gold-200/50 -z-0 hidden md:block"
          ></motion.div>
          <div className="absolute top-10 -right-4 w-24 h-[1px] bg-gold-400/30 z-20"></div>
        </motion.div>

        {/* Storytelling Content Side */}
        <div className="flex flex-col justify-center space-y-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="text-gold-600 uppercase tracking-[0.5em] text-[10px] md:text-xs font-semibold mb-6 block">
              The Divine Ethos
            </span>
            <h2 className="text-5xl md:text-7xl font-serif text-[#2C2C2C] leading-[1.1] mb-8">
              Sacred Protection <br /> 
              <span className="italic font-light">for the Modern Soul</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <p className="text-lg md:text-xl text-gray-700 font-light leading-relaxed max-w-xl">
              At Drishanti, we believe that true luxury is not just seen, but felt. It is an intention—a conscious choice to surround oneself with protection, discipline, and devotion.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-12 pt-12 border-t border-gold-200/60">
              <div className="group">
                <h3 className="text-[11px] uppercase tracking-[0.3em] text-gold-700 font-bold mb-3 group-hover:text-gold-500 transition-colors">Intention</h3>
                <p className="text-[13px] text-gray-500 leading-relaxed font-light">Infusing every thread with prayers and purposeful thought for the wearer's journey.</p>
              </div>
              <div className="group">
                <h3 className="text-[11px] uppercase tracking-[0.3em] text-gold-700 font-bold mb-3 group-hover:text-gold-500 transition-colors">Discipline</h3>
                <p className="text-[13px] text-gray-500 leading-relaxed font-light">Upholding ancient Jain values and ethical mindfulness in a contemporary world.</p>
              </div>
              <div className="group">
                <h3 className="text-[11px] uppercase tracking-[0.3em] text-gold-700 font-bold mb-3 group-hover:text-gold-500 transition-colors">Devotion</h3>
                <p className="text-[13px] text-gray-500 leading-relaxed font-light">A commitment to sacred craftsmanship, spiritual purity, and timeless elegance.</p>
              </div>
              <div className="group">
                <h3 className="text-[11px] uppercase tracking-[0.3em] text-gold-700 font-bold mb-3 group-hover:text-gold-500 transition-colors">Conscious Living</h3>
                <p className="text-[13px] text-gray-500 leading-relaxed font-light">Harmonizing soul-deep spiritual values with the aesthetics of modern refinement.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="pt-6"
          >
            <button className="group relative overflow-hidden px-12 py-5 border border-gold-400 text-gold-800 tracking-[0.4em] uppercase text-[10px] transition-all duration-700 hover:border-gold-600">
              <span className="relative z-10 transition-colors duration-700 group-hover:text-white">Discover our Journey</span>
              <div className="absolute inset-0 bg-gold-600 -translate-x-full group-hover:translate-x-0 transition-transform duration-[600ms] ease-out"></div>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Background Decorative Text - Large and subtle */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 opacity-[0.02] select-none pointer-events-none hidden lg:block overflow-hidden">
        <h2 className="text-[20rem] font-serif whitespace-nowrap rotate-90 leading-none">
          SOULFUL
        </h2>
      </div>
      
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]"></div>
    </section>
  );
};

export default Philosophy;
