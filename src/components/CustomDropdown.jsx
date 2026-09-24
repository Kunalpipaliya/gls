import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';

export default function CustomDropdown({
  value,
  onChange,
  options = [],
  placeholder = 'Select option',
  className = '',
  buttonClassName = '',
  menuClassName = '',
  align = 'left'
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Normalize options to [{ value, label }]
  const normalizedOptions = options.map((opt) => {
    if (typeof opt === 'string') {
      return { value: opt, label: opt };
    }
    return opt;
  });

  // Find currently selected option
  const currentOption = normalizedOptions.find((opt) => opt.value === value);

  // Close when clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const handleSelect = (optionValue) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  return (
    <div className={`relative inline-block ${className}`} ref={dropdownRef}>
      {/* Dropdown Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className={`w-full bg-white rounded-xl border border-[#DDE8C2] hover:border-[#86C33A] text-xs sm:text-sm font-semibold px-3.5 py-2.5 text-[#101F18] flex items-center justify-between gap-3 shadow-xs hover:shadow-sm focus:outline-hidden focus:ring-2 focus:ring-[#86C33A]/30 focus:border-[#86C33A] transition-all cursor-pointer ${
          isOpen ? 'border-[#86C33A] ring-2 ring-[#86C33A]/20' : ''
        } ${buttonClassName}`}
      >
        <span className="truncate">
          {currentOption ? currentOption.label : placeholder}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-[#86C33A] flex-shrink-0 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Floating Menu */}
      {isOpen && (
        <div
          role="listbox"
          className={`absolute z-50 mt-1.5 min-w-[200px] w-full bg-white rounded-xl border border-[#DDE8C2] shadow-elevated py-1.5 overflow-hidden animate-fadeIn ${
            align === 'right' ? 'right-0' : 'left-0'
          } ${menuClassName}`}
        >
          {normalizedOptions.map((opt) => {
            const isSelected = opt.value === value;
            return (
              <button
                key={opt.value}
                type="button"
                role="option"
                aria-selected={isSelected}
                onClick={() => handleSelect(opt.value)}
                className={`w-full text-left px-3.5 py-2.5 text-xs sm:text-sm transition-all flex items-center justify-between gap-3 cursor-pointer ${
                  isSelected
                    ? 'bg-[#EFF6DD] text-[#3F6116] font-bold'
                    : 'text-[#3A3A34] hover:bg-[#F9FBF4] hover:text-[#101F18] font-medium'
                }`}
              >
                <span className="truncate">{opt.label}</span>
                {isSelected && (
                  <Check className="w-4 h-4 text-[#86C33A] flex-shrink-0 stroke-[2.5]" />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
