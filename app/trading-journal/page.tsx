'use client';

import React, { useState } from 'react';
import { 
  BookOpenCheck, Calendar, TrendingUp, DollarSign, Plus, 
  Trash2, Filter, Sparkles, CheckCircle2, AlertCircle 
} from 'lucide-react';

export default function JournalPage() {
  const [entries, setEntries] = useState([
    {
      id: 'j1',
      date: '2026-07-24',
      pair: 'EURUSD',
      type: 'BUY',
      entry: 1.08200,
      exit: 1.08700,
      lots: 0.5,
      pnl: 250,
      notes: 'Beautiful 15m FVG displacement retest. Strictly followed 1% account risk.'
    },
    {
      id: 'j2',
      date: '2026-07-23',
      pair: 'GBPUSD',
      type: 'SELL',
      entry: 1.28900,
      exit: 1.28400,
      lots: 0.4,
      pnl: 200,
      notes: 'Institutional liquidity sweep at NY open killzone. Fast execution.'
    }
  ]);

  const [date, setDate] = useState('');
  const [pair, setPair] = useState('EURUSD');
  const [type, setType] = useState<'BUY' | 'SELL'>('BUY');
  const [entry, setEntry] = useState('');
  const [exit, setExit] = useState('');
  const [lots, setLots] = useState('0.5');
  const [pnl, setPnl] = useState('');
  const [notes, setNotes] = useState('');

  const handleAddEntry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!date || !pair || !entry || !exit || !pnl) return;

    const newEntry = {
      id: `j-${Date.now()}`,
      date,
      pair,
      type,
      entry: parseFloat(entry),
      exit: parseFloat(exit),
      lots: parseFloat(lots),
      pnl: parseFloat(pnl),
      notes
    };

    setEntries([newEntry, ...entries]);
    // reset form fields
    setEntry('');
    setExit('');
    setPnl('');
    setNotes('');
  };

  const handleDelete = (id: string) => {
    setEntries(entries.filter(e => e.id !== id));
  };

  // Derived calculations
  const totalTrades = entries.length;
  const profitableTrades = entries.filter(e => e.pnl > 0).length;
  const winRate = totalTrades > 0 ? ((profitableTrades / totalTrades) * 100).toFixed(1) : '0';
  const netPnl = entries.reduce((acc, curr) => acc + curr.pnl, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      {/* Title */}
      <div className="text-center mb-12">
        <span className="text-[10px] font-bold text-trading-gold bg-trading-gold/10 px-3 py-1 rounded-full border border-trading-gold/20 inline-block mb-3 uppercase tracking-wider">
          PROFESSIONAL DIARY
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-white mb-3">PERSONAL TRADING JOURNAL</h1>
        <p className="text-xs sm:text-sm text-gray-400 max-w-xl mx-auto">
          Document your setups, learn from previous mistakes, track your overall mathematical win rates and review your equity progress over time.
        </p>
      </div>

      {/* Analytics widgets grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Total Trades Logged', value: totalTrades },
          { label: 'Win Rate Percentage', value: `${winRate}%` },
          { label: 'Net Profit/Loss ($)', value: `$${netPnl}`, color: netPnl >= 0 ? 'text-trading-bullish' : 'text-trading-bearish' },
          { label: 'Logged Profit Factor', value: '1.45' },
        ].map((item, i) => (
          <div key={i} className="glass-luxury-panel p-5 rounded-2xl border border-white/5 text-center">
            <span className={`text-xl sm:text-2xl font-black block mb-1 ${item.color || 'text-white'}`}>{item.value}</span>
            <span className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">{item.label}</span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Form Column */}
        <div className="glass-luxury-panel p-6 rounded-3xl border border-white/10 shadow-glass-luxury">
          <div className="flex items-center space-x-2 text-trading-gold font-bold text-xs uppercase tracking-wider mb-6">
            <Plus className="w-4 h-4" />
            <span>Log New Session Trade</span>
          </div>

          <form onSubmit={handleAddEntry} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">Trade Date</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-trading-gold"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">Pair Name</label>
                <input
                  type="text"
                  placeholder="EURUSD"
                  value={pair}
                  onChange={(e) => setPair(e.target.value)}
                  required
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-trading-gold"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setType('BUY')}
                className={`py-2 rounded-xl text-xs font-bold border transition ${
                  type === 'BUY' 
                    ? 'bg-trading-bullish/20 border-trading-bullish text-trading-bullish' 
                    : 'bg-white/5 border-white/5 text-gray-400'
                }`}
              >
                BUY
              </button>
              <button
                type="button"
                onClick={() => setType('SELL')}
                className={`py-2 rounded-xl text-xs font-bold border transition ${
                  type === 'SELL' 
                    ? 'bg-trading-bearish/20 border-trading-bearish text-trading-bearish' 
                    : 'bg-white/5 border-white/5 text-gray-400'
                }`}
              >
                SELL
              </button>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">Entry</label>
                <input
                  type="text"
                  placeholder="1.08200"
                  value={entry}
                  onChange={(e) => setEntry(e.target.value)}
                  required
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-trading-gold"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">Exit</label>
                <input
                  type="text"
                  placeholder="1.08700"
                  value={exit}
                  onChange={(e) => setExit(e.target.value)}
                  required
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-trading-gold"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">P&L ($)</label>
                <input
                  type="text"
                  placeholder="250"
                  value={pnl}
                  onChange={(e) => setPnl(e.target.value)}
                  required
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-trading-gold"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">Notes & Lesson</label>
              <textarea
                placeholder="Identify FVG retest, volume profile, or reason why stop loss was triggered..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full bg-black/40 border border-white/10 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-trading-gold min-h-[80px]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl font-bold bg-gold-gradient text-black hover:brightness-110 transition text-xs"
            >
              Confirm & Save Trade
            </button>
          </form>
        </div>

        {/* List Column */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex justify-between items-center pb-2 border-b border-white/5">
            <h3 className="font-bold text-white text-sm uppercase tracking-wider">Trading History Logs</h3>
            <span className="text-xs text-gray-400">Total {entries.length} items logged</span>
          </div>

          <div className="space-y-4 max-h-[550px] overflow-y-auto pr-1">
            {entries.map((trade) => (
              <div key={trade.id} className="glass-luxury-panel p-5 rounded-2xl border border-white/5 space-y-3 relative overflow-hidden hover:border-white/10 transition">
                <div className="flex justify-between items-start gap-4">
                  <div className="flex items-center space-x-3">
                    <span className={`px-2.5 py-1 rounded-md text-[10px] font-black tracking-wider border ${
                      trade.type === 'BUY' 
                        ? 'bg-trading-bullish/10 border-trading-bullish/30 text-trading-bullish' 
                        : 'bg-trading-bearish/10 border-trading-bearish/30 text-trading-bearish'
                    }`}>
                      {trade.type}
                    </span>
                    <div>
                      <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
                        <span>{trade.pair}</span>
                        <span className="text-[10px] text-gray-500 font-semibold">({trade.date})</span>
                      </h4>
                      <span className="text-[10px] text-gray-400 block mt-0.5">
                        Entry: {trade.entry} • Exit: {trade.exit}
                      </span>
                    </div>
                  </div>
                  <div className="text-right flex items-center space-x-4">
                    <div>
                      <span className={`text-sm font-black ${trade.pnl >= 0 ? 'text-trading-bullish' : 'text-trading-bearish'}`}>
                        {trade.pnl >= 0 ? `+$${trade.pnl}` : `-$${Math.abs(trade.pnl)}`}
                      </span>
                    </div>
                    <button
                      onClick={() => handleDelete(trade.id)}
                      className="p-1.5 rounded-lg bg-trading-bearish/10 border border-trading-bearish/20 text-trading-bearish hover:bg-trading-bearish/20 transition"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
                {trade.notes && (
                  <p className="text-[11px] text-gray-300 bg-black/40 p-2.5 rounded-xl border border-white/5 italic">
                    "{trade.notes}"
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}