import React from 'react';
import { Sparkles, ShieldCheck, Flame, Leaf, Award, CheckCircle2, Zap, Heart } from 'lucide-react';

export default function MarqueeBanner() {
  const items = [
    { icon: Leaf, label: '100% Clean Formulations' },
    { icon: Zap, label: '5g Bio-Available Protein Per Cup' },
    { icon: ShieldCheck, label: 'NABL Laboratory Verified Batches' },
    { icon: Sparkles, label: 'Zero Added Refined Sugars' },
    { icon: Award, label: 'ISO 22000 & GMP Certified' },
    { icon: Flame, label: 'Pure Ceylon Spices & Arabica Beans' },
    { icon: CheckCircle2, label: '28% Protein Multi Grain Atta' },
    { icon: Heart, label: 'Doctor & Nutritionist Evaluated' },
  ];

  return (
    <div className="py-4 bg-[#EDF5DC] border-y border-[#DDE8C2] overflow-hidden relative select-none">
      {/* Subtle fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#EDF5DC] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#EDF5DC] to-transparent z-10 pointer-events-none" />

      {/* Infinite scrolling track */}
      <div className="animate-marquee-infinite flex items-center gap-8 whitespace-nowrap">
        {/* Track duplicate 1 */}
        {items.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={`a-${idx}`}
              className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#1B2F0A] hover:text-[#6AA326] transition-colors"
            >
              <span className="w-7 h-7 rounded-full bg-white border border-[#DDE8C2] flex items-center justify-center text-[#86C33A] shadow-2xs">
                <Icon className="w-3.5 h-3.5 stroke-[2.5]" />
              </span>
              <span>{item.label}</span>
              <span className="text-[#86C33A] ml-4 font-black">•</span>
            </div>
          );
        })}

        {/* Track duplicate 2 for seamless loop */}
        {items.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={`b-${idx}`}
              className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#1B2F0A] hover:text-[#6AA326] transition-colors"
            >
              <span className="w-7 h-7 rounded-full bg-white border border-[#DDE8C2] flex items-center justify-center text-[#86C33A] shadow-2xs">
                <Icon className="w-3.5 h-3.5 stroke-[2.5]" />
              </span>
              <span>{item.label}</span>
              <span className="text-[#86C33A] ml-4 font-black">•</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
