import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Package, ChevronLeft, Loader2, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import API_BASE_URL, { API_URLS } from '../services/api';

const UserOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchMobile, setSearchMobile] = useState('');
  
  const fetchOrders = async (mobile = '') => {
    setLoading(true);
    try {
      const sessionId = localStorage.getItem('drishanti_session_id');
      const url = new URL(API_URLS.ORDERS);
      if (sessionId) url.searchParams.append('session_id', sessionId);
      if (mobile) url.searchParams.append('mobile', mobile);

      const res = await fetch(url);
      const data = await res.json();
      setOrders(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchOrders(searchMobile);
  };

  return (
    <div className="bg-[#fdfcfb] min-h-screen pt-32 pb-20 px-4 md:px-8 lg:px-16 font-sans text-gray-900">
      <div className="max-w-5xl mx-auto">
        <header className="mb-12 flex flex-col md:flex-row md:justify-between md:items-end gap-6">
          <div>
            <Link to="/shop" className="inline-flex items-center text-[10px] tracking-[0.3em] uppercase text-gray-400 hover:text-primary mb-4 transition-colors font-bold group">
              <ChevronLeft size={14} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Continue Shopping
            </Link>
            <h1 className="text-3xl md:text-4xl font-serif italic text-primary">Your Orders</h1>
          </div>

          <form onSubmit={handleSearch} className="flex gap-2 w-full md:w-auto">
            <input 
              type="text" 
              placeholder="Search by Mobile No." 
              value={searchMobile}
              onChange={(e) => setSearchMobile(e.target.value)}
              className="border border-gray-200 text-sm px-4 py-3 outline-none focus:border-primary rounded-xl flex-1 md:w-64"
            />
            <button type="submit" className="bg-primary text-white px-4 rounded-xl hover:bg-black transition-colors">
              <Search size={18} />
            </button>
          </form>
        </header>

        {loading ? (
          <div className="py-20 flex justify-center"><Loader2 className="animate-spin text-primary" size={40} /></div>
        ) : orders.length === 0 ? (
          <div className="text-center py-20 bg-white border border-gray-100 rounded-3xl shadow-sm">
            <Package size={48} className="mx-auto text-gray-200 mb-6" strokeWidth={1} />
            <p className="text-lg font-serif italic text-gray-400 mb-6">No orders found.</p>
            <Link to="/shop" className="text-[10px] uppercase tracking-widest font-bold border-b border-primary text-primary pb-1">Discover Collection</Link>
          </div>
        ) : (
          <div className="space-y-8">
            {orders.map((order, idx) => (
              <motion.div 
                key={order.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 md:p-8 rounded-3xl border border-gray-100 shadow-sm"
              >
                <div className="flex flex-wrap justify-between items-center pb-6 border-b border-gray-50 mb-6 gap-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">Order #{order.id}</p>
                    <p className="text-sm text-gray-500">{new Date(order.created_at).toLocaleDateString()}</p>
                  </div>
                  <div className="flex gap-4 items-center">
                    <span className={`px-4 py-1.5 rounded-full text-[10px] uppercase tracking-widest font-bold ${
                      order.status === 'Delivered' ? 'bg-green-100 text-green-700' :
                      order.status === 'Cancelled' ? 'bg-red-100 text-red-700' :
                      'bg-amber-100 text-amber-800'
                    }`}>
                      {order.status}
                    </span>
                    <span className="text-lg font-serif text-primary">₹{order.total.toLocaleString()}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    {order.items?.map(item => (
                      <div key={item.id} className="flex gap-4">
                        <img src={`${API_BASE_URL}${item.product_details?.image}`} alt={item.product_details?.name} className="w-16 h-16 object-cover rounded-lg border border-gray-100" />
                        <div>
                          <p className="text-sm font-serif text-primary line-clamp-1">{item.product_details?.name}</p>
                          <p className="text-[10px] uppercase tracking-widest text-gray-400 mt-1">Qty: {item.quantity}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="space-y-2 text-sm text-gray-600 bg-gray-50 p-4 rounded-xl border border-gray-100">
                     <p><span className="font-bold text-gray-800">Ship To:</span> {order.name}</p>
                     <p className="line-clamp-2">{order.address}, {order.city}</p>
                     <p className="mt-2"><span className="font-bold text-gray-800">Payment:</span> {order.payment_method} ({order.is_paid ? 'Paid' : 'Pending'})</p>
                     {order.tracking_number && (
                        <p className="mt-2 text-primary font-bold">Tracking: {order.tracking_number} {order.courier_partner ? `via ${order.courier_partner}` : ''}</p>
                     )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserOrders;
