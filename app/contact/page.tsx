'use client';

import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Mail, Phone, Send, MapPin, MessageSquare } from 'lucide-react';

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message Sent: We will respond to your query via email within 24 hours!');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <span className="text-[10px] font-bold text-trading-gold bg-trading-gold/10 px-3 py-1 rounded-full border border-trading-gold/20 inline-block mb-3 uppercase tracking-wider">
          SUPPORT HUB
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-white mb-3">GET IN TOUCH WITH US</h1>
        <p className="text-xs text-gray-400">Have questions about subscription tiers, lifetime access, or partnership? Contact us directly.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Info Cards */}
        <div className="space-y-6">
          <div className="glass-luxury-panel p-6 rounded-2xl border border-white/5 space-y-4">
            <h3 className="font-bold text-white text-sm uppercase tracking-wider flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-trading-gold" />
              <span>Official Support Channels</span>
            </h3>
            
            <div className="space-y-3.5 text-xs text-gray-300">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-trading-gold shrink-0" />
                <span>support@masumxtrade.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Send className="w-4 h-4 text-trading-glow shrink-0" />
                <span>t.me/masumxtrade_support</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-trading-bearish shrink-0" />
                <span>Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>

          <div className="bg-white/5 p-6 rounded-2xl border border-white/5 space-y-3">
            <h4 className="text-xs font-bold text-white">Looking for Instant Setup?</h4>
            <p className="text-[11px] text-gray-400 leading-relaxed">
              Lifetime members receive access to a private dedicated Telegram support bot for custom indicator setup files and MT5 terminal integrations.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="glass-luxury-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-4">
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">Full Name</label>
            <input
              type="text"
              required
              placeholder="Masum Ahmed"
              className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-trading-gold"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">Email Address</label>
            <input
              type="email"
              required
              placeholder="name@gmail.com"
              className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-trading-gold"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">Message Body</label>
            <textarea
              required
              placeholder="Describe your payment or lesson access issue in detail..."
              className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-xs text-white focus:outline-none focus:border-trading-gold min-h-[120px]"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-xl font-bold bg-gold-gradient text-black hover:brightness-110 transition text-xs"
          >
            Submit Message
          </button>
        </form>
      </div>
    </div>
  );
}