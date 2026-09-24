import React, { useState } from 'react';
import { Check, Sparkles, Shield, Leaf, HeartPulse, Zap } from 'lucide-react';

export default function IngredientsBreakdown() {
  const [selectedProduct, setSelectedProduct] = useState('tea');

  const productData = {
    tea: {
      title: "Instant Spiced Tea (Masala Chai)",
      subtitle: "What goes into every cup of Gomzi Protein Tea?",
      heroStat: "5g Bio-Available Protein + 4 Fresh Spices",
      items: [
        {
          name: "Micro-Filtered Whey Protein Isolate",
          dose: "5.0g per 14g sachet",
          purpose: "Fast-absorbing, ultra-clean protein without dairy heaviness or digestive bloating."
        },
        {
          name: "Fresh Crushed Green Cardamom & Ginger",
          dose: "Authentic Whole Spice Extracts",
          purpose: "Aids gastric digestion, elevates metabolic fire (Agni), and delivers signature royal flavor."
        },
        {
          name: "Ceylon Cinnamon & Clove Buds",
          dose: "Antioxidant Polyphenols (140mg)",
          purpose: "Natural glucose regulation, anti-inflammatory support, and soothing warming aroma."
        },
        {
          name: "Pure Stevia Leaf & 0g Added Sugar",
          dose: "0.0g Cane Sugar",
          purpose: "Zero glycemic spikes. Naturally sweet without artificial chemical sweeteners like Aspartame or Sucralose."
        }
      ]
    },
    coffee: {
      title: "Instant Mocha Coffee",
      subtitle: "What powers every sip of Gomzi Mocha?",
      heroStat: "5g Bio-Available Protein + 100% Arabica",
      items: [
        {
          name: "Premium Micro-Ground Arabica Beans",
          dose: "75mg Natural Caffeine",
          purpose: "Smooth, crash-free focus and mental alertness without afternoon jitters."
        },
        {
          name: "Whey Protein Isolate (Cold Processed)",
          dose: "5.0g per 14g sachet",
          purpose: "Maintains positive nitrogen balance and repairs active muscle tissue throughout the workday."
        },
        {
          name: "Dutch Processed Organic Cocoa Powder",
          dose: "Rich Flavonoids",
          purpose: "Indulgent gourmet mocha aroma with natural theobromine for elevated mood and blood flow."
        },
        {
          name: "Zero Artificial Emulsifiers",
          dose: "Clean Label Formula",
          purpose: "Blends seamlessly in warm water or milk within 15 seconds without clumps or residues."
        }
      ]
    },
    atta: {
      title: "Multi Grain Atta with Protein",
      subtitle: "What makes Gomzi Atta 3x superior to ordinary wheat flour?",
      heroStat: "28g Protein + 14.5g Dietary Fibre per 100g",
      items: [
        {
          name: "Sharbati Whole Wheat Grain",
          dose: "Unpolished Stone Ground",
          purpose: "Golden grain retaining natural wheat germ and endosperm for ultra-soft, fluffy, puffed rotis."
        },
        {
          name: "Roasted Bengal Gram (Chana Dal) & Oats",
          dose: "Complex Carbohydrates",
          purpose: "Lowers Glycemic Index (GI), preventing sugar spikes after meals while keeping you full for 4+ hours."
        },
        {
          name: "Plant & Whey Protein Enrichment",
          dose: "28.0g Protein / 100g",
          purpose: "Delivers complete amino acid profile in traditional staple food, meeting family daily protein targets effortlessly."
        },
        {
          name: "Flaxseed Meal & Psyllium Husk",
          dose: "14.5g Soluble & Insoluble Fibre",
          purpose: "Optimizes gut microbiome health, smooth bowel motility, and long-lasting softness in rotis."
        }
      ]
    }
  };

  const active = productData[selectedProduct];

  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* What's Inside Every Sip & Bite */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <span className="inline-block rounded-full border border-[#86C33A]/35 bg-white text-[11px] font-bold uppercase tracking-[0.18em] text-[#86C33A] px-3 py-1">
            Formulation Breakdown
          </span>
          <h3 className="font-display text-2xl sm:text-4xl font-normal text-[#101F18] mt-3">
            What's inside every sip and bite?
          </h3>
          <p className="text-[#5A5A52] text-xs sm:text-base mt-2">
            Click to inspect the exact ingredients and functional purposes behind each recipe.
          </p>
        </div>

        {/* Tab Switcher - Fully Responsive */}
        <div className="flex justify-center mb-8 sm:mb-10 px-2">
          <div className="flex flex-wrap sm:flex-nowrap justify-center p-1 sm:p-1.5 bg-[#FFFFFF] rounded-2xl border border-[#DDE8C2] gap-1.5 sm:gap-2 max-w-full">
            <button
              onClick={() => setSelectedProduct('tea')}
              className={`px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all text-center whitespace-nowrap flex-1 sm:flex-initial ${
                selectedProduct === 'tea'
                  ? 'bg-[#86C33A] text-white shadow-xs'
                  : 'text-[#5A5A52] hover:text-black hover:bg-[#F9FBF4]'
              }`}
            >
              Instant Spiced Tea
            </button>
            <button
              onClick={() => setSelectedProduct('coffee')}
              className={`px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all text-center whitespace-nowrap flex-1 sm:flex-initial ${
                selectedProduct === 'coffee'
                  ? 'bg-[#86C33A] text-white shadow-xs'
                  : 'text-[#5A5A52] hover:text-black hover:bg-[#F9FBF4]'
              }`}
            >
              Instant Mocha Coffee
            </button>
            <button
              onClick={() => setSelectedProduct('atta')}
              className={`px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all text-center whitespace-nowrap flex-1 sm:flex-initial ${
                selectedProduct === 'atta'
                  ? 'bg-[#86C33A] text-white shadow-xs'
                  : 'text-[#5A5A52] hover:text-black hover:bg-[#F9FBF4]'
              }`}
            >
              Multi Grain Atta
            </button>
          </div>
        </div>

        {/* Interactive Breakdown Grid */}
        <div className="bg-[#EDF5DC] p-4 sm:p-8 lg:p-10 rounded-2xl border border-[#DDE8C2]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-6 sm:mb-8 pb-5 sm:pb-6 border-b border-[#DDE8C2]">
            <div>
              <h4 className="font-display text-xl sm:text-2xl font-semibold text-[#101F18]">{active.title}</h4>
              <p className="text-xs sm:text-sm text-[#8A9388] mt-0.5">{active.subtitle}</p>
            </div>
            <div className="inline-flex items-center gap-2 bg-[#EFF6DD] text-[#3F6116] border border-[#86C33A]/40 rounded-full px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-bold self-start sm:self-auto">
              <Sparkles className="w-4 h-4 flex-shrink-0" />
              <span>{active.heroStat}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {active.items.map((item, index) => (
              <div
                key={index}
                className="bg-white p-4 sm:p-6 rounded-2xl border border-[#DDE8C2] hover:shadow-sm transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                    <span className="font-display text-base font-semibold text-[#101F18] leading-snug">{item.name}</span>
                    <span className="inline-flex items-center text-[11px] font-bold bg-[#EFF6DD] text-[#3F6116] border border-[#86C33A]/30 rounded-full px-2.5 py-0.5 self-start sm:self-auto sm:whitespace-nowrap flex-shrink-0">
                      {item.dose}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#5A5A52] mt-2.5 sm:mt-3 leading-relaxed">
                    {item.purpose}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
