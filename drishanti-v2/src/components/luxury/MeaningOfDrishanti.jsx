import React from 'react';
import { motion } from 'framer-motion';

const MeaningOfDrishanti = () => {
  return (
    <section className="min-h-screen bg-white py-32 px-6 md:px-12 lg:px-24 flex items-center justify-center overflow-hidden relative">
      {/* Background Large Text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none">
        <h2 className="text-[15vw] md:text-[25vw] font-serif font-light tracking-tighter leading-none">
          VISION
        </h2>
      </div>

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="text-gold-600 uppercase tracking-[0.6em] text-xs font-bold mb-8 block">
            The Brand Identity
          </span>
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-serif text-[#1A1A1A] leading-[0.9] tracking-tighter">
            DRISHANTI
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start text-left">
          {/* Drishti Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-baseline gap-4">
              <span className="text-4xl font-serif italic text-gold-500">01</span>
              <h3 className="text-2xl md:text-3xl font-serif text-[#1A1A1A]">Drishti — <span className="italic font-light">The Vision</span></h3>
            </div>
            <div className="w-12 h-[1px] bg-gold-400"></div>
            <p className="text-lg text-gray-600 font-light leading-relaxed max-w-md">
              Derived from the sacred term for 'inner sight' or 'concentrated intention'. It represents our commitment to mindfulness, seeing beyond the physical, and infusing every object with a higher purpose.
            </p>
          </motion.div>

          {/* Shanti Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-baseline gap-4">
              <span className="text-4xl font-serif italic text-gold-500">02</span>
              <h3 className="text-2xl md:text-3xl font-serif text-[#1A1A1A]">Shanti — <span className="italic font-light">The Peace</span></h3>
            </div>
            <div className="w-12 h-[1px] bg-gold-400"></div>
            <p className="text-lg text-gray-600 font-light leading-relaxed max-w-md">
              The ultimate state of spiritual tranquility. Through our creations, we aim to bring a sense of divine calm and protected equilibrium to the modern soul, harmonizing the internal and external worlds.
            </p>
          </motion.div>
        </div>

        {/* Narrative Conclusion */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-32 max-w-3xl mx-auto"
        >
          <div className="relative inline-block">
             <div className="absolute -top-10 -left-10 text-8xl font-serif text-gold-100 italic -z-10 opacity-50">“</div>
             <p className="text-2xl md:text-3xl lg:text-4xl font-serif text-[#1A1A1A] leading-relaxed italic font-light">
              "To carry Drishanti is to carry a vision of peace. A reminder that in the chaos of life, your inner sanctuary remains untouched."
            </p>
            <div className="absolute -bottom-10 -right-10 text-8xl font-serif text-gold-100 italic -z-10 opacity-50 rotate-180">“</div>
          </div>
          
          <div className="mt-16 flex flex-col items-center gap-6">
            <div className="w-[1px] h-20 bg-gradient-to-b from-gold-400 to-transparent"></div>
            <span className="text-[10px] tracking-[0.5em] text-gold-600 uppercase font-bold">A Sacred Union</span>
          </div>
        </motion.div>
      </div>

      {/* Decorative Corners */}
      <div className="absolute top-12 left-12 w-24 h-24 border-t border-l border-gold-200/40"></div>
      <div className="absolute bottom-12 right-12 w-24 h-24 border-b border-r border-gold-200/40"></div>
    </section>
  );
};

export default MeaningOfDrishanti;
