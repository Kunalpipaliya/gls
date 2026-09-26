import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from './ProductCard';

export default function BestSellers({ products, onAddToCart, onQuickView }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTablet, setIsTablet] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      // sm is 640px, lg is 1024px
      setIsTablet(width >= 640 && width < 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const visibleCards = isTablet ? 2 : 1;
  const maxIndex = Math.max(0, products.length - visibleCards);

  // Keep currentIndex bounded if screen size changes
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [maxIndex, currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const minSwipeDistance = 45;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe && currentIndex < maxIndex) {
      handleNext();
    } else if (isRightSwipe && currentIndex > 0) {
      handlePrev();
    }
  };

  const isPrevDisabled = currentIndex === 0;
  const isNextDisabled = currentIndex >= maxIndex;

  return (
    <section id="shop" className="py-16 sm:py-20 bg-[#FFFFFF] border-t border-[#DDE8C2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header with Title, Subtitle and Nav Arrows */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-12">
          <div>
            <span className="inline-block rounded-full border border-[#86C33A]/35 bg-white text-[11px] font-bold uppercase tracking-[0.18em] text-[#86C33A] px-3 py-1 mb-3">
              Featured Products
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-normal text-[#101F18] tracking-tight">
              Best Selling
            </h2>
            <p className="text-[#5A5A52] text-sm sm:text-base mt-1">
              Our laboratory-verified daily protein teas, coffees, and functional kitchen staples.
            </p>
          </div>

          {/* Navigation Arrows: Only visible on mobile screen or tablet screen, NOT in large screens where 3 cards fit in 1 row */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              onClick={handlePrev}
              disabled={isPrevDisabled}
              className={`w-11 h-11 rounded-2xl border flex items-center justify-center transition-all ${
                isPrevDisabled
                  ? 'text-[#C9C5BB] border-[#DDE8C2] cursor-not-allowed bg-[#FFFFFF]'
                  : 'text-[#101F18] border-[#DDE8C2] hover:border-[#1B2F0A] hover:bg-[#F9FBF4] bg-white cursor-pointer active:scale-95 shadow-xs'
              }`}
              aria-label="Previous Product"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              disabled={isNextDisabled}
              className={`w-11 h-11 rounded-2xl border flex items-center justify-center transition-all ${
                isNextDisabled
                  ? 'text-[#C9C5BB] border-[#DDE8C2] cursor-not-allowed bg-[#FFFFFF]'
                  : 'text-[#101F18] border-[#DDE8C2] hover:border-[#1B2F0A] hover:bg-[#F9FBF4] bg-white cursor-pointer active:scale-95 shadow-xs'
              }`}
              aria-label="Next Product"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Large Screens (lg and up): 3 Product Cards Fit in 1 Row */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onQuickView={onQuickView}
            />
          ))}
        </div>

        {/* Mobile & Tablet Screens (< lg): Carousel view with 1 product per row on mobile (2 on tablet) */}
        <div className="lg:hidden">
          <div
            className="overflow-hidden -mx-2 px-2"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div
              className="flex transition-transform duration-300 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (isTablet ? 50 : 100)}%)`,
              }}
            >
              {products.map((product) => (
                <div
                  key={product.id}
                  className="w-full sm:w-1/2 flex-shrink-0 px-2 sm:px-3"
                >
                  <ProductCard
                    product={product}
                    onAddToCart={onAddToCart}
                    onQuickView={onQuickView}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator for Mobile & Tablet */}
          <div className="flex justify-center items-center gap-2 mt-6">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? 'w-6 bg-[#86C33A]'
                    : 'w-2 bg-[#DDE8C2] hover:bg-[#86C33A]/60'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
