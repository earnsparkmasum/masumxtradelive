'use client';

import React, { useState } from 'react';
import { Play, Share2, Heart, Clock, ThumbsUp, Search, MessageSquare, Flame } from 'lucide-react';

export default function VideosPage() {
  const [activeVideo, setActiveVideo] = useState<{
    id: string;
    title: string;
    description: string;
    youtubeId: string;
    category: string;
    date: string;
  } | null>({
    id: 'v1',
    title: 'Smart Money Concepts (SMC) - Complete Order Block & Liquidity Masterclass',
    description: 'Learn how to identify institutional order blocks, mitigate risks, and track liquidity pools like a professional trader. This video explains high-probability entries with step-by-step backtesting.',
    youtubeId: 'dQw4w9WgXcQ', // Placeholder video ID
    category: 'SMC Price Action',
    date: 'July 2026',
  });

  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const videos = [
    {
      id: 'v1',
      title: 'Smart Money Concepts (SMC) - Complete Order Block & Liquidity Masterclass',
      description: 'Learn how to identify institutional order blocks, mitigate risks, and track liquidity pools like a professional trader.',
      youtubeId: 'dQw4w9WgXcQ',
      category: 'SMC Price Action',
      date: 'July 2026',
      thumbnail: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&auto=format&fit=crop&q=60',
    },
    {
      id: 'v2',
      title: 'How to Trade the London & New York Killzones Successfully',
      description: 'Understanding sessions timing is everything in forex trading. Master Bangladesh Time opening killzones strategy.',
      youtubeId: 'dQw4w9WgXcQ',
      category: 'Session Trading',
      date: 'June 2026',
      thumbnail: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=500&auto=format&fit=crop&q=60',
    },
    {
      id: 'v3',
      title: 'Top 3 Custom Indicators on TradingView for High Win Rate Scaling',
      description: 'A detailed walkthrough of professional Indicators, volume profiling, and average true range settings.',
      youtubeId: 'dQw4w9WgXcQ',
      category: 'Indicators',
      date: 'May 2026',
      thumbnail: 'https://images.unsplash.com/photo-1642390061910-0f7121466f8f?w=500&auto=format&fit=crop&q=60',
    },
    {
      id: 'v4',
      title: 'Risk & Money Management Guide: Avoid Account Blown Forever',
      description: 'Learn mathematically sound position sizing, dynamic risk rewards ratios, and emotional trading psychology hacks.',
      youtubeId: 'dQw4w9WgXcQ',
      category: 'Risk Management',
      date: 'April 2026',
      thumbnail: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&auto=format&fit=crop&q=60',
    }
  ];

  const categories = ['All', 'SMC Price Action', 'Session Trading', 'Indicators', 'Risk Management'];

  const filteredVideos = videos.filter(v => {
    const matchesSearch = v.title.toLowerCase().includes(search.toLowerCase()) || 
                          v.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || v.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
        <div className="w-full md:w-96 relative">
          <input
            type="text"
            placeholder="Search videos..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 pl-10 text-xs focus:outline-none focus:border-trading-gold transition"
          />
          <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-400" />
        </div>
        <div className="flex flex-wrap gap-2 w-full md:w-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition ${
                selectedCategory === cat 
                  ? 'bg-trading-gold text-black' 
                  : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Main Player / Video Details Column */}
        <div className="lg:col-span-2 space-y-6">
          {activeVideo ? (
            <div className="glass-luxury-panel p-4 rounded-3xl border border-white/10 shadow-glass-luxury">
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-black border border-white/5 mb-6">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${activeVideo.youtubeId}`}
                  title={activeVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <span className="text-[10px] font-bold text-trading-gold uppercase tracking-wider bg-trading-gold/10 px-2.5 py-1 rounded-md border border-trading-gold/20 inline-block mb-3">
                {activeVideo.category}
              </span>
              <h1 className="text-xl sm:text-2xl font-black text-white mb-3">{activeVideo.title}</h1>
              <div className="flex justify-between items-center text-xs text-gray-400 border-b border-white/5 pb-4 mb-4">
                <span>Published on {activeVideo.date}</span>
                <div className="flex space-x-3">
                  <button className="flex items-center space-x-1 hover:text-white transition">
                    <ThumbsUp className="w-4 h-4" />
                    <span>1.2k</span>
                  </button>
                  <button className="flex items-center space-x-1 hover:text-white transition">
                    <Heart className="w-4 h-4" />
                    <span>Favorite</span>
                  </button>
                  <button className="flex items-center space-x-1 hover:text-white transition">
                    <Share2 className="w-4 h-4" />
                    <span>Share</span>
                  </button>
                </div>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed">{activeVideo.description}</p>
            </div>
          ) : (
            <div className="glass-luxury-panel p-12 rounded-3xl border border-white/5 text-center flex flex-col justify-center items-center h-[350px]">
              <Play className="w-12 h-12 text-gray-500 mb-4 animate-pulse" />
              <p className="text-gray-400 text-xs">Select any video from the list to start watching.</p>
            </div>
          )}
        </div>

        {/* Video List / Sidebar Column */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2 pb-2 border-b border-white/5">
            <Flame className="w-4 h-4 text-trading-gold" />
            <h3 className="font-bold text-white text-sm uppercase tracking-wider">Video Playlist</h3>
          </div>
          <div className="space-y-3 overflow-y-auto max-h-[600px] pr-1">
            {filteredVideos.map((video) => (
              <div
                key={video.id}
                onClick={() => setActiveVideo(video)}
                className={`glass-luxury-panel p-3 rounded-2xl border transition cursor-pointer flex gap-3 ${
                  activeVideo?.id === video.id 
                    ? 'border-trading-gold/40 bg-trading-gold/5' 
                    : 'border-white/5 hover:border-white/10'
                }`}
              >
                <div className="relative w-24 h-16 rounded-xl overflow-hidden shrink-0 bg-black/40 border border-white/5">
                  <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover group-hover:scale-105 transition" />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <Play className="w-4 h-4 text-white fill-current opacity-80" />
                  </div>
                </div>
                <div className="flex flex-col justify-between">
                  <h4 className="text-xs font-bold text-white line-clamp-2 leading-snug">{video.title}</h4>
                  <span className="text-[10px] text-gray-400 block mt-1">{video.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}