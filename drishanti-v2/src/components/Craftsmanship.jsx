import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Shield, Heart, Sparkles, Gift } from "lucide-react"

const clamp = (n, min, max) => Math.max(min, Math.min(n, max))

const Heritage = () => {
  const [y, setY] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const val = clamp(window.scrollY * 0.08, -20, 40)
      setY(val)
    }

    onScroll()

    window.addEventListener("scroll", onScroll, { passive: true })

    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <section className="relative w-full overflow-hidden bg-[#f6f1ea] min-h-[650px] lg:min-h-[760px]">

      {/* RIGHT SIDE IMAGE */}
      <div className="absolute inset-y-0 right-0 w-full md:w-[48%] flex items-center justify-center overflow-hidden bg-[#f6f1ea]">

        <motion.img
          src="./images/dri.jpeg"
          alt="Heritage"
          className="w-auto h-auto max-w-[92%] max-h-[92%] object-contain"
          style={{
            transform: `translateY(${y}px) scale(1)`
          }}
        />

      </div>

      {/* LEFT CONTENT */}
      <div className="relative z-10 flex items-stretch h-full">

        <div className="relative w-full md:w-[56%]">

          {/* CURVE */}
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="absolute top-0 right-[-1px] h-full w-[120px]"
          >
            <path d="M0,0 C80,0 80,100 0,100 Z" fill="#f6f1ea" />
          </svg>

          {/* CONTENT BOX */}
          <div className="h-full px-6 md:px-16 py-16 md:py-24 bg-[#f6f1ea]/95 backdrop-blur-[4px] border-r border-[#e9e1d7] flex items-center">

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="max-w-xl"
            >

              {/* LABEL */}
              <p className="text-[11px] tracking-[0.45em] text-[#b58a4b] mb-4 uppercase">
                A Way of Living
              </p>

              {/* DIVIDER */}
              <div className="flex items-center gap-3 mb-6">
                <span className="block w-10 h-[1px] bg-gradient-to-r from-transparent via-[#c8a96a] to-transparent" />
                <span className="text-[#c8a96a]">✦</span>
                <span className="block w-10 h-[1px] bg-gradient-to-r from-transparent via-[#c8a96a] to-transparent" />
              </div>

              {/* TITLE */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#1a1a1a] leading-[1.05] mb-6">
                Little Reminders <br />
                of Peace, Kindness <br />
                & Positivity.
              </h2>

              {/* TEXT */}
              <p className="text-gray-600 leading-relaxed mb-6 text-sm md:text-base">
                Rooted in Jain philosophy, every DRISHANTI creation is designed
                to be more than jewellery. These sacred pieces are gentle reminders
                to live with compassion, mindfulness and goodness — every single day.
              </p>

              {/* SIGNATURE */}
              <p className="italic text-[#b58a4b] text-sm">
                Inspired by Values, <br />
                Crafted with Intention.
              </p>

            </motion.div>
          </div>
        </div>
      </div>

      {/* ICON STRIP */}
      <div className="relative z-20 bg-[#f6f1ea]/95 border-t border-[#e5ddd2] py-10 px-6 md:px-16">
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

          {[
            {
              Icon: Shield,
              t1: "SACRED INTENT",
              t2: "Jewellery with meaning"
            },
            {
              Icon: Heart,
              t1: "MINDFUL CRAFT",
              t2: "Rooted in tradition"
            },
            {
              Icon: Sparkles,
              t1: "EVERYDAY POSITIVITY",
              t2: "Symbols of peace & kindness"
            },
            {
              Icon: Gift,
              t1: "MEANINGFUL GIFTING",
              t2: "Thoughtful spiritual keepsakes"
            },
          ].map(({ Icon, t1, t2 }, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 220 }}
              className="group"
            >
              <Icon
                className="mx-auto mb-3 text-[#b58a4b] group-hover:text-[#c8a96a]"
                size={26}
              />

              <p className="text-xs font-semibold tracking-wide">
                {t1}
              </p>

              <p className="text-xs text-gray-500 mt-1">
                {t2}
              </p>
            </motion.div>
          ))}

        </div>
      </div>

    </section>
  )
}

export default Heritage