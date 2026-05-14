import React from 'react'
import { motion } from 'framer-motion'
import { Instagram, Facebook, Twitter, Mail, ArrowRight, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0f0f0f] border-t border-[#d4af37]/20 pt-24 pb-12 overflow-hidden text-[#f5f1ea]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Top Section: Brand & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <Link to="/" className="inline-block">
              <h2 className="text-3xl font-serif tracking-[0.4em] text-[#d4af37]">DRISHANTI</h2>
            </Link>
            <p className="text-[#f5f1ea]/70 font-light leading-relaxed max-w-md text-sm md:text-base italic font-serif">
              "We craft more than jewelry; we create anchors of intention. Each piece is a sacred vessel of protection, meticulously energized to accompany you on your spiritual path."
            </p>
            <div className="flex space-x-8 pt-4">
              {[
                { icon: Instagram, label: 'Instagram' },
                { icon: Facebook, label: 'Facebook' },
                { icon: Twitter, label: 'Twitter' }
              ].map((social, idx) => (
                <a 
                  key={idx} 
                  href="#" 
                  className="text-[#d4af37] hover:text-[#f5f1ea] transition-colors duration-500 group"
                  aria-label={social.label}
                >
                  <social.icon size={20} strokeWidth={1.5} className="group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-[#1a1a1a]/50 p-10 border border-[#d4af37]/20 relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative z-10">
              <h3 className="text-[10px] tracking-[0.4em] text-[#d4af37] uppercase font-bold mb-6">The Inner Circle</h3>
              <p className="text-sm text-[#f5f1ea]/60 mb-8 font-light">Join us for exclusive spiritual insights and early access to our limited collections.</p>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="w-full bg-transparent border-b border-[#d4af37]/40 py-4 text-sm font-light tracking-widest focus:outline-none focus:border-[#d4af37] transition-colors placeholder:text-[#f5f1ea]/30 text-[#f5f1ea]"
                />
                <button className="absolute right-0 top-1/2 -translate-y-1/2 text-[#d4af37] hover:text-[#f5f1ea] transition-colors py-2 flex items-center gap-2 group/btn">
                  <span className="text-[10px] tracking-[0.3em] uppercase font-bold">Subscribe</span>
                  <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Middle Section: Navigation & Contact */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-24 pt-24 border-t border-[#d4af37]/10">
          <div>
            <h4 className="text-[9px] tracking-[0.4em] text-[#d4af37] uppercase font-bold mb-8">Collections</h4>
            <ul className="space-y-4">
              {['Rakshapotli Gold', 'Sterling Silver', 'New Arrivals', 'Bestsellers'].map((item) => (
                <li key={item}>
                  <Link to="/shop" className="text-xs text-[#f5f1ea]/70 hover:text-[#d4af37] transition-colors font-light tracking-widest uppercase">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[9px] tracking-[0.4em] text-[#d4af37] uppercase font-bold mb-8">The House</h4>
            <ul className="space-y-4">
              {['Our Story', 'Craftsmanship', 'The Ritual', 'Journal'].map((item) => (
                <li key={item}>
                  <Link to="/about" className="text-xs text-[#f5f1ea]/70 hover:text-[#d4af37] transition-colors font-light tracking-widest uppercase">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[9px] tracking-[0.4em] text-[#d4af37] uppercase font-bold mb-8">Client Care</h4>
            <ul className="space-y-4">
              {['Shipping & Returns', 'Privacy Policy', 'Terms of Service', 'FAQ'].map((item) => (
                <li key={item}>
                  <Link to={item === 'FAQ' ? '/#faq' : '#'} className="text-xs text-[#f5f1ea]/70 hover:text-[#d4af37] transition-colors font-light tracking-widest uppercase">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-[9px] tracking-[0.4em] text-[#d4af37] uppercase font-bold mb-8">Inquiry</h4>
            <div className="flex items-start gap-4">
              <MapPin size={18} strokeWidth={1.2} className="text-[#d4af37] mt-1 shrink-0" />
              <p className="text-xs font-light leading-relaxed tracking-widest text-[#f5f1ea]/70 uppercase">Studio 108, Sacred Spaces,<br />Mumbai, MH 400001</p>
            </div>
            <div className="flex items-center gap-4">
              <Phone size={18} strokeWidth={1.2} className="text-[#d4af37] shrink-0" />
              <p className="text-xs font-light tracking-widest text-[#f5f1ea]/70 uppercase">+91 999 000 1111</p>
            </div>
            <div className="flex items-center gap-4">
              <Mail size={18} strokeWidth={1.2} className="text-[#d4af37] shrink-0" />
              <p className="text-xs font-light tracking-widest text-[#f5f1ea]/70 uppercase">concierge@drishanti.com</p>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright & Final Touch */}
        <div className="pt-12 border-t border-[#d4af37]/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[9px] tracking-[0.3em] text-[#d4af37] uppercase font-bold">
            &copy; {currentYear} DRISHANTI. ELEGANT LUXURY.
          </p>
          <div className="flex items-center gap-6">
            <div className="h-[1px] w-12 bg-[#d4af37]/20 hidden md:block"></div>
            <p className="text-[10px] tracking-[0.2em] text-[#f5f1ea]/40 italic font-serif">
              Crafted in India, Consecrated for the World.
            </p>
          </div>
        </div>
      </div>

      {/* Aesthetic Accent */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent"></div>
    </footer>
  )
}

export default Footer
