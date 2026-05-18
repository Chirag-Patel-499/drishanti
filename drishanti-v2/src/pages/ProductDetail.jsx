import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ShoppingBag, ChevronLeft, Minus, Plus, MessageCircle, ShieldCheck, Truck, RefreshCw, Loader2 } from 'lucide-react';
import { useCart } from '../context/CartContext.jsx';
import { useWishlist } from '../context/WishlistContext.jsx';
import API_BASE_URL, { API_URLS } from '../services/api';

const ProductDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  console.log("Slug from useParams:", slug);
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('Standard');
  const [isWishlisted, setIsWishlisted] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // We try to fetch by ID or SLUG depending on what 'id' contains
        // In many React apps, 'id' in useParams often refers to the slug for SEO
        const response = await fetch(API_URLS.PRODUCT_DETAIL(slug));
        if (!response.ok) {
           // If slug fetch fails, try ID fetch if it looks like a number
           if (!isNaN(slug)) {
              const resId = await fetch(`${API_BASE_URL}/api/products/id/${slug}/`); // Hypothetical fallback
              if (!resId.ok) throw new Error('Product not found');
              const data = await resId.json();
              setProduct(data);
           } else {
              throw new Error('Product not found');
           }
        } else {
          const data = await response.json();
          setProduct(data);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
    window.scrollTo(0, 0);
  }, [slug]);

  if (loading) return <div className="min-h-screen flex justify-center items-center"><Loader2 className="animate-spin text-amber-900" size={48} /></div>;
  if (error || !product) return <div className="min-h-screen flex flex-col justify-center items-center font-serif text-xl"><p>Product not found.</p><Link to="/shop" className="mt-4 text-amber-800 underline">Return to Shop</Link></div>;

  const imageUrl = product.image.startsWith('http') ? product.image : `${API_BASE_URL}${product.image}`;
  // Include gallery images if available
  const galleryImages = product.gallery_images || [];
  const productImages = [imageUrl, ...galleryImages.map(img => img.startsWith('http') ? img : `${API_BASE_URL}${img}`)];

  const handleWhatsAppOrder = () => {
    const message = `Namaste Drishanti, I am interested in purchasing: ${product.name} (Qty: ${quantity}, Size: ${selectedSize}). Could you please guide me on the next steps?`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/91XXXXXXXXXX?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="bg-[#fdfcfb] min-h-screen pt-24 pb-20 px-4 md:px-8 lg:px-16 font-sans text-gray-900">
      <div className="max-w-7xl mx-auto">
        <button onClick={() => navigate(-1)} className="inline-flex items-center text-[10px] tracking-[0.3em] uppercase text-gray-400 hover:text-amber-900 mb-10 transition-colors font-bold group">
          <ChevronLeft size={14} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Collection
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-24">
          {/* Image Section */}
          <div className="space-y-6">
            <div className="aspect-[4/5] bg-gray-100 overflow-hidden relative">
              <AnimatePresence mode='wait'>
                <motion.img
                  key={selectedImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  src={productImages[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
            </div>
            {productImages.length > 1 && (
              <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                {productImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`flex-shrink-0 w-24 aspect-square border-2 transition-all ${
                      selectedImage === idx ? 'border-amber-800' : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`View ${idx}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details Section */}
          <div className="flex flex-col">
            <span className="text-amber-700 uppercase tracking-[0.4em] text-[10px] font-bold mb-4">Sacred Consecration</span>
            <h1 className="text-4xl md:text-5xl font-serif italic text-amber-900 mb-6 leading-tight">{product.name}</h1>
            
            <div className="flex items-center justify-between mb-8 pb-8 border-b border-gray-100">
              <div className="flex items-baseline gap-4">
                <span className="text-3xl font-light tracking-tighter">₹{product.price.toLocaleString()}</span>
                {product.discount_price && (
                   <span className="text-lg text-gray-400 line-through">₹{product.discount_price.toLocaleString()}</span>
                )}
              </div>
              <span className="text-xs uppercase tracking-widest text-gray-400 font-bold">{product.material}</span>
            </div>

            <p className="text-gray-600 leading-relaxed mb-10 text-sm md:text-base font-light">
              {product.description || "No description available for this sacred piece."}
            </p>

            {/* Size Selector */}
            <div className="mb-10">
              <h3 className="text-[10px] font-bold mb-4 tracking-[0.2em] uppercase text-gray-400">Select Circumference</h3>
              <div className="flex gap-3">
                {['Petite', 'Standard', 'Universal'].map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-6 py-2.5 text-[10px] tracking-widest uppercase transition-all border ${
                      selectedSize === size 
                        ? 'border-amber-800 bg-amber-800 text-white' 
                        : 'border-gray-200 hover:border-amber-800 text-gray-600'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity and Actions */}
            <div className="space-y-4 mb-12">
              <div className="flex gap-4">
                <div className="flex items-center border border-gray-200 h-14">
                  <button className="px-5 text-gray-400 hover:text-amber-800 transition-colors" onClick={() => setQuantity(Math.max(1, quantity - 1))}><Minus size={14} /></button>
                  <span className="w-8 text-center text-sm font-bold">{quantity}</span>
                  <button className="px-5 text-gray-400 hover:text-amber-800 transition-colors" onClick={() => setQuantity(quantity + 1)}><Plus size={14} /></button>
                </div>
                <button 
                  onClick={() => addToCart(product, quantity, selectedSize)}
                  disabled={product.stock <= 0}
                  className="flex-1 bg-amber-900 text-white h-14 text-[10px] tracking-[0.4em] font-bold uppercase flex items-center justify-center gap-3 hover:bg-black transition-colors disabled:bg-gray-400"
                >
                  <ShoppingBag size={18} strokeWidth={1.5} />
                  {product.stock > 0 ? 'Add to Bag' : 'Out of Stock'}
                </button>
                <button 
                  onClick={() => toggleWishlist(product)}
                  className={`w-14 h-14 border border-gray-200 flex items-center justify-center transition-all ${
                    isInWishlist(product.id) ? 'text-red-500 border-red-100 bg-red-50' : 'text-gray-400 hover:border-amber-800'
                  }`}
                >
                  <Heart size={20} fill={isInWishlist(product.id) ? 'currentColor' : 'none'} />
                </button>
              </div>

              <button 
                onClick={handleWhatsAppOrder}
                className="w-full border border-green-600 text-green-700 h-14 text-[10px] tracking-[0.4em] font-bold uppercase flex items-center justify-center gap-3 hover:bg-green-50 transition-colors"
              >
                <MessageCircle size={18} />
                Order via WhatsApp
              </button>
            </div>

            {/* Trust Badges & Details */}
            <div className="grid grid-cols-3 gap-4 py-8 border-t border-b border-gray-100 mb-10">
              <div className="text-center">
                <ShieldCheck size={20} className="mx-auto text-amber-800 mb-2" strokeWidth={1} />
                <span className="text-[9px] uppercase tracking-widest text-gray-500 font-bold">Consecrated</span>
              </div>
              <div className="text-center border-x border-gray-100">
                <Truck size={20} className="mx-auto text-amber-800 mb-2" strokeWidth={1} />
                <span className="text-[9px] uppercase tracking-widest text-gray-500 font-bold">Free Shipping</span>
              </div>
              <div className="text-center">
                <RefreshCw size={20} className="mx-auto text-amber-800 mb-2" strokeWidth={1} />
                <span className="text-[9px] uppercase tracking-widest text-gray-500 font-bold">7-Day Return</span>
              </div>
            </div>

            {/* Meta Info */}
            <div className="space-y-2 text-[11px] uppercase tracking-widest text-gray-500">
              <p><span className="font-bold text-gray-800">Category:</span> {product.category}</p>
              <p><span className="font-bold text-gray-800">Type:</span> {product.type}</p>
              <p><span className="font-bold text-gray-800">Availability:</span> {product.stock > 0 ? 'In Stock' : 'Out of Stock'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
