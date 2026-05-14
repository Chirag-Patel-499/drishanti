import React from 'react'
import { motion } from 'framer-motion'

const HorizontalVideoStrip = () => {
  return (
    <section className="relative w-full h-[30vh] md:h-[40vh] overflow-hidden bg-primary">
      <video
        src="/horizontal-video.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/40 via-transparent to-primary/40"></div>
      
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[1px] h-12 md:h-20 bg-gold-500/30"></div>
      </div>

      {/* Subtle Text Overlay */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
         <span className="text-[10px] md:text-[11px] tracking-[0.5em] uppercase text-white/40 font-bold">The Essence of Artistry</span>
      </div>
    </section>
  )
}

export default HorizontalVideoStrip