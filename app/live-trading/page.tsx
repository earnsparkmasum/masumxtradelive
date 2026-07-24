'use client';

import React, { useState, useEffect } from 'react';
import { 
  Globe2, Clock, Play, Radio, Send, Users, ShieldAlert, 
  MessageSquare, Sparkles, TrendingUp, AlertTriangle, HelpCircle 
} from 'lucide-react';

export default function LiveTradingPage() {
  const [time, setTime] = useState('');
  const [activeSession, setActiveSession] = useState('London');
  const [chatMessages, setChatMessages] = useState([
    { id: 'm1', user: 'Masum Ahmed (Admin)', role: 'Admin', text: 'Good morning everyone! Preparing our charts for London Open retest. Focus asset: EURUSD.' },
    { id: 'm2', user: 'Zahid Hasan', role: 'Premium', text: 'Ready! Watching the 15m bullish order block.' },
    { id: 'm3', user: 'Sabrina Alam', role: 'Lifetime', text: 'Will we look at GBPUSD today?' },
    { id: 'm4', user: 'Masum Ahmed (Admin)', role: 'Admin', text: 'Yes Sabrina, GBPUSD is sweeping Asian lows right now. Potential bullish rejection.' }
  ]);
  const [newMsg, setNewMsg] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Asia/Dhaka', hour12: true }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSendChat = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMsg.trim()) return;

    setChatMessages([
      ...chatMessages,
      {
        id: `m-${Date.now()}`,
        user: 'Guest Trader (You)',
        role: 'Premium Member',
        text: newMsg
      }
    ]);
    setNewMsg('');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      {/* Session Header Status */}
      <div className="glass-luxury-panel p-6 rounded-3xl border border-white/10 mb-8 flex flex-col md:flex-row justify-between items-center gap-6 shadow-blue-glow">
        <div className="flex items-center space-x-3 text-center md:text-left">
          <div className="w-4 h-4 rounded-full bg-trading-bullish animate-ping"></div>
          <div>
            <h1 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
              <span>LIVE TRADING ROOM</span>
              <span className="text-xs font-black text-trading-gold bg-trading-gold/10 px-2.5 py-1 rounded-md border border-trading-gold/20 uppercase tracking-wider">
                LONDON SESSION
              </span>
            </h1>
            <p className="text-xs text-gray-400 mt-1">Trade live interactive sessions with Masum Ahmed and professional moderators.</p>
          </div>
        </div>

        {/* Live BST Digital Clock */}
        <div className="bg-black/60 px-6 py-3 rounded-2xl border border-white/5 text-center shrink-0">
          <span className="text-[10px] font-bold text-trading-gold uppercase tracking-widest block mb-0.5">Dhaka Time (BST)</span>
          <span className="text-2xl font-black font-mono text-white tracking-wider">{time || '00:00:00 AM'}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Stream Sandbox / Chart View */}
        <div className="lg:col-span-2 space-y-6">
          <div className="glass-luxury-panel p-4 rounded-3xl border border-white/10 shadow-glass-luxury">
            
            {/* Live stream representation */}
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-black border border-white/5 flex flex-col justify-center items-center text-center p-6">
              <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800')" }}></div>
              <div className="absolute top-4 left-4 bg-trading-bearish text-white text-[10px] font-black uppercase px-2.5 py-1 rounded-md flex items-center gap-1.5 animate-pulse">
                <Radio className="w-3.5 h-3.5" />
                <span>Live Stream Staged</span>
              </div>
              
              <Play className="w-12 h-12 text-trading-gold bg-trading-gold/10 p-3 rounded-full border border-trading-gold/30 hover:scale-110 transition duration-300 cursor-pointer relative z-10" />
              <h3 className="text-white font-bold mt-4 relative z-10">Start Watching Live Stream</h3>
              <p className="text-xs text-gray-400 max-w-sm mt-1 relative z-10">
                Click play button to tune into live voice commentary, chart markups, and hot execution notifications.
              </p>
            </div>

            <div className="flex justify-between items-center mt-6 pt-4 border-t border-white/5 text-xs text-gray-400">
              <span className="flex items-center gap-1.5">
                <Users className="w-4 h-4 text-trading-gold" />
                <span className="font-bold text-white">438 active traders</span> listening right now
              </span>
              <span className="flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4 text-gray-500" />
                <span>Stream delayed by approx 0.8s</span>
              </span>
            </div>

          </div>
        </div>

        {/* Live Chat System Sidebar */}
        <div className="glass-luxury-panel p-5 rounded-3xl border border-white/10 flex flex-col justify-between h-[540px] shadow-glass-luxury">
          
          {/* Header */}
          <div className="flex justify-between items-center pb-3 border-b border-white/5 mb-4">
            <h3 className="font-bold text-white text-xs uppercase tracking-wider flex items-center gap-1.5">
              <MessageSquare className="w-4 h-4 text-trading-gold" />
              <span>Live Interactive Chat</span>
            </h3>
            <span className="text-[10px] text-trading-bullish font-bold">Online</span>
          </div>

          {/* Messages container */}
          <div className="flex-grow space-y-3.5 overflow-y-auto pr-1 mb-4">
            {chatMessages.map((msg) => (
              <div key={msg.id} className="text-xs">
                <div className="flex items-center justify-between gap-2 mb-0.5">
                  <span className="font-black text-white">{msg.user}</span>
                  <span className={`text-[8px] font-black uppercase px-1.5 py-0.5 rounded ${
                    msg.role === 'Admin' ? 'bg-trading-gold/20 text-trading-gold' : 'bg-white/5 text-gray-400'
                  }`}>
                    {msg.role}
                  </span>
                </div>
                <p className="text-gray-300 leading-relaxed bg-white/5 p-2 rounded-xl border border-white/5">{msg.text}</p>
              </div>
            ))}
          </div>

          {/* Type Message form */}
          <form onSubmit={handleSendChat} className="flex gap-2">
            <input
              type="text"
              placeholder="Send message to live room..."
              value={newMsg}
              onChange={(e) => setNewMsg(e.target.value)}
              className="flex-grow bg-black/40 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-trading-gold"
            />
            <button
              type="submit"
              className="px-4 py-2.5 rounded-xl bg-trading-gold text-black hover:brightness-110 transition"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>

        </div>

      </div>

    </div>
  );
}