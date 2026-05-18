import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const collections = [
  {
    name: 'Gold Collection',
    image: '/images/gold.jpg',
    link: '/shop/gold',
    description: 'Discover our exquisite range of gold products, crafted with purity and tradition.'
  },
  {
    name: 'Silver Collection',
    image: '/images/silver.jpg',
    link: '/shop/silver',
    description: 'Elegant silver pieces that blend contemporary design with timeless appeal.'
  },
  {
    name: 'Baby & Newborn',
    image: '/images/baby.jpg',
    link: '/shop/baby',
    description: 'Thoughtful and adorable gifts for the newest members of your family.'
  },
  {
    name: 'Gifting Collection',
    image: '/images/gifting.jpg',
    link: '/shop/gifting',
    description: 'Curated selections perfect for every occasion and every loved one.'
  },
];

const CollectionsOverview = () => {
  return (
    <div className="bg-[#fdfcfb] min-h-screen pt-24 pb-20 px-4 md:px-8 lg:px-16 font-sans text-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-serif italic text-amber-900 text-center mb-16 leading-tight"
        >
          Our Collections
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <Link to={collection.link} className="block">
                <div className="aspect-w-4 aspect-h-3 w-full overflow-hidden">
                  <img 
                    src={collection.image} 
                    alt={collection.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <div className="p-6 text-center">
                  <h2 className="text-2xl font-serif italic text-amber-900 mb-2 group-hover:text-amber-700 transition-colors">
                    {collection.name}
                  </h2>
                  <p className="text-gray-600 text-sm mb-4">{collection.description}</p>
                  <span className="inline-flex items-center text-[10px] tracking-[0.3em] uppercase text-amber-800 font-bold group-hover:underline transition-all">
                    View Collection &rarr;
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollectionsOverview;
