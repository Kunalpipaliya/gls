import React, { useState } from 'react';
import { Search, X, Star, ShoppingCart, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../data/products';

export default function SearchModal({ isOpen, onClose, onSelectProduct, onAddToCart }) {
  if (!isOpen) return null;

  const [query, setQuery] = useState('');

  const filtered = PRODUCTS.filter((p) => {
    const q = query.toLowerCase().trim();
    if (!q) return true;
    return (
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.tagline.toLowerCase().includes(q) ||
      (p.ingredients && p.ingredients.toLowerCase().includes(q))
    );
  });

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Dimmed backdrop with blur */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity animate-fadeIn cursor-pointer"
      />

      <div className="flex min-h-full items-start justify-center p-2.5 sm:p-4 pt-4 sm:pt-16">
        <div className="relative w-full max-w-2xl bg-white shadow-elevated overflow-hidden rounded-2xl border border-[#DDE8C2] animate-scaleUp z-10">
          
          {/* Search Header Container */}
          <div className="p-3 sm:p-5 border-b border-[#DDE8C2] flex items-center gap-2 sm:gap-3 bg-[#FFFFFF]">
            {/* Input Bar */}
            <div className="relative flex-1 flex items-center bg-[#F9FBF4] rounded-xl sm:rounded-2xl border border-[#DDE8C2] focus-within:border-[#86C33A] focus-within:ring-2 focus-within:ring-[#86C33A]/15 transition-all px-3 sm:px-4 py-2 sm:py-3 gap-2 sm:gap-3">
              <Search className="w-4 h-4 sm:w-5 sm:h-5 text-[#86C33A] flex-shrink-0" />
              <input
                type="text"
                autoFocus
                placeholder="Search products, protein, tea, coffee, atta..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-transparent border-0 outline-none ring-0 focus:outline-none focus:ring-0 text-xs sm:text-base font-semibold text-[#101F18] placeholder:text-[#8A9388]"
              />
              {query.length > 0 && (
                <button
                  type="button"
                  onClick={() => setQuery('')}
                  className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#DDE8C2] hover:bg-[#86C33A] text-[#5A5A52] hover:text-white flex items-center justify-center transition-colors cursor-pointer flex-shrink-0"
                  title="Clear input"
                >
                  <X className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </button>
              )}
            </div>

            {/* Modal Close Button */}
            <button
              onClick={onClose}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl border border-[#DDE8C2] hover:border-[#86C33A] bg-[#F9FBF4] hover:bg-[#EDF5DC] text-[#5A5A52] hover:text-[#101F18] flex items-center justify-center transition-all cursor-pointer flex-shrink-0"
              title="Close search"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          {/* Quick Suggestions & Results Body */}
          <div className="p-3.5 sm:p-6 max-h-[72vh] sm:max-h-[65vh] overflow-y-auto space-y-4 sm:space-y-5 scrollbar-none">
            {/* Popular Searches */}
            {query.length === 0 && (
              <div>
                <span className="text-[11px] font-bold text-[#8A9388] uppercase tracking-[0.16em] block mb-2 sm:mb-2.5">
                  Popular Searches
                </span>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {['Instant Spiced Tea', 'Instant Mocha Coffee', 'Multi Grain Atta', '5g Protein', 'Lab Tested'].map((tag) => (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => setQuery(tag)}
                      className="text-[11px] sm:text-xs font-semibold bg-[#F9FBF4] hover:bg-[#86C33A] text-[#3A3A34] hover:text-white rounded-full border border-[#DDE8C2] hover:border-[#86C33A] px-2.5 sm:px-3.5 py-1 sm:py-1.5 transition-all shadow-2xs hover:shadow-xs cursor-pointer active:scale-95"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Matching Products */}
            <div>
              <div className="flex items-center justify-between mb-2.5 sm:mb-3">
                <span className="text-[11px] font-bold text-[#8A9388] uppercase tracking-[0.16em]">
                  Products ({filtered.length})
                </span>
                {query.length > 0 && (
                  <span className="text-[11px] sm:text-xs text-[#8A9388] truncate max-w-[50%]">
                    Filtering by: <strong className="text-[#101F18]">"{query}"</strong>
                  </span>
                )}
              </div>

              {filtered.length === 0 ? (
                <div className="text-center py-10 px-4 space-y-2 rounded-2xl bg-[#F9FBF4] border border-dashed border-[#DDE8C2]">
                  <p className="text-sm font-bold text-[#101F18]">No products match "{query}"</p>
                  <p className="text-xs text-[#8A9388]">
                    Try checking your spelling or search for "tea", "coffee", or "atta".
                  </p>
                </div>
              ) : (
                <div className="space-y-2.5 sm:space-y-3">
                  {filtered.map((product) => (
                    <div
                      key={product.id}
                      onClick={() => {
                        onSelectProduct(product);
                        onClose();
                      }}
                      className="flex items-center justify-between p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl border border-[#DDE8C2] hover:border-[#86C33A]/60 bg-white hover:bg-[#F9FBF4] shadow-xs hover:shadow-sm transition-all cursor-pointer group gap-2.5"
                    >
                      {/* Left: Thumbnail & Info */}
                      <div className="flex items-center gap-2.5 sm:gap-3.5 min-w-0 flex-1">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-xl border border-[#DDE8C2] p-1 flex items-center justify-center flex-shrink-0 overflow-hidden group-hover:scale-105 transition-transform">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <span className="text-[9px] sm:text-[10px] font-bold text-[#86C33A] uppercase tracking-wider block">
                            {product.category}
                          </span>
                          <div className="text-xs sm:text-sm font-bold text-[#101F18] group-hover:text-[#6AA326] transition-colors truncate">
                            {product.name}
                          </div>
                          
                          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mt-1">
                            {/* Golden rating stars */}
                            <div className="flex items-center text-[#FFB800]">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-[#FFB800] text-[#FFB800]" />
                              ))}
                            </div>
                            <span className="text-xs font-bold text-[#101F18]">₹{product.price}</span>
                            <span className="text-[10px] text-[#8A9388] line-through hidden sm:inline">₹{product.originalPrice}</span>
                            <span className="text-[9px] sm:text-[10px] font-bold text-[#3F6116] bg-[#EFF6DD] px-1.5 py-0.5 rounded-sm border border-[#86C33A]/30 whitespace-nowrap">
                              {product.proteinPerServing}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Right: Add button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onAddToCart(product.id, 1);
                          onClose();
                        }}
                        className="bg-[#86C33A] hover:bg-[#6AA326] text-white px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1 sm:gap-1.5 shadow-xs hover:shadow-md active:scale-95 flex-shrink-0 cursor-pointer"
                      >
                        <ShoppingCart className="w-3.5 h-3.5 text-white" />
                        <span className="text-white">Add</span>
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
