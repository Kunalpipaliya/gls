import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube, Linkedin, ArrowUp, Download } from 'lucide-react';
import { downloadBrochureDirectly } from '../utils/brochureDownload';

export default function Footer({ onOpenReportModal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-black text-white pt-16 pb-12 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-neutral-900">

          {/* Brand Info (Col 1 to 4) */}
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-2xl bg-neutral-900 flex items-center justify-center border border-neutral-800 group-hover:border-neutral-700 transition-colors">
                <span className="font-display font-semibold text-white text-base tracking-tighter">GL</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-xl font-semibold tracking-tight text-white leading-none">
                  Gomzi
                </span>
                <span className="text-[10px] font-bold tracking-[0.2em] text-neutral-400 mt-0.5">
                  LIFESCIENCES
                </span>
              </div>
            </Link>

            <p className="text-neutral-400 text-sm leading-relaxed max-w-sm">
              Premium functional daily nutrition manufactured with international quality standards. Science-backed protein beverages & whole food staples for a healthier tomorrow.
            </p>

            <div className="space-y-2.5 text-xs text-neutral-300">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-neutral-400 flex-shrink-0" />
                <a href="tel:+919875270200" className="hover:text-white transition-colors">
                  +91 98752 70200 (10 AM - 7 PM IST)
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-neutral-400 flex-shrink-0" />
                <a href="mailto:care@gomzilifesciences.com" className="hover:text-white transition-colors">
                  care@gomzilifesciences.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-neutral-400 flex-shrink-0" />
                <span>Gomzi Tower, Ring Road, Surat, Gujarat - 395002</span>
              </div>
            </div>
          </div>

          {/* Column 2: Shop Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-display text-base font-semibold tracking-wide text-white">Shop Formulations</h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li><Link to="/shop" className="hover:text-white transition-colors">All Products</Link></li>
              <li><Link to="/product/spiced-tea" className="hover:text-white transition-colors">Instant Spiced Tea</Link></li>
              <li><Link to="/product/mocha-coffee" className="hover:text-white transition-colors">Instant Mocha Coffee</Link></li>
              <li><Link to="/product/multigrain-atta" className="hover:text-white transition-colors">Multi Grain Atta</Link></li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-display text-base font-semibold tracking-wide text-white">Resources</h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li>
                <button
                  onClick={() => downloadBrochureDirectly()}
                  className="hover:text-white transition-colors text-left flex items-center gap-1.5 text-neutral-400 group cursor-pointer"
                  title="Direct PDF Download"
                >
                  <Download className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white group-hover:translate-y-0.5 transition-all" />
                  <span>Download Brochure</span>
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenReportModal}
                  className="hover:text-white transition-colors text-left text-neutral-400 cursor-pointer"
                >
                  Inspect Lab Certificate
                </button>
              </li>
              <li><Link to="/contact-us" className="hover:text-white transition-colors">B2B & Distribution</Link></li>
              <li><Link to="/contact-us" className="hover:text-white transition-colors">Get in Touch</Link></li>
            </ul>
          </div>

          {/* Column 4: Customer Care */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-display text-base font-semibold tracking-wide text-white">Customer Care</h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              <li><a href="/#faqs" className="hover:text-white transition-colors">Common FAQs</a></li>
              <li><Link to="/contact-us" className="hover:text-white transition-colors">Contact Support</Link></li>
              <li><a href="tel:+919875270200" className="hover:text-white transition-colors">+91 98752 70200</a></li>
              <li><a href="https://wa.me/919875270200" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">WhatsApp Help</a></li>
            </ul>
          </div>

          {/* Column 5: Social & Payment badges */}
          <div className="lg:col-span-2 space-y-5">
            <h4 className="font-display text-base font-semibold tracking-wide text-white">Follow Us</h4>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-2">
              <span className="text-xs font-bold text-neutral-400 block mb-2 uppercase tracking-wide">
                We Accept
              </span>
              <div className="flex flex-wrap gap-1.5 text-[10px] font-bold text-neutral-300">
                <span className="bg-neutral-900 border border-neutral-800 px-2 py-1 rounded-full">UPI</span>
                <span className="bg-neutral-900 border border-neutral-800 px-2 py-1 rounded-full">GPay</span>
                <span className="bg-neutral-900 border border-neutral-800 px-2 py-1 rounded-full">PhonePe</span>
                <span className="bg-neutral-900 border border-neutral-800 px-2 py-1 rounded-full">Visa</span>
                <span className="bg-neutral-900 border border-neutral-800 px-2 py-1 rounded-full">Mastercard</span>
                <span className="bg-neutral-900 border border-neutral-800 px-2 py-1 rounded-full">COD</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} Gomzi Lifesciences Pvt. Ltd. All rights reserved.
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
            <span className="text-neutral-500">Formulated in Surat, Gujarat • Delivered Across India</span>
            <button
              onClick={scrollToTop}
              className="p-2 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded-full text-neutral-300 hover:text-white transition-colors"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
