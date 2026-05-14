import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const WhatIsRakshapotli = () => {
  const { scrollYProgress } = useScroll();
  const yImage = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section className="relative min-h-screen flex items-center bg-[#1A1A1A] py-24 overflow-hidden">
      {/* Background Cinematic Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-l from-gold-900/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-[40%] h-[60%] bg-gradient-to-t from-gold-900/10 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Side: Cinematic Image */}
          <motion.div 
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div 
              style={{ y: yImage }}
              className="aspect-[3/4] overflow-hidden rounded-sm shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)]"
            >
              <img 
                src="./images/s1.jpg" 
                alt="The Sacred Rakshapotli" 
                className="w-full h-full object-cover scale-110 grayscale-[0.3] hover:grayscale-0 transition-all duration-[2000ms]"
              />
            </motion.div>
            
            {/* Decorative Overlay Frame */}
            <div className="absolute inset-4 border border-white/10 pointer-events-none"></div>
            
            {/* Floating Detail Label */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
              viewport={{ once: true }}
              className="absolute -bottom-8 -left-8 bg-gold-600/10 backdrop-blur-xl border border-gold-400/20 p-6 hidden md:block"
            >
              <p className="text-gold-400 text-[10px] tracking-[0.5em] uppercase font-semibold">
                Consecrated <br /> Significance
              </p>
            </motion.div>
          </motion.div>

          {/* Right Side: Storytelling Content */}
          <div className="flex flex-col space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <span className="text-gold-500 uppercase tracking-[0.6em] text-xs font-bold mb-6 block">
                The Sacred Essence
              </span>
              <h2 className="text-5xl md:text-7xl font-serif text-white leading-tight mb-8">
                What is <br />
                <span className="italic font-light text-gold-400">Rakshapotli?</span>
              </h2>
              <div className="w-24 h-[1px] bg-gold-600/50 mb-10"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed font-serif italic">
                "It is more than a wearable object; it is a sacred vow, a vessel of intention, and a constant connection to the divine."
              </p>
              
              <div className="space-y-6 text-gray-400 font-light leading-relaxed text-lg max-w-xl">
                <p>
                  At its core, a Rakshapotli is a consecrated talisman designed for the modern soul. It bridges the gap between ancient spiritual protection and contemporary elegance.
                </p>
                <p>
                  Each piece is meticulously crafted and infused with the sacred <span className="text-gold-400 font-medium">Vasakshep</span>—a consecrated powder representing purity and divine blessing, serving as an impenetrable shield of positivity in your daily life.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-8 pt-8 border-t border-white/5"
            >
              <div>
                <h4 className="text-gold-500 text-[10px] tracking-[0.4em] uppercase font-bold mb-3">Protection</h4>
                <p className="text-xs text-gray-500 leading-relaxed uppercase tracking-widest">A spiritual armor for the modern seeker.</p>
              </div>
              <div>
                <h4 className="text-gold-500 text-[10px] tracking-[0.4em] uppercase font-bold mb-3">Connection</h4>
                <p className="text-xs text-gray-500 leading-relaxed uppercase tracking-widest">A daily reminder of your divine vow.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
              viewport={{ once: true }}
              className="pt-10"
            >
              <button className="group flex items-center gap-6 text-white tracking-[0.5em] uppercase text-[10px] font-bold">
                <span className="pb-1 border-b border-gold-600/50 group-hover:border-gold-400 transition-colors duration-500">
                  Enter the Story
                </span>
                <span className="w-12 h-12 rounded-full border border-gold-600/30 flex items-center justify-center group-hover:bg-gold-600 group-hover:border-gold-600 transition-all duration-700">
                  <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="translate-x-0 group-hover:translate-x-1 transition-transform duration-500">
                    <path d="M12 1L17 6L12 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M1 6H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Side Decorative Text */}
      <div className="absolute left-0 bottom-24 opacity-5 select-none pointer-events-none -rotate-90 origin-left translate-x-12">
        <span className="text-8xl font-serif text-white tracking-widest uppercase">Sacred Protection</span>
      </div>
    </section>
  );
};

export default WhatIsRakshapotli;
