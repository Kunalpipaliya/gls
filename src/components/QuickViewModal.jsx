import React, { useState } from 'react';
import { X, Star, ShoppingCart, Check, ShieldCheck, Sparkles, AlertCircle } from 'lucide-react';

export default function QuickViewModal({ product, isOpen, onClose, onAddToCart }) {
  if (!isOpen || !product) return null;

  const [selectedSize, setSelectedSize] = useState(product.sizes ? product.sizes[0] : null);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'nutrition' | 'ingredients'
  const [addedToast, setAddedToast] = useState(false);

  const handleAdd = () => {
    onAddToCart(product.id, quantity, selectedSize);
    setAddedToast(true);
    setTimeout(() => {
      setAddedToast(false);
      onClose();
    }, 1200);
  };

  const currentPrice = selectedSize ? selectedSize.price : product.price;
  const currentOriginal = selectedSize ? selectedSize.original : product.originalPrice;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity animate-fadeIn"
      />

      <div className="flex min-h-full items-center justify-center p-3 sm:p-4">
        <div className="relative w-full max-w-3xl bg-white shadow-sm overflow-hidden rounded-2xl border border-[#DDE8C2] animate-scaleUp max-h-[90vh] overflow-y-auto">
          
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 p-1.5 sm:p-2 text-[#8A9388] hover:text-black bg-white rounded-xl sm:rounded-2xl border border-[#DDE8C2] hover:bg-[#EDF5DC] transition-colors"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-4 sm:p-8">
            
            {/* Left Image Area */}
            <div className="md:col-span-5 flex flex-col items-center justify-center bg-[#EDF5DC] texture-botanical p-6 rounded-2xl border border-[#DDE8C2] relative">
              <span className="absolute top-3 left-3 bg-[#86C33A] text-white text-[11px] font-bold rounded-full px-2.5 py-1 shadow-xs">
                {product.discount}
              </span>
              <img
                src={product.image}
                alt={product.name}
                className="max-h-72 w-auto object-contain drop-shadow-xl"
              />
              <div className="mt-4 flex items-center gap-2 text-xs font-bold text-[#86C33A] bg-white border border-[#A6CE62] rounded-full px-3 py-1">
                <ShieldCheck className="w-4 h-4" />
                <span>NABL Lab Verified Pure</span>
              </div>
            </div>

            {/* Right Product Details Area */}
            <div className="md:col-span-7 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-[#86C33A] uppercase tracking-wider">
                  {product.category}
                </span>

                <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#101F18] mt-1">
                  {product.name}
                </h2>

                <div className="flex items-center gap-2 mt-2">
                  <div className="flex items-center text-[#FFB800]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#FFB800] text-[#FFB800]" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-[#5A5A52]">
                    {product.rating} ({product.reviewsCount} customer reviews)
                  </span>
                </div>

                {/* Price Display */}
                <div className="flex items-baseline gap-3 mt-4">
                  <span className="font-display text-3xl font-semibold text-[#101F18]">
                    ₹{currentPrice}
                  </span>
                  <span className="text-sm text-[#8A9388] line-through">
                    ₹{currentOriginal}
                  </span>
                  <span className="text-xs font-bold text-[#3F6116] bg-[#EFF6DD] border border-[#86C33A]/30 rounded-full px-2 py-0.5">
                    Save ₹{currentOriginal - currentPrice}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#5A5A52] mt-3 leading-relaxed">
                  {product.shortDesc}
                </p>

                {/* Pack Size Selector */}
                {product.sizes && (
                  <div className="mt-5">
                    <label className="text-xs font-bold text-[#5A5A52] uppercase tracking-wide block mb-2">
                      Select Size / Pack:
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {product.sizes.map((s, idx) => (
                        <button
                          key={idx}
                          onClick={() => setSelectedSize(s)}
                          className={`px-3 py-2 rounded-xl text-xs font-bold border transition-all ${
                            selectedSize?.label === s.label
                              ? 'border-[#86C33A] bg-[#EDF5DC] text-[#86C33A]'
                              : 'border-[#DDE8C2] text-[#5A5A52] hover:border-[#8A9388]'
                          }`}
                        >
                          {s.label} - ₹{s.price}
                          {s.bestValue && (
                            <span className="ml-1 text-[9px] bg-[#86C33A] text-white px-1.5 py-0.2 uppercase font-bold rounded-xs">
                              Value
                            </span>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Key Nutrition Badges */}
                <div className="grid grid-cols-2 gap-2 mt-4 text-xs">
                  <div className="bg-[#FFFFFF] p-2 rounded-2xl border border-[#DDE8C2]">
                    <span className="text-[#8A9388] block text-[10px]">Protein Content</span>
                    <span className="font-bold text-[#86C33A]">{product.proteinPerServing}</span>
                  </div>
                  <div className="bg-[#FFFFFF] p-2 rounded-2xl border border-[#DDE8C2]">
                    <span className="text-[#8A9388] block text-[10px]">Net Quantity</span>
                    <span className="font-bold text-[#101F18]">{product.netWeight}</span>
                  </div>
                </div>

              </div>

              {/* Quantity and Add to Cart Button */}
              <div className="mt-6 pt-4 border-t border-[#DDE8C2] flex items-center gap-4">
                <div className="flex items-center rounded-2xl border border-[#DDE8C2] px-3 py-2 bg-white">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="text-[#8A9388] hover:text-black font-extrabold text-sm px-1.5"
                  >
                    -
                  </button>
                  <span className="font-bold text-sm w-6 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="text-[#8A9388] hover:text-black font-extrabold text-sm px-1.5"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={handleAdd}
                  className="flex-1 bg-[#86C33A] hover:bg-[#6AA326] text-white py-3.5 px-6 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-xs"
                >
                  {addedToast ? (
                    <>
                      <Check className="w-5 h-5 text-white" />
                      <span>Added to Cart!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="w-5 h-5 text-white" />
                      <span>Add to Cart • ₹{currentPrice * quantity}</span>
                    </>
                  )}
                </button>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
