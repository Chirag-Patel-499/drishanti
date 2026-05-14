import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const RevealSection = ({ items }) => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title reveal
      gsap.fromTo(titleRef.current, 
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1.5, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 90%",
          }
        }
      );

      // Cards stagger reveal
      gsap.fromTo(cardsRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="py-32 px-6 md:px-24 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <div ref={titleRef} className="text-center mb-24">
          <span className="text-gold-600 uppercase tracking-[0.5em] text-xs mb-4 block">The Selection</span>
          <h2 className="text-4xl md:text-6xl font-serif text-black italic">Timeless Classics</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {items.map((item, index) => (
            <div 
              key={index}
              ref={el => cardsRef.current[index] = el}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden mb-6">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500"></div>
              </div>
              <h3 className="text-xl font-serif text-black mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm tracking-widest uppercase">{item.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RevealSection;
