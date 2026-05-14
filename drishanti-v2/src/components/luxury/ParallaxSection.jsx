import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ParallaxSection = ({ bgImage, title, subtitle, fgImage }) => {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);
  const fgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background moves slower
      gsap.to(bgRef.current, {
        y: "20%",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      });

      // Foreground moves faster
      gsap.to(fgRef.current, {
        y: "-30%",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full h-[120vh] overflow-hidden flex items-center justify-center bg-[#0a0a0a]"
    >
      {/* BACKGROUND LAYER */}
      <div className="absolute inset-0 overflow-hidden scale-110">
        <img
          ref={bgRef}
          src={bgImage}
          alt="Parallax Background"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      {/* CONTENT LAYER */}
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 px-6 md:px-24 w-full max-w-7xl">
        <div className="flex-1 text-left">
          <span className="text-gold-500 uppercase tracking-[0.5em] text-xs mb-4 block">Modern Heritage</span>
          <h2 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight">
            {title}
          </h2>
          <p className="text-white/60 text-lg font-light leading-relaxed max-w-md">
            {subtitle}
          </p>
        </div>

        {/* FOREGROUND IMAGE (PARALLAX) */}
        <div ref={fgRef} className="flex-1 flex justify-center">
          <div className="relative w-full max-w-md aspect-[3/4] overflow-hidden border border-white/10 shadow-2xl">
            <img
              src={fgImage}
              alt="Parallax Foreground"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParallaxSection;
