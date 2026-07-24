'use client';

import React, { useState } from 'react';
import { Layers, CheckCircle2, TrendingUp, ShieldAlert, Sparkles, Target, Zap, Swords } from 'lucide-react';

export default function StrategyPage() {
  const [activeTab, setActiveCategory] = useState<'All' | 'indicators' | 'risk-management' | 'price-action' | 'breakout'>('All');

  const strategies = [
    {
      id: 's1',
      title: 'Order Block Mitigation & Fair Value Gap (FVG) Strategy',
      category: 'price-action',
      winRate: '82%',
      difficulty: 'Advanced',
      indicatorRequired: 'None (Pure Price Action)',
      description: 'Trade pure institution liquidity sweeps. Watch for high-volume breaks of structure followed by FVG retests inside bullish order blocks.',
      rules: [
        'Identify HTF (Higher Time Frame) daily bias & order flow.',
        'Wait for LTF sweep of liquidity (asian range high/low).',
        'Mark the displacement breaking the market structure (BMS).',
        'Place limit buy/sell at the 50% equilibrium of the Fair Value Gap.'
      ]
    },
    {
      id: 's2',
      title: 'The EMA Cross & Volume Profile Momentum Strategy',
      category: 'indicators',
      winRate: '74%',
      difficulty: 'Beginner',
      indicatorRequired: 'EMA 21/50, Volume Profile',
      description: 'A great trending market strategy. Enter during high volume spikes when 21 EMA crosses over the 50 EMA during New York killzone.',
      rules: [
        'Add Exponential Moving Average (21, 50) on TradingView.',
        'Enter on the retest of EMA 21 after a valid crossover occurred.',
        'Ensure Point of Control (POC) from Volume profile is aligned with entry.',
        'Stop loss strictly set below the previous swing low.'
      ]
    },
    {
      id: 's3',
      title: 'Dynamic Position Sizing & 1% Max Account Risk rule',
      category: 'risk-management',
      winRate: '95% (Risk management success)',
      difficulty: 'Beginner',
      indicatorRequired: 'Position Size Calculator',
      description: 'The foundation of profitable trading. Limit individual trades to exactly 1% account risk with strict risk-to-reward ratios.',
      rules: [
        'Never risk more than 1.5% of total equity on any single asset pair.',
        'Only choose trade setups with a minimum of 1:2 RRR.',
        'Move stop loss to break-even (BE) once target 1 (1:1 RRR) is achieved.',
        'Close trading terminal after two consecutive losses of the session.'
      ]
    },
    {
      id: 's4',
      title: 'London Breakout Killzone Strategy',
      category: 'breakout',
      winRate: '79%',
      difficulty: 'Intermediate',
      indicatorRequired: 'Session Marker',
      description: 'Capture early volatility of London session. Enter as price breaks the Asian session high or low with strong volume confirmation.',
      rules: [
        'Mark Asian Range boundaries between 6:00 AM to 1:00 PM BST.',
        'Wait for London Open at 1:00 PM BST.',
        'Buy or sell only when candle closes outside of Asian High/Low.',
        'Avoid trading when there is high-impact USD or GBP economic news.'
      ]
    }
  ];

  const filteredStrategies = activeTab === 'All' 
    ? strategies 
    : strategies.filter(s => s.category === activeTab);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      {/* Title */}
      <div className="text-center mb-12">
        <span className="text-[10px] font-bold text-trading-gold bg-trading-gold/10 px-3 py-1 rounded-full border border-trading-gold/20 inline-block mb-3 uppercase tracking-wider">
          STRATEGY HUB
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-white mb-3">HIGH WIN-RATE TRADING BLUEPRINTS</h1>
        <p className="text-xs sm:text-sm text-gray-400 max-w-xl mx-auto">
          Proven mechanical blueprints with detailed step-by-step rules, volume requirements, and specific timeframe setups.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {(['All', 'indicators', 'risk-management', 'price-action', 'breakout'] as const).map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition uppercase tracking-wider ${
              activeTab === cat 
                ? 'bg-trading-gold text-black font-bold' 
                : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/5'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Strategy Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredStrategies.map((strat) => (
          <div key={strat.id} className="glass-luxury-panel p-6 sm:p-8 rounded-3xl border border-white/10 flex flex-col justify-between hover:border-trading-gold/30 transition duration-300 relative group overflow-hidden">
            
            <div className="absolute top-0 right-0 w-24 h-24 bg-trading-gold/5 rounded-full blur-xl group-hover:bg-trading-gold/10 transition"></div>

            <div className="space-y-4">
              <div className="flex flex-wrap justify-between items-center gap-2">
                <span className="text-[10px] font-bold text-trading-gold uppercase tracking-wider bg-trading-gold/10 px-2.5 py-1 rounded-md border border-trading-gold/20">
                  {strat.category}
                </span>
                <div className="flex items-center space-x-2 text-xs font-bold text-trading-bullish">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Win Rate: {strat.winRate}</span>
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-black text-white">{strat.title}</h3>
              <p className="text-xs text-gray-300 leading-relaxed">{strat.description}</p>

              {/* Rules List */}
              <div className="space-y-2.5 pt-4 border-t border-white/5">
                <h4 className="text-xs font-bold text-white flex items-center space-x-2">
                  <Target className="w-3.5 h-3.5 text-trading-gold" />
                  <span>Mechanical Entry Rules:</span>
                </h4>
                <ol className="space-y-2">
                  {strat.rules.map((rule, idx) => (
                    <li key={idx} className="flex gap-2 text-xs text-gray-400 leading-relaxed">
                      <span className="font-bold text-trading-gold shrink-0">{idx + 1}.</span>
                      <span>{rule}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Bottom Stats */}
            <div className="flex justify-between items-center pt-6 border-t border-white/5 mt-6 text-xs text-gray-400">
              <div>
                <span className="block text-[10px] text-gray-500 font-bold uppercase tracking-wider">Required Tool</span>
                <span className="font-semibold text-white">{strat.indicatorRequired}</span>
              </div>
              <div className="text-right">
                <span className="block text-[10px] text-gray-500 font-bold uppercase tracking-wider">Difficulty</span>
                <span className={`font-semibold ${
                  strat.difficulty === 'Advanced' ? 'text-trading-bearish' : 'text-trading-bullish'
                }`}>{strat.difficulty}</span>
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}