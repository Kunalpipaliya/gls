import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, MessageSquare, CheckCircle, Send } from 'lucide-react';
import CustomDropdown from '../components/CustomDropdown';

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: 'General Inquiry', message: '' });
    }, 3000);
  };

  return (
    <div className="bg-[#F9FBF4] min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="text-xs text-[#8A9388] mb-6 flex items-center gap-2">
          <Link to="/" className="hover:text-black">Home</Link>
          <span>/</span>
          <span className="text-[#101F18] font-bold">Contact Us</span>
        </nav>

        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block rounded-full border border-[#86C33A]/35 bg-white text-[11px] font-bold uppercase tracking-[0.18em] text-[#86C33A] px-3 py-1">
            We Are Here to Help
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal text-[#101F18] mt-3 tracking-tight">
            Get in Touch With Us
          </h1>
          <p className="text-[#5A5A52] text-sm sm:text-base mt-2">
            Have questions about our protein tea, coffee, or multi-grain atta? Looking for distribution partnerships or order support?
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Contact Details & Office */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#DDE8C2] shadow-sm space-y-6">
              <h2 className="font-display text-xl font-semibold text-[#101F18]">
                Corporate Headquarters
              </h2>

              <div className="space-y-4 text-sm text-[#5A5A52]">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 bg-[#EFF6DD] border border-[#86C33A]/40 text-[#6AA326] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-[#101F18] font-bold">Facility & Head Office:</strong>
                    <span>Gomzi Tower, Ring Road, Surat, Gujarat - 395002, India</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 bg-[#EFF6DD] border border-[#86C33A]/40 text-[#6AA326] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-[#101F18] font-bold">Call / WhatsApp Support:</strong>
                    <a href="tel:+919875270200" className="hover:text-[#86C33A] transition-colors">
                      +91 98752 70200
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 bg-[#EFF6DD] border border-[#86C33A]/40 text-[#6AA326] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-[#101F18] font-bold">Direct Email:</strong>
                    <a href="mailto:care@gomzilifesciences.com" className="hover:text-[#86C33A] transition-colors">
                      care@gomzilifesciences.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 bg-[#EFF6DD] border border-[#86C33A]/40 text-[#6AA326] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-[#101F18] font-bold">Customer Care Hours:</strong>
                    <span>Monday to Saturday: 10:00 AM – 7:00 PM IST</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#DDE8C2]">
                <a
                  href="https://wa.me/919875270200"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-[#F9FBF4] hover:bg-[#EDF5DC] text-[#1B2F0A] border border-[#86C33A]/30 py-3 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 sm:p-12 rounded-2xl border border-[#DDE8C2] shadow-sm">
              <h2 className="font-display text-2xl font-semibold text-[#101F18] mb-1">
                Send Us a Message
              </h2>
              <p className="text-xs sm:text-sm text-[#8A9388] mb-6">
                Fill in your details below and our team will get back to you within 4-6 business hours.
              </p>

              {submitted ? (
                <div className="p-8 text-center bg-[#F9FBF4] border border-[#86C33A]/30 space-y-3 animate-fadeIn">
                  <CheckCircle className="w-12 h-12 text-[#86C33A] mx-auto" />
                  <h3 className="font-display text-lg font-semibold text-[#101F18]">Message Sent Successfully</h3>
                  <p className="text-xs text-[#5A5A52] max-w-sm mx-auto">
                    Thank you for contacting Gomzi Lifesciences. Our team has received your inquiry and will respond shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#3A3A34] uppercase tracking-wider mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 bg-[#FFFFFF] rounded-2xl border border-[#DDE8C2] text-xs font-semibold focus:outline-hidden focus:border-[#86C33A]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#3A3A34] uppercase tracking-wider mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 bg-[#FFFFFF] rounded-2xl border border-[#DDE8C2] text-xs font-semibold focus:outline-hidden focus:border-[#86C33A]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#3A3A34] uppercase tracking-wider mb-1">
                        Contact Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 bg-[#FFFFFF] rounded-2xl border border-[#DDE8C2] text-xs font-semibold focus:outline-hidden focus:border-[#86C33A]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#3A3A34] uppercase tracking-wider mb-1">
                        Subject / Query Type
                      </label>
                      <CustomDropdown
                        value={formData.subject}
                        onChange={(val) => setFormData({ ...formData, subject: val })}
                        options={[
                          { value: 'General Inquiry', label: 'General Nutrition Inquiry' },
                          { value: 'Order Status', label: 'Order & Shipping Status' },
                          { value: 'Wholesale', label: 'Wholesale & Distributorship' },
                          { value: 'Product Feedback', label: 'Product Feedback' }
                        ]}
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#3A3A34] uppercase tracking-wider mb-1">
                      Your Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="How can our formulation and wellness team assist you today?"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 bg-[#FFFFFF] rounded-2xl border border-[#DDE8C2] text-xs font-semibold focus:outline-hidden focus:border-[#86C33A] resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#86C33A] hover:bg-[#6AA326] text-white py-3.5 rounded-xl font-bold text-sm tracking-wide transition-colors flex items-center justify-center gap-2 shadow-sm"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Team</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
