import React from 'react';
import { ShieldCheck, Award, FlaskConical, Headphones, Truck } from 'lucide-react';

export default function TrustBar() {
  const trustItems = [
    {
      icon: ShieldCheck,
      title: "FSSAI Licensed",
      subtitle: "100% Food Safety Approved"
    },
    {
      icon: Award,
      title: "GMP Certified",
      subtitle: "Highest Manufacturing Standards"
    },
    {
      icon: FlaskConical,
      title: "Lab Tested",
      subtitle: "Verified Purity & Potency"
    },
    {
      icon: Headphones,
      title: "Personalized Support",
      subtitle: "Direct Nutrition Guidance"
    },
    {
      icon: Truck,
      title: "Pan India Delivery",
      subtitle: "Dispatched within 24 Hours"
    }
  ];

  return (
    <div className="bg-[#F9FBF4] py-6 border-b border-[#DDE8C2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-6 divide-x-0 lg:divide-x lg:divide-[#DDE8C2]">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`flex items-center gap-2.5 sm:gap-3.5 p-2 lg:px-5 first:lg:pl-0 group hover:-translate-y-0.5 transition-all duration-200 cursor-default ${
                  index === 4 ? 'col-span-2 md:col-span-1 justify-center md:justify-start' : ''
                }`}
              >
                <div className="w-10 h-10 rounded-xl border border-[#86C33A]/40 bg-white group-hover:bg-[#86C33A] group-hover:border-[#86C33A] group-hover:text-white flex items-center justify-center flex-shrink-0 text-[#6AA326] transition-all duration-200 shadow-2xs group-hover:shadow-xs group-hover:scale-105">
                  <Icon className="w-5 h-5 stroke-[1.8] transition-transform duration-200" />
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-bold text-[#1B2F0A] group-hover:text-[#6AA326] tracking-wide truncate transition-colors">
                    {item.title}
                  </div>
                  <div className="text-[11px] text-[#8A9388] truncate">
                    {item.subtitle}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
