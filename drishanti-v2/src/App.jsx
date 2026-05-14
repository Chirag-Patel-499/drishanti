import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home.jsx'
import ProductDetail from './pages/ProductDetail.jsx'
import BestsellersPage from './pages/BestsellersPage.jsx'
import ShopPage from './pages/Shop.jsx'
import Checkout from './pages/Checkout.jsx'
import Success from './pages/Success.jsx'
import Failure from './pages/Failure.jsx'
import UserOrders from './pages/UserOrders.jsx'
import WishlistPage from './pages/Wishlist.jsx'
import CartPage from './pages/CartPage.jsx'
import Contact from './pages/Contact.jsx'
import CollectionsPage from './pages/CollectionsPage.jsx'
import About from './pages/About.jsx'

import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <Router>
      <div className="App bg-white">

        {/* Navbar */}
        <Navbar />

        {/* Routes */}
        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/product/:id" element={<ProductDetail />} />

          <Route path="/bestsellers" element={<BestsellersPage />} />

          {/* Dynamic Shop Routes */}
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/shop/:category" element={<ShopPage />} />
          <Route path="/shop/:category/:subcategory" element={<ShopPage />} />

          {/* Collections */}
          <Route path="/collections" element={<CollectionsPage />} />

          {/* About */}
          <Route path="/about" element={<About />} />

          {/* Other Pages */}
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/success" element={<Success />} />
          <Route path="/failure" element={<Failure />} />
          <Route path="/orders" element={<UserOrders />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>

        {/* Footer */}
        <Footer />

      </div>
    </Router>
  )
}

export default App