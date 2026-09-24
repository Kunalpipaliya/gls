import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, ShieldCheck, Tag, Check } from 'lucide-react';

export default function CartDrawer({ isOpen, onClose, cart, onUpdateQuantity, onRemove, onClear }) {
  const [couponCode, setCouponCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState(0);
  const [couponError, setCouponError] = useState('');
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutComplete, setCheckoutComplete] = useState(false);

  if (!isOpen) return null;

  const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const discountAmount = Math.round(subtotal * appliedDiscount);
  const shipping = subtotal >= 499 || subtotal === 0 ? 0 : 60;
  const grandTotal = Math.max(0, subtotal - discountAmount + shipping);
  const freeShippingThreshold = 499;
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const progressPercent = Math.min(100, (subtotal / freeShippingThreshold) * 100);

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    setCouponError('');
    if (couponCode.trim().toUpperCase() === 'GOMZI10') {
      setAppliedDiscount(0.10);
    } else if (couponCode.trim().toUpperCase() === 'WELLNESS20') {
      setAppliedDiscount(0.20);
    } else {
      setCouponError('Invalid coupon code. Try GOMZI10');
    }
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setCheckoutComplete(true);
      setTimeout(() => {
        onClear();
        setCheckoutComplete(false);
        onClose();
      }, 2500);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity animate-fadeIn"
      />

      <div className="fixed inset-y-0 right-0 w-full sm:max-w-md flex pl-0 sm:pl-10">
        <div className="w-full bg-white shadow-2xl flex flex-col justify-between h-full">
          
          {/* Header */}
          <div className="p-4 sm:p-6 border-b border-[#DDE8C2] flex items-center justify-between bg-[#FFFFFF]">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-[#86C33A]" />
              <h2 className="font-display text-lg font-semibold text-[#101F18]">Your Shopping Cart</h2>
              <span className="bg-[#86C33A] text-white text-xs font-bold rounded-full px-2 py-0.5 shadow-xs">
                {cart.reduce((total, i) => total + i.quantity, 0)}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-[#8A9388] hover:text-black bg-white rounded-2xl border border-[#DDE8C2] hover:bg-[#EDF5DC] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Meter */}
          <div className="bg-[#EDF5DC] px-4 sm:px-6 py-2.5 sm:py-3 border-b border-[#DDE8C2]">
            <div className="flex justify-between text-xs font-bold mb-1.5">
              {remainingForFreeShipping > 0 ? (
                <span className="text-[#5A5A52]">
                  Add <strong className="text-[#86C33A]">₹{remainingForFreeShipping}</strong> more for <strong>FREE Shipping</strong>!
                </span>
              ) : (
                <span className="text-[#86C33A] font-extrabold flex items-center gap-1">
                  <Check className="w-3.5 h-3.5 stroke-[3]" /> You have unlocked FREE Shipping!
                </span>
              )}
            </div>
            <div className="w-full bg-[#DDE8C2] h-2 overflow-hidden rounded-full">
              <div 
                className="bg-[#86C33A] h-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-3 sm:space-y-4">
            {cart.length === 0 ? (
              <div className="text-center py-16 space-y-3">
                <ShoppingBag className="w-16 h-16 text-[#D8D4C8] mx-auto stroke-1" />
                <h3 className="font-display text-lg font-semibold text-[#5A5A52]">Your cart is empty</h3>
                <p className="text-xs text-[#8A9388] max-w-xs mx-auto">
                  Looks like you haven't added any of our delicious functional beverages or multi-grain atta yet.
                </p>
                <button
                  onClick={onClose}
                  className="mt-4 bg-[#86C33A] text-white text-xs font-bold px-5 py-2.5 rounded-xl hover:bg-[#6AA326] transition-colors shadow-xs"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div 
                  key={item.product.id}
                  className="flex gap-3 sm:gap-4 p-3 bg-[#FFFFFF] rounded-2xl border border-[#DDE8C2] hover:border-[#86C33A]/40 transition-colors"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-14 h-14 sm:w-16 sm:h-16 object-contain bg-white p-1 rounded-xl sm:rounded-2xl border border-[#DDE8C2] flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs sm:text-sm font-bold text-[#101F18] truncate">
                      {item.product.name}
                    </h4>
                    <div className="text-[11px] sm:text-xs text-[#86C33A] font-semibold mt-0.5">
                      {item.product.proteinPerServing}
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs sm:text-sm font-extrabold text-[#101F18]">
                        ₹{item.product.price}
                      </span>
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-1.5 sm:gap-2 bg-white rounded-xl sm:rounded-2xl border border-[#DDE8C2] px-2 py-0.5">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                          className="text-[#8A9388] hover:text-black font-bold px-1 text-xs sm:text-sm"
                          aria-label="Decrease quantity"
                        >
                          -
                        </button>
                        <span className="text-xs font-bold min-w-4 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                          className="text-[#8A9388] hover:text-black font-bold px-1 text-xs sm:text-sm"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => onRemove(item.product.id)}
                    className="text-gray-400 hover:text-red-500 p-1 self-start transition-colors"
                    title="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout Area */}
          {cart.length > 0 && (
            <div className="p-4 sm:p-6 border-t border-[#DDE8C2] bg-[#FFFFFF] space-y-3 sm:space-y-4">
              
              {/* Coupon Form */}
              <form onSubmit={handleApplyCoupon} className="flex gap-2">
                <div className="relative flex-1">
                  <Tag className="w-4 h-4 absolute left-3 top-3 text-[#8A9388]" />
                  <input
                    type="text"
                    placeholder="Coupon: GOMZI10"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 bg-white rounded-2xl border border-[#DDE8C2] text-xs uppercase font-bold focus:outline-hidden focus:border-[#86C33A]"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[#86C33A] hover:bg-[#6AA326] text-white text-xs font-bold px-4 py-2 rounded-xl transition-colors shadow-xs"
                >
                  Apply
                </button>
              </form>
              {couponError && <p className="text-[11px] text-red-500 font-semibold">{couponError}</p>}
              {appliedDiscount > 0 && (
                <p className="text-[11px] text-[#86C33A] font-bold">✓ {appliedDiscount * 100}% Discount Applied!</p>
              )}

              {/* Order Calculations */}
              <div className="space-y-1.5 text-xs text-[#5A5A52]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-[#101F18]">₹{subtotal}</span>
                </div>
                {appliedDiscount > 0 && (
                  <div className="flex justify-between text-[#86C33A] font-bold">
                    <span>Discount</span>
                    <span>-₹{discountAmount}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? <strong className="text-[#86C33A]">FREE</strong> : `₹${shipping}`}</span>
                </div>
                <div className="flex justify-between text-base font-bold text-[#101F18] pt-2 border-t border-[#DDE8C2]">
                  <span>Grand Total</span>
                  <span>₹{grandTotal}</span>
                </div>
              </div>

              {/* Checkout Button */}
              {checkoutComplete ? (
                <div className="bg-[#86C33A] text-white py-3.5 font-bold text-center text-sm animate-pulse flex items-center justify-center gap-2 shadow-xs">
                  <Check className="w-5 h-5" />
                  Order Placed Successfully!
                </div>
              ) : (
                <button
                  onClick={handleCheckout}
                  disabled={isCheckingOut}
                  className="w-full bg-[#86C33A] hover:bg-[#6AA326] text-white py-3.5 rounded-xl font-bold text-sm tracking-wide transition-all flex items-center justify-center gap-2 shadow-xs"
                >
                  {isCheckingOut ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <span>Proceed to Checkout</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              )}

              <div className="flex items-center justify-center gap-2 text-[11px] text-[#8A9388] pt-1">
                <ShieldCheck className="w-4 h-4 text-[#86C33A]" />
                <span>100% Safe & Secure Checkout • Free Returns</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
