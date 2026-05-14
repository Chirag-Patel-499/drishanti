import React from 'react'
import ErrorBoundary from '../components/ErrorBoundary.jsx'
import Hero from '../components/Hero.jsx'
import GoldSilver from '../components/GoldSilver.jsx'
import RakshakPotliSection from '../components/RakshakPotliSection.jsx'
import Testimonials from '../components/Testimonials.jsx'
import CollectionGrid from '../components/CollectionGrid.jsx'
import OurBestsellers from '../components/OurBestsellers.jsx'
import Story from '../components/Story.jsx'
import Craftsmanship from '../components/Craftsmanship.jsx'
import CinematicVideo from '../components/CinematicVideo.jsx'
import Gifting from '../components/Gifting.jsx'
import FAQ from '../components/FAQ.jsx'

const Home = () => {
  return (
    <div className="min-h-screen bg-white">

      <ErrorBoundary>
        <Hero />
      </ErrorBoundary>

      <ErrorBoundary>
        <GoldSilver />
      </ErrorBoundary>

      <ErrorBoundary>
        <RakshakPotliSection />
      </ErrorBoundary>

      <ErrorBoundary>
        <Testimonials />
      </ErrorBoundary>

      <ErrorBoundary>
        <CinematicVideo />
      </ErrorBoundary>

      {/* COLLECTION SECTION */}
      <ErrorBoundary>
        <CollectionGrid />
      </ErrorBoundary>

      <ErrorBoundary>
        <Craftsmanship />
      </ErrorBoundary>

      <ErrorBoundary>
        <OurBestsellers />
      </ErrorBoundary>

      <ErrorBoundary>
        <Gifting />
      </ErrorBoundary>

      <ErrorBoundary>
        <FAQ />
      </ErrorBoundary>

      <ErrorBoundary>
        <Story />
      </ErrorBoundary>

    </div>
  )
}

export default Home