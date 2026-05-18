import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#f8f5ef] pt-24">

      {/* MAIN GRID */}
      <div className="grid lg:grid-cols-[45%_55%] min-h-screen">

        {/* LEFT CONTENT */}
        <div className="flex items-center px-8 md:px-14 lg:px-20 py-20 bg-[#f8f5ef]">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="max-w-xl"
          >

            {/* TOP TAG */}
            <span className="text-[#b39168] text-[11px] tracking-[0.45em] uppercase font-medium mb-8 block">
              Silent Luxury • Spiritual Elegance
            </span>

            {/* HEADING */}
            <h1 className="
              font-serif
              text-[#2c2c2c]
              text-5xl
              md:text-7xl
              lg:text-[3rem]
              leading-[-1]
              font-light
              mb-10
            ">
              Bound by Faith,
              <br />
              Born from Purity.
            </h1>

            {/* LINE */}
            <div className="w-40 h-[1px] bg-[#c9b49a] mb-10"></div>

            {/* DESCRIPTION */}
            <p className="
              text-[#666]
              text-base
              md:text-lg
              leading-9
              mb-12
              max-w-lg
              font-light
            ">
              Drishanti Rakshapotli is more than a thread.
              It is a sankalp of protection, peace and good karma.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-5">

              <Link
                to="/collections"
                className="
                  bg-[#b39168]
                  text-white
                  px-10
                  py-5
                  text-[11px]
                  tracking-[0.25em]
                  uppercase
                  transition-all
                  duration-500
                  hover:bg-[#9f7d54]
                "
              >
                Explore Collection
              </Link>

              <Link
                to="/our-story"
                className="
                  border
                  border-[#b39168]
                  text-[#b39168]
                  px-10
                  py-5
                  text-[11px]
                  tracking-[0.25em]
                  uppercase
                  transition-all
                  duration-500
                  hover:bg-[#b39168]
                  hover:text-white
                "
              >
                Discover Our Story
              </Link>

            </div>

          </motion.div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="
          relative
          h-[55vh]
          lg:h-screen
          overflow-hidden
          bg-[#f8f5ef]
        ">

          <img
            src="./images/hero2.png"
            alt="Drishanti Rakshapotli"
            className="
              w-full
              h-full
              object-cover
              object-[center_right]
            "
          />

          {/* SOFT OVERLAY */}
          <div className="
            absolute
            inset-0
            bg-gradient-to-l
            from-transparent
            via-transparent
            to-[#f8f5ef]/5
          "></div>

        </div>

      </div>
    </section>
  )
}

export default Hero