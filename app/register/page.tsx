'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, Lock, User, ShieldAlert, ArrowRight, Sparkles } from 'lucide-react';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [membership, setMembership] = useState<'free' | 'premium' | 'lifetime'>('free');

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Firebase Simulated Register: Account created successfully with ${membership} membership!`);
  };

  return (
    <div className="min-h-[90vh] flex items-center justify-center px-4 py-10 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-trading-gold/5 via-transparent to-transparent pointer-events-none"></div>
      
      <div className="w-full max-w-lg glass-luxury-panel p-8 rounded-3xl border border-white/10 shadow-gold-glow relative overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-trading-glow/5 rounded-full blur-xl"></div>
        
        <div className="text-center mb-8">
          <span className="text-[10px] font-black tracking-widest text-trading-gold uppercase bg-trading-gold/10 px-2.5 py-1 rounded border border-trading-gold/20 inline-block mb-3">
            CREATE ACCOUNT
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-white">Join MASUMX TRADE</h1>
          <p className="text-xs text-gray-400 mt-1">Acquire mathematical SMC models & secure trading calculators.</p>
        </div>

        {/* Membership selector */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {(['free', 'premium', 'lifetime'] as const).map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setMembership(type)}
              className={`p-3 rounded-xl border text-center transition flex flex-col items-center justify-center ${
                membership === type 
                  ? 'bg-trading-gold/10 border-trading-gold text-trading-gold' 
                  : 'bg-white/5 border-white/5 text-gray-400 hover:text-white'
              }`}
            >
              <span className="text-xs font-bold uppercase tracking-wider">{type}</span>
              <span className="text-[9px] text-gray-500 mt-0.5">
                {type === 'free' ? 'Basic' : type === 'premium' ? '$29/mo' : 'Lifetime'}
              </span>
            </button>
          ))}
        </div>

        <form onSubmit={handleRegister} className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">Your Full Name</label>
            <div className="relative">
              <input
                type="text"
                placeholder="Masum Ahmed"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 pl-10 text-xs text-white focus:outline-none focus:border-trading-gold"
              />
              <User className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-500" />
            </div>
          </div>

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
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">Secure Password</label>
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
            <span>Register & Pay Gateway</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="mt-6 pt-6 border-t border-white/5 text-center text-xs text-gray-400">
          <span>Already have an account? </span>
          <Link href="/login" className="text-trading-gold font-bold hover:underline">Log In</Link>
        </div>

      </div>
    </div>
  );
}