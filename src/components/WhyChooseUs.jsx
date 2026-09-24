import React from 'react';
import { Check, ExternalLink, Instagram, Sparkles } from 'lucide-react';

export default function WhyChooseUs({ onExploreStory }) {
  const points = [
    "15+ Years of Industry & Nutrition Experience",
    "Developed by Food Technologists & Health Educators",
    "Science-Backed Functional Daily Formulations",
    "100% Transparent Ingredients – No Hidden Additives",
    "No Amino Spiking, Zero Cane Sugar & Zero Preservatives",
    "Trusted by Coaches, Dietitians & Over 50,000+ Indian Families"
  ];

  return (
    <section id="about-us" className="py-20 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Heading, Text, Checkmarks, Buttons */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="inline-block mb-3 rounded-full border border-[#86C33A]/35 bg-white text-[11px] font-bold uppercase tracking-[0.18em] text-[#86C33A] px-3 py-1">
                Our Commitment to Purity
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1B2F0A] tracking-tight leading-tight">
                Why <span className="italic-display text-[#86C33A]">Gomzi</span> Lifesciences?
              </h2>
            </div>

            <p className="text-[#5A5A52] text-base sm:text-lg leading-relaxed">
              Gomzi Lifesciences is built on the legacy of Gomzi and years of real-world expertise in health and fitness education. We believe daily wellness shouldn't require compromising on authentic Indian tastes.
            </p>

            {/* Checklist */}
            <div className="space-y-3.5 pt-2">
              {points.map((pt, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-xl bg-white border border-[#86C33A]/40 flex items-center justify-center flex-shrink-0 mt-0.5 text-[#86C33A]">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="text-sm sm:text-base font-medium text-[#3A3A34]">
                    {pt}
                  </span>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={onExploreStory}
                className="inline-flex items-center gap-2 bg-[#86C33A] hover:bg-[#6AA326] text-white px-6 py-3.5 rounded-xl font-bold text-sm transition-all duration-200 shadow-xs"
              >
                <ExternalLink className="w-4 h-4" />
                Explore Our Story
              </button>

              <a
                href="https://instagram.com/gomzilifesciences"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white hover:bg-[#EDF5DC] text-[#1B2F0A] border border-[#1B2F0A]/40 hover:border-[#1B2F0A] px-6 py-3.5 rounded-xl font-bold text-sm transition-all duration-200"
              >
                <Instagram className="w-4 h-4 text-[#86C33A]" />
                Open Founder Profile
              </a>
            </div>

          </div>

          {/* Right Column: Lifestyle Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">

              {/* Framed editorial image */}
              <div className="rounded-2xl border border-[#DDE8C2] bg-[#EDF5DC] p-2">
                <img
                  src="/images/why-gomzi-lifestyle.jpg"
                  alt="Daily wholesome nutrition with tea, mocha and protein rotis"
                  className="w-full h-[450px] object-cover hover:scale-[1.02] transition-transform duration-700"
                  loading="lazy"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 sm:bottom-6 sm:-left-6 bg-white p-4 rounded-2xl border border-[#DDE8C2] shadow-sm max-w-xs flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl border border-[#86C33A]/50 bg-[#EFF6DD] flex items-center justify-center text-[#6AA326] flex-shrink-0">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-[#8A9388] uppercase tracking-wide">Daily Habit Transformation</div>
                  <div className="text-sm font-extrabold text-[#1B2F0A] font-display">5g Protein in Every Cup & 28% in Rotis</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
