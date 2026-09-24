import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

// Layout & Global Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import CartDrawer from './components/CartDrawer';
import QuickViewModal from './components/QuickViewModal';
import BatchReportModal from './components/BatchReportModal';
import SearchModal from './components/SearchModal';
import BrochureModal from './components/BrochureModal';
import AuthModal from './components/AuthModal';

// Dedicated Separate Pages
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ContactUsPage from './pages/ContactUsPage';

import { PRODUCTS } from './data/products';
import { CheckCircle2 } from 'lucide-react';
import { downloadBrochureDirectly } from './utils/brochureDownload';

export default function App() {
  const navigate = useNavigate();

  // Cart State (Initialized with 1 Mocha Coffee for lively preview)
  const [cart, setCart] = useState([
    {
      product: PRODUCTS.find((p) => p.id === 'mocha-coffee') || PRODUCTS[0],
      quantity: 1
    }
  ]);

  // Global Modals State
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);
  const [isReportOpen, setIsReportOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  // Toast Notification
  const [toastMessage, setToastMessage] = useState('');

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 3000);
  };

  // Direct brochure download handler
  const handleBrochureDownload = () => {
    downloadBrochureDirectly();
    showToast('Official Brochure PDF downloaded directly!');
  };

  // Add to cart handler
  const handleAddToCart = (productId, qty = 1, customSize = null) => {
    const product = PRODUCTS.find((p) => p.id === productId);
    if (!product) return;

    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.product.id === productId);
      if (existing) {
        return prevCart.map((item) =>
          item.product.id === productId
            ? { ...item, quantity: item.quantity + qty }
            : item
        );
      } else {
        const productToAdd = customSize
          ? { ...product, price: customSize.price, originalPrice: customSize.original }
          : product;
        return [...prevCart, { product: productToAdd, quantity: qty }];
      }
    });

    showToast(`Added ${product.name} to cart!`);
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (productId, newQty) => {
    if (newQty <= 0) {
      handleRemoveFromCart(productId);
    } else {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.product.id === productId ? { ...item, quantity: newQty } : item
        )
      );
    }
  };

  const handleRemoveFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const totalCartCount = cart.reduce((total, i) => total + i.quantity, 0);

  return (
    <div className="min-h-screen bg-[#F9FBF4] flex flex-col font-sans">
      {/* Scroll to Top helper on route change */}
      <ScrollToTop />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#101F18] text-white px-5 py-3 rounded-lg shadow-sm border border-white/20 flex items-center gap-3 animate-fadeIn">
          <CheckCircle2 className="w-5 h-5 text-[#B6DB57]" />
          <span className="text-sm font-bold">{toastMessage}</span>
        </div>
      )}

      {/* Sticky Global Navbar with Page Navigation */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenAuth={() => setIsAuthOpen(true)}
      />

      {/* Main Content Multi-Page Routing */}
      <main className="flex-1">
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <HomePage
                onAddToCart={handleAddToCart}
                onQuickView={(p) => setQuickViewProduct(p)}
                onOpenReportModal={() => setIsReportOpen(true)}
                onOpenBrochure={handleBrochureDownload}
              />
            }
          />

          {/* Shop All Products Page */}
          <Route
            path="/shop"
            element={
              <ShopPage
                onAddToCart={handleAddToCart}
                onQuickView={(p) => setQuickViewProduct(p)}
              />
            }
          />

          {/* Individual Dedicated Product Detail Page for EVERY product */}
          <Route
            path="/product/:productId"
            element={
              <ProductDetailPage
                onAddToCart={handleAddToCart}
                onOpenReportModal={() => setIsReportOpen(true)}
              />
            }
          />

          {/* Contact Us Page */}
          <Route
            path="/contact-us"
            element={<ContactUsPage />}
          />

          {/* Fallback to Home */}
          <Route
            path="*"
            element={
              <HomePage
                onAddToCart={handleAddToCart}
                onQuickView={(p) => setQuickViewProduct(p)}
                onOpenReportModal={() => setIsReportOpen(true)}
                onOpenBrochure={handleBrochureDownload}
              />
            }
          />
        </Routes>
      </main>

      {/* Global Footer */}
      <Footer onOpenReportModal={() => setIsReportOpen(true)} />

      {/* Slide-over Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemove={handleRemoveFromCart}
        onClear={handleClearCart}
      />

      {/* Quick View Product Modal */}
      <QuickViewModal
        product={quickViewProduct}
        isOpen={!!quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Laboratory Certificate Modal */}
      <BatchReportModal
        isOpen={isReportOpen}
        onClose={() => setIsReportOpen(false)}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={(p) => navigate(`/product/${p.id}`)}
        onAddToCart={(id) => handleAddToCart(id, 1)}
      />

      {/* Brochure Download Modal */}
      <BrochureModal
        isOpen={isBrochureOpen}
        onClose={() => setIsBrochureOpen(false)}
      />

      {/* Authentication Modal */}
      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
      />

      {/* Floating Feedback Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#101F18] text-white px-5 py-3.5 rounded-lg shadow-sm flex items-center gap-3 border border-[#86C33A]/50 animate-fadeIn">
          <CheckCircle2 className="w-5 h-5 text-[#B6DB57] flex-shrink-0" />
          <span className="text-sm font-semibold tracking-wide">{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
