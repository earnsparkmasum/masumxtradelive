'use client';

import React, { useState } from 'react';
import { 
  ShieldAlert, LayoutDashboard, Video, Play, BookOpen, Layers, 
  Users, Settings, ArrowUpRight, BarChart2, CheckSquare, Plus, Trash2 
} from 'lucide-react';

export default function AdminDashboard() {
  const [currentMenu, setCurrentMenu] = useState<'dashboard' | 'videos' | 'shorts' | 'courses' | 'strategies'>('dashboard');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      {/* Header Status */}
      <div className="glass-luxury-panel p-6 rounded-3xl border border-trading-gold/20 mb-8 flex flex-col md:flex-row justify-between items-center gap-6 shadow-gold-glow">
        <div className="flex items-center space-x-3">
          <ShieldAlert className="w-8 h-8 text-trading-gold shrink-0" />
          <div>
            <h1 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
              <span>ADMIN CONTROL PANEL</span>
              <span className="text-[10px] font-black text-trading-bearish bg-trading-bearish/10 px-2.5 py-1 rounded-md border border-trading-bearish/20 uppercase tracking-wider">
                SUPER ADMIN
              </span>
            </h1>
            <p className="text-xs text-gray-400 mt-1">Manage database records, upload class material, and configure application settings.</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Sidebar Menu */}
        <div className="space-y-2">
          {[
            { id: 'dashboard', label: 'Admin Dashboard', icon: LayoutDashboard },
            { id: 'videos', label: 'Manage Videos', icon: Video },
            { id: 'shorts', label: 'Manage Shorts', icon: Play },
            { id: 'courses', label: 'Manage Courses', icon: BookOpen },
            { id: 'strategies', label: 'Manage Strategies', icon: Layers },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setCurrentMenu(item.id as any)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-xs font-bold border text-left transition ${
                  currentMenu === item.id 
                    ? 'bg-trading-gold/10 border-trading-gold/30 text-trading-gold' 
                    : 'bg-white/5 border-white/5 text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Panel */}
        <div className="lg:col-span-3 glass-luxury-panel p-6 sm:p-8 rounded-3xl border border-white/10 shadow-glass-luxury min-h-[450px]">
          
          {/* DASHBOARD ANALYTICS PANEL */}
          {currentMenu === 'dashboard' && (
            <div className="space-y-6">
              <h3 className="font-bold text-white text-sm uppercase tracking-wider border-b border-white/5 pb-3">Real-time Platform Statistics</h3>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { label: 'Total Enrolled Users', value: '4,821' },
                  { label: 'Active Premium Revenue', value: '$84,200' },
                  { label: 'System CPU Status', value: '99.9%' },
                ].map((stat, i) => (
                  <div key={i} className="bg-white/5 p-5 rounded-2xl border border-white/5 text-center">
                    <span className="text-xl font-black text-trading-gold block mb-1">{stat.value}</span>
                    <span className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">{stat.label}</span>
                  </div>
                ))}
              </div>

              <div className="bg-white/5 p-5 rounded-2xl border border-white/5 space-y-3">
                <h4 className="text-xs font-bold text-white">System Environment Variables</h4>
                <p className="text-[11px] text-gray-400 leading-relaxed">
                  All systems operating normally. Next.js 15 App router, Tailwind CSS, Vercel and Firebase Firestore/Storage securely initialized.
                </p>
              </div>
            </div>
          )}

          {/* MANAGE VIDEOS PANEL */}
          {currentMenu === 'videos' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b border-white/5 pb-3">
                <h3 className="font-bold text-white text-sm uppercase tracking-wider">Manage YouTube Videos</h3>
                <button className="px-3.5 py-1.5 rounded-lg bg-trading-gold text-black text-xs font-bold flex items-center space-x-1">
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Video</span>
                </button>
              </div>

              <div className="space-y-3 text-xs text-gray-300">
                <div className="flex justify-between items-center p-3 bg-white/5 border border-white/5 rounded-xl">
                  <span>Smart Money Concepts (SMC) - Masterclass</span>
                  <button className="p-1.5 bg-trading-bearish/10 border border-trading-bearish/20 text-trading-bearish rounded-lg hover:bg-trading-bearish/20 transition">
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/5 border border-white/5 rounded-xl">
                  <span>How to Trade London Killzones</span>
                  <button className="p-1.5 bg-trading-bearish/10 border border-trading-bearish/20 text-trading-bearish rounded-lg hover:bg-trading-bearish/20 transition">
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* MANAGE SHORTS PANEL */}
          {currentMenu === 'shorts' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b border-white/5 pb-3">
                <h3 className="font-bold text-white text-sm uppercase tracking-wider">Manage Vertical Shorts</h3>
                <button className="px-3.5 py-1.5 rounded-lg bg-trading-gold text-black text-xs font-bold flex items-center space-x-1">
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Short</span>
                </button>
              </div>

              <div className="space-y-3 text-xs text-gray-300">
                <div className="flex justify-between items-center p-3 bg-white/5 border border-white/5 rounded-xl">
                  <span>The Golden Fibo Strategy in 30 Seconds! 📈</span>
                  <button className="p-1.5 bg-trading-bearish/10 border border-trading-bearish/20 text-trading-bearish rounded-lg hover:bg-trading-bearish/20 transition">
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* MANAGE COURSES PANEL */}
          {currentMenu === 'courses' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b border-white/5 pb-3">
                <h3 className="font-bold text-white text-sm uppercase tracking-wider">Manage Platform Courses</h3>
                <button className="px-3.5 py-1.5 rounded-lg bg-trading-gold text-black text-xs font-bold flex items-center space-x-1">
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Course</span>
                </button>
              </div>

              <div className="space-y-3 text-xs text-gray-300">
                <div className="flex justify-between items-center p-3 bg-white/5 border border-white/5 rounded-xl">
                  <span>Smart Money Concepts (SMC) Mentorship</span>
                  <button className="p-1.5 bg-trading-bearish/10 border border-trading-bearish/20 text-trading-bearish rounded-lg hover:bg-trading-bearish/20 transition">
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* MANAGE STRATEGIES PANEL */}
          {currentMenu === 'strategies' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b border-white/5 pb-3">
                <h3 className="font-bold text-white text-sm uppercase tracking-wider">Manage Strategies</h3>
                <button className="px-3.5 py-1.5 rounded-lg bg-trading-gold text-black text-xs font-bold flex items-center space-x-1">
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Strategy</span>
                </button>
              </div>

              <div className="space-y-3 text-xs text-gray-300">
                <div className="flex justify-between items-center p-3 bg-white/5 border border-white/5 rounded-xl">
                  <span>Order Block Mitigation & FVG Strategy</span>
                  <button className="p-1.5 bg-trading-bearish/10 border border-trading-bearish/20 text-trading-bearish rounded-lg hover:bg-trading-bearish/20 transition">
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>

    </div>
  );
}