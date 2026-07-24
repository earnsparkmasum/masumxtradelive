'use client';

import React from 'react';
import { Award, ShieldCheck, Heart, User, ChevronRight, Globe2, Target, Users } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      {/* Title */}
      <div className="text-center mb-16">
        <span className="text-[10px] font-bold text-trading-gold bg-trading-gold/10 px-3 py-1 rounded-full border border-trading-gold/20 inline-block mb-3 uppercase tracking-wider">
          ABOUT OUR COMPANY
        </span>
        <h1 className="text-4xl sm:text-6xl font-black text-white mb-3">MASUMX TRADE ACADEMY</h1>
        <p className="text-xs sm:text-sm text-gray-400 max-w-xl mx-auto">
          Built by active retail investors to deliver Institutional level strategies, live trading terminals, and custom tools.
        </p>
      </div>

      {/* Grid: Vision, Mission, Founder */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        
        {/* Card 1: Founder */}
        <div className="glass-luxury-panel p-8 rounded-3xl border border-white/10 flex flex-col justify-between hover:border-trading-gold/20 transition relative overflow-hidden shadow-gold-glow">
          <div className="absolute top-0 right-0 w-24 h-24 bg-trading-gold/5 rounded-full blur-xl"></div>
          <div>
            <span className="text-[10px] font-bold text-trading-gold uppercase tracking-widest block mb-1">FOUNDER & CEO</span>
            <h3 className="text-2xl font-black text-white mb-4">Masum Ahmed</h3>
            <p className="text-xs text-gray-300 leading-relaxed mb-6">
              "MASUMX TRADE was founded with a singular purpose: to cut through the false narratives of retail forex indicators and teach the actual mechanics of bank order flow, smart money displacement, and strict math-based trade scaling."
            </p>
          </div>
          <div className="flex space-x-3 text-xs text-gray-400 pt-4 border-t border-white/5">
            <span className="font-semibold text-white">8+ Years Experience</span>
            <span>•</span>
            <span>Former Prop Firm Trader</span>
          </div>
        </div>

        {/* Card 2: Mission & Vision */}
        <div className="glass-luxury-panel p-8 rounded-3xl border border-white/5 flex flex-col justify-between space-y-6">
          <div className="space-y-3">
            <div className="flex items-center space-x-2 text-trading-gold font-bold text-xs uppercase tracking-wider">
              <Target className="w-4 h-4" />
              <span>Our Mission</span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              Empower independent home traders in Bangladesh and globally with professional-grade institutional setups, risk-limit dashboards, and secure automated payment integration.
            </p>
          </div>

          <div className="space-y-3 pt-6 border-t border-white/5">
            <div className="flex items-center space-x-2 text-trading-glow font-bold text-xs uppercase tracking-wider">
              <Globe2 className="w-4 h-4" />
              <span>Our Vision</span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              Build the largest and most interactive price action trading workspace, supporting real-time chat, continuous learning path badges, and daily premium sessions.
            </p>
          </div>
        </div>

      </div>

      {/* Trust & Badges */}
      <div className="glass-luxury-panel p-8 rounded-3xl border border-white/5 text-center">
        <h3 className="text-sm font-bold text-white mb-6 uppercase tracking-widest">Why Choose MASUMX</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="space-y-2">
            <div className="w-10 h-10 rounded-full bg-trading-gold/10 text-trading-gold flex items-center justify-center mx-auto">
              <Award className="w-5 h-5" />
            </div>
            <h4 className="text-xs font-bold text-white">Certified Mentorship</h4>
            <p className="text-[11px] text-gray-400 leading-relaxed">All curriculum is audited to fit official global SMC criteria.</p>
          </div>
          <div className="space-y-2">
            <div className="w-10 h-10 rounded-full bg-trading-glow/10 text-trading-glow flex items-center justify-center mx-auto">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="text-xs font-bold text-white">Protected Platform</h4>
            <p className="text-[11px] text-gray-400 leading-relaxed">Secured Firebase firestore rules and protected routers.</p>
          </div>
          <div className="space-y-2">
            <div className="w-10 h-10 rounded-full bg-trading-bullish/10 text-trading-bullish flex items-center justify-center mx-auto">
              <Users className="w-5 h-5" />
            </div>
            <h4 className="text-xs font-bold text-white">Active Growth</h4>
            <p className="text-[11px] text-gray-400 leading-relaxed">Interactive forum, pinned warnings, and weekly meetups.</p>
          </div>
        </div>
      </div>

    </div>
  );
}