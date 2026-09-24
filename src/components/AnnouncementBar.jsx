import React from 'react';
import { Flame, Sparkles } from 'lucide-react';

export default function AnnouncementBar() {
  return (
    <div className="bg-[#86C33A] text-white text-xs md:text-sm py-2.5 px-4 font-medium tracking-wide flex items-center justify-center gap-2 relative z-50 border-b border-[#1B2F0A]/30">
      <span className="flex items-center gap-1.5 font-bold text-white">
        <Flame className="w-4 h-4 fill-white text-white animate-pulse" />
        FREE SHIPPING
      </span>
      <span className="text-white/60">|</span>
      <span>ON ORDERS ABOVE ₹499 • USE CODE <strong className="text-white font-bold tracking-wider bg-black/20 px-1.5 py-0.5 rounded-full border border-white/40">GOMZI10</strong> FOR 10% OFF</span>
      <Sparkles className="w-3.5 h-3.5 text-white hidden sm:inline-block ml-1" />
    </div>
  );
}
