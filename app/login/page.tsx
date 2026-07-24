'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, Lock, ShieldAlert, ArrowRight, Sparkles } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Firebase Simulated Login: Welcome back to MASUMX TRADE!');
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-tr from-trading-glow/5 via-transparent to-transparent pointer-events-none"></div>
      
      <div className="w-full max-w-md glass-luxury-panel p-8 rounded-3xl border border-white/10 shadow-blue-glow relative overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-trading-gold/5 rounded-full blur-xl"></div>
        
        <div className="text-center mb-8">
          <span className="text-[10px] font-black tracking-widest text-trading-gold uppercase bg-trading-gold/10 px-2.5 py-1 rounded border border-trading-gold/20 inline-block mb-3">
            SECURE ACCESS
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-white">Welcome Back</h1>
          <p className="text-xs text-gray-400 mt-1">Access your courses, dashboard, and strategies.</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
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

          <div className="space-y-1.5">
            <div className="flex justify-between items-center">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">Password</label>
              <Link href="/forgot-password" className="text-[10px] text-trading-gold hover:underline">Forgot?</Link>
            </div>
            <div className="relative">
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 pl-10 text-xs text-white focus:outline-none focus:border-trading-gold"
              />
              <Lock className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-500" />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-xl font-bold bg-gold-gradient text-black hover:brightness-110 transition text-xs flex items-center justify-center space-x-2 shadow-lg"
          >
            <span>Log In to Platform</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="mt-6 pt-6 border-t border-white/5 text-center text-xs text-gray-400">
          <span>Don't have an account? </span>
          <Link href="/register" className="text-trading-gold font-bold hover:underline">Join Premium</Link>
        </div>

      </div>
    </div>
  );
}