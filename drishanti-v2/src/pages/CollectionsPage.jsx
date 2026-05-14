import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Loader2 } from 'lucide-react'
import API_BASE_URL, { API_URLS } from '../services/api'

const CollectionsPage = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(API_URLS.PRODUCTS)
        if (!response.ok) throw new Error('Failed to fetch products')
        const data = await response.json()
        setProducts(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  if (loading) {
    return (
      <main className="min-h-screen bg-white pt-32 flex justify-center items-center">
        <Loader2 className="animate-spin text-primary" size={48} />
      </main>
    )
  }

  if (error) {
    return (
      <main className="min-h-screen bg-white pt-32 text-center text-red-500 font-serif">
        Error: {error}
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-white pt-32 pb-20 px-4 sm:px-8 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif text-primary mb-6">
            Collections
          </h1>

          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Browse our curated collections of sacred jewellery,
            designed to elevate every ritual, celebration and daily moment.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {products.map((item) => {
             const imageUrl = item.image.startsWith('http') 
              ? item.image 
              : `${API_BASE_URL}${item.image}`;

            return (
              <Link
                key={item.id}
                to={`/product/${item.slug || item.id}`}
                className="group block"
              >
                <div className="overflow-hidden rounded-[28px] bg-[#f8f5f0] shadow-md hover:shadow-2xl transition-all duration-500">

                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={imageUrl}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  <div className="p-6 text-center">
                    <h3 className="text-lg font-serif text-primary mb-2">
                      {item.name}
                    </h3>

                    <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
                      ₹{item.price.toLocaleString()}
                    </p>
                  </div>

                </div>
              </Link>
            )
          })}

        </div>
      </div>
    </main>
  )
}

export default CollectionsPage
