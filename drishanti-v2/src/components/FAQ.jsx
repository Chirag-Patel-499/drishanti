import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "What is Rakshapotli?",
      answer: "Rakshapotli is a sacred protective charm designed to be worn as a bracelet. It contains consecrated 'Vasakshep' powder—a high-vibrational substance prepared according to ancient Vedic traditions—acting as a spiritual anchor and a constant reminder of inner strength and divine protection."
    },
    {
      question: "Can it be worn daily?",
      answer: "Yes, Drishanti's Rakshapotli is meticulously designed for daily wear. We use premium, durable materials to ensure that it remains a part of your daily ritual without compromising its spiritual integrity or aesthetic elegance."
    },
    {
      question: "Is Vasakshep included?",
      answer: "Every Rakshapotli arrives pre-filled with sacred Vasakshep powder. This powder is consecrated through traditional Vedic rituals and 'Abhimantrit' (energized) to ensure it carries the intended protective vibrations."
    },
    {
      question: "Gold or Silver options?",
      answer: "We offer our Rakshapotli collections in both 18k Gold plating and premium 925 Sterling Silver. Each finish is chosen for its symbolic purity and lasting beauty, allowing you to select the metal that best aligns with your personal energy."
    },
    {
      question: "What does 'Activation' mean?",
      answer: "Activation refers to the 'Abhimantrit' process—a spiritual ceremony where the Rakshapotli is energized with specific mantras. This traditional practice is believed to awaken the protective qualities of the Vasakshep, making it a living talisman for the wearer."
    },
    {
      question: "What are the shipping timelines?",
      answer: "Because each piece is handcrafted and individually energized, shipping typically takes 5-7 business days within India. We believe this time is essential to ensure your Rakshapotli is prepared with the utmost care and spiritual attention."
    },
    {
      question: "Care instructions?",
      answer: "To preserve the luster and spiritual essence of your Rakshapotli, we recommend avoiding direct contact with perfumes, harsh chemicals, or prolonged immersion in water. Gently clean with a soft, dry cloth to maintain its brilliance."
    }
  ]

  return (
    <section className="py-32 bg-[#FAF9F6] relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#AF9B7D" strokeWidth="0.5"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-[11px] tracking-[0.6em] text-[#AF9B7D] uppercase font-medium mb-6 block">
              Curated Guidance
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#1A1A1A] leading-tight italic">
              Common Inquiries
            </h2>
            <div className="mt-8 flex justify-center">
              <div className="w-12 h-[1px] bg-[#AF9B7D]"></div>
            </div>
          </motion.div>
        </div>

        <div className="space-y-0">
          {faqs.map((faq, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="border-b border-[#AF9B7D]/20 last:border-0"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full py-10 flex items-center justify-between text-left group"
              >
                <span className={`text-xl md:text-2xl font-serif transition-all duration-500 ${openIndex === idx ? 'text-[#AF9B7D] pl-4' : 'text-[#1A1A1A] group-hover:text-[#AF9B7D] group-hover:pl-2'}`}>
                  {faq.question}
                </span>
                <motion.div 
                  animate={{ rotate: openIndex === idx ? 180 : 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="flex-shrink-0 ml-6 text-[#AF9B7D]"
                >
                  <ChevronDown size={24} strokeWidth={1.5} />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pb-10 pl-4 md:pl-8 pr-12 text-[#4A4A4A] font-light leading-relaxed text-lg max-w-3xl">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <p className="text-[#AF9B7D] text-sm mb-8 font-light italic tracking-wide">
            Seeking further enlightenment on your spiritual journey?
          </p>
          <a 
            href="/contact"
            className="inline-block group"
          >
            <span className="text-[11px] tracking-[0.4em] uppercase font-bold text-[#1A1A1A] transition-all relative">
              Connect With Us
              <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-[#1A1A1A] transition-all group-hover:bg-[#AF9B7D] group-hover:w-1/2"></span>
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ
