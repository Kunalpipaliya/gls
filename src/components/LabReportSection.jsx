import React from 'react';
import { FileText, ShieldCheck, QrCode, CheckCircle2, Download, Search } from 'lucide-react';

export default function LabReportSection({ onOpenReportModal }) {
  return (
    <section id="lab-report" className="py-20 bg-[#F9FBF4] border-t border-[#DDE8C2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white p-8 sm:p-12 lg:p-16 rounded-2xl border border-[#DDE8C2] shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-block rounded-full border border-[#86C33A]/35 bg-white text-[11px] font-bold uppercase tracking-[0.18em] text-[#86C33A] px-3 py-1">
                100% Uncompromised Transparency
              </span>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#101F18] tracking-tight leading-tight">
                See the lab report before you buy not after you complain.
              </h2>

              <p className="text-[#5A5A52] text-base sm:text-lg leading-relaxed">
                Every Gomzi Lifesciences batch is independently tested for protein content, pesticide residues, heavy metals, and microbiological safety by an accredited NABL third-party lab. Here's a real sample report—verify it to see exactly what we test and how the results are certified before you order.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-sm text-[#5A5A52]">
                  <CheckCircle2 className="w-5 h-5 text-[#86C33A] flex-shrink-0" />
                  <span><strong>Kjeldahl Method Verified:</strong> Exact protein per sachet & per 100g atta</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[#5A5A52]">
                  <CheckCircle2 className="w-5 h-5 text-[#86C33A] flex-shrink-0" />
                  <span><strong>Zero Heavy Metals:</strong> Lead, Arsenic, Cadmium & Mercury tested below LOQ</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[#5A5A52]">
                  <CheckCircle2 className="w-5 h-5 text-[#86C33A] flex-shrink-0" />
                  <span><strong>No Amino Spiking:</strong> 100% genuine dietary protein profile</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={onOpenReportModal}
                  id="check-batch-report-btn"
                  className="bg-[#86C33A] hover:bg-[#6AA326] text-white px-7 py-4 rounded-xl font-bold text-sm sm:text-base transition-all duration-200 inline-flex items-center gap-3 group transform hover:-translate-y-0.5 shadow-sm"
                >
                  <FileText className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                  <span>Check Batch Report</span>
                </button>
              </div>
            </div>

            {/* Right Graphic: Assure Analytical Laboratories Sample Report Certificate */}
            <div className="lg:col-span-6">
              <div 
                onClick={onOpenReportModal}
                className="bg-white border-2 border-[#DDE8C2] p-6 sm:p-7 shadow-sm hover:shadow-sm transition-all duration-300 cursor-pointer relative group hover:border-[#86C33A]"
              >
                
                {/* Click to expand overlay on hover */}
                <div className="absolute inset-0 bg-[#86C33A]/5 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity z-20">
                  <span className="bg-[#86C33A] text-white text-xs font-bold px-4 py-2 rounded-full flex items-center gap-2 shadow-sm">
                    <Search className="w-4 h-4 text-white" />
                    Click to View Full Certificate
                  </span>
                </div>

                {/* Lab Header */}
                <div className="flex items-center justify-between border-b-2 border-[#DDE8C2] pb-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#F9FBF4] flex items-center justify-center p-1 rounded-2xl border border-[#DDE8C2]">
                      <QrCode className="w-10 h-10 text-[#101F18]" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-display text-base font-semibold tracking-tight text-[#1B2F0A]">ASSURE</span>
                        <span className="text-xs font-bold text-[#5A5A52]">ANALYTICAL LABORATORIES LLP</span>
                      </div>
                      <div className="text-[10px] text-[#8A9388]">NABL Accredited • Certificate No: TC-17861</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] bg-[#EFF6DD] text-[#3F6116] border border-[#86C33A]/40 font-bold rounded-full px-2.5 py-1 uppercase">
                      Verified Pass
                    </span>
                    <div className="text-[10px] text-[#8A9388] mt-1">Batch: GLS-2026-SEP</div>
                  </div>
                </div>

                {/* Report Table Replica */}
                <div className="text-xs space-y-2">
                  <div className="text-[11px] font-bold text-[#5A5A52] uppercase tracking-wide">
                    TEST CERTIFICATE SUMMARY
                  </div>
                  
                  <div className="bg-[#F9FBF4] p-3 space-y-2 rounded-2xl border border-[#DDE8C2]">
                    <div className="flex justify-between text-[11px] border-b border-[#DDE8C2] pb-1">
                      <span className="text-[#5A5A52]">Product Sample:</span>
                      <span className="font-bold text-[#101F18]">Gomzi Functional Nutrition Series</span>
                    </div>
                    <div className="flex justify-between text-[11px] border-b border-[#DDE8C2] pb-1">
                      <span className="text-[#5A5A52]">Date of Testing:</span>
                      <span className="font-semibold text-[#3A3A34]">2026-09-18</span>
                    </div>
                    <div className="flex justify-between text-[11px] border-b border-[#DDE8C2] pb-1">
                      <span className="text-[#5A5A52]">Instant Spiced Tea Protein:</span>
                      <span className="font-bold text-[#86C33A]">5.10 g / Sachet (PASS)</span>
                    </div>
                    <div className="flex justify-between text-[11px] border-b border-[#DDE8C2] pb-1">
                      <span className="text-[#5A5A52]">Instant Mocha Coffee Protein:</span>
                      <span className="font-bold text-[#86C33A]">5.12 g / Sachet (PASS)</span>
                    </div>
                    <div className="flex justify-between text-[11px] border-b border-[#DDE8C2] pb-1">
                      <span className="text-[#5A5A52]">Multi Grain Atta Protein:</span>
                      <span className="font-bold text-[#86C33A]">28.4 g / 100g (PASS)</span>
                    </div>
                    <div className="flex justify-between text-[11px]">
                      <span className="text-[#5A5A52]">Heavy Metals (Pb, Hg, As):</span>
                      <span className="font-bold text-[#86C33A]">NOT DETECTED (Below LOQ)</span>
                    </div>
                  </div>
                </div>

                {/* Footer Stamp */}
                <div className="mt-4 pt-3 border-t border-[#DDE8C2] flex items-center justify-between text-[10px] text-[#8A9388]">
                  <div className="flex items-center gap-1.5 text-[#5A5A52]">
                    <ShieldCheck className="w-4 h-4 text-[#86C33A]" />
                    <span>Authorized Signatory Sealed</span>
                  </div>
                  <span className="text-[#86C33A] font-bold">Report ID: AAL-GLS-2026-09</span>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
