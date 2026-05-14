import React from 'react';
import SmoothScroll from '../components/luxury/SmoothScroll.jsx';
import LuxuryHero from '../components/luxury/LuxuryHero.jsx';
import ParallaxSection from '../components/luxury/ParallaxSection.jsx';
import RevealSection from '../components/luxury/RevealSection.jsx';
import Philosophy from '../components/luxury/Philosophy.jsx';
import WhatIsRakshapotli from '../components/luxury/WhatIsRakshapotli.jsx';
import RakshapotliComponents from '../components/luxury/RakshapotliComponents.jsx';
import MeaningOfDrishanti from '../components/luxury/MeaningOfDrishanti.jsx';
import AboutFounder from '../components/luxury/AboutFounder.jsx';
import JainLifestyle from '../components/luxury/JainLifestyle.jsx';

const luxuryItems = [
  {
    title: "Sacred Protection",
    category: "The Rakshak Potli",
    image: "./images/s1.jpg"
  },
  {
    title: "Golden Aura",
    category: "Premium Collection",
    image: "./images/s2.jpg"
  },
  {
    title: "Silver Grace",
    category: "Heritage Series",
    image: "./images/s3.jpg"
  }
];

const LuxuryHome = () => {
  return (
    <SmoothScroll>
      <div className="bg-black">
        <LuxuryHero />
        
        <ParallaxSection 
          bgImage="./images/heritage.jpg"
          title="The Ancient Art"
          subtitle="Every piece tells a story of protection and grace, meticulously handcrafted for the modern seeker."
          fgImage="./images/story.jpg"
        />

        <RevealSection items={luxuryItems} />

        <WhatIsRakshapotli />

        <Philosophy />

        <RakshapotliComponents />

        <JainLifestyle />

        <AboutFounder />

        <MeaningOfDrishanti />

        <ParallaxSection 
          bgImage="./images/gold.jpg"
          title="Luminous Legacy"
          subtitle="Explore the brilliance of gold, infused with spiritual essence and contemporary design."
          fgImage="./images/silver.jpg"
        />

        {/* EXTRA SECTION FOR SMOOTH TRANSITION */}
        <section className="h-screen flex items-center justify-center bg-black text-white px-6">
          <div className="text-center max-w-4xl">
            <h2 className="text-5xl md:text-8xl font-serif mb-12 italic">Experience Drishanti</h2>
            <button className="border border-gold-500 text-gold-500 px-12 py-6 text-sm tracking-[0.5em] uppercase hover:bg-gold-500 hover:text-black transition-all duration-700">
              Enter the Gallery
            </button>
          </div>
        </section>
      </div>
    </SmoothScroll>
  );
};

export default LuxuryHome;
