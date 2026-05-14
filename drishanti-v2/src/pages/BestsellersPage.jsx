import React from 'react'
import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import { Link } from 'react-router-dom'

const BestsellersPage = () => {

  const products = [
    {
      id: 1,
      name: 'Silver Plain Bracelet (Women)',
      price: '₹1,299',
      image: '/images/silver1.jpg',
      material: 'Silver',
      category: 'Plain'
    },
    {
      id: 2,
      name: 'Silver Stripes Nazariya (Kids)',
      price: '₹899',
      image: '/images/silver2.jpg',
      material: 'Silver',
      category: 'Nazariya'
    },
    {
      id: 3,
      name: 'Silver Swastik Double Chain (Women)',
      price: '₹1,799',
      image: '/images/silver3.jpg',
      material: 'Silver',
      category: 'Swastik'
    },
    {
      id: 4,
      name: 'Gold OM Swastik Thread Bracelet (Adults)',
      price: '₹1,499',
      image: '/images/gold1.jpg',
      material: 'Gold',
      category: 'Spiritual'
    },
    {
      id: 5,
      name: 'Gold Stripes Diamond Bracelet (Women)',
      price: '₹2,299',
      image: '/images/gold2.jpg',
      material: 'Gold',
      category: 'Designer'
    },
    {
      id: 6,
      name: 'Gold Nazariya Bracelet (Kids)',
      price: '₹1,199',
      image: '/images/gold3.jpg',
      material: 'Gold',
      category: 'Nazariya'
    },
  ]

  return (
    <div className="min-h-screen bg-white pt-40 md:pt-44 pb-20 px-4 sm:px-8 md:px-12 lg:px-20">

      {/* Header */}
      <div className="text-center mb-16 mt-6">
        <h1 className="text-4xl md:text-6xl font-serif font-light text-primary mb-4">
          Best Sellers
        </h1>
        <p className="text-gray-500 tracking-wide text-sm md:text-base">
          Most loved Rakshak Potli bracelets by our customers
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {products.map((product, idx) => (
          <Link key={product.id} to={`/product/${product.id}`}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="group cursor-pointer"
            >

              {/* Image */}
              <div className="relative aspect-[4/5] overflow-hidden bg-gray-50 mb-6">

                {/* Wishlist */}
                <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition">
                  <Heart size={18} className="hover:fill-black transition" />
                </div>

                {/* Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="text-[10px] bg-black text-white px-2 py-1 tracking-widest uppercase">
                    {product.category}
                  </span>
                </div>

                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />
              </div>

              {/* Info */}
              <div className="text-center">
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">
                  {product.material}
                </p>
                <h3 className="font-serif text-lg mb-1">
                  {product.name}
                </h3>
                <p className="text-sm tracking-wider text-gold-600 font-medium">
                  {product.price}
                </p>
              </div>

            </motion.div>
          </Link>
        ))}
      </div>

    </div>
  )
}

export default BestsellersPage