import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, User, ShoppingBag, Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar({ cartCount, onOpenCart, onOpenSearch, onOpenAuth }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Shop', path: '/shop' },
    { label: 'Contact Us', path: '/contact-us' },
  ];

  const isLinkActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FFFFFF]/95 backdrop-blur-md border-b border-[#DDE8C2] transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center group">
              <img
                src="/images/gomzi-life-science-logo.webp"
                alt="Gomzi Lifesciences"
                className="h-8 sm:h-10 w-auto object-contain group-hover:scale-105 transition-transform duration-200"
              />
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className={`text-sm font-semibold transition-colors duration-200 relative py-1 ${
                  isLinkActive(item.path)
                    ? 'text-[#1B2F0A] after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#86C33A] font-bold'
                    : 'text-[#5A5A52] hover:text-[#1B2F0A]'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center space-x-1 sm:space-x-4">
            <button
              onClick={onOpenSearch}
              className="p-2 text-[#5A5A52] hover:text-[#1B2F0A] hover:bg-[#EDF5DC] rounded-xl transition-colors"
              title="Search Products"
              aria-label="Search"
            >
              <Search className="w-5 h-5 stroke-[1.8]" />
            </button>

            <button
              onClick={onOpenAuth}
              className="p-2 text-[#5A5A52] hover:text-[#1B2F0A] hover:bg-[#EDF5DC] rounded-xl transition-colors"
              title="Account"
              aria-label="Account"
            >
              <User className="w-5 h-5 stroke-[1.8]" />
            </button>

            <button
              onClick={onOpenCart}
              className="relative p-2 text-[#5A5A52] hover:text-[#1B2F0A] hover:bg-[#EDF5DC] rounded-xl transition-colors group"
              title="View Cart"
              aria-label="Shopping Cart"
            >
              <ShoppingBag className="w-5 h-5 stroke-[1.8] group-hover:scale-105 transition-transform" />
              <span className="absolute -top-1 -right-1 bg-[#86C33A] text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#FFFFFF] shadow-xs">
                {cartCount}
              </span>
            </button>

            {/* Mobile menu hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#5A5A52] hover:text-[#1B2F0A] hover:bg-[#EDF5DC] rounded-xl transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FFFFFF] border-b border-[#DDE8C2] px-4 pt-3 pb-6 space-y-2 animate-fadeIn">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2.5 rounded-lg text-base font-semibold ${
                isLinkActive(item.path)
                  ? 'bg-[#EDF5DC] text-[#86C33A] border-l-2 border-[#86C33A]'
                  : 'text-[#5A5A52] hover:bg-[#EDF5DC]'
              }`}
            >
              <div className="flex items-center justify-between">
                <span>{item.label}</span>
                <ArrowRight className="w-4 h-4 opacity-40" />
              </div>
            </Link>
          ))}
          <div className="pt-4 border-t border-[#DDE8C2] flex flex-col gap-2">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenCart(); }}
              className="w-full bg-[#86C33A] hover:bg-[#6AA326] text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 shadow-xs transition-colors"
            >
              <ShoppingBag className="w-4 h-4 text-white" />
              <span>View Cart ({cartCount} items)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
