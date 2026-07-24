'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, ArrowLeft, Send } from 'lucide-react';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Firebase Simulated Reset: Reset email sent successfully!');
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 relative">
      <div className="w-full max-w-md glass-luxury-panel p-8 rounded-3xl border border-white/10 shadow-blue-glow relative overflow-hidden">
        
        <div className="text-center mb-8">
          <span className="text-[10px] font-bold tracking-widest text-trading-gold uppercase bg-trading-gold/10 px-2.5 py-1 rounded border border-trading-gold/20 inline-block mb-3">
            RECOVER PASSWORD
          </span>
          <h1 className="text-2xl font-black text-white">Reset Password</h1>
          <p className="text-xs text-gray-400 mt-1">Enter your email address to receive password reset link.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">Email Address</label>
            <div className="relative">
              <input
                type="email"
                placeholder="yourname@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 pl-10 text-xs text-white focus:outline-none focus:border-trading-gold"
              />
              <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-500" />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-xl font-bold bg-gold-gradient text-black hover:brightness-110 transition text-xs flex items-center justify-center space-x-2"
          >
            <span>Send Reset Instructions</span>
            <Send className="w-4 h-4" />
          </button>
        </form>

        <div className="mt-6 pt-6 border-t border-white/5 text-center">
          <Link href="/login" className="text-xs text-gray-400 hover:text-white transition flex items-center justify-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Login</span>
          </Link>
        </div>

      </div>
    </div>
  );
}