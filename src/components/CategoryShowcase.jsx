import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function CategoryShowcase({ onSelectCategory }) {
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    {
      id: "protein-beverages",
      title: "Protein Beverages",
      subtitle: "Instant Spiced Tea & Mocha Coffee",
      description: "Everyday hot drinks fortified with 5g bio-available protein, natural spices and zero added sugars.",
      image: "/products/mocha.webp",
      tag: "5g Protein / Cup",
      filterCategory: "Protein Beverages"
    },
    {
      id: "functional-staples",
      title: "Functional Staples",
      subtitle: "Multi Grain Atta with Protein",
      description: "Wholesome flour formulated with Sharbati wheat, roasted gram, oats and protein for super soft rotis.",
      image: "/products/atta-480.webp",
      tag: "28g Protein / 100g",
      filterCategory: "Functional Staples"
    }
  ];

  return (
    <section id="categories" className="py-20 bg-[#FFFFFF] border-t border-[#DDE8C2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block rounded-full border border-[#86C33A]/35 bg-white text-[11px] font-bold uppercase tracking-[0.18em] text-[#86C33A] px-3 py-1">
            Explore Range
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-normal text-[#101F18] mt-3 tracking-tight">
            Our Categories
          </h2>
          <p className="text-[#5A5A52] text-base mt-2">
            Tailored nutrition designed seamlessly to fit into your everyday Indian lifestyle.
          </p>
        </div>

        {/* Categories Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-8">
          {categories.map((cat, index) => (
            <div
              key={cat.id}
              className="bg-white rounded-2xl border border-[#DDE8C2] p-6 hover:shadow-sm transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
            >
              <div>
                {/* Image Showcase Container */}
                <div className="relative h-64 w-full bg-[#EDF5DC] texture-botanical flex items-center justify-center p-4 overflow-hidden mb-6">
                  <span className="absolute top-3 left-3 bg-[#86C33A] text-white text-[11px] font-bold rounded-full px-2.5 py-1 border border-[#86C33A]/50 z-10 shadow-xs">
                    {cat.tag}
                  </span>
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="max-h-52 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                <span className="text-xs font-bold text-[#6AA326] tracking-[0.14em] uppercase">
                  {cat.subtitle}
                </span>
                <h3 className="font-display text-xl font-semibold text-[#101F18] mt-1 group-hover:text-[#86C33A] transition-colors">
                  {cat.title}
                </h3>
                <p className="text-sm text-[#8A9388] mt-2 leading-relaxed">
                  {cat.description}
                </p>
              </div>

              {/* Explore More Button */}
              <div className="pt-6">
                <button
                  onClick={() => onSelectCategory(cat.filterCategory)}
                  className="w-full bg-white hover:bg-[#86C33A] text-[#13220A] hover:text-white border border-[#1B2F0A]/40 hover:border-[#1B2F0A] py-3 px-4 rounded-xl font-bold text-sm uppercase tracking-wider transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <span>Explore More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-10">
          <div className="w-6 h-2 bg-[#86C33A]"></div>
          <div className="w-2 h-2 bg-[#DDE8C2]"></div>
          <div className="w-2 h-2 bg-[#DDE8C2]"></div>
        </div>

      </div>
    </section>
  );
}
