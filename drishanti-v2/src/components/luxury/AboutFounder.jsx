import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const AboutFounder = () => {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <section className="py-40 px-6 md:px-12 lg:px-24 bg-[#FAF7F0] overflow-hidden relative">
      {/* Decorative Background Text */}
      <div className="absolute top-20 right-0 opacity-[0.02] select-none pointer-events-none">
        <h2 className="text-[20rem] font-serif leading-none rotate-90 translate-x-1/2">LEGACY</h2>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">
          
          {/* Left Side: Visual Narrative (5 columns) */}
          <div className="lg:col-span-5 relative">
            <motion.div
              style={{ y: y1 }}
              className="relative z-20 aspect-[3/4] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)] rounded-sm"
            >
              <img 
                src="./images/story.jpg" 
                alt="Founders in White Kurtas" 
                className="w-full h-full object-cover grayscale-[0.2] contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-gold-900/5 mix-blend-multiply"></div>
            </motion.div>

            {/* Secondary Overlapping Image */}
            <motion.div
              style={{ y: y2 }}
              className="absolute -bottom-20 -right-12 lg:-right-24 w-2/3 aspect-[4/5] z-30 overflow-hidden shadow-2xl border-[12px] border-white"
            >
              <img 
                src="./images/dri.jpeg" 
                alt="Sacred Inspiration" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Accent Circle */}
            <div className="absolute -top-12 -left-12 w-32 h-32 border border-gold-200/60 rounded-full -z-0"></div>
          </div>

          {/* Right Side: Editorial Content (7 columns) */}
          <div className="lg:col-span-6 lg:offset-1 flex flex-col pt-12 lg:pt-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <span className="text-gold-600 uppercase tracking-[0.7em] text-[10px] font-bold mb-6 block">
                The Architects of Faith
              </span>
              <h2 className="text-6xl md:text-8xl font-serif text-[#1A1A1A] leading-[0.9] mb-10">
                Rajil & Vinit <br />
                <span className="italic font-light text-gold-500 text-5xl md:text-7xl">The Founders' Journey</span>
              </h2>
              <div className="w-20 h-[1px] bg-gold-400"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <p className="text-xl md:text-2xl text-gray-800 font-serif italic leading-relaxed">
                "It began in the quiet corners of a sacred shrine, where the aroma of sandalwood met the purity of white kurtas."
              </p>
              
              <div className="space-y-6 text-gray-600 font-light leading-relaxed text-lg max-w-xl">
                <p>
                  Rajil and Vinit were raised in the embrace of Jain spiritualism—a world where discipline is a virtue and devotion is a way of life. They noticed a void in the modern landscape: a lack of sacred objects that resonated with the refined aesthetics of the contemporary seeker.
                </p>
                <p>
                  DRISHANTI was conceived as a bridge. A way to carry the ancestral protection of the <span className="text-gold-700 font-medium italic">Rakshapotli</span> while embracing the pinnacle of global luxury.
                </p>
                <p>
                  With a Chandan tilak as their seal of intention, they committed to crafting more than just jewelry. They set out to build a sanctuary you can wear—a reminder of faith, meticulously handcrafted for the modern soul.
                </p>
              </div>

              {/* Signature Style CTA */}
              <div className="pt-12 flex items-center gap-12">
                <div className="flex flex-col">
                  <span className="text-[10px] tracking-[0.4em] uppercase font-bold text-gold-600 mb-2">Authenticity</span>
                  <span className="text-sm text-gray-400 uppercase tracking-widest">Consecrated Roots</span>
                </div>
                <div className="w-[1px] h-12 bg-gold-200"></div>
                <div className="flex flex-col">
                  <span className="text-[10px] tracking-[0.4em] uppercase font-bold text-gold-600 mb-2">Philosophy</span>
                  <span className="text-sm text-gray-400 uppercase tracking-widest">Soulful Luxury</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Side Label */}
      <div className="absolute left-6 bottom-40 vertical-text hidden xl:block">
        <span className="text-[10px] tracking-[0.8em] text-gold-400 uppercase font-bold opacity-30">
          ESTABLISHED IN FAITH • MMXXIV
        </span>
      </div>
      
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]"></div>
    </section>
  );
};

export default AboutFounder;
