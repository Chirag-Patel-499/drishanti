import React from 'react';
import { motion } from 'framer-motion';

const lifestyleTopics = [
  {
    title: "Gaushala Seva",
    desc: "The grace of serving the gentle. A vow of compassion towards the voiceless.",
    image: "./images/s4.jpg",
    tag: "Compassion"
  },
  {
    title: "Choviar",
    desc: "Disciplined nourishment. Harmonizing your internal rhythm with the setting sun.",
    image: "./images/s5.jpg",
    tag: "Discipline"
  },
  {
    title: "Pakshal",
    desc: "The sacred bathing of the divine. A ritual of purity for the icon and the soul.",
    image: "./images/s6.jpg",
    tag: "Ritual"
  },
  {
    title: "Kesar Puja",
    desc: "Anointing the divine with saffron. A fragrant path to spiritual concentration.",
    image: "./images/s7.jpg",
    tag: "Devotion"
  },
  {
    title: "Bird Feeding",
    desc: "A small act of universal kindness. Sustaining life in its most delicate forms.",
    image: "./images/s8.jpg",
    tag: "Jivdaya"
  },
  {
    title: "Ayambil",
    desc: "The purity of simple meals. Conquering the senses through mindful sustenance.",
    image: "./images/s9.jpg",
    tag: "Mindfulness"
  },
  {
    title: "Palitana Yatra",
    desc: "The spiritual ascent. Climbing the sacred peaks to find your inner summit.",
    image: "./images/heritage.jpg",
    tag: "Pilgrimage"
  },
  {
    title: "Maharaj Saheb Seva",
    desc: "Honoring the enlightened. Serving those who have renounced all for the truth.",
    image: "./images/story.jpg",
    tag: "Service"
  }
];

const JainLifestyle = () => {
  return (
    <section className="py-32 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="text-gold-600 uppercase tracking-[0.6em] text-[10px] font-bold mb-6 block">
              The Path of Goodness
            </span>
            <h2 className="text-5xl md:text-7xl font-serif text-[#1A1A1A] leading-tight mb-8">
              Be Little Good <br />
              <span className="italic font-light text-gold-500">Everyday.</span>
            </h2>
            <p className="text-gray-500 text-lg font-light leading-relaxed">
              True luxury is found in the simplicity of conscious living. Explore the beautiful daily rituals and values that define a soulfully enriched life.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="hidden md:block"
          >
            <div className="flex items-center gap-4">
              <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-gold-400">Scroll to Explore</span>
              <div className="w-24 h-[1px] bg-gold-200"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Horizontal Scrolling Cards */}
      <div className="relative">
        <div className="flex overflow-x-auto hide-scrollbar gap-8 px-6 md:px-12 lg:px-24 pb-20 snap-x snap-mandatory">
          {lifestyleTopics.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex-shrink-0 w-[300px] md:w-[450px] snap-start group"
            >
              <div className="relative aspect-[3/4] overflow-hidden mb-8 rounded-sm shadow-xl">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110 grayscale-[0.3] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                
                {/* Floating Tag */}
                <div className="absolute top-6 right-6">
                  <span className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[9px] tracking-[0.3em] uppercase font-bold">
                    {item.tag}
                  </span>
                </div>
              </div>
              
              <div className="space-y-4 px-2">
                <h3 className="text-2xl md:text-3xl font-serif text-[#1A1A1A] group-hover:text-gold-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm md:text-base font-light leading-relaxed">
                  {item.desc}
                </p>
                <button className="text-gold-600 text-[10px] tracking-[0.4em] uppercase font-bold border-b border-gold-200 pb-1 hover:border-gold-600 transition-all">
                  Read Reflection
                </button>
              </div>
            </motion.div>
          ))}
          {/* Spacer for scroll */}
          <div className="flex-shrink-0 w-24"></div>
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Background Decorative Circle */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] border border-gold-50/50 rounded-full -z-10 pointer-events-none"></div>
    </section>
  );
};

export default JainLifestyle;
