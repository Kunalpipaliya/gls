import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../data/products';

export default function CustomerReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : TESTIMONIALS.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < TESTIMONIALS.length - 1 ? prev + 1 : 0));
  };

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
    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  // We display 3 cards in view on desktop, and 1 card on mobile
  const displayItems = [
    TESTIMONIALS[currentIndex % TESTIMONIALS.length],
    TESTIMONIALS[(currentIndex + 1) % TESTIMONIALS.length],
    TESTIMONIALS[(currentIndex + 2) % TESTIMONIALS.length],
  ];

  return (
    <section className="py-12 sm:py-20 bg-[#F9FBF4] border-t border-[#DDE8C2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header with Title and Pagination Tracker */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 sm:gap-6 mb-8 sm:mb-12">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#6AA326]">
              Customer Stories
            </span>
            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-normal text-[#101F18] mt-1 sm:mt-2 tracking-tight">
              What people are <span className="italic-display text-[#86C33A]">saying</span>
            </h2>
          </div>

          {/* Navigation Controls with Counter */}
          <div className="flex items-center justify-between sm:justify-end gap-4 sm:gap-6">
            <div className="flex items-center gap-2.5 sm:gap-3 text-xs sm:text-sm font-bold text-[#8A9388]">
              <span className="text-[#101F18] font-bold text-sm sm:text-base">
                {String(currentIndex + 1).padStart(2, '0')}
              </span>
              <div className="w-12 sm:w-16 h-1 bg-[#DDE8C2] overflow-hidden rounded-full">
                <div
                  className="h-full bg-[#86C33A] transition-all duration-300"
                  style={{ width: `${((currentIndex + 1) / TESTIMONIALS.length) * 100}%` }}
                ></div>
              </div>
              <span>{String(TESTIMONIALS.length).padStart(2, '0')}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-xl sm:rounded-2xl border border-[#DDE8C2] hover:border-[#1B2F0A] bg-white flex items-center justify-center text-[#101F18] transition-colors shadow-sm active:scale-95 cursor-pointer"
                aria-label="Previous Review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-xl sm:rounded-2xl border border-[#DDE8C2] hover:border-[#1B2F0A] bg-white flex items-center justify-center text-[#101F18] transition-colors shadow-sm active:scale-95 cursor-pointer"
                aria-label="Next Review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Reviews Cards Grid: 1 card on mobile, 3 cards on desktop */}
        <div 
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {displayItems.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className={`bg-white p-6 sm:p-7 rounded-2xl border border-[#DDE8C2] shadow-sm transition-all duration-300 flex-col justify-between ${
                idx > 0 ? 'hidden md:flex' : 'flex animate-fadeIn'
              }`}
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center text-[#FFB800] gap-1 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FFB800] text-[#FFB800]" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="font-display text-[#3A3A34] text-base sm:text-lg italic leading-relaxed">
                  “{item.comment}”
                </p>
              </div>

              {/* Author info & Product tag */}
              <div className="mt-6 pt-5 border-t border-[#DDE8C2]">
                <div className="font-display font-semibold text-base text-[#101F18]">
                  {item.name}
                </div>
                <div className="text-xs text-[#8A9388] font-medium">
                  {item.role}
                </div>
                <div className="mt-3">
                  <span className="inline-block bg-[#F9FBF4] rounded-full border border-[#DDE8C2] text-[#5A5A52] text-xs font-bold px-3 py-1">
                    {item.tag}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile pagination dots */}
        <div className="flex md:hidden items-center justify-center gap-1.5 mt-6">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                currentIndex === i ? 'w-6 bg-[#86C33A]' : 'w-2 bg-[#DDE8C2]'
              }`}
              aria-label={`Go to review ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
