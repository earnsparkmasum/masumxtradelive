'use client';

import React, { useState } from 'react';
import { 
  Calculator, Percent, ShieldCheck, DollarSign, ArrowUpRight, 
  Sparkles, TrendingUp, Info, RotateCcw, Scale 
} from 'lucide-react';

export default function CalculatorsPage() {
  // Calculator 1: Position Size Calculator
  const [accountSize, setAccountSize] = useState('10000');
  const [riskPercent, setRiskPercent] = useState('1');
  const [stopLossPips, setStopLossPips] = useState('20');
  const [calculatedPosition, setCalculatedPosition] = useState<{ amount: number; lots: number } | null>({
    amount: 100,
    lots: 0.5
  });

  // Calculator 2: Profit/Loss (P&L) Calculator
  const [entryPrice, setEntryPrice] = useState('1.08500');
  const [exitPrice, setExitPrice] = useState('1.09500');
  const [lots, setLots] = useState('0.5');
  const [direction, setDirection] = useState<'BUY' | 'SELL'>('BUY');
  const [pnlResult, setPnlResult] = useState<number | null>(500);

  const calculatePositionSize = (e: React.FormEvent) => {
    e.preventDefault();
    const size = parseFloat(accountSize);
    const risk = parseFloat(riskPercent);
    const pips = parseFloat(stopLossPips);

    if (isNaN(size) || isNaN(risk) || isNaN(pips) || pips <= 0) return;

    const riskAmount = size * (risk / 100);
    // Standard rule: 1 standard lot = $10 per pip on EURUSD / major pairs
    const lotSize = riskAmount / (pips * 10);

    setCalculatedPosition({
      amount: parseFloat(riskAmount.toFixed(2)),
      lots: parseFloat(lotSize.toFixed(2))
    });
  };

  const calculatePnl = (e: React.FormEvent) => {
    e.preventDefault();
    const entry = parseFloat(entryPrice);
    const exit = parseFloat(exitPrice);
    const lotAmount = parseFloat(lots);

    if (isNaN(entry) || isNaN(exit) || isNaN(lotAmount)) return;

    const pipDifference = direction === 'BUY' 
      ? (exit - entry) * 10000 
      : (entry - exit) * 10000;

    const totalPnl = pipDifference * 10 * lotAmount;
    setPnlResult(parseFloat(totalPnl.toFixed(2)));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      {/* Title */}
      <div className="text-center mb-12">
        <span className="text-[10px] font-bold text-trading-gold bg-trading-gold/10 px-3 py-1 rounded-full border border-trading-gold/20 inline-block mb-3 uppercase tracking-wider">
          TRADING TOOLBOX
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-white mb-3">PROFESSIONAL TRADING CALCULATORS</h1>
        <p className="text-xs sm:text-sm text-gray-400 max-w-xl mx-auto">
          Manage your mathematical risks precisely. Calculate position size using strict risk rules, or project potential profit and loss on your currency pairs.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Card 1: Position Size Calculator */}
        <div className="glass-luxury-panel p-6 sm:p-8 rounded-3xl border border-white/10 flex flex-col justify-between hover:border-trading-gold/20 transition relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-trading-gold/5 rounded-full blur-xl"></div>
          
          <div>
            <div className="flex items-center space-x-2 text-trading-gold font-bold text-xs uppercase tracking-wider mb-6">
              <Scale className="w-5 h-5" />
              <span>Position Size & Risk Calculator</span>
            </div>

            <form onSubmit={calculatePositionSize} className="space-y-4 mb-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">Account Size ($)</label>
                  <input
                    type="number"
                    value={accountSize}
                    onChange={(e) => setAccountSize(e.target.value)}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-trading-gold"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">Risk Percent (%)</label>
                  <input
                    type="number"
                    step="0.1"
                    value={riskPercent}
                    onChange={(e) => setRiskPercent(e.target.value)}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-trading-gold"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">Stop Loss (Pips)</label>
                <input
                  type="number"
                  value={stopLossPips}
                  onChange={(e) => setStopLossPips(e.target.value)}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-trading-gold"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl font-bold bg-trading-gold text-black hover:brightness-110 transition text-xs"
              >
                Calculate Risk Lots
              </button>
            </form>
          </div>

          {/* Result View */}
          {calculatedPosition && (
            <div className="bg-white/5 p-5 rounded-2xl border border-white/5 space-y-4">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <span className="block text-[9px] text-gray-500 font-bold uppercase tracking-wider">Amount at Risk</span>
                  <span className="text-xl font-black text-trading-bearish">${calculatedPosition.amount}</span>
                </div>
                <div>
                  <span className="block text-[9px] text-gray-500 font-bold uppercase tracking-wider">Recommended Lots</span>
                  <span className="text-xl font-black text-trading-bullish">{calculatedPosition.lots} Lots</span>
                </div>
              </div>
              <p className="text-[10px] text-gray-400 text-center leading-relaxed">
                *Calculation is optimized for standard major currency pairs (e.g. EURUSD, GBPUSD) where 1 Pip on 1 Standard Lot equals $10.00.
              </p>
            </div>
          )}

        </div>

        {/* Card 2: Profit/Loss Calculator */}
        <div className="glass-luxury-panel p-6 sm:p-8 rounded-3xl border border-white/10 flex flex-col justify-between hover:border-trading-glow/20 transition relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-trading-glow/5 rounded-full blur-xl"></div>
          
          <div>
            <div className="flex items-center space-x-2 text-trading-glow font-bold text-xs uppercase tracking-wider mb-6">
              <TrendingUp className="w-5 h-5" />
              <span>Profit & Loss Projector</span>
            </div>

            <form onSubmit={calculatePnl} className="space-y-4 mb-6">
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setDirection('BUY')}
                  className={`py-2 rounded-xl text-xs font-bold border transition ${
                    direction === 'BUY' 
                      ? 'bg-trading-bullish/20 border-trading-bullish text-trading-bullish' 
                      : 'bg-white/5 border-white/5 text-gray-400'
                  }`}
                >
                  BUY (Long)
                </button>
                <button
                  type="button"
                  onClick={() => setDirection('SELL')}
                  className={`py-2 rounded-xl text-xs font-bold border transition ${
                    direction === 'SELL' 
                      ? 'bg-trading-bearish/20 border-trading-bearish text-trading-bearish' 
                      : 'bg-white/5 border-white/5 text-gray-400'
                  }`}
                >
                  SELL (Short)
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">Entry Price</label>
                  <input
                    type="text"
                    value={entryPrice}
                    onChange={(e) => setEntryPrice(e.target.value)}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-trading-glow"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">Exit Price</label>
                  <input
                    type="text"
                    value={exitPrice}
                    onChange={(e) => setExitPrice(e.target.value)}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-trading-glow"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">Lots / Trade Size</label>
                <input
                  type="number"
                  step="0.01"
                  value={lots}
                  onChange={(e) => setLots(e.target.value)}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-trading-glow"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl font-bold bg-trading-glow text-white hover:brightness-110 transition text-xs"
              >
                Project Profit & Loss
              </button>
            </form>
          </div>

          {/* Projector Result View */}
          {pnlResult !== null && (
            <div className="bg-white/5 p-5 rounded-2xl border border-white/5 space-y-4">
              <div className="text-center">
                <span className="block text-[9px] text-gray-500 font-bold uppercase tracking-wider">Projected P&L Result</span>
                <span className={`text-2xl font-black ${
                  pnlResult >= 0 ? 'text-trading-bullish' : 'text-trading-bearish'
                }`}>
                  {pnlResult >= 0 ? `+$${pnlResult}` : `-$${Math.abs(pnlResult)}`}
                </span>
              </div>
              <p className="text-[10px] text-gray-400 text-center leading-relaxed">
                *Calculations do not account for standard spread markup, commission rules, or swap rollover fees.
              </p>
            </div>
          )}

        </div>

      </div>

    </div>
  );
}