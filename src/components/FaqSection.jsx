import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Minus } from 'lucide-react';
import { FAQS } from '../data/products';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0); // first item open by default

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faqs" className="py-20 bg-[#FFFFFF] border-t border-[#DDE8C2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column: Heading and Accordion List */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal text-[#101F18] tracking-tight leading-tight">
                Don't think twice, your body will thank you<span className="text-[#86C33A]">!</span>
              </h2>
              <p className="text-[#5A5A52] text-sm sm:text-base mt-4 leading-relaxed">
                Got questions? We've got answers. Everything you need to know about Gomzi Lifesciences functional foods and how they fuel your daily wellness journey.
              </p>
            </div>

            {/* Accordion */}
            <div className="space-y-4 pt-4 divide-y divide-[#DDE8C2]">
              {FAQS.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div key={index} className="pt-4 first:pt-0">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full flex items-center justify-between gap-4 text-left py-2 group focus:outline-hidden"
                      aria-expanded={isOpen}
                    >
                      <span className="font-display text-base sm:text-lg font-semibold text-[#101F18] group-hover:text-[#86C33A] transition-colors">
                        {faq.question}
                      </span>
                      <div className="w-8 h-8 rounded-2xl border border-[#DDE8C2] group-hover:bg-[#6AA326] group-hover:border-[#86C33A] group-hover:text-white flex items-center justify-center flex-shrink-0 text-[#101F18] bg-white transition-colors">
                        {isOpen ? (
                          <Minus className="w-4 h-4 stroke-[2.5]" />
                        ) : (
                          <Plus className="w-4 h-4 stroke-[2.5]" />
                        )}
                      </div>
                    </button>

                    {isOpen && (
                      <div className="mt-2 text-sm sm:text-base text-[#5A5A52] leading-relaxed pr-6 animate-fadeIn pb-3">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>

          {/* Right Column: Customer/Brand Lifestyle Image */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl border border-[#DDE8C2] bg-[#EDF5DC] p-2 group">
              <img
                src="/images/faq-lifestyle.jpg"
                alt="Healthy daily tea and mocha wellness"
                className="w-full h-[260px] sm:h-[380px] lg:h-[500px] object-cover group-hover:scale-[1.02] transition-transform duration-700"
                loading="lazy"
              />
            </div>

            {/* Trust overlay note */}
            <div className="mt-4 p-4 bg-white rounded-2xl border border-[#DDE8C2] text-center">
              <span className="text-xs font-bold text-[#8A9388] uppercase tracking-wider block">
                Still have specific dietary inquiries?
              </span>
              <Link
                to="/contact-us"
                className="font-display text-sm sm:text-base font-semibold text-[#86C33A] hover:underline mt-0.5 inline-block"
              >
                Talk directly to our In-House Nutritionist →
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
