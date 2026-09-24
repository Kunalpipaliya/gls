import React, { useState } from 'react';
import { ShoppingCart, Download, CheckCircle2, Leaf, Star, ShieldCheck, ArrowRight } from 'lucide-react';

export default function HeroSection({ onShopNow, onDownloadBrochure, onSelectProduct, onAddToCart }) {
  // 0: Spiced Tea, 1: Mocha Coffee, 2: Multi Grain Atta
  const [activeProductIdx, setActiveProductIdx] = useState(1); // Default to Mocha Coffee center

  const heroProducts = [
    {
      id: "spiced-tea",
      name: "Instant Spiced Tea",
      badge: "Masala Chai Made Better",
      protein: "5g Protein / Sachet",
      image: "/products/tea-480.webp",
      tagline: "Natural Ginger, Cardamom & Pure Protein",
      price: 379,
      originalPrice: 499,
      accentColor: "#86C33A",
      features: ["Real Crushed Spices", "No Added Sugar", "Instant 30s Prep"]
    },
    {
      id: "mocha-coffee",
      name: "Instant Mocha Coffee",
      badge: "Apex Vitals • Best Seller",
      protein: "5g Protein / Sachet",
      image: "/products/mocha.webp",
      tagline: "Arabica Roast, Rich Dutch Cocoa & Clean Protein",
      price: 399,
      originalPrice: 499,
      accentColor: "#86C33A",
      features: ["100% Arabica Coffee", "Zero Sugar Crash", "Apex Vitals Formula"]
    },
    {
      id: "multigrain-atta",
      name: "Multi Grain Atta with Protein",
      badge: "Wholesome Daily Nutrition",
      protein: "28g Protein / 100g",
      image: "/products/atta-480.webp",
      tagline: "Goodness of Protein & Fibre in Every Roti",
      price: 249,
      originalPrice: 329,
      accentColor: "#86C33A",
      features: ["Soft & Puffed Rotis", "High Dietary Fibre", "Low Glycemic Index"]
    }
  ];

  const currentHeroProduct = heroProducts[activeProductIdx];

  const certifications = [
    { 
      name: "fssai", 
      label: "FSSAI", 
      file: "https://www.gomzilifesciences.in/assets/images/third-party-manufacturing/fassai.webp",
      localFile: "/certifications/fssai.webp",
      isWide: true 
    },
    { 
      name: "iso", 
      label: "ISO 22000", 
      file: "https://www.gomzilifesciences.in/assets/images/third-party-manufacturing/iso.webp",
      localFile: "/certifications/iso.webp" 
    },
    { 
      name: "gmp", 
      label: "GMP Quality", 
      file: "https://www.gomzilifesciences.in/assets/images/third-party-manufacturing/gmp.webp",
      localFile: "/certifications/gmp.webp" 
    },
    { 
      name: "kosher", 
      label: "Kosher", 
      file: "https://www.gomzilifesciences.in/assets/images/third-party-manufacturing/kosher.webp",
      localFile: "/certifications/kosher.webp" 
    },
    { 
      name: "haccp", 
      label: "HACCP Food Safety", 
      file: "https://www.gomzilifesciences.in/assets/images/third-party-manufacturing/haccp.webp",
      localFile: "/certifications/haccp.webp" 
    },
    { 
      name: "halal", 
      label: "Halal Certified", 
      file: "https://www.gomzilifesciences.in/assets/images/third-party-manufacturing/halal.webp",
      localFile: "/certifications/halal.webp" 
    },
    { 
      name: "fda", 
      label: "FDA Registered", 
      file: "https://www.gomzilifesciences.in/assets/images/third-party-manufacturing/FDA-logo.webp",
      localFile: "/certifications/fda.webp" 
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FFFFFF] via-[#F9FBF4] to-[#EFE9DC] pt-10 pb-16 lg:py-16 border-b border-[#DDE8C2]">

      {/* Botanical glow */}
      <div className="absolute -top-24 right-0 w-[560px] h-[560px] bg-[#A6CE62]/40 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 -left-24 w-[420px] h-[420px] bg-[#D8EEAA]/30 rounded-full blur-3xl pointer-events-none"></div>

      {/* Fine botanical dot texture */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[radial-gradient(#1B2F0A_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Headlines, Pitch, CTAs, Certifications */}
          <div className="lg:col-span-6 space-y-6 text-left">

            {/* Top eyebrow badge */}
            <div className="inline-flex items-center gap-2.5 border border-[#86C33A]/30 bg-white px-4 py-2 rounded-xl">
              <Leaf className="w-4 h-4 text-[#86C33A]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#86C33A]">
                Pure Tea • Coffee • Nutrition
              </span>
            </div>

            {/* Main Headline */}
            <div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#1B2F0A] leading-[1.05]">
                Goodness that
                <span className="italic-display text-[#86C33A] block">begins in the garden,</span>
                <span className="block">not in a lab.</span>
              </h1>

              <p className="mt-4 text-base sm:text-lg font-semibold text-[#6AA326]">
                5g Protein Tea & Mocha • 28% Protein Atta • 100% Transparent Label
              </p>
            </div>

            {/* Value bullets */}
            <p className="text-[15px] text-[#5A5A52] max-w-xl leading-relaxed">
              Elevate your daily routine with Gomzi Lifesciences. Start the morning with a <strong className="text-[#1B2F0A] font-bold">5g Protein Spiced Tea or Mocha Coffee</strong>, and nourish the family with <strong className="text-[#1B2F0A] font-bold">High-Protein Multi Grain Atta</strong>. No amino spiking, no preservatives—just honest, wholesome food.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
              <button
                onClick={onShopNow}
                id="hero-shop-now-btn"
                className="inline-flex items-center justify-center gap-2.5 bg-[#86C33A] hover:bg-[#6AA326] text-white px-7 py-3 sm:py-3.5 rounded-xl font-bold text-sm sm:text-base transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 shadow-sm"
              >
                <ShoppingCart className="w-5 h-5 text-white" />
                <span>Shop Now</span>
              </button>

              <button
                onClick={onDownloadBrochure}
                id="hero-download-brochure-btn"
                className="inline-flex items-center justify-center gap-2.5 bg-transparent hover:bg-white text-[#1B2F0A] border border-[#1B2F0A]/40 hover:border-[#1B2F0A] px-6 py-3 sm:py-3.5 rounded-xl font-bold text-sm sm:text-base transition-all duration-200"
              >
                <Download className="w-5 h-5" />
                <span>Download Brochure</span>
              </button>
            </div>

            {/* Certification Badges Row */}
            <div className="pt-6 border-t border-[#DDE8C2]">
              <div className="text-[11px] font-bold text-[#8A9388] uppercase tracking-[0.14em] mb-3">
                Certified Quality &amp; Laboratory Tested Standards
              </div>
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-4">
                {certifications.map((cert) => (
                  <div
                    key={cert.name}
                    className="h-9 sm:h-11 flex items-center justify-center p-1 bg-white rounded-xl sm:rounded-2xl border border-[#DDE8C2] hover:scale-105 hover:border-[#86C33A]/50 transition-all duration-150"
                    title={cert.label}
                  >
                    <img
                      src={cert.file}
                      alt={cert.label}
                      onError={(e) => {
                        if (cert.localFile && e.target.src !== cert.localFile) {
                          e.target.onerror = null;
                          e.target.src = cert.localFile;
                        }
                      }}
                      className={`h-full object-contain ${cert.isWide ? 'w-16 sm:w-20 px-1' : 'w-8 sm:w-10'}`}
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: 3 Products Interactive Showcase */}
          <div className="lg:col-span-6 relative">

            {/* Editorial Frame Card */}
            <div className="relative rounded-2xl border border-[#DDE8C2] bg-[#FFFFFF]/90 p-4 sm:p-8 shadow-sm">

              {/* Fine corner serif index */}
              <span className="absolute -top-3 left-4 bg-[#FFFFFF] px-2 font-display italic text-xs text-[#8A9388]">No. 01</span>

              {/* Product Switcher Tabs (underline style) */}
              <div className="flex items-center justify-between sm:justify-start gap-3 sm:gap-5 border-b border-[#DDE8C2] mb-4 sm:mb-6 overflow-x-auto scrollbar-none">
                {heroProducts.map((p, idx) => (
                  <button
                    key={p.id}
                    onClick={() => setActiveProductIdx(idx)}
                    className={`pb-2.5 -mb-px text-xs sm:text-sm font-bold transition-all duration-200 border-b-2 whitespace-nowrap ${
                      activeProductIdx === idx
                        ? 'border-[#86C33A] text-[#1B2F0A]'
                        : 'border-transparent text-[#8A9388] hover:text-[#1B2F0A]'
                    }`}
                  >
                    {p.name.replace('Instant ', '').replace(' with Protein', '')}
                  </button>
                ))}
              </div>

              {/* 3-Product Hero Lineup Display */}
              <div className="relative h-[270px] sm:h-[360px] flex items-end justify-center mb-4 texture-botanical overflow-hidden sm:overflow-visible">

                {/* Product 0: Spiced Tea (Left) */}
                <div
                  onClick={() => setActiveProductIdx(0)}
                  className={`absolute left-0 bottom-3 sm:bottom-4 cursor-pointer transition-all duration-500 transform ${
                    activeProductIdx === 0
                      ? 'z-30 scale-105 sm:scale-110 translate-x-4 sm:translate-x-12 translate-y-[-6px] sm:translate-y-[-10px]'
                      : 'z-10 scale-85 sm:scale-90 opacity-75 hover:opacity-100 hover:scale-95'
                  }`}
                >
                  <div className="relative group">
                    <img
                      src="/products/tea-480.webp"
                      alt="Instant Spiced Tea"
                      className="w-32 sm:w-48 h-auto object-contain drop-shadow-xl group-hover:rotate-1 transition-transform"
                    />
                    <div className="absolute -top-2 left-2 bg-[#86C33A] text-white text-[9px] sm:text-[10px] font-bold rounded-full px-2 py-0.5 border border-[#86C33A]/60 shadow-xs">
                      5g Protein
                    </div>
                  </div>
                </div>

                {/* Product 1: Mocha Coffee (Center / Front) */}
                <div
                  onClick={() => setActiveProductIdx(1)}
                  className={`absolute bottom-2 cursor-pointer transition-all duration-500 transform ${
                    activeProductIdx === 1
                      ? 'z-30 scale-105 sm:scale-115 translate-y-[-8px] sm:translate-y-[-12px]'
                      : 'z-20 scale-90 sm:scale-95 opacity-85 hover:opacity-100 hover:scale-100'
                  }`}
                >
                  <div className="relative group">
                    <img
                      src="/products/mocha.webp"
                      alt="Instant Mocha Coffee"
                      className="w-36 sm:w-52 h-auto object-contain drop-shadow-2xl group-hover:-rotate-1 transition-transform"
                    />
                    <div className="absolute -top-2 right-2 bg-[#86C33A] text-white text-[9px] sm:text-[10px] font-bold rounded-full px-2 sm:px-2.5 py-0.5 shadow-xs">
                      Apex Vitals
                    </div>
                  </div>
                </div>

                {/* Product 2: Multi Grain Atta (Right) */}
                <div
                  onClick={() => setActiveProductIdx(2)}
                  className={`absolute right-0 bottom-3 sm:bottom-4 cursor-pointer transition-all duration-500 transform ${
                    activeProductIdx === 2
                      ? 'z-30 scale-105 sm:scale-110 -translate-x-4 sm:-translate-x-12 translate-y-[-6px] sm:translate-y-[-10px]'
                      : 'z-10 scale-85 sm:scale-90 opacity-75 hover:opacity-100 hover:scale-95'
                  }`}
                >
                  <div className="relative group">
                    <img
                      src="/products/atta-480.webp"
                      alt="Multi Grain Atta with Protein"
                      className="w-32 sm:w-48 h-auto object-contain drop-shadow-xl group-hover:rotate-1 transition-transform"
                    />
                    <div className="absolute -top-2 right-2 bg-[#86C33A] text-white text-[9px] sm:text-[10px] font-bold rounded-full px-2 py-0.5 shadow-xs">
                      28% Protein
                    </div>
                  </div>
                </div>

                {/* Glossy Floor Stage / Reflection Base */}
                <div className="absolute -bottom-2 w-full h-8 bg-gradient-to-t from-[#DDE8C2]/60 via-[#DDE8C2]/25 to-transparent blur-[2px] pointer-events-none"></div>
              </div>

              {/* Active Spotlight Details Banner */}
              <div className="rounded-2xl border border-[#DDE8C2] bg-white p-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-[11px] font-bold rounded-full px-2 py-0.5 border border-[#86C33A]/50 text-[#3F6116]">
                        {currentHeroProduct.badge}
                      </span>
                      <span className="text-[11px] font-bold text-[#86C33A] flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        {currentHeroProduct.protein}
                      </span>
                    </div>
                    <h3 className="font-display text-base sm:text-xl font-semibold text-[#1B2F0A] mt-1">
                      {currentHeroProduct.name}
                    </h3>
                    <p className="text-xs text-[#8A9388] mt-0.5 line-clamp-1">
                      {currentHeroProduct.tagline}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end flex-shrink-0">
                    <div className="text-left sm:text-right flex-shrink-0">
                      <span className="text-lg font-bold text-[#1B2F0A]">₹{currentHeroProduct.price}</span>
                      <span className="text-xs text-[#8A9388] line-through ml-1.5">₹{currentHeroProduct.originalPrice}</span>
                    </div>
                    <button
                      onClick={() => onAddToCart(currentHeroProduct.id)}
                      className="bg-[#86C33A] hover:bg-[#6AA326] text-white px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 whitespace-nowrap flex-shrink-0 shadow-xs hover:shadow-md transition-all active:scale-95"
                    >
                      <ShoppingCart className="w-4 h-4 text-white flex-shrink-0" />
                      <span className="text-white">Add to Cart</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Quick Feature Badges below */}
              <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                <div className="bg-white rounded-2xl border border-[#DDE8C2] p-2">
                  <div className="text-xs font-bold text-[#1B2F0A]">5g Bio-Protein</div>
                  <div className="text-[10px] text-[#8A9388]">In Every Sachet</div>
                </div>
                <div className="bg-white rounded-2xl border border-[#DDE8C2] p-2">
                  <div className="text-xs font-bold text-[#1B2F0A]">100% Real Grains</div>
                  <div className="text-[10px] text-[#8A9388]">Soft Puffed Rotis</div>
                </div>
                <div className="bg-white rounded-2xl border border-[#DDE8C2] p-2">
                  <div className="text-xs font-bold text-[#1B2F0A]">0g Cane Sugar</div>
                  <div className="text-[10px] text-[#8A9388]">Lab Certified Clean</div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
