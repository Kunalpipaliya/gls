import React, { useState } from 'react';
import { X, Download, ShieldCheck, CheckCircle2, QrCode, Printer, Search } from 'lucide-react';

export default function BatchReportModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [activeReport, setActiveReport] = useState('tea');

  const reportData = {
    tea: {
      name: "Instant Spiced Tea (14g Sachet)",
      reportId: "AAL-GLS-TEA-2026-0814",
      batchNo: "GLS-TEA-2608",
      mfgDate: "14-08-2026",
      expiryDate: "13-08-2027",
      sampleCode: "SMP-170726001",
      results: [
        { param: "Total Protein Content (%)", testMethod: "IS 7219:1973 (Kjeldahl)", claim: "5.0 g / 14g", actual: "5.10 g / 14g", status: "PASS" },
        { param: "Lead (as Pb)", testMethod: "ICP-MS / AOAC", claim: "Max 2.5 ppm", actual: "< 0.05 ppm (BLQ)", status: "PASS" },
        { param: "Arsenic (as As)", testMethod: "ICP-MS / AOAC", claim: "Max 1.0 ppm", actual: "< 0.02 ppm (BLQ)", status: "PASS" },
        { param: "Cadmium & Mercury", testMethod: "ICP-MS / AOAC", claim: "Max 0.5 ppm", actual: "Not Detected", status: "PASS" },
        { param: "Total Plate Count", testMethod: "IS 5402", claim: "< 10,000 cfu/g", actual: "120 cfu/g", status: "PASS" },
        { param: "Yeast & Mould", testMethod: "IS 5403", claim: "< 100 cfu/g", actual: "< 10 cfu/g", status: "PASS" },
        { param: "E. Coli & Salmonella", testMethod: "IS 5887", claim: "Absent in 25g", actual: "Absent", status: "PASS" },
      ]
    },
    coffee: {
      name: "Instant Mocha Coffee (14g Sachet)",
      reportId: "AAL-GLS-COF-2026-0819",
      batchNo: "GLS-COF-2608",
      mfgDate: "19-08-2026",
      expiryDate: "18-08-2027",
      sampleCode: "SMP-170726002",
      results: [
        { param: "Total Protein Content (%)", testMethod: "IS 7219:1973 (Kjeldahl)", claim: "5.0 g / 14g", actual: "5.12 g / 14g", status: "PASS" },
        { param: "Natural Caffeine", testMethod: "HPLC Method", claim: "70-80 mg", actual: "75.4 mg", status: "PASS" },
        { param: "Lead (as Pb)", testMethod: "ICP-MS / AOAC", claim: "Max 2.5 ppm", actual: "< 0.04 ppm (BLQ)", status: "PASS" },
        { param: "Aflatoxins (B1, B2, G1, G2)", testMethod: "AOAC 991.31", claim: "< 15 ppb", actual: "Not Detected", status: "PASS" },
        { param: "Total Plate Count", testMethod: "IS 5402", claim: "< 10,000 cfu/g", actual: "180 cfu/g", status: "PASS" },
        { param: "Yeast & Mould", testMethod: "IS 5403", claim: "< 100 cfu/g", actual: "< 10 cfu/g", status: "PASS" },
      ]
    },
    atta: {
      name: "Multi Grain Atta with Protein (500g Pouch)",
      reportId: "AAL-GLS-ATT-2026-0824",
      batchNo: "GLS-ATT-2608",
      mfgDate: "24-08-2026",
      expiryDate: "23-02-2027",
      sampleCode: "SMP-170726003",
      results: [
        { param: "Total Protein Content (%)", testMethod: "IS 7219:1973 (Kjeldahl)", claim: "28.0 g / 100g", actual: "28.4 g / 100g", status: "PASS" },
        { param: "Dietary Fibre Content", testMethod: "AOAC 985.29", claim: "> 12.0 g / 100g", actual: "14.5 g / 100g", status: "PASS" },
        { param: "Moisture Content", testMethod: "IS 1155", claim: "Max 12.0 %", actual: "9.2 %", status: "PASS" },
        { param: "Pesticide Residue (24 Organo-chlorines)", testMethod: "GC-MS/MS", claim: "Below LOD", actual: "Not Detected", status: "PASS" },
        { param: "Heavy Metals (Pb, Cd, As)", testMethod: "ICP-MS", claim: "Below FSSAI Limits", actual: "Conforms to limits", status: "PASS" },
        { param: "Uric Acid & Foreign Matter", testMethod: "IS 4333", claim: "Nil", actual: "Nil", status: "PASS" },
      ]
    }
  };

  const report = reportData[activeReport];

  const handlePrintDownload = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-black/70 backdrop-blur-xs transition-opacity animate-fadeIn"
      />

      <div className="flex min-h-full items-center justify-center p-3 sm:p-6">
        <div className="relative w-full max-w-4xl bg-white shadow-sm overflow-hidden rounded-2xl border border-[#DDE8C2]">
          
          {/* Top modal header */}
          <div className="bg-[#86C33A] text-white p-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-white" />
              <div>
                <h3 className="font-display font-semibold text-base sm:text-lg text-white">Accredited Laboratory Certificate Viewer</h3>
                <p className="text-xs text-white/90">Third-Party Analytical Testing by Assure Analytical Laboratories LLP</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-white/80 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Product selector buttons */}
          <div className="bg-[#F9FBF4] p-3 sm:px-6 flex flex-wrap gap-2 border-b border-[#DDE8C2]">
            <button
              onClick={() => setActiveReport('tea')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeReport === 'tea'
                  ? 'bg-[#86C33A] text-white shadow-xs'
                  : 'bg-white text-[#5A5A52] hover:bg-[#EDF5DC] border border-[#DDE8C2]'
              }`}
            >
              Instant Spiced Tea
            </button>
            <button
              onClick={() => setActiveReport('coffee')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeReport === 'coffee'
                  ? 'bg-[#86C33A] text-white shadow-xs'
                  : 'bg-white text-[#5A5A52] hover:bg-[#EDF5DC] border border-[#DDE8C2]'
              }`}
            >
              Instant Mocha Coffee
            </button>
            <button
              onClick={() => setActiveReport('atta')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeReport === 'atta'
                  ? 'bg-[#86C33A] text-white shadow-xs'
                  : 'bg-white text-[#5A5A52] hover:bg-[#EDF5DC] border border-[#DDE8C2]'
              }`}
            >
              Multi Grain Atta with Protein
            </button>
          </div>

          {/* Certificate Body Container */}
          <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
            
            {/* Certificate Header replica */}
            <div className="border-b-2 border-[#DDE8C2] pb-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-[#F9FBF4] rounded-2xl border border-[#DDE8C2] flex items-center justify-center p-2">
                    <QrCode className="w-10 h-10 text-[#101F18]" />
                  </div>
                  <div>
                    <h4 className="font-display text-xl font-semibold text-[#1B2F0A] tracking-tight">
                      ASSURE ANALYTICAL LABORATORIES LLP
                    </h4>
                    <p className="text-xs text-[#5A5A52] font-semibold">
                      Accredited in accordance with ISO/IEC 17025:2017 • Chemical & Biological Testing
                    </p>
                    <p className="text-[11px] text-[#8A9388]">
                      NABL ULR No: TC178612600002270F | FSSAI Recognized Laboratory
                    </p>
                  </div>
                </div>

                <div className="text-left sm:text-right">
                  <span className="inline-block bg-[#EFF6DD] text-[#3F6116] border border-[#86C33A]/40 text-xs font-bold rounded-full px-3 py-1 uppercase">
                    ✓ 100% Pure & Passed
                  </span>
                  <div className="text-xs text-[#5A5A52] font-mono mt-1">Report ID: {report.reportId}</div>
                </div>
              </div>
            </div>

            {/* Particulars Table */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#F9FBF4] p-4 rounded-2xl border border-[#DDE8C2] text-xs">
              <div>
                <span className="text-[#8A9388] block text-[10px] uppercase font-bold">Sample Description</span>
                <span className="font-bold text-[#101F18]">{report.name}</span>
              </div>
              <div>
                <span className="text-[#8A9388] block text-[10px] uppercase font-bold">Batch Number</span>
                <span className="font-bold text-[#101F18] font-mono">{report.batchNo}</span>
              </div>
              <div>
                <span className="text-[#8A9388] block text-[10px] uppercase font-bold">Date of Analysis</span>
                <span className="font-bold text-[#101F18]">{report.mfgDate}</span>
              </div>
              <div>
                <span className="text-[#8A9388] block text-[10px] uppercase font-bold">Client</span>
                <span className="font-bold text-[#86C33A]">Gomzi Lifesciences Pvt. Ltd.</span>
              </div>
            </div>

            {/* Test Results Table */}
            <div>
              <h5 className="text-xs font-bold text-[#3A3A34] uppercase tracking-wider mb-2">
                Part B: Chemical & Microbiological Parameters
              </h5>
              
              <div className="rounded-2xl border border-[#DDE8C2] overflow-x-auto">
                <table className="w-full text-left text-xs min-w-[500px]">
                  <thead className="bg-[#86C33A] text-white uppercase text-[10px] tracking-wider">
                    <tr>
                      <th className="py-3 px-4">Parameter</th>
                      <th className="py-3 px-4 hidden sm:table-cell">Standard Method</th>
                      <th className="py-3 px-4">Claim / Limit</th>
                      <th className="py-3 px-4 font-bold">Actual Result</th>
                      <th className="py-3 px-4 text-center">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#DDE8C2] bg-white">
                    {report.results.map((r, i) => (
                      <tr key={i} className="hover:bg-[#EFF6DD]/60">
                        <td className="py-3 px-4 font-bold text-[#101F18]">{r.param}</td>
                        <td className="py-3 px-4 text-[#5A5A52] font-mono text-[11px] hidden sm:table-cell">{r.testMethod}</td>
                        <td className="py-3 px-4 text-[#5A5A52]">{r.claim}</td>
                        <td className="py-3 px-4 font-bold text-[#86C33A]">{r.actual}</td>
                        <td className="py-3 px-4 text-center">
                          <span className="bg-[#EFF6DD] text-[#3F6116] border border-[#86C33A]/40 text-[10px] font-bold rounded-full px-2 py-0.5">
                            {r.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Signatory Remarks */}
            <div className="p-4 bg-[#F9FBF4] rounded-2xl border border-[#DDE8C2] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#5A5A52]">
              <div>
                <strong className="text-[#101F18] block">Chief Analyst Remarks:</strong>
                The tested sample strictly conforms with Indian FSSAI statutory standards for Protein and Safety. Free from hazardous heavy metal contaminants, pesticide residues, and microbial pathogens.
              </div>
              <div className="text-right sm:flex-shrink-0">
                <div className="font-sans italic font-bold text-[#101F18] text-sm">Dr. S. K. Mukherjee</div>
                <div className="text-[10px] text-[#8A9388]">Authorized Quality Officer (NABL)</div>
              </div>
            </div>

          </div>

          {/* Footer Actions */}
          <div className="p-4 sm:px-8 bg-[#F9FBF4] border-t border-[#DDE8C2] flex items-center justify-between">
            <span className="text-xs text-[#8A9388] hidden sm:inline-block">
              Verifiable certificate stamped by Assure Analytical Laboratories.
            </span>
            <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
              <button
                onClick={handlePrintDownload}
                className="inline-flex items-center gap-2 bg-white border border-[#DDE8C2] hover:border-[#86C33A] text-[#3A3A34] px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-colors"
              >
                <Printer className="w-4 h-4" />
                Print Certificate
              </button>
              <button
                onClick={() => {
                  alert(`Downloading complete official PDF report: ${report.reportId}.pdf`);
                }}
                className="inline-flex items-center gap-2 bg-[#86C33A] hover:bg-[#6AA326] text-white px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-colors shadow-xs"
              >
                <Download className="w-4 h-4" />
                Download PDF Report
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
