import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from './ProductCard';

export default function BestSellers({ products, onAddToCart, onQuickView }) {
  const [scrollIndex, setScrollIndex] = useState(0);

  const handlePrev = () => {
    setScrollIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setScrollIndex((prev) => Math.min(products.length - 1, prev + 1));
  };

  return (
    <section id="shop" className="py-20 bg-[#FFFFFF] border-t border-[#DDE8C2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header with Title, Subtitle and Nav Arrows */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
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

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              disabled={scrollIndex === 0}
              className={`w-11 h-11 rounded-2xl border border-[#DDE8C2] flex items-center justify-center transition-all ${
                scrollIndex === 0
                  ? 'text-[#C9C5BB] border-[#DDE8C2] cursor-not-allowed bg-[#FFFFFF]'
                  : 'text-[#101F18] hover:border-[#1B2F0A] bg-white'
              }`}
              aria-label="Previous Products"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              disabled={scrollIndex >= products.length - 4}
              className={`w-11 h-11 rounded-2xl border border-[#DDE8C2] flex items-center justify-center transition-all ${
                scrollIndex >= products.length - 4
                  ? 'text-[#C9C5BB] border-[#DDE8C2] cursor-not-allowed bg-[#FFFFFF]'
                  : 'text-[#101F18] hover:border-[#1B2F0A] bg-white'
              }`}
              aria-label="Next Products"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onQuickView={onQuickView}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
