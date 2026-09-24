import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart, Eye } from 'lucide-react';

export default function ProductCard({ product, onAddToCart, onQuickView }) {
  return (
    <div className="bg-white rounded-2xl border border-[#DDE8C2] p-5 shadow-sm transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative">

      {/* Top Discount Tag */}
      <div className="flex items-center justify-between mb-2">
        <span className="bg-[#EFF6DD] text-[#3F6116] rounded-full border border-[#DDE8C2] text-xs font-bold px-2.5 py-1">
          {product.discount}
        </span>
        {product.proteinPerServing && (
          <span className="text-[11px] font-bold text-[#86C33A] bg-[#F0F5F1] border border-[#A6CE62] rounded-full px-2 py-0.5">
            {product.proteinPerServing}
          </span>
        )}
      </div>

      {/* Product Image Area linking to PDP */}
      <Link
        to={`/product/${product.id}`}
        className="relative h-60 w-full flex items-center justify-center p-3 cursor-pointer overflow-hidden bg-gradient-to-b from-[#FFFFFF] to-[#EDF5DC]"
      >
        <img
          src={product.image}
          alt={product.name}
          className="max-h-52 w-auto object-contain transition-transform duration-500 group-hover:scale-105 drop-shadow-md"
          loading="lazy"
        />

        {/* Quick View Floating Button on Hover */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onQuickView(product);
          }}
          className="absolute bottom-3 right-3 bg-white/90 hover:bg-white text-[#101F18] rounded-2xl border border-[#DDE8C2] p-2 shadow-sm opacity-0 group-hover:opacity-100 transition-all duration-200 transform translate-y-2 group-hover:translate-y-0"
          title="Quick View"
        >
          <Eye className="w-4 h-4" />
        </button>
      </Link>

      {/* Info Area */}
      <div className="mt-4 flex-1 flex flex-col justify-between">
        <div>
          <span className="text-[11px] font-bold tracking-[0.12em] text-[#6AA326] uppercase">
            {product.category}
          </span>

          <h3 className="font-display text-base sm:text-lg font-semibold text-[#101F18] mt-1 group-hover:text-[#86C33A] transition-colors line-clamp-1">
            <Link to={`/product/${product.id}`}>
              {product.name}
            </Link>
          </h3>

          <p className="text-xs text-[#8A9388] mt-1 line-clamp-2">
            {product.tagline}
          </p>

          {/* Star Rating */}
          <div className="flex items-center gap-1.5 mt-2.5">
            <div className="flex items-center text-[#FFB800]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#FFB800] text-[#FFB800]" />
              ))}
            </div>
            <span className="text-xs text-[#8A9388] font-medium">({product.reviewsCount})</span>
          </div>
        </div>

        {/* Pricing & Add to Cart */}
        <div className="mt-4 pt-3 border-t border-[#DDE8C2]">
          <div className="flex items-baseline gap-2 mb-3">
            <span className="text-xl sm:text-2xl font-bold text-[#101F18]">
              ₹{product.price}
            </span>
            <span className="text-xs sm:text-sm text-[#8A9388] line-through">
              ₹{product.originalPrice}
            </span>
          </div>

          <div>
            <button
              onClick={() => onAddToCart(product.id)}
              className="w-full bg-[#86C33A] hover:bg-[#6AA326] text-white py-2.5 px-4 rounded-xl font-bold text-sm shadow-xs hover:shadow-md transition-all duration-200 flex items-center justify-center gap-2 active:scale-98"
            >
              <ShoppingCart className="w-4 h-4 text-white" />
              <span className="text-white">Add to Cart</span>
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}
