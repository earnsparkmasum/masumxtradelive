'use client';

import React, { useState } from 'react';
import { Play, Heart, Share2, Eye, Award, CheckCircle, ChevronRight, Zap } from 'lucide-react';

export default function ShortsPage() {
  const [activeShort, setActiveShort] = useState<{
    id: string;
    title: string;
    youtubeId: string;
    views: string;
    likes: string;
  } | null>({
    id: 's1',
    title: 'The Golden Fibo Strategy in 30 Seconds! 📈',
    youtubeId: 'dQw4w9WgXcQ',
    views: '124K',
    likes: '8.4K',
  });

  const shorts = [
    { id: 's1', title: 'The Golden Fibo Strategy in 30 Seconds! 📈', youtubeId: 'dQw4w9WgXcQ', views: '124K', likes: '8.4K' },
    { id: 's2', title: 'Why 99% of Retail Traders Blow Their Accounts 🤦‍♂️', youtubeId: 'dQw4w9WgXcQ', views: '98K', likes: '7.1K' },
    { id: 's3', title: 'Smart Money order blocks simplified 💸', youtubeId: 'dQw4w9WgXcQ', views: '210K', likes: '14K' },
    { id: 's4', title: 'Master Bangladesh Killzone Strategy ⏰', youtubeId: 'dQw4w9WgXcQ', views: '87K', likes: '6.2K' },
    { id: 's5', title: 'The hidden trap of Support & Resistance 🎯', youtubeId: 'dQw4w9WgXcQ', views: '156K', likes: '11K' },
    { id: 's6', title: 'Avoid trading on high impact news! 📰', youtubeId: 'dQw4w9WgXcQ', views: '73K', likes: '5.1K' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="text-center mb-10">
        <span className="text-[10px] font-bold text-trading-gold bg-trading-gold/10 px-3 py-1 rounded-full border border-trading-gold/20 inline-block mb-3 uppercase tracking-wider">
          MASUMX SHORTS
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-white mb-3">LEARN TRADING IN SECONDS</h1>
        <p className="text-xs text-gray-400">High-yield short video formats containing rules, tips, and live chart screenshots.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Active Vertical Shorts Player Column */}
        <div className="lg:col-span-2 lg:col-start-2 flex justify-center">
          {activeShort ? (
            <div className="w-full max-w-[360px] glass-luxury-panel p-4 rounded-3xl border border-white/10 shadow-gold-glow flex flex-col justify-between">
              
              {/* Vertical Video Iframe */}
              <div className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-black border border-white/5 shadow-inner">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${activeShort.youtubeId}?autoplay=1&mute=1`}
                  title={activeShort.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Title & Engagement Stats */}
              <div className="pt-4 space-y-3">
                <h2 className="text-xs sm:text-sm font-bold text-white line-clamp-2">{activeShort.title}</h2>
                <div className="flex justify-between items-center text-xs text-gray-400">
                  <div className="flex items-center space-x-3">
                    <span className="flex items-center space-x-1">
                      <Eye className="w-3.5 h-3.5 text-trading-gold" />
                      <span>{activeShort.views} views</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Heart className="w-3.5 h-3.5 text-trading-bearish" />
                      <span>{activeShort.likes}</span>
                    </span>
                  </div>
                  <button className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white transition">
                    <Share2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          ) : (
            <div className="glass-luxury-panel p-12 rounded-3xl border border-white/5 text-center flex flex-col justify-center items-center w-full max-w-[360px] h-[550px]">
              <Play className="w-12 h-12 text-gray-500 mb-4 animate-pulse" />
              <p className="text-gray-400 text-xs">Select any short from the grid to watch.</p>
            </div>
          )}
        </div>

        {/* Sidebar Grid Column */}
        <div className="lg:col-span-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 pt-10 border-t border-white/5 mt-10">
          {shorts.map((short) => (
            <div
              key={short.id}
              onClick={() => setActiveShort(short)}
              className={`glass-luxury-panel p-3 rounded-2xl border cursor-pointer transition flex flex-col justify-between group ${
                activeShort?.id === short.id 
                  ? 'border-trading-gold/40 bg-trading-gold/5' 
                  : 'border-white/5 hover:border-white/10'
              }`}
            >
              <div className="relative aspect-[9/16] rounded-xl overflow-hidden bg-black/40 border border-white/5 mb-3 group-hover:scale-[1.02] transition">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-2.5">
                  <span className="text-[9px] text-gray-300 font-medium flex items-center gap-1">
                    <Eye className="w-3 h-3 text-trading-gold" />
                    {short.views}
                  </span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Play className="w-6 h-6 text-white bg-trading-gold/20 rounded-full p-1.5 border border-trading-gold/40 fill-current opacity-90 group-hover:scale-110 transition duration-300" />
                </div>
              </div>
              <h3 className="text-[11px] font-bold text-white line-clamp-2 leading-snug">{short.title}</h3>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}