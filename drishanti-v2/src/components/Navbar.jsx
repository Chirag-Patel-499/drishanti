import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Heart,
  ShoppingBag,
  Search,
  Menu,
  X,
  ChevronDown,
  ChevronRight
} from 'lucide-react'

import { Link, useLocation } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'
import { useWishlist } from '../context/WishlistContext.jsx'
import CartDrawer from './CartDrawer.jsx'
import API_BASE_URL, { API_URLS } from '../services/api'

const Navbar = () => {
  const { cartCount } = useCart()
  const { wishlistCount } = useWishlist()

  const [isScrolled, setIsScrolled] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState(null)
  const [activeImage, setActiveImage] = useState("/images/gold.jpg")
  const [expandedMobileMenu, setExpandedMobileMenu] = useState(null)
  const [menuItems, setMenuItems] = useState({ Shop: [] })

  const timeoutRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  // Close mega-menu when navigating to a new page
  useEffect(() => {
    setActiveMenu(null)
  }, [location.pathname])

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const [categoriesRes, subcategoriesRes] = await Promise.all([
          fetch(API_URLS.CATEGORIES),
          fetch(API_URLS.SUBCATEGORIES)
        ])

        const categories = await categoriesRes.json()
        const subcategories = await subcategoriesRes.json()

        const categoryMap = {}

        subcategories.forEach(sub => {
          if (!categoryMap[sub.category]) {
            categoryMap[sub.category] = []
          }

          categoryMap[sub.category].push(sub)
        })

        const shopMenu = categories.map(category => ({
          title: category.name,
          link: `/shop/${category.slug}`,
          links:
            categoryMap[category.id]?.map(sub => ({
              label: sub.name.toUpperCase(),
              url: `/shop/${category.slug}/${sub.slug}`
            })) || []
        }))

        setMenuItems({ Collections: shopMenu })

      } catch (error) {
        console.error(error)
      }
    }

    fetchMenuData()
  }, [])

  const handleMouseEnter = (menu) => {
    if (window.innerWidth >= 1024) {
      clearTimeout(timeoutRef.current)
      setActiveMenu(menu)
    }
  }

  const handleMouseLeave = () => {
    if (window.innerWidth >= 1024) {
      timeoutRef.current = setTimeout(() => {
        setActiveMenu(null)
      }, 200)
    }
  }

  const imageMap = {
    Gold: "/images/gold.jpg",
    Silver: "/images/silver.jpg",
    Gifting: "/images/gifting-main.jpg"
  }

  const handleMobileMenuItemClick = (menuName) => {
    setExpandedMobileMenu(
      expandedMobileMenu === menuName ? null : menuName
    )
  }

  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false)
    setExpandedMobileMenu(null)
  }

  const handleMegaMenuLinkClick = () => {
    setActiveMenu(null)
  }

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ${
          isScrolled || activeMenu || isMobileMenuOpen
            ? 'bg-[#f8f5ef]/95 backdrop-blur-sm border-b border-[#e8dccb] py-5'
            : 'bg-transparent py-6'
        }`}
        onMouseLeave={handleMouseLeave}
      >

        <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-20">

          <div className="flex items-center justify-between relative h-10 md:h-12">

            {/* MOBILE BUTTON */}
            <div className="lg:hidden flex items-center z-[110]">

              <button
                className="p-2 text-[#2c2c2c]"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X size={26} strokeWidth={1.5} />
                ) : (
                  <Menu size={26} strokeWidth={1.5} />
                )}
              </button>

            </div>

            {/* LEFT MENU */}
            <div className="hidden lg:flex items-center space-x-8 xl:space-x-12 text-[10px] tracking-[0.25em] uppercase font-semibold text-[#2c2c2c]">

              <Link to="/" className="relative group py-1">
                Home
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-[#b39168] group-hover:w-full transition-all duration-500"></span>
              </Link>

              {/* COLLECTIONS */}
              <div
                className="relative group cursor-pointer"
                onMouseEnter={() => handleMouseEnter('Collections')}
                onClick={() => setActiveMenu(activeMenu === 'Collections' ? null : 'Collections')}
              >

                <span className="flex items-center gap-1.5 py-1">
                  Collections
                  <ChevronDown
                    size={10}
                    className={`transition-transform duration-300 ${
                      activeMenu === 'Collections' ? 'rotate-180' : ''
                    }`}
                  />
                </span>

                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-[#b39168] group-hover:w-full transition-all duration-500"></span>

              </div>

              <Link to="/about" className="relative group py-1">
                Our Story
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-[#b39168] group-hover:w-full transition-all duration-500"></span>
              </Link>

              <Link to="/contact" className="relative group py-1">
                Contact
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-[#b39168] group-hover:w-full transition-all duration-500"></span>
              </Link>

            </div>

            {/* CENTER LOGO */}
            <Link
              to="/"
              className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center z-[105]"
            >

              {/* IMAGE LOGO */}

              {
              <img
                src="./images/logo.png"
                alt="Drishanti"
                className="h-14 object-contain"
              />
              }

            </Link>

            {/* RIGHT ICONS */}
            <div className="flex items-center space-x-2 md:space-x-6 text-[#b39168] z-[110]">

              <button className="p-2 hover:opacity-60 transition-opacity hidden sm:block">
                <Search size={20} strokeWidth={1.5} />
              </button>

              <Link
                to="/wishlist"
                className="p-2 hover:opacity-60 transition-opacity relative"
              >

                <Heart size={20} strokeWidth={1.5} />

                {wishlistCount > 0 && (
                  <span className="absolute top-1 right-1 min-w-[16px] h-4 bg-[#b39168] text-white text-[9px] flex items-center justify-center rounded-full px-1 font-bold">
                    {wishlistCount}
                  </span>
                )}

              </Link>

              <button
                onClick={() => setIsCartOpen(true)}
                className="p-2 hover:opacity-60 transition-opacity relative"
              >

                <ShoppingBag size={20} strokeWidth={1.5} />

                {cartCount > 0 && (
                  <span className="absolute top-1 right-1 min-w-[16px] h-4 bg-[#b39168] text-white text-[9px] flex items-center justify-center rounded-full px-1 font-bold">
                    {cartCount}
                  </span>
                )}

              </button>

            </div>

          </div>

        </div>

        {/* MEGA MENU */}
        <AnimatePresence>

          {activeMenu && (

            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="absolute top-full left-0 w-full bg-[#f8f5ef] border-t border-[#e8dccb] hidden lg:block"
            >

              <div className="max-w-[1400px] mx-auto px-20 py-16 grid grid-cols-6 gap-12">

                {menuItems[activeMenu].map((col, idx) => (

                  <div
                    key={idx}
                    onMouseEnter={() =>
                      setActiveImage(
                        imageMap[col.title] || "/images/gold.jpg"
                      )
                    }
                  >

                    <Link to={col.link} onClick={handleMegaMenuLinkClick}>

                      <h4 className="text-[10px] tracking-[0.3em] uppercase mb-10 font-bold text-[#b39168] hover:text-[#2c2c2c] transition-colors">
                        {col.title}
                      </h4>

                    </Link>

                    <ul className="space-y-5">

                      {col.links.map((item, i) => (

                        <li key={i}>

                          <Link
                            to={item.url}
                            onClick={handleMegaMenuLinkClick}
                            className="text-[10px] uppercase tracking-[0.2em] text-[#666] hover:text-[#b39168] transition-all duration-300 block hover:translate-x-1"
                          >
                            {item.label}
                          </Link>

                        </li>

                      ))}

                    </ul>

                  </div>

                ))}

                {/* IMAGE */}
                <div className="col-span-3">

                  <div className="w-full aspect-[16/9] overflow-hidden bg-[#f2ece3]">

                    <motion.img
                      key={activeImage}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8 }}
                      src={activeImage}
                      alt=""
                      className="w-full h-full object-cover"
                    />

                  </div>

                </div>

              </div>

            </motion.div>

          )}

        </AnimatePresence>

      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>

        {isMobileMenuOpen && (

          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[80] lg:hidden"
            />

            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.4 }}
              className="fixed inset-y-0 left-0 w-[85%] max-w-[400px] bg-[#f8f5ef] z-[90] lg:hidden shadow-2xl flex flex-col pt-[90px] overflow-hidden"
            >

              <div className="flex-1 overflow-y-auto px-8 py-10">

                <div className="space-y-0">

                  {/* HOME */}
                  <div className="border-b border-[#e8dccb] py-6">

                    <Link
                      to="/"
                      onClick={handleMobileLinkClick}
                      className="text-xl font-serif text-[#2c2c2c] block"
                    >
                      Home
                    </Link>

                  </div>

                  {/* COLLECTIONS */}
                      <div className="border-b border-[#e8dccb]">

                        <button
                          onClick={() => handleMobileMenuItemClick('Collections')}
                          className="w-full flex justify-between items-center py-6 text-xl font-serif text-[#2c2c2c]"
                        >

                          <span>Collections</span>

                          <motion.div
                            animate={{
                              rotate:
                                expandedMobileMenu === 'Collections'
                                  ? 90
                                  : 0
                            }}
                          >

                            <ChevronRight
                              size={20}
                              className="text-[#b39168]"
                            />

                          </motion.div>

                        </button>

                        <AnimatePresence>

                          {expandedMobileMenu === 'Collections' && (

                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="overflow-hidden bg-[#f2ece3]"
                            >

                              <div className="py-6 space-y-8">

                                {menuItems.Collections.map((col, idx) => (

                                  <div key={idx} className="px-4">

                                    <Link
                                      to={col.link}
                                      onClick={handleMobileLinkClick}
                                      className="text-sm uppercase tracking-widest font-bold text-[#b39168] mb-4 block"
                                    >
                                      {col.title}
                                    </Link>

                                    <ul className="space-y-4 ml-2 border-l border-[#d9c7ad] pl-6">

                                      {col.links.map((item, i) => (

                                        <li key={i}>

                                          <Link
                                            to={item.url}
                                            onClick={handleMobileLinkClick}
                                            className="text-[11px] uppercase tracking-widest text-[#666] block hover:text-[#b39168]"
                                          >
                                            {item.label}
                                          </Link>

                                        </li>

                                      ))}

                                    </ul>

                                  </div>

                                ))}

                              </div>

                            </motion.div>

                          )}

                        </AnimatePresence>

                      </div>

                  {/* ABOUT */}
                  <div className="border-b border-[#e8dccb] py-6">

                    <Link
                      to="/about"
                      onClick={handleMobileLinkClick}
                      className="text-xl font-serif text-[#2c2c2c] block"
                    >
                      Our Story
                    </Link>

                  </div>

                  {/* CONTACT */}
                  <div className="border-b border-[#e8dccb] py-6">

                    <Link
                      to="/contact"
                      onClick={handleMobileLinkClick}
                      className="text-xl font-serif text-[#2c2c2c] block"
                    >
                      Contact
                    </Link>

                  </div>

                </div>

              </div>

            </motion.div>

          </>
        )}

      </AnimatePresence>

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
    </>
  )
}

export default Navbar