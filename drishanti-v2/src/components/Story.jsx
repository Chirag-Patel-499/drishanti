import React from 'react'
import { motion } from 'framer-motion'

const Story = () => {
  return (
    <section className="py-24 md:py-32 lg:py-40 px-6 sm:px-8 md:px-12 lg:px-24 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center gap-16 md:gap-24">
        
        {/* Image Side - The Visual Soul */}
        <div className="w-full lg:w-1/2 relative group">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="overflow-hidden aspect-[4/5] shadow-2xl relative z-10"
          >
            <motion.img 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 2 }}
              src="./images/story.jpg"  
              alt="The Soul of Drishanti" 
              className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-1000" 
            />
          </motion.div>
          {/* Decorative Spiritual Geometry */}
          <div className="absolute -top-6 -left-6 w-32 h-32 border-t border-l border-[#AF9B7D]/40 -z-0"></div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b border-r border-[#AF9B7D]/40 -z-0"></div>
          
          <div className="absolute -right-8 top-1/2 -translate-y-1/2 vertical-text hidden xl:block">
            <span className="text-[10px] tracking-[0.6em] text-[#AF9B7D] uppercase font-bold opacity-40">
              Est. MMXXIV • Sacred Heritage
            </span>
          </div>
        </div>

        {/* Text Side - The Narrative */}
        <div className="w-full lg:w-1/2 text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <span className="text-[#AF9B7D] font-serif italic tracking-wider mb-6 block text-lg md:text-xl">
              The Genesis of a Sacred Vow
            </span>
            
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif font-light mb-10 text-[#1A1A1A] leading-tight">
              Where Ancient <br />
              <span className="italic text-[#AF9B7D]">Grace Meets Modern Soul.</span>
            </h2>

            <div className="space-y-8 text-gray-700 font-light leading-relaxed text-base md:text-lg">
              <p>
                Drishanti was born from a singular, profound realization: that in our pursuit of the modern world, we often lose the sacred anchors that keep us whole. We didn't just want to create jewelry; we wanted to create a <span className="font-semibold text-[#1A1A1A]">spiritual armor</span> for the modern seeker.
              </p>

              <div className="border-l-2 border-[#AF9B7D]/30 pl-8 py-2 space-y-4">
                <p className="italic text-[#1A1A1A]">
                  "At the heart of every piece lies the Rakshak Potli—a traditional vessel of protection reimagined for the contemporary lifestyle."
                </p>
                <p>
                  Inside each talisman rests the <span className="font-semibold text-[#1A1A1A]">Vasakshep</span>—a sacred, consecrated powder used for centuries in Vedic traditions to signify purity, divine blessing, and an impenetrable shield of positivity. 
                </p>
              </div>

              <p>
                Every knot is tied with intention. Every bead is chosen for its vibration. We bridge the gap between the high-paced rhythms of today and the timeless wisdom of our ancestors, allowing you to carry a piece of the divine, wherever your journey leads.
              </p>
              
              <div className="pt-8 flex flex-col sm:flex-row items-center gap-8">
                <motion.button
                  whileHover={{ scale: 1.02, backgroundColor: "#AF9B7D" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto bg-[#1A1A1A] text-white py-5 px-12 text-[11px] tracking-[0.4em] uppercase font-bold transition-all duration-700 shadow-xl"
                >
                  Explore the Heritage
                </motion.button>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-[1px] bg-[#AF9B7D]"></div>
                  <span className="text-[10px] tracking-[0.3em] uppercase text-[#AF9B7D] font-bold">The Vow of Purity</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}

export default Story