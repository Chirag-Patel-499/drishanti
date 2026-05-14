import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const CinematicVideo = () => {
  return (
    <section className="relative w-full h-[72svh] md:h-[88vh] overflow-hidden bg-black">

      {/* VIDEO */}
      <video
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover scale-[1.02]"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/35" />

      {/* SOFT BOTTOM FADE */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#f8f5ef] via-[#f8f5ef]/40 to-transparent z-10" />

      {/* CONTENT */}
      <div className="absolute inset-0 flex items-center justify-center text-center text-white px-6 z-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="max-w-3xl -mt-16"
        >
          <span className="text-[10px] md:text-[11px] tracking-[0.5em] uppercase mb-6 block font-semibold text-[#d6c2a3]">
            The Art of Creation
          </span>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-light mb-8 leading-tight tracking-tight">
            Timeless Elegance
          </h2>

          <p className="text-sm md:text-lg font-light tracking-[0.08em] uppercase opacity-80 max-w-2xl mx-auto leading-relaxed">
            Crafted for the extraordinary moments in life with rare precision and soulful intent.
          </p>
        </motion.div>
      </div>

      {/* SCROLL INDICATOR */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center text-white/70"
      >
        <span className="text-[10px] tracking-[0.4em] uppercase mb-2">
          Scroll
        </span>

        <ChevronDown size={18} strokeWidth={1.5} />
      </motion.div>

      {/* DECORATIVE BORDER */}
      <div className="absolute inset-6 md:inset-10 border border-white/10 pointer-events-none z-20" />
    </section>
  )
}

export default CinematicVideo