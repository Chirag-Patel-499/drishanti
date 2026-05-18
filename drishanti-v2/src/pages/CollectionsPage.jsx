import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { API_URLS } from '../services/api';

const CollectionsPage = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(API_URLS.CATEGORIES);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return <div className="text-center py-20">Loading Collections...</div>;
  }

  if (error) {
    return <div className="text-center py-20 text-red-500">Error: {error.message}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-24 pt-32">
      <h1 className="text-4xl font-serif text-center mb-16 text-[#2c2c2c]">Our Collections</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {categories.map((category) => (
          <Link
            to={`/collections/${category.slug}`}
            key={category.id}
            className="block group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            {/* Placeholder for category image - replace with actual image if available in category model */}
            <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
              <img
                src={`/images/${category.slug}.jpg`} // Assuming image names match slug
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder.jpg'; }} // Fallback image
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h2 className="text-white text-2xl font-bold uppercase tracking-wider">
                {category.name}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CollectionsPage;