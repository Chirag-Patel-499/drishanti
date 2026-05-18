import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { API_URLS } from '../services/api';

const CategoryDetailPage = () => {
  const { categorySlug } = useParams();
  const [products, setProducts] = useState([]);
  const [categoryName, setCategoryName] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      try {
        // Fetch category details to get the name (optional, could be passed via state)
        const categoriesRes = await fetch(API_URLS.CATEGORIES);
        const categoriesData = await categoriesRes.json();
        const currentCategory = categoriesData.find(cat => cat.slug === categorySlug);
        if (currentCategory) {
          setCategoryName(currentCategory.name);
        } else {
          setCategoryName(categorySlug.replace(/-/g, ' ')); // Fallback
        }

        // Fetch products for the specific category
        const productsRes = await fetch(`${API_URLS.PRODUCTS}?category=${categorySlug}`);
        if (!productsRes.ok) {
          throw new Error(`HTTP error! status: ${productsRes.status}`);
        }
        const productsData = await productsRes.json();
        setProducts(productsData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryProducts();
  }, [categorySlug]);

  if (loading) {
    return <div className="text-center py-20">Loading Products...</div>;
  }

  if (error) {
    return <div className="text-center py-20 text-red-500">Error: {error.message}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-serif text-center mb-12 text-[#2c2c2c] capitalize">
        {categoryName} Collection
      </h1>
      {products.length === 0 ? (
        <p className="text-center text-gray-600">No products found in this collection.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Link
              to={`/products/${product.slug}`}
              key={product.id}
              className="block group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
                <img
                  src={product.image} // Assuming product.image holds the URL
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder.jpg'; }} // Fallback image
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-[#2c2c2c] group-hover:text-[#b39168] transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-700 mt-1">₹{product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryDetailPage;
