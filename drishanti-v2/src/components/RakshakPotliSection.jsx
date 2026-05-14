import React from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, Sparkles, Heart } from 'lucide-react'

const RakshakPotliSection = () => {
  const benefits = [
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "Sacred Protection",
      desc: "A quiet spiritual companion designed to stay close through everyday life."
    },
    {
      icon: <Sparkles className="w-5 h-5" />,
      title: "Consecrated Vasakshep",
      desc: "Encapsulated sacred Vasakshep carried within every Rakshapotli."
    },
    {
      icon: <Heart className="w-5 h-5" />,
      title: "Daily Wear Comfort",
      desc: "Thoughtfully designed for calm, elegant and comfortable daily wear."
    }
  ]

  return (
    <section className="py-28 bg-[#F8F5EF] overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-20 items-center">

          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-[32px] bg-white shadow-[0_30px_80px_-40px_rgba(0,0,0,0.25)]">
              <img
                src="./images/s1.jpg"
                alt="Rakshapotli"
                className="w-full h-full object-cover transition-transform duration-[2500ms] hover:scale-105"
              />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-8 -right-4 md:-right-8 bg-white/90 backdrop-blur-md border border-[#E8DFD2] rounded-[24px] px-8 py-6 shadow-xl max-w-[220px]">
              <p className="text-[10px] uppercase tracking-[0.35em] text-[#B08D57] font-semibold leading-relaxed">
                Encapsulated Sacred Vasakshep Inside
              </p>
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="flex flex-col"
          >

            <span className="text-[11px] tracking-[0.45em] uppercase text-[#B08D57] font-semibold mb-6">
              Sacred Everyday Wear
            </span>

            <h2 className="text-4xl md:text-5xl lg:text-[64px] leading-[1.05] font-serif text-[#1F1A17] mb-8">
              Rakshapotli <br />
              <span className="italic text-[#8B7355]">
                Sacred Protection
              </span>
            </h2>

            <p className="text-[#5C5145] text-lg leading-[2] font-light max-w-[640px] mb-14">
              A sacred wearable crafted to stay close to you —
              quietly carrying intention, devotion and spiritual
              connection through everyday life.
            </p>

            {/* BENEFITS */}
            <div className="space-y-10 mb-16">

              {benefits.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: idx * 0.15 }}
                  className="flex gap-6 items-start"
                >

                  <div className="w-14 h-14 rounded-full bg-white border border-[#E7DCCD] flex items-center justify-center text-[#B08D57] shadow-sm">
                    {item.icon}
                  </div>

                  <div>
                    <h3 className="text-[13px] tracking-[0.25em] uppercase font-semibold text-[#1F1A17] mb-2">
                      {item.title}
                    </h3>

                    <p className="text-sm text-[#72675B] leading-relaxed max-w-[440px]">
                      {item.desc}
                    </p>
                  </div>

                </motion.div>
              ))}

            </div>

            {/* CTA */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-fit bg-[#B08D57] hover:bg-[#9A7745] text-white px-10 py-5 rounded-full text-[11px] uppercase tracking-[0.35em] font-semibold transition-all duration-500 shadow-lg"
            >
              Discover the Collection
            </motion.button>

          </motion.div>

        </div>

      </div>
    </section>
  )
}

export default RakshakPotliSection