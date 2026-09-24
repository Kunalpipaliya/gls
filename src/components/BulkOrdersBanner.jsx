import React, { useState } from 'react';
import { Building2, Mail, Phone, CheckCircle, ArrowRight, X } from 'lucide-react';
import CustomDropdown from './CustomDropdown';

export default function BulkOrdersBanner() {
  const [showInquiryModal, setShowInquiryModal] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    interest: 'Both (Beverages & Atta)',
    estimatedVolume: '50 - 200 Units / Month'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setShowInquiryModal(false);
    }, 2500);
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dark Container */}
        <div className="bg-[#86C33A] text-white p-8 sm:p-12 lg:p-16 overflow-hidden relative border-t-4 border-[#1B2F0A]">
          
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#1B2F0A]/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Left Column: Text & CTA */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-block border border-white/40 text-white text-[11px] font-bold uppercase tracking-[0.18em] rounded-full px-3 py-1">
                B2B & Wholesale Partnership
              </span>
              
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight leading-tight">
                Looking for bulk orders or a distribution partnership?
              </h2>

              <p className="text-white/90 text-base sm:text-lg leading-relaxed max-w-xl">
                Get exclusive wholesale pricing on Gomzi Lifesciences functional foods and protein beverages for your business. Partner with us for corporate pantries, supermarket shelves, fitness cafes, and regional distribution networks with dedicated account support.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => setShowInquiryModal(true)}
                  className="bg-[#86C33A] hover:bg-[#6AA326] text-white border border-white/50 px-8 py-4 font-bold text-base transition-all duration-200 inline-flex items-center gap-2.5 transform hover:-translate-y-0.5 shadow-xs"
                >
                  <span>Inquire for Wholesale / Distribution</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Right Column: Warehouse Graphic */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-[#1B2F0A]/20 shadow-sm group">
                <img
                  src="/images/bulk-warehouse.jpg"
                  alt="Gomzi Lifesciences Logistics and Wholesale Fulfillment"
                  className="w-full h-72 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* B2B Inquiry Modal */}
      {showInquiryModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-2xl border border-[#DDE8C2] max-w-lg w-full p-6 sm:p-8 shadow-sm relative">
            <button
              onClick={() => setShowInquiryModal(false)}
              className="absolute top-5 right-5 p-2 text-[#8A9388] hover:text-black hover:bg-[#EDF5DC] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 bg-[#EFF6DD] border border-[#86C33A]/40 text-[#6AA326] flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-[#101F18]">Inquiry Received!</h3>
                <p className="text-[#5A5A52] text-sm">
                  Our B2B Distribution Team will contact you within 4 business hours with wholesale pricing and catalog sheets.
                </p>
              </div>
            ) : (
              <div>
                <h3 className="font-display text-2xl font-semibold text-[#101F18]">Bulk & Distribution Inquiry</h3>
                <p className="text-[#8A9388] text-xs sm:text-sm mt-1">
                  Connect directly with the Gomzi Lifesciences Institutional sales desk.
                </p>

                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-[#5A5A52] uppercase mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Patel"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-2xl border border-[#DDE8C2] focus:outline-hidden focus:border-[#86C33A] text-sm"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-[#5A5A52] uppercase mb-1">Company / Store</label>
                      <input
                        type="text"
                        required
                        placeholder="Company name"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-2xl border border-[#DDE8C2] focus:outline-hidden focus:border-[#86C33A] text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#5A5A52] uppercase mb-1">Phone Number</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-2xl border border-[#DDE8C2] focus:outline-hidden focus:border-[#86C33A] text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#5A5A52] uppercase mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="partner@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-2xl border border-[#DDE8C2] focus:outline-hidden focus:border-[#86C33A] text-sm"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-[#5A5A52] uppercase mb-1">Product Line</label>
                      <CustomDropdown
                        value={formData.interest}
                        onChange={(val) => setFormData({ ...formData, interest: val })}
                        options={[
                          'Protein Beverages (Tea & Coffee)',
                          'Multi Grain Atta with Protein',
                          'Both (Beverages & Atta)'
                        ]}
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#5A5A52] uppercase mb-1">Monthly Volume</label>
                      <CustomDropdown
                        value={formData.estimatedVolume}
                        onChange={(val) => setFormData({ ...formData, estimatedVolume: val })}
                        options={[
                          '50 - 200 Units / Month',
                          '200 - 1,000 Units / Month',
                          '1,000+ Units (Distributor)'
                        ]}
                        className="w-full"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#86C33A] hover:bg-[#6AA326] text-white py-3.5 rounded-xl font-bold text-sm tracking-wide transition-colors mt-2 shadow-xs"
                  >
                    Submit Wholesale Application
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
