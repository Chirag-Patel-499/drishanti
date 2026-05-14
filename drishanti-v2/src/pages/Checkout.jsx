import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { ChevronLeft, ShieldCheck, Truck, CreditCard, Banknote, Tag, Loader2, X } from 'lucide-react';
import API_BASE_URL, { API_URLS } from '../services/api';

const RAZORPAY_KEY_ID = import.meta.env.VITE_RAZORPAY_KEY_ID || 'your_key_id';

const Checkout = () => {
  const { cart, cartTotal, clearCart, loading: cartLoading } = useCart();
  const navigate = useNavigate();
  const [isPaying, setIsPaying] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    billingSameAsShipping: true,
    billing_address: '',
    billing_city: '',
    billing_pincode: ''
  });

  const [shippingMethod, setShippingMethod] = useState('Standard');
  const [paymentMethod, setPaymentMethod] = useState('Razorpay');
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [couponError, setCouponError] = useState('');
  const [couponLoading, setCouponLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const sessionId = localStorage.getItem('drishanti_session_id');

  useEffect(() => {
    if (!cartLoading && cart.length === 0) {
      navigate('/shop');
    }
  }, [cart, cartLoading, navigate]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ 
      ...prev, 
      [name]: type === 'checkbox' ? checked : value 
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.mobile.trim()) newErrors.mobile = 'Mobile is required';
    else if (!/^\d{10}$/.test(formData.mobile)) newErrors.mobile = 'Invalid 10-digit number';
    if (!formData.address.trim()) newErrors.address = 'Full address required';
    if (!formData.city.trim()) newErrors.city = 'City required';
    if (!formData.pincode.trim()) newErrors.pincode = 'Pincode required';

    if (!formData.billingSameAsShipping) {
      if (!formData.billing_address.trim()) newErrors.billing_address = 'Billing address required';
      if (!formData.billing_city.trim()) newErrors.billing_city = 'Billing city required';
      if (!formData.billing_pincode.trim()) newErrors.billing_pincode = 'Billing pincode required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleApplyCoupon = async (e) => {
    e.preventDefault();
    if (!couponCode.trim()) return;
    setCouponLoading(true);
    setCouponError('');
    try {
      const response = await fetch(API_URLS.COUPONS_APPLY, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code: couponCode })
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.detail || 'Invalid Coupon');
      setAppliedCoupon(data);
      setCouponCode('');
    } catch (err) {
      setCouponError(err.message);
    } finally {
      setCouponLoading(false);
    }
  };

  const handleRemoveCoupon = () => {
    setAppliedCoupon(null);
  };

  // Calculations
  const discountAmount = appliedCoupon ? Math.floor((cartTotal * appliedCoupon.discount_percentage) / 100) : 0;
  const subtotalAfterDiscount = cartTotal - discountAmount;
  
  // Tax (e.g. 3% GST on jewellery)
  const tax = Math.floor(subtotalAfterDiscount * 0.03);
  
  // Shipping
  let shippingCharge = 0;
  if (shippingMethod === 'Express') {
    shippingCharge = 250;
  } else {
    shippingCharge = cartTotal > 5000 ? 0 : 100;
  }

  const finalTotal = subtotalAfterDiscount + tax + shippingCharge;

  const buildOrderPayload = () => ({
    session_id: sessionId,
    name: formData.name,
    email: formData.email,
    mobile: formData.mobile,
    address: formData.address,
    city: formData.city,
    state: formData.state,
    pincode: formData.pincode,
    billing_address: formData.billingSameAsShipping ? formData.address : formData.billing_address,
    billing_city: formData.billingSameAsShipping ? formData.city : formData.billing_city,
    billing_pincode: formData.billingSameAsShipping ? formData.pincode : formData.billing_pincode,
    subtotal: cartTotal,
    tax: tax,
    shipping_charge: shippingCharge,
    discount: discountAmount,
    coupon_code: appliedCoupon?.code || '',
    total: finalTotal,
    payment_method: paymentMethod,
    shipping_method: shippingMethod
  });

  const handlePayment = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsPaying(true);
    const orderPayload = buildOrderPayload();

    if (paymentMethod === 'COD') {
      try {
        const response = await fetch(API_URLS.CREATE_COD_ORDER, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(orderPayload)
        });
        if (!response.ok) throw new Error('Order creation failed.');
        const data = await response.json();
        clearCart();
        navigate(`/success?order_id=${data.order_id}`);
      } catch (err) {
        alert(err.message);
        setIsPaying(false);
      }
      return;
    }

    // Razorpay Flow
    if (!window.Razorpay) {
      alert('Razorpay SDK failed to load.');
      setIsPaying(false);
      return;
    }

    try {
      const response = await fetch(API_URLS.CREATE_ORDER, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: finalTotal })
      });
      if (!response.ok) throw new Error('Failed to init payment.');
      const orderData = await response.json();

      const options = {
        key: RAZORPAY_KEY_ID,
        amount: orderData.amount,
        currency: orderData.currency,
        name: 'Drishanti',
        description: 'Order Payment',
        order_id: orderData.order_id,
        handler: async function (response) {
          try {
            const verifyRes = await fetch(API_URLS.VERIFY_PAYMENT, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                ...response,
                ...orderPayload
              })
            });
            const verifyData = await verifyRes.json();
            if (verifyData.status === 'success') {
              clearCart();
              navigate(`/success?order_id=${verifyData.order_id}`);
            } else {
              navigate('/failure');
            }
          } catch (err) {
            navigate('/failure');
          }
        },
        prefill: { name: formData.name, contact: formData.mobile, email: formData.email },
        theme: { color: '#b48a4a' },
        modal: { ondismiss: () => setIsPaying(false) }
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      alert(error.message);
      setIsPaying(false);
    }
  };

  if (cartLoading) return <div className="min-h-screen pt-32 flex justify-center"><Loader2 className="animate-spin text-primary" size={48} /></div>;
  if (cart.length === 0) return null; // handled by useEffect

  return (
    <div className="bg-[#fdfcfb] min-h-screen pt-24 pb-20 px-4 md:px-8 lg:px-16 font-sans text-gray-900">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12 flex justify-between items-center">
          <div>
            <Link to="/cart" className="inline-flex items-center text-[10px] tracking-[0.3em] uppercase text-gray-400 hover:text-primary mb-4 transition-colors font-bold group">
              <ChevronLeft size={14} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Bag
            </Link>
            <h1 className="text-3xl md:text-4xl font-serif italic text-primary">Checkout</h1>
          </div>
          <div className="text-right">
             <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold block">Grand Total</span>
             <span className="text-2xl font-light text-primary">₹{finalTotal.toLocaleString()}</span>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 flex-col-reverse lg:flex-row">
          
          {/* Order Summary Section - Visible first on mobile if wanted, but standard is form first */}
          <div className="lg:col-span-5 lg:order-last">
            <div className="bg-white p-8 border border-gray-100 rounded-3xl sticky top-24 shadow-xl shadow-gray-100/50">
              <h3 className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold mb-8">Order Summary</h3>
              
              <div className="space-y-6 mb-8 max-h-[35vh] overflow-y-auto pr-2 scrollbar-hide">
                {cart.map((item) => (
                  <div key={`${item.id}-${item.size}`} className="flex gap-4">
                    <div className="w-16 aspect-square bg-gray-50 flex-shrink-0 rounded-lg overflow-hidden border border-gray-100">
                      <img src={item.image.startsWith('http') ? item.image : `${API_BASE_URL}${item.image}`} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xs font-serif text-primary line-clamp-1">{item.name}</h4>
                      <p className="text-[9px] text-gray-400 uppercase tracking-widest mt-1">Qty: {item.quantity} | {item.size}</p>
                    </div>
                    <span className="text-xs font-bold text-primary">₹{(item.price * item.quantity).toLocaleString()}</span>
                  </div>
                ))}
              </div>

              {/* Coupon Section */}
              <div className="mb-8 pt-6 border-t border-gray-50">
                {!appliedCoupon ? (
                  <form onSubmit={handleApplyCoupon} className="flex gap-2">
                    <input 
                      type="text" 
                      placeholder="Promo Code" 
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      className="flex-1 border border-gray-200 text-xs px-4 py-3 outline-none focus:border-primary uppercase rounded-xl"
                    />
                    <button 
                      type="submit" 
                      disabled={couponLoading}
                      className="bg-gray-900 text-white px-6 text-[10px] tracking-widest uppercase font-bold hover:bg-black rounded-xl"
                    >
                      {couponLoading ? <Loader2 size={14} className="animate-spin" /> : 'Apply'}
                    </button>
                  </form>
                ) : (
                  <div className="flex items-center justify-between bg-green-50/50 border border-green-100 p-4 rounded-xl">
                    <div className="flex items-center gap-2 text-green-700">
                      <Tag size={16} />
                      <span className="text-xs font-bold uppercase tracking-widest">{appliedCoupon.code} ({appliedCoupon.discount_percentage}%)</span>
                    </div>
                    <button onClick={handleRemoveCoupon} className="text-gray-400 hover:text-red-500">
                      <X size={16} />
                    </button>
                  </div>
                )}
                {couponError && <p className="text-red-500 text-[10px] mt-2 uppercase tracking-tight">{couponError}</p>}
              </div>

              <div className="space-y-4 pt-6 border-t border-gray-50 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500 text-xs">Subtotal</span>
                  <span className="font-medium text-primary">₹{cartTotal.toLocaleString()}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span className="text-xs">Discount</span>
                    <span className="font-medium">-₹{discountAmount.toLocaleString()}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-gray-500 text-xs">Tax (3% GST)</span>
                  <span className="font-medium text-primary">₹{tax.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 text-xs">Shipping</span>
                  {shippingCharge === 0 ? (
                     <span className="text-green-600 font-bold text-[10px] tracking-widest uppercase">Free</span>
                  ) : (
                     <span className="font-medium text-primary">₹{shippingCharge.toLocaleString()}</span>
                  )}
                </div>
                <div className="flex justify-between items-center pt-6 mt-4 border-t border-gray-100">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-primary font-bold">Total Amount</span>
                  <span className="text-2xl font-serif text-primary">₹{finalTotal.toLocaleString()}</span>
                </div>
              </div>

            </div>
          </div>

          {/* Form Section */}
          <div className="lg:col-span-7">
            <form onSubmit={handlePayment} className="space-y-12">
              
              {/* Delivery Details */}
              <section className="bg-white p-8 border border-gray-100 rounded-3xl">
                <h3 className="text-[10px] uppercase tracking-[0.3em] text-primary font-bold mb-8 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center text-[10px]">1</span> 
                  Delivery Details
                </h3>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2 font-bold">Full Name</label>
                      <input 
                        type="text" name="name" value={formData.name} onChange={handleInputChange}
                        className={`w-full bg-gray-50 border ${errors.name ? 'border-red-300' : 'border-transparent'} focus:border-primary focus:bg-white outline-none py-3 px-4 rounded-xl text-sm transition-all`}
                        placeholder="Ananya Sharma"
                      />
                      {errors.name && <p className="text-red-500 text-[10px] mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2 font-bold">Mobile Number</label>
                      <input 
                        type="tel" name="mobile" value={formData.mobile} onChange={handleInputChange}
                        className={`w-full bg-gray-50 border ${errors.mobile ? 'border-red-300' : 'border-transparent'} focus:border-primary focus:bg-white outline-none py-3 px-4 rounded-xl text-sm transition-all`}
                        placeholder="9876543210"
                      />
                      {errors.mobile && <p className="text-red-500 text-[10px] mt-1">{errors.mobile}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2 font-bold">Email Address (Optional)</label>
                    <input 
                      type="email" name="email" value={formData.email} onChange={handleInputChange}
                      className={`w-full bg-gray-50 border border-transparent focus:border-primary focus:bg-white outline-none py-3 px-4 rounded-xl text-sm transition-all`}
                      placeholder="ananya@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2 font-bold">Shipping Address</label>
                    <textarea 
                      name="address" value={formData.address} onChange={handleInputChange} rows="3"
                      className={`w-full bg-gray-50 border ${errors.address ? 'border-red-300' : 'border-transparent'} focus:border-primary focus:bg-white outline-none py-3 px-4 rounded-xl text-sm resize-none transition-all`}
                      placeholder="Flat No, Building, Street Name..."
                    />
                    {errors.address && <p className="text-red-500 text-[10px] mt-1">{errors.address}</p>}
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    <div className="col-span-2 md:col-span-1">
                      <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2 font-bold">City</label>
                      <input 
                        type="text" name="city" value={formData.city} onChange={handleInputChange}
                        className={`w-full bg-gray-50 border ${errors.city ? 'border-red-300' : 'border-transparent'} focus:border-primary focus:bg-white outline-none py-3 px-4 rounded-xl text-sm transition-all`}
                        placeholder="Mumbai"
                      />
                      {errors.city && <p className="text-red-500 text-[10px] mt-1">{errors.city}</p>}
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2 font-bold">State (Opt)</label>
                      <input 
                        type="text" name="state" value={formData.state} onChange={handleInputChange}
                        className={`w-full bg-gray-50 border border-transparent focus:border-primary focus:bg-white outline-none py-3 px-4 rounded-xl text-sm transition-all`}
                        placeholder="MH"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2 font-bold">Pincode</label>
                      <input 
                        type="text" name="pincode" value={formData.pincode} onChange={handleInputChange}
                        className={`w-full bg-gray-50 border ${errors.pincode ? 'border-red-300' : 'border-transparent'} focus:border-primary focus:bg-white outline-none py-3 px-4 rounded-xl text-sm transition-all`}
                        placeholder="400001"
                      />
                      {errors.pincode && <p className="text-red-500 text-[10px] mt-1">{errors.pincode}</p>}
                    </div>
                  </div>
                </div>

                {/* Billing Address Toggle */}
                <div className="mt-8 pt-8 border-t border-gray-100">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input 
                      type="checkbox" name="billingSameAsShipping" checked={formData.billingSameAsShipping} onChange={handleInputChange}
                      className="w-4 h-4 accent-primary"
                    />
                    <span className="text-sm text-gray-700">Billing address is same as shipping</span>
                  </label>

                  {!formData.billingSameAsShipping && (
                    <div className="mt-6 space-y-6 bg-gray-50/50 p-6 rounded-2xl border border-gray-100">
                      <div>
                        <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2 font-bold">Billing Address</label>
                        <textarea 
                          name="billing_address" value={formData.billing_address} onChange={handleInputChange} rows="2"
                          className={`w-full bg-white border ${errors.billing_address ? 'border-red-300' : 'border-gray-200'} focus:border-primary outline-none py-3 px-4 rounded-xl text-sm resize-none`}
                        />
                        {errors.billing_address && <p className="text-red-500 text-[10px] mt-1">{errors.billing_address}</p>}
                      </div>
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2 font-bold">Billing City</label>
                          <input 
                            type="text" name="billing_city" value={formData.billing_city} onChange={handleInputChange}
                            className={`w-full bg-white border ${errors.billing_city ? 'border-red-300' : 'border-gray-200'} focus:border-primary outline-none py-3 px-4 rounded-xl text-sm`}
                          />
                          {errors.billing_city && <p className="text-red-500 text-[10px] mt-1">{errors.billing_city}</p>}
                        </div>
                        <div>
                          <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2 font-bold">Billing Pincode</label>
                          <input 
                            type="text" name="billing_pincode" value={formData.billing_pincode} onChange={handleInputChange}
                            className={`w-full bg-white border ${errors.billing_pincode ? 'border-red-300' : 'border-gray-200'} focus:border-primary outline-none py-3 px-4 rounded-xl text-sm`}
                          />
                          {errors.billing_pincode && <p className="text-red-500 text-[10px] mt-1">{errors.billing_pincode}</p>}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </section>

              {/* Shipping Method */}
              <section className="bg-white p-8 border border-gray-100 rounded-3xl">
                <h3 className="text-[10px] uppercase tracking-[0.3em] text-primary font-bold mb-6 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center text-[10px]">2</span> 
                  Shipping Method
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <label className={`border rounded-2xl p-5 cursor-pointer transition-all ${shippingMethod === 'Standard' ? 'border-primary bg-gray-50/50' : 'border-gray-200 hover:border-gray-300'}`}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <input type="radio" name="shippingMethod" value="Standard" checked={shippingMethod === 'Standard'} onChange={(e) => setShippingMethod(e.target.value)} className="accent-primary" />
                        <span className="font-bold text-sm text-primary">Standard Delivery</span>
                      </div>
                      <span className="text-sm font-medium">{cartTotal > 5000 ? 'Free' : '₹100'}</span>
                    </div>
                    <p className="text-xs text-gray-500 pl-7">Delivery in 5-7 business days.</p>
                  </label>

                  <label className={`border rounded-2xl p-5 cursor-pointer transition-all ${shippingMethod === 'Express' ? 'border-primary bg-gray-50/50' : 'border-gray-200 hover:border-gray-300'}`}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <input type="radio" name="shippingMethod" value="Express" checked={shippingMethod === 'Express'} onChange={(e) => setShippingMethod(e.target.value)} className="accent-primary" />
                        <span className="font-bold text-sm text-primary">Express Delivery</span>
                      </div>
                      <span className="text-sm font-medium">₹250</span>
                    </div>
                    <p className="text-xs text-gray-500 pl-7">Delivery in 1-2 business days.</p>
                  </label>
                </div>
              </section>

              {/* Payment Method */}
              <section className="bg-white p-8 border border-gray-100 rounded-3xl">
                <h3 className="text-[10px] uppercase tracking-[0.3em] text-primary font-bold mb-6 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center text-[10px]">3</span> 
                  Payment Method
                </h3>
                <div className="space-y-4">
                  <label className={`flex items-center justify-between border rounded-2xl p-5 cursor-pointer transition-all ${paymentMethod === 'Razorpay' ? 'border-primary bg-gray-50/50' : 'border-gray-200 hover:border-gray-300'}`}>
                    <div className="flex items-center gap-4">
                      <input type="radio" name="paymentMethod" value="Razorpay" checked={paymentMethod === 'Razorpay'} onChange={(e) => setPaymentMethod(e.target.value)} className="accent-primary" />
                      <div>
                        <p className="font-bold text-sm text-primary flex items-center gap-2"><CreditCard size={16} /> Online Payment</p>
                        <p className="text-xs text-gray-500 mt-1">UPI, Cards, NetBanking via Razorpay.</p>
                      </div>
                    </div>
                  </label>

                  <label className={`flex items-center justify-between border rounded-2xl p-5 cursor-pointer transition-all ${paymentMethod === 'COD' ? 'border-primary bg-gray-50/50' : 'border-gray-200 hover:border-gray-300'}`}>
                    <div className="flex items-center gap-4">
                      <input type="radio" name="paymentMethod" value="COD" checked={paymentMethod === 'COD'} onChange={(e) => setPaymentMethod(e.target.value)} className="accent-primary" />
                      <div>
                        <p className="font-bold text-sm text-primary flex items-center gap-2"><Banknote size={16} /> Cash on Delivery</p>
                        <p className="text-xs text-gray-500 mt-1">Pay with cash upon delivery.</p>
                      </div>
                    </div>
                  </label>
                </div>
              </section>

              <button 
                type="submit"
                disabled={isPaying}
                className="w-full bg-primary text-white h-16 rounded-2xl text-[11px] tracking-[0.4em] font-bold uppercase hover:bg-black transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isPaying ? <><Loader2 size={18} className="animate-spin" /> Processing...</> : `Pay ₹${finalTotal.toLocaleString()}`}
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Checkout;
