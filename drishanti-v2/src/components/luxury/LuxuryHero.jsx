import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const LuxuryHero = () => {
  const containerRef = useRef(null);
  const bgRef = useRef(null);
  const fgRef = useRef(null);
  const textRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
          anticipatePin: 1,
        }
      });

      // Background scale 1 -> 1.3
      tl.to(bgRef.current, {
        scale: 1.3,
        ease: "power3.out",
      }, 0);

      // Foreground parallax (slight movement)
      tl.to(fgRef.current, {
        y: -100,
        ease: "none",
      }, 0);

      // Text fades + moves upward
      tl.to(textRef.current, {
        y: -150,
        opacity: 0,
        ease: "power3.out",
      }, 0);

      // Overlay gradient fade deeper
      tl.to(overlayRef.current, {
        opacity: 1,
        ease: "none",
      }, 0);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative w-full h-screen overflow-hidden bg-black"
    >
      {/* BACKGROUND LAYER */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          ref={bgRef}
          src="./images/banner.jpeg"
          alt="Luxury Background"
          className="w-full h-full object-cover opacity-60 scale-100"
        />
      </div>

      {/* GRADIENT OVERLAY */}
      <div 
        ref={overlayRef}
        className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black opacity-40 z-10"
      ></div>

      {/* FOREGROUND PARALLAX ELEMENT */}
      <div 
        ref={fgRef}
        className="absolute inset-0 z-20 pointer-events-none flex items-center justify-center"
      >
        <img
          src="./images/hero.png"
          alt="Luxury Product"
          className="w-auto h-[60%] object-contain"
        />
      </div>

      {/* TEXT CONTENT */}
      <div 
        ref={textRef}
        className="absolute inset-0 z-30 flex flex-col items-center justify-center text-center px-6"
      >
        <h1 className="text-6xl md:text-9xl font-serif text-white tracking-tighter leading-none mb-6">
          DRISHANTI <br />
          <span className="italic text-gold-400">EXCELLENCE</span>
        </h1>
        <p className="text-white/80 text-sm md:text-lg tracking-[0.5em] uppercase font-light max-w-2xl">
          Crafting protection with timeless luxury.
        </p>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-4">
        <div className="w-[1px] h-12 bg-white/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-white origin-top animate-scroll-line"></div>
        </div>
        <span className="text-white/50 text-[10px] tracking-widest uppercase">Scroll to Explore</span>
      </div>

      <style jsx>{`
        @keyframes scroll-line {
          0% { transform: scaleY(0); transform-origin: top; }
          50% { transform: scaleY(1); transform-origin: top; }
          51% { transform: scaleY(1); transform-origin: bottom; }
          100% { transform: scaleY(0); transform-origin: bottom; }
        }
        .animate-scroll-line {
          animation: scroll-line 2s infinite cubic-bezier(0.77, 0, 0.175, 1);
        }
      `}</style>
    </section>
  );
};

export default LuxuryHero;
