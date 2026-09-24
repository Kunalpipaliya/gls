import React, { useState } from 'react';
import { X, User, Lock, Mail, ArrowRight, ShieldCheck, Check } from 'lucide-react';

export default function AuthModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity animate-fadeIn"
      />

      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative w-full max-w-md bg-white shadow-sm overflow-hidden rounded-2xl border border-[#DDE8C2] p-6 sm:p-8 animate-scaleUp">
          
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 text-[#8A9388] hover:text-black hover:bg-[#EDF5DC] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="text-center space-y-2 mb-6">
            <div className="w-12 h-12 bg-[#EDF5DC] rounded-2xl border border-[#DDE8C2] flex items-center justify-center mx-auto text-[#86C33A]">
              <User className="w-6 h-6" />
            </div>
            <h3 className="font-display text-2xl font-semibold text-[#101F18]">
              {isLogin ? 'Welcome Back' : 'Create an Account'}
            </h3>
            <p className="text-xs text-[#8A9388]">
              Access your order tracking, batch reports and loyalty rewards.
            </p>
          </div>

          {success ? (
            <div className="text-center py-6 space-y-3">
              <div className="w-14 h-14 bg-[#EFF6DD] border border-[#86C33A]/40 text-[#6AA326] flex items-center justify-center mx-auto">
                <Check className="w-7 h-7" />
              </div>
              <h4 className="font-display text-lg font-semibold text-[#101F18]">
                {isLogin ? 'Logged in successfully!' : 'Account registered!'}
              </h4>
              <p className="text-xs text-[#8A9388]">Redirecting to your dashboard...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <div>
                  <label className="block text-xs font-bold text-[#5A5A52] uppercase mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Priyanshu Sharma"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-2xl border border-[#DDE8C2] text-sm focus:outline-hidden focus:border-[#86C33A]"
                  />
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-[#5A5A52] uppercase mb-1">Email Address</label>
                <div className="relative">
                  <Mail className="w-4 h-4 absolute left-3.5 top-3 text-[#8A9388]" />
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-2xl border border-[#DDE8C2] text-sm focus:outline-hidden focus:border-[#86C33A]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#5A5A52] uppercase mb-1">Password</label>
                <div className="relative">
                  <Lock className="w-4 h-4 absolute left-3.5 top-3 text-[#8A9388]" />
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-2xl border border-[#DDE8C2] text-sm focus:outline-hidden focus:border-[#86C33A]"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#86C33A] hover:bg-[#6AA326] text-white py-3 rounded-xl font-bold text-sm tracking-wide transition-colors mt-2 shadow-xs"
              >
                {isLogin ? 'Sign In to Account' : 'Create Free Account'}
              </button>

              <div className="text-center pt-2">
                <button
                  type="button"
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-xs font-semibold text-[#5A5A52] hover:text-[#86C33A] underline"
                >
                  {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Sign In"}
                </button>
              </div>
            </form>
          )}

        </div>
      </div>
    </div>
  );
}
