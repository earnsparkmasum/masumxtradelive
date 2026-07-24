'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  TrendingUp, Play, BookOpen, Layers, Users, Zap, ShieldCheck, 
  ArrowUpRight, Clock, Star, Landmark, ChevronRight, Award, MessageSquare 
} from 'lucide-react';

export default function HomePage() {
  const [time, setTime] = useState('');
  const [activeMarket, setActiveMarket] = useState('crypto');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Asia/Dhaka', hour12: true }));
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const marketSessions = [
    { name: 'Bangladesh', time: '9:00 AM - 5:00 PM', status: 'Closed', color: 'text-gray-500' },
    { name: 'London', time: '1:00 PM - 9:00 PM', status: 'Open', color: 'text-trading-bullish' },
    { name: 'New York', time: '6:00 PM - 2:00 AM', status: 'Open', color: 'text-trading-bullish' },
    { name: 'Tokyo', time: '6:00 AM - 2:00 PM', status: 'Closed', color: 'text-gray-500' },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      
      {/* Animated Candlestick Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10">
        <div className="absolute left-10 w-1 bg-trading-bullish h-32 candle-anim" style={{ animationDelay: '0s' }}></div>
        <div className="absolute left-1/4 w-1.5 bg-trading-bearish h-48 candle-anim" style={{ animationDelay: '3s' }}></div>
        <div className="absolute left-1/2 w-1 bg-trading-bullish h-40 candle-anim" style={{ animationDelay: '7s' }}></div>
        <div className="absolute right-1/4 w-1 bg-trading-bearish h-24 candle-anim" style={{ animationDelay: '2s' }}></div>
        <div className="absolute right-10 w-1.5 bg-trading-bullish h-36 candle-anim" style={{ animationDelay: '5s' }}></div>
      </div>

      {/* Glow Rings */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-trading-glow/10 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-40 right-10 w-[300px] h-[300px] rounded-full bg-trading-gold/5 blur-[100px] pointer-events-none"></div>

      {/* HERO SECTION */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24 text-center">
        <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6 hover:border-trading-gold/30 transition duration-300">
          <Zap className="w-4 h-4 text-trading-gold" />
          <span className="text-xs font-semibold text-gray-300">New Lifetime Membership Discount is Live!</span>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-none mb-6">
          <span className="bg-gradient-to-r from-white via-gray-100 to-gray-400 bg-clip-text text-transparent">MASTER THE MARKETS WITH</span><br />
          <span className="bg-gradient-to-r from-trading-gold via-amber-400 to-yellow-500 bg-clip-text text-transparent">PREMIUM SMART MONEY STRATEGIES</span>
        </h1>

        <p className="max-w-2xl mx-auto text-sm sm:text-lg text-gray-400 mb-10 leading-relaxed">
          Access high-probability price action courses, custom indicator strategies, dynamic position calculators, and our live interactive Bangladesh trading room.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link
            href="/register"
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold bg-gold-gradient text-black shadow-gold-glow hover:brightness-110 transition duration-300 flex items-center justify-center space-x-2"
          >
            <span>Start Learning Free</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
          <Link
            href="/strategy"
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold bg-white/5 border border-white/10 text-white hover:bg-white/10 transition duration-300 flex items-center justify-center space-x-2"
          >
            <span>View Premium Strategies</span>
          </Link>
        </div>
      </section>

      {/* TRADINGVIEW LIVE WIDGET & SESSIONS */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Live Chart Container */}
          <div className="lg:col-span-2 glass-luxury-panel p-6 rounded-3xl border border-white/10 shadow-glass-luxury">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-trading-bullish animate-pulse"></div>
                <h3 className="font-bold text-white text-sm uppercase tracking-wider">Live TradingView Market Terminal</h3>
              </div>
              <div className="flex space-x-2 text-xs">
                {['crypto', 'forex', 'stocks'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveMarket(tab)}
                    className={`px-3 py-1.5 rounded-lg border transition ${
                      activeMarket === tab 
                        ? 'bg-trading-gold/20 border-trading-gold text-trading-gold font-bold' 
                        : 'bg-white/5 border-white/5 text-gray-400 hover:text-white'
                    }`}
                  >
                    {tab.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* Embedded Live Widget Sandbox representation */}
            <div className="bg-black/60 rounded-2xl h-[380px] border border-white/5 flex flex-col justify-center items-center text-center p-6 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
              <TrendingUp className="w-12 h-12 text-trading-gold mb-4 animate-bounce" />
              <h4 className="text-white font-bold mb-1">TradingView Terminal Simulated View</h4>
              <p className="text-xs text-gray-400 max-w-md">
                Live interactive chart will load here dynamically using real-time widget libraries. Supports indicators, fullscreen, timeframe switching, and symbols.
              </p>
            </div>
          </div>

          {/* Market Clock & Live Sessions */}
          <div className="glass-luxury-panel p-6 rounded-3xl border border-white/10 shadow-glass-luxury flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center border-b border-white/5 pb-4 mb-6">
                <h3 className="font-bold text-white text-sm uppercase tracking-wider">Market Clock</h3>
                <Clock className="w-4 h-4 text-trading-gold" />
              </div>

              {/* Bangladesh Clock */}
              <div className="text-center py-6 bg-white/5 rounded-2xl border border-white/5 mb-6">
                <span className="text-[10px] font-bold text-trading-gold uppercase tracking-widest block mb-1">Bangladesh Standard Time</span>
                <span className="text-3xl font-black font-mono tracking-wider text-white">{time || '00:00:00 AM'}</span>
              </div>

              {/* World Sessions */}
              <div className="space-y-3">
                {marketSessions.map((session) => (
                  <div key={session.name} className="flex justify-between items-center text-xs bg-white/5 p-3 rounded-xl border border-white/5">
                    <div>
                      <span className="font-semibold text-white block">{session.name}</span>
                      <span className="text-gray-400 text-[10px]">{session.time}</span>
                    </div>
                    <span className={`font-bold ${session.color}`}>{session.status}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link
              href="/live-trading"
              className="mt-6 w-full text-center text-xs font-bold py-3.5 rounded-xl border border-trading-gold/30 bg-trading-gold/10 text-trading-gold hover:bg-trading-gold/20 transition duration-300 flex items-center justify-center space-x-2"
            >
              <span>Join Live Trading Room</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </section>

      {/* CORE PLATFORM STATS */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Total Enrolled Students', value: '4,800+' },
            { label: 'Win Rate Certified', value: '84.2%' },
            { label: 'Strategies Documented', value: '18+' },
            { label: 'Support Experts Online', value: '24/7' },
          ].map((stat, i) => (
            <div key={i} className="glass-luxury-panel p-6 rounded-2xl border border-white/5 text-center">
              <span className="text-2xl sm:text-3xl font-black text-white block mb-1 bg-gradient-to-r from-trading-gold to-yellow-500 bg-clip-text text-transparent">
                {stat.value}
              </span>
              <span className="text-[10px] sm:text-xs text-gray-400 font-semibold uppercase tracking-wider">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED SERVICES & PROMO GRID */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-4xl font-extrabold mb-3 text-white">LEARN TO TRADE LIKE A PRO</h2>
          <p className="text-xs sm:text-sm text-gray-400 max-w-xl mx-auto">
            Choose from comprehensive courses, ready-to-use custom indicator setups, or our fully featured trading journal tool.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Courses */}
          <div className="glass-luxury-panel p-6 rounded-3xl border border-white/5 hover:border-trading-gold/20 transition group">
            <div className="w-12 h-12 rounded-2xl bg-trading-gold/10 flex items-center justify-center text-trading-gold mb-6 group-hover:scale-110 transition duration-300">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Premium Video Courses</h3>
            <p className="text-xs text-gray-400 leading-relaxed mb-6">
              Complete beginner to advanced roadmap covering order blocks, liquidity voids, and daily bias. Includes interactive quizzes and completion badges.
            </p>
            <Link href="/courses" className="text-xs font-bold text-trading-gold flex items-center space-x-1 group-hover:underline">
              <span>Explore Courses</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Card 2: Strategies */}
          <div className="glass-luxury-panel p-6 rounded-3xl border border-white/5 hover:border-trading-gold/20 transition group">
            <div className="w-12 h-12 rounded-2xl bg-trading-glow/10 flex items-center justify-center text-trading-glow mb-6 group-hover:scale-110 transition duration-300">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Exclusive High-Probability Strategies</h3>
            <p className="text-xs text-gray-400 leading-relaxed mb-6">
              Tested mathematical setups on Support/Resistance, Trend breakouts, and Fibonacci gold zones. Every plan is carefully backed with risk rules.
            </p>
            <Link href="/strategy" className="text-xs font-bold text-trading-glow flex items-center space-x-1 group-hover:underline">
              <span>View Strategies</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Card 3: Live Community */}
          <div className="glass-luxury-panel p-6 rounded-3xl border border-white/5 hover:border-trading-gold/20 transition group">
            <div className="w-12 h-12 rounded-2xl bg-trading-bullish/10 flex items-center justify-center text-trading-bullish mb-6 group-hover:scale-110 transition duration-300">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Interactive Community & Chat</h3>
            <p className="text-xs text-gray-400 leading-relaxed mb-6">
              Share setups, get immediate feedback on your charts, and trade along with active community moderators in real-time.
            </p>
            <Link href="/community" className="text-xs font-bold text-trading-bullish flex items-center space-x-1 group-hover:underline">
              <span>Join Community</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-white/5">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-4xl font-extrabold mb-3 text-white">WHAT OUR MEMBERS SAY</h2>
          <p className="text-xs text-gray-400">Real feedback from actual active subscribers and trading room members.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: 'Ariful Islam', role: 'Full-time Forex Trader', text: 'MASUMX TRADE courses completely transformed how I look at daily bias. The Risk Management calculator alone is worth the premium!' },
            { name: 'Sabrina Rahman', role: 'Swing Trader', text: 'I love the support & resistance strategies. The custom metrics on the dashboard make it very easy to track my progress.' },
            { name: 'Mahmudul Hasan', role: 'Crypto Scalper', text: 'Excellent system design! The real-time Bangladesh timezone clock helps me align exactly with NY opening killzones.' },
          ].map((item, i) => (
            <div key={i} className="glass-luxury-panel p-6 rounded-2xl border border-white/5 relative flex flex-col justify-between">
              <div>
                <div className="flex space-x-1 mb-4">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="w-3.5 h-3.5 text-trading-gold fill-current" />
                  ))}
                </div>
                <p className="text-xs text-gray-300 italic leading-relaxed mb-6">"{item.text}"</p>
              </div>
              <div className="flex items-center space-x-3 pt-4 border-t border-white/5">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-bold text-xs text-white">
                  {item.name[0]}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">{item.name}</h4>
                  <span className="text-[10px] text-gray-400">{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mb-24">
        <div className="glass-luxury-panel p-8 sm:p-12 rounded-3xl border border-white/10 text-center relative overflow-hidden shadow-blue-glow">
          <div className="absolute top-0 right-0 w-24 h-24 bg-trading-gold/10 rounded-full blur-2xl"></div>
          <h2 className="text-xl sm:text-3xl font-black text-white mb-3">GET DAILY HIGH-PROBABILITY SETUPS</h2>
          <p className="text-xs sm:text-sm text-gray-400 max-w-md mx-auto mb-8">
            Subscribe to our premium email newsletter to receive weekly educational breakdowns, session market status, and indicators.
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your professional email address"
              className="flex-grow bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-trading-gold"
            />
            <button className="px-6 py-3 rounded-xl font-bold bg-gold-gradient text-black hover:brightness-110 transition duration-300 text-xs shrink-0">
              Subscribe Now
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}