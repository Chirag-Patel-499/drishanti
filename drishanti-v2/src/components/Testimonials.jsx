import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: "Aavya Sharma",
      location: "Mumbai",
      text: "I bought the Rakshak Potli during a very chaotic phase in my life. Wearing it makes me feel anchored. There's a certain 'shanti' that comes over me every time I look at my wrist.",
      rating: 5
    },
    {
      name: "Rohan Mehta",
      location: "Delhi",
      text: "As someone who travels a lot, I always felt restless. My wife gifted me this for protection. More than the look, it’s the positivity I feel. It's like carrying safety with me everywhere.",
      rating: 5
    },
    {
      name: "Anjali Iyer",
      location: "Bangalore",
      text: "The craftsmanship is stunning, but the emotional value is deeper. I wear it during meditation, and it helps me stay calm. It feels like a shield of light around me.",
      rating: 5
    },
    {
      name: "Vikram Malhotra",
      location: "Chandigarh",
      text: "The Rakshak Potli has a very grounding energy. I’ve noticed a shift in my daily mood; I’m less reactive and more composed. A premium piece that symbolizes true inner strength.",
      rating: 5
    },
    {
      name: "Priya Das",
      location: "Kolkata",
      text: "Gifting this to my daughter was the best decision. She says it makes her feel brave and connected to our roots. Thank you for such a meaningful creation.",
      rating: 5
    }
  ]

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[11px] tracking-[0.5em] text-[#AF9B7D] uppercase font-bold mb-4 block"
          >
            Voice of the Seekers
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif text-[#1A1A1A]"
          >
            Shared Experiences
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#FAF7F0] p-10 relative group hover:bg-[#1A1A1A] transition-all duration-700"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-[#AF9B7D]/20 group-hover:text-[#AF9B7D]/40 transition-colors" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-[#AF9B7D] text-[#AF9B7D]" />
                ))}
              </div>

              <p className="text-gray-700 group-hover:text-gray-300 transition-colors leading-relaxed mb-8 italic font-light">
                "{t.text}"
              </p>

              <div>
                <h4 className="text-sm tracking-widest font-bold text-[#1A1A1A] group-hover:text-white uppercase transition-colors">
                  {t.name}
                </h4>
                <p className="text-[10px] tracking-widest text-[#AF9B7D] uppercase font-medium">
                  {t.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
