import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import MarqueeBanner from '../components/MarqueeBanner';
import TrustBar from '../components/TrustBar';
import BestSellers from '../components/BestSellers';
import IngredientsBreakdown from '../components/IngredientsBreakdown';
import CustomerReviews from '../components/CustomerReviews';
import FaqSection from '../components/FaqSection';
import { PRODUCTS } from '../data/products';

export default function HomePage({ onAddToCart, onQuickView, onOpenReportModal, onOpenBrochure }) {
  const navigate = useNavigate();

  return (
    <div>
      {/* Hero Section with the 3 Products Showcase */}
      <HeroSection
        onShopNow={() => navigate('/shop')}
        onDownloadBrochure={onOpenBrochure}
        onSelectProduct={(product) => navigate(`/product/${product.id}`)}
        onAddToCart={(productId) => onAddToCart(productId, 1)}
      />

      {/* Infinite Scrolling Value Marquee */}
      <MarqueeBanner />

      {/* Trust Guarantee Bar */}
      <TrustBar />

      {/* Best Selling Products Grid */}
      <BestSellers
        products={PRODUCTS}
        onAddToCart={(id) => onAddToCart(id, 1)}
        onQuickView={(p) => navigate(`/product/${p.id}`)}
      />

      {/* Scientific Formulation Breakdown */}
      <IngredientsBreakdown />

      {/* Customer Reviews & Testimonials */}
      <CustomerReviews />

      {/* FAQs Teaser Section */}
      <FaqSection />
    </div>
  );
}
