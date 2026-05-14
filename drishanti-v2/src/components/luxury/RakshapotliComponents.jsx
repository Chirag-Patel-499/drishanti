import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Crown, Sparkles, Hexagon, Activity, Zap } from 'lucide-react';

const components = [
  {
    id: 1,
    title: "Gold / Silver Structure",
    desc: "The foundation of strength, crafted in premium metals to last generations.",
    icon: <Crown className="w-6 h-6" />,
    position: "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2",
    details: "Using 18K Gold or 925 Sterling Silver, the structure provides a timeless frame for spiritual protection."
  },
  {
    id: 2,
    title: "Encapsulated Vasakshep",
    desc: "The sacred heart, containing consecrated powder for divine protection.",
    icon: <Sparkles className="w-6 h-6" />,
    position: "top-1/4 right-0 translate-x-1/2",
    details: "Deeply rooted in Jain tradition, the Vasakshep is sealed within to maintain its purity and energetic vibration."
  },
  {
    id: 3,
    title: "German Ceramic Enamel",
    desc: "Exquisite craftsmanship meeting modern durability with vibrant enamel.",
    icon: <Hexagon className="w-6 h-6" />,
    position: "bottom-1/4 right-0 translate-x-1/2",
    details: "The Potli is finished with scratch-resistant German ceramic enamel, ensuring the colors remain as eternal as the vow."
  },
  {
    id: 4,
    title: "Thoughtful Construction",
    desc: "Ergonomically designed for comfort, waterproof and skin-friendly.",
    icon: <Activity className="w-6 h-6" />,
    position: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2",
    details: "Designed for 24/7 wear, the construction is lightweight, hypoallergenic, and built for a modern lifestyle."
  },
  {
    id: 5,
    title: "Activation & Connection",
    desc: "A ritualized experience, activating the talisman through intention.",
    icon: <Zap className="w-6 h-6" />,
    position: "top-1/4 left-0 -translate-x-1/2",
    details: "Every Rakshapotli comes with an activation guide to help you bond your personal intention with the sacred object."
  }
];

const RakshapotliComponents = () => {
  const [activeTab, setActiveTab] = useState(null);

  return (
    <section className="py-32 px-6 bg-[#FAF9F6] overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-gold-600 uppercase tracking-[0.5em] text-xs font-bold mb-4 block"
          >
            The Anatomy of Protection
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif text-[#1A1A1A]"
          >
            Components of <span className="italic">Rakshapotli</span>
          </h2 >
        </div>

        {/* Desktop Circular Layout */}
        <div className="hidden lg:block relative w-[600px] h-[600px] mx-auto">
          {/* Central Image */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 flex items-center justify-center z-10"
          >
            <div className="w-[300px] h-[300px] rounded-full overflow-hidden border-[12px] border-white shadow-2xl relative">
              <img 
                src="./images/s1.jpg" 
                alt="Rakshapotli Center" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gold-900/10 mix-blend-overlay"></div>
            </div>
          </motion.div>

          {/* Connection Lines (Circles) */}
          <div className="absolute inset-0 border border-gold-200/50 rounded-full scale-[1.15]"></div>
          <div className="absolute inset-0 border border-gold-100 rounded-full scale-[0.8]"></div>

          {/* Component Nodes */}
          {components.map((item) => (
            <div 
              key={item.id}
              className={`absolute ${item.position} z-20 group`}
              onMouseEnter={() => setActiveTab(item.id)}
              onMouseLeave={() => setActiveTab(null)}
            >
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 cursor-pointer shadow-lg
                  ${activeTab === item.id ? 'bg-gold-600 text-white' : 'bg-white text-gold-600 border border-gold-200'}
                `}
              >
                {item.icon}
              </motion.div>

              {/* Tooltip-style info */}
              <AnimatePresence>
                {activeTab === item.id && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 10 }}
                    className="absolute top-20 left-1/2 -translate-x-1/2 w-64 bg-white p-6 shadow-2xl border border-gold-100 z-30 rounded-sm"
                  >
                    <h3 className="text-sm font-bold uppercase tracking-widest text-gold-900 mb-2">{item.title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">{item.details}</p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Static Label */}
              <div className="absolute top-1/2 -translate-y-1/2 left-20 w-48 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden xl:block">
                <p className="text-[10px] tracking-[0.3em] uppercase font-bold text-gold-700">{item.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile / Tablet Grid Layout */}
        <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-8">
          {components.map((item) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 border border-gold-100 shadow-sm relative overflow-hidden group"
            >
              <div className="flex items-start gap-6 relative z-10">
                <div className="w-12 h-12 flex-shrink-0 rounded-full bg-gold-50 flex items-center justify-center text-gold-600 group-hover:bg-gold-600 group-hover:text-white transition-colors duration-500">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-[#1A1A1A] mb-3">{item.title}</h3>
                  <p className="text-sm text-gray-500 font-light leading-relaxed">{item.desc}</p>
                </div>
              </div>
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <span className="text-6xl font-serif">0{item.id}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Luxury CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-24 text-center"
        >
          <div className="inline-block p-[1px] bg-gradient-to-r from-transparent via-gold-400 to-transparent w-full max-w-2xl mb-12"></div>
          <p className="text-gold-700 text-sm tracking-[0.4em] uppercase font-light">
            Engineered for the soul, crafted for eternity.
          </p>
        </motion.div>
      </div>

      {/* Background Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-gold-100/30 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-gold-200/20 rounded-full blur-[100px]"></div>
      </div>
    </section>
  );
};

export default RakshapotliComponents;
