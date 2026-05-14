import React from 'react';
import { Link } from 'react-router-dom';
import { XCircle, ArrowRight, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';

const Failure = () => {
  return (
    <div className="bg-[#fdfcfb] min-h-screen pt-32 pb-20 px-4 font-sans text-gray-900 flex justify-center">
      <div className="max-w-md w-full text-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="mb-8 flex justify-center"
        >
          <div className="w-24 h-24 bg-red-50 rounded-full flex items-center justify-center border border-red-100 shadow-sm">
            <XCircle className="text-red-500" size={48} strokeWidth={1.5} />
          </div>
        </motion.div>

        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-serif italic text-primary mb-4"
        >
          Payment Failed.
        </motion.h1>

        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-500 text-sm leading-relaxed mb-10 font-light"
        >
          We were unable to process your payment. Please ensure your payment details are correct or try a different payment method.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="space-y-4"
        >
          <Link 
            to="/checkout" 
            className="w-full bg-primary text-white h-14 text-[10px] tracking-[0.4em] font-bold uppercase flex items-center justify-center gap-3 hover:bg-black transition-colors rounded-xl"
          >
            Try Again
            <RefreshCw size={14} />
          </Link>
          <Link 
            to="/cart" 
            className="w-full border border-gray-200 text-primary h-14 text-[10px] tracking-[0.4em] font-bold uppercase flex items-center justify-center gap-3 hover:bg-gray-50 transition-colors rounded-xl"
          >
            Return to Bag
            <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Failure;
