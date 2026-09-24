import React, { useState } from 'react';
import { X, Download, FileText, CheckCircle2, ShieldCheck, Mail, ArrowDownToLine, Zap } from 'lucide-react';
import { downloadBrochureDirectly, BROCHURE_FILE_NAME } from '../utils/brochureDownload';

export default function BrochureModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [email, setEmail] = useState('');

  const handleDownload = async (e) => {
    if (e) e.preventDefault();
    setDownloadSuccess(true);
    await downloadBrochureDirectly();
    setTimeout(() => {
      setDownloadSuccess(false);
      onClose();
    }, 1200);
  };

  const handleDirectDownload = async () => {
    setDownloadSuccess(true);
    await downloadBrochureDirectly();
    setTimeout(() => {
      setDownloadSuccess(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity animate-fadeIn"
      />

      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative w-full max-w-lg bg-white shadow-sm overflow-hidden rounded-2xl border border-[#DDE8C2] p-6 sm:p-8 animate-scaleUp">
          
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 text-[#8A9388] hover:text-black hover:bg-[#EDF5DC] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="text-center space-y-3">
            <div className="w-14 h-14 bg-[#EFF6DD] border border-[#86C33A]/40 rounded-xl flex items-center justify-center mx-auto text-[#6AA326]">
              <FileText className="w-7 h-7" />
            </div>
            <h3 className="font-display text-2xl font-semibold text-[#101F18]">
              Download Product Brochure
            </h3>
            <p className="text-xs sm:text-sm text-[#5A5A52] max-w-sm mx-auto">
              Get our comprehensive 2026 Gomzi Lifesciences Catalog featuring full nutritional breakdowns, formulation science, and bulk pricing.
            </p>
          </div>

          {/* Instant One-Click Direct Download */}
          <div className="mt-6 space-y-2">
            <button
              type="button"
              onClick={handleDirectDownload}
              id="modal-direct-download-btn"
              className="w-full bg-[#86C33A] hover:bg-[#6AA326] text-white py-3.5 rounded-xl font-bold text-sm tracking-wide transition-all flex items-center justify-center gap-2.5 transform active:scale-98 shadow-xs"
            >
              {downloadSuccess ? (
                <>
                  <CheckCircle2 className="w-5 h-5 text-white animate-pulse" />
                  <span>Downloading Official PDF...</span>
                </>
              ) : (
                <>
                  <Download className="w-5 h-5" />
                  <span>Download Official Brochure PDF Directly</span>
                </>
              )}
            </button>
            <p className="text-[11px] text-center text-[#8A9388]">
              Instant PDF file download • 4 Pages Complete Catalog & Formulations
            </p>
          </div>

          <div className="relative my-5">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#DDE8C2]"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-3 text-[#8A9388] font-bold">Or Receive Via Email</span>
            </div>
          </div>

          <form onSubmit={handleDownload} className="space-y-3">
            <div>
              <label className="block text-xs font-bold text-[#5A5A52] uppercase mb-1">
                Work or personal email
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 absolute left-3.5 top-3.5 text-[#8A9388]" />
                <input
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-2xl border border-[#DDE8C2] text-sm focus:outline-hidden focus:border-[#86C33A]"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#FFFFFF] hover:bg-[#EDF5DC] text-[#101F18] border border-[#DDE8C2] py-3 rounded-xl font-bold text-xs tracking-wide transition-all flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4 text-[#5A5A52]" />
              <span>Download & Send to Email</span>
            </button>
          </form>

          <div className="mt-4 flex items-center justify-center gap-2 text-[11px] text-[#8A9388]">
            <ShieldCheck className="w-4 h-4 text-[#86C33A]" />
            <span>Zero Spam Guarantee • Instant PDF Download</span>
          </div>

        </div>
      </div>
    </div>
  );
}
