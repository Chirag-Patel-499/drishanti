import React, { useState, useEffect, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';
import { useWishlist } from '../context/WishlistContext.jsx';
import { Loader2, Heart, ShoppingBag, Filter, X, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import API_BASE_URL, { API_URLS } from '../services/api';

const ShopPage = ({ category: propsCategory, subcategory: propsSubcategory }) => {
  const params = useParams();
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  // Resolve category and subcategory from either props or URL params
  const activeCategory = propsCategory || params.category;
  const activeSubcategory = propsSubcategory || params.subcategory;

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortBy, setSortBy] = useState('newest');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch products whenever the category, subcategory, or search changes
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        let url = new URL(API_URLS.PRODUCTS);
        if (activeCategory) url.searchParams.append('category', activeCategory);
        if (activeSubcategory) url.searchParams.append('subcategory', activeSubcategory);
        if (searchQuery.trim()) url.searchParams.append('search', searchQuery.trim());

        const response = await fetch(url);
        if (!response.ok) throw new Error('Sacred piece retrieval failed.');
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [activeCategory, activeSubcategory, searchQuery]);

  const sortedProducts = useMemo(() => {
    return [...products].sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      return new Date(b.created_at) - new Date(a.created_at);
    });
  }, [products, sortBy]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-[#fdfcfb]">
        <Loader2 className="animate-spin text-primary mb-4" size={40} />
        <p className="text-[10px] tracking-[0.4em] uppercase text-gray-400">Loading Sacred Vessels...</p>
      </div>
    );
  }

  const pageTitle = activeSubcategory 
    ? activeSubcategory.replace(/-/g, ' ') 
    : activeCategory 
    ? activeCategory 
    : 'The Collection';

  return (
    <main className="bg-[#fdfcfb] min-h-screen pt-32 pb-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-[1600px] mx-auto">
        
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-[9px] tracking-[0.3em] uppercase text-gray-400 mb-8 font-bold">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-primary transition-colors">Shop</Link>
          {activeCategory && (
            <>
              <span>/</span>
              <Link to={`/shop/${activeCategory}`} className="hover:text-primary transition-colors">{activeCategory}</Link>
            </>
          )}
          {activeSubcategory && (
            <>
              <span>/</span>
              <span className="text-primary">{activeSubcategory.replace(/-/g, ' ')}</span>
            </>
          )}
        </div>

        {/* Header */}
        <header className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-end gap-8 border-b border-gray-100 pb-12">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif italic text-primary capitalize mb-6 leading-tight">
              {pageTitle}
            </h1>
            <p className="text-sm text-gray-500 font-light tracking-wide uppercase">
              {activeSubcategory ? `Exploring the artistry of ${activeSubcategory.replace(/-/g, ' ')}` : 'Handcrafted sacred consecrations for modern rituals.'}
            </p>
          </div>

          <div className="flex items-center gap-6">
            {/* Search */}
            <div className="flex items-center gap-3 bg-white border border-gray-100 px-6 py-3 rounded-full shadow-sm">
              <Search size={16} className="text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent text-[11px] font-bold uppercase tracking-widest text-primary placeholder-gray-400 focus:outline-none w-48"
              />
            </div>

            <div className="flex items-center gap-3 bg-white border border-gray-100 px-6 py-3 rounded-full shadow-sm">
              <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Sort</span>
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent text-[11px] font-bold uppercase tracking-widest text-primary focus:outline-none cursor-pointer"
              >
                <option value="newest">New Arrivals</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>
        </header>

        {/* Product Grid */}
        {sortedProducts.length === 0 ? (
          <div className="py-32 text-center">
            <p className="font-serif italic text-2xl text-gray-300 mb-6">No pieces found in this category.</p>
            <Link to="/shop" className="text-[10px] uppercase tracking-[0.4em] font-bold border-b border-primary text-primary pb-2">Discover All Pieces</Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {sortedProducts.map((product, idx) => {
              const imageUrl = product.image.startsWith('http') ? product.image : `${API_BASE_URL}${product.image}`;
              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: (idx % 4) * 0.1, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="relative aspect-[3/4] overflow-hidden rounded-[2.5rem] bg-gray-50 shadow-xl shadow-gray-200/50 mb-8">
                    <Link to={`/product/${product.slug || product.id}`}>
                      <motion.img 
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 1.2 }}
                        src={imageUrl} 
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </Link>

                    {/* Wishlist Button */}
                    <button 
                      onClick={() => toggleWishlist(product)}
                      className={`absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md transition-all duration-300 ${
                        isInWishlist(product.id) ? 'bg-red-50 text-red-500 shadow-inner' : 'bg-white/80 text-primary hover:bg-white'
                      }`}
                    >
                      <Heart size={18} fill={isInWishlist(product.id) ? 'currentColor' : 'none'} strokeWidth={1.5} />
                    </button>

                    {/* Quick Add Overlay */}
                    <div className="absolute inset-x-0 bottom-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <button 
                        onClick={() => addToCart(product, 1, 'Standard')}
                        className="w-full bg-primary text-white h-14 rounded-2xl flex items-center justify-center gap-3 text-[10px] tracking-[0.4em] font-bold uppercase hover:bg-black transition-colors shadow-lg shadow-primary/20"
                      >
                        <ShoppingBag size={14} />
                        Add to Bag
                      </button>
                    </div>
                  </div>

                  <div className="text-center px-4">
                    <p className="text-[9px] tracking-[0.3em] uppercase text-gold-600 font-bold mb-3">{product.material} / {product.type}</p>
                    <Link to={`/product/${product.slug || product.id}`}>
                      <h3 className="text-base md:text-lg font-serif text-primary mb-2 line-clamp-1 hover:text-gold-600 transition-colors">
                        {product.name}
                      </h3>
                    </Link>
                    <p className="text-primary font-medium tracking-widest text-sm">₹{product.price.toLocaleString()}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
};

export default ShopPage;
