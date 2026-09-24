import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import ProductCard from '../components/ProductCard';
import CustomDropdown from '../components/CustomDropdown';
import { Filter, SlidersHorizontal, Sparkles, ShieldCheck, Check } from 'lucide-react';

export default function ShopPage({ onAddToCart, onQuickView }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');

  const [selectedCategory, setSelectedCategory] = useState(categoryParam || 'All');
  const [sortBy, setSortBy] = useState('featured');

  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);

  const categories = ['All', 'Protein Beverages', 'Functional Staples'];

  const filteredProducts = PRODUCTS.filter((product) => {
    if (selectedCategory === 'All') return true;
    return product.category === selectedCategory;
  }).sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    return 0; // featured
  });

  return (
    <div className="bg-[#F9FBF4] min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="text-xs text-[#8A9388] mb-6 flex items-center gap-2">
          <Link to="/" className="hover:text-black">Home</Link>
          <span>/</span>
          <span className="text-[#101F18] font-bold">Shop All Products</span>
        </nav>

        {/* Page Header */}
        <div className="bg-white p-8 sm:p-12 rounded-2xl border border-[#DDE8C2] shadow-sm mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <span className="inline-block rounded-full border border-[#86C33A]/35 bg-white text-[11px] font-bold uppercase tracking-[0.18em] text-[#86C33A] px-3 py-1 mb-3">
              100% Clean Formulations
            </span>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal text-[#101F18] tracking-tight">
              Shop Gomzi Lifesciences
            </h1>
            <p className="text-[#5A5A52] text-sm sm:text-base mt-2 max-w-xl">
              Doctor-formulated daily functional nutrition. Power your mornings with 5g Protein Tea & Mocha Coffee, and enrich family meals with 28% Protein Multi Grain Atta.
            </p>
          </div>

          <div className="flex flex-col gap-2 bg-[#EDF5DC] p-4 rounded-2xl border border-[#DDE8C2] self-start md:self-center text-xs text-[#5A5A52]">
            <div className="flex items-center gap-2 font-bold text-[#86C33A]">
              <ShieldCheck className="w-4 h-4 text-[#86C33A]" />
              <span>Assure Lab Tested Batch Purity</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#86C33A]" />
              <span>Free Shipping on Orders Above ₹499</span>
            </div>
          </div>
        </div>

        {/* Filter and Sorting Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  if (cat === 'All') {
                    setSearchParams({});
                  } else {
                    setSearchParams({ category: cat });
                  }
                }}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#86C33A] text-white shadow-xs'
                    : 'bg-white text-[#5A5A52] hover:bg-[#EDF5DC] border border-[#DDE8C2]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort By Dropdown */}
          <div className="flex items-center gap-2 self-end sm:self-auto">
            <SlidersHorizontal className="w-4 h-4 text-[#8A9388]" />
            <span className="text-xs font-bold text-[#8A9388] uppercase whitespace-nowrap">Sort By:</span>
            <CustomDropdown
              value={sortBy}
              onChange={setSortBy}
              options={[
                { value: 'featured', label: 'Featured First' },
                { value: 'price-low', label: 'Price: Low to High' },
                { value: 'price-high', label: 'Price: High to Low' },
                { value: 'rating', label: 'Highest Rated' }
              ]}
              align="right"
              className="w-44 sm:w-48"
            />
          </div>

        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="relative group">
              <ProductCard
                product={product}
                onAddToCart={onAddToCart}
                onQuickView={onQuickView}
              />
              <div className="mt-2 text-center">
                <Link
                  to={`/product/${product.id}`}
                  className="text-xs font-bold text-[#86C33A] hover:underline"
                >
                  View Full Product Details & Nutrition →
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
