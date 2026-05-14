import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { CheckCircle, ArrowRight, Loader2, Package, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import API_BASE_URL, { API_URLS } from '../services/api';

const Success = () => {
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get('order_id');
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchOrder = async () => {
      if (!orderId) {
        setLoading(false);
        return;
      }
      try {
        const res = await fetch(API_URLS.ORDER_DETAIL(orderId));
        if (!res.ok) throw new Error('Order not found');
        const data = await res.json();
        setOrder(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchOrder();
  }, [orderId]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center"><Loader2 className="animate-spin text-primary" size={40} /></div>;
  }

  return (
    <div className="bg-[#fdfcfb] min-h-screen pt-32 pb-20 px-4 font-sans text-gray-900 flex justify-center">
      <div className="max-w-2xl w-full">
        <div className="text-center mb-12">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="mb-8 flex justify-center"
          >
            <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center border border-green-100 shadow-sm">
              <CheckCircle className="text-green-600" size={48} strokeWidth={1.5} />
            </div>
          </motion.div>

          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-serif italic text-primary mb-4"
          >
            Order Placed.
          </motion.h1>

          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-500 text-sm leading-relaxed mb-6 font-light max-w-md mx-auto"
          >
            Namaste. Your sacred vessel is now being ritually prepared. We will notify you once it begins its journey to your sanctuary.
          </motion.p>
        </div>

        {order ? (
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-xl shadow-gray-100/50 mb-10"
          >
            <div className="flex flex-wrap justify-between items-center pb-8 border-b border-gray-100 mb-8 gap-4">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">Order Number</p>
                <p className="font-serif text-xl text-primary">#{order.id}</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">Amount Paid</p>
                <p className="font-serif text-xl text-primary">₹{order.total.toLocaleString()}</p>
              </div>
            </div>

            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <MapPin className="text-gray-400 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-2">Delivery Address</p>
                  <p className="text-sm text-gray-700 font-medium">{order.name}</p>
                  <p className="text-sm text-gray-500 mt-1 leading-relaxed">{order.address}, {order.city}, {order.state} - {order.pincode}</p>
                  <p className="text-sm text-gray-500 mt-1">{order.mobile}</p>
                </div>
              </div>

              <div className="flex gap-4 pt-6 border-t border-gray-50">
                <Package className="text-gray-400 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-2">Shipping Method</p>
                  <p className="text-sm text-gray-700 font-medium">{order.shipping_method} Delivery</p>
                  {order.delivery_estimate && (
                    <p className="text-sm text-green-600 mt-1">Est. Delivery: {new Date(order.delivery_estimate).toLocaleDateString()}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-100">
              <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-4">Items Ordered</p>
              <div className="space-y-4">
                {order.items?.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="w-16 h-16 bg-gray-50 rounded-lg overflow-hidden flex-shrink-0 border border-gray-100">
                      <img src={`${API_BASE_URL}${item.product_details?.image}`} alt={item.product_details?.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-serif text-primary">{item.product_details?.name}</p>
                      <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">Qty: {item.quantity}</p>
                    </div>
                    <span className="text-sm font-medium text-primary">₹{(item.price * item.quantity).toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ) : (
          <p className="text-center text-red-500 mb-8">{error || 'Order details unavailable.'}</p>
        )}

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="space-y-4 max-w-md mx-auto"
        >
          <Link 
            to="/orders" 
            className="w-full bg-primary text-white h-14 text-[10px] tracking-[0.4em] font-bold uppercase flex items-center justify-center gap-3 hover:bg-black transition-colors rounded-xl mb-4"
          >
            Track My Order
            <ArrowRight size={14} />
          </Link>
          <Link 
            to="/shop" 
            className="w-full border border-gray-200 text-primary h-14 text-[10px] tracking-[0.4em] font-bold uppercase flex items-center justify-center hover:bg-gray-50 transition-colors rounded-xl"
          >
            Continue Exploring
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Success;
