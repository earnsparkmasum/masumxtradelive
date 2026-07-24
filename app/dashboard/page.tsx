'use client';

import React, { useState } from 'react';
import { 
  User, BookOpen, Heart, Bookmark, History, ShieldAlert, 
  Settings, Key, CreditCard, ChevronRight, CheckCircle2, Award 
} from 'lucide-react';

export default function UserDashboard() {
  const [activeTab, setActiveTab] = useState<'profile' | 'courses' | 'saved' | 'bookmarks' | 'activity'>('profile');

  // Simulated User Account State
  const [userProfile, setUserProfile] = useState({
    name: 'Masum Ahmed',
    email: 'masumahmed.dev@gmail.com',
    role: 'admin',
    membership: 'premium', // free, premium, lifetime
    memberSince: 'April 2026',
    avatar: null
  });

  const [savedVideos, setSavedVideos] = useState([
    { id: 'v1', title: 'Smart Money Concepts (SMC) - Complete Order Block Masterclass', duration: '45 mins' },
    { id: 'v2', title: 'How to Trade London & New York Killzones Successfully', duration: '32 mins' }
  ]);

  const [myCourses, setMyCourses] = useState([
    { id: 'c1', title: 'Smart Money Concepts Mentorship', progress: 45, duration: '12 Hours total' },
    { id: 'c2', title: 'Price Action & Candlestick Anatomy', progress: 100, duration: '8 Hours total' }
  ]);

  const [bookmarks, setBookmarks] = useState([
    { id: 'b1', title: 'EMA Cross & Volume Profile Momentum Strategy', category: 'indicators' },
    { id: 'b2', title: 'Order Block Mitigation & Fair Value Gap (FVG) Strategy', category: 'price-action' }
  ]);

  const [recentActivities, setRecentActivities] = useState([
    { id: 'a1', action: 'Watched Lesson 4: Mitigation Blocks', time: 'Yesterday' },
    { id: 'a2', action: 'Completed Quiz: Candlestick Reversals', time: '2 days ago' },
    { id: 'a3', action: 'Upgraded Membership to Premium Plan', time: '5 days ago' }
  ]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      {/* Welcome Banner */}
      <div className="glass-luxury-panel p-6 sm:p-8 rounded-3xl border border-white/10 mb-10 flex flex-col sm:flex-row justify-between items-center gap-6 relative overflow-hidden shadow-blue-glow">
        <div className="absolute top-0 right-0 w-32 h-32 bg-trading-gold/5 rounded-full blur-2xl"></div>
        <div className="flex items-center space-x-4">
          <div className="w-14 h-14 rounded-full bg-gold-gradient p-0.5 shadow-lg">
            <div className="w-full h-full rounded-full bg-black flex items-center justify-center font-black text-white text-lg">
              {userProfile.name[0]}
            </div>
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
              <span>{userProfile.name}</span>
              <span className="text-[10px] font-black text-trading-gold bg-trading-gold/10 px-2.5 py-1 rounded-md border border-trading-gold/20 uppercase tracking-wider">
                {userProfile.membership} Member
              </span>
            </h1>
            <p className="text-xs text-gray-400 mt-1">Logged in as {userProfile.email} • Member since {userProfile.memberSince}</p>
          </div>
        </div>

        <div className="flex space-x-3 shrink-0">
          <button className="px-5 py-2.5 rounded-xl text-xs font-bold bg-white/5 border border-white/10 hover:border-trading-gold/30 hover:bg-trading-gold/10 hover:text-trading-gold transition">
            Manage Billing
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Navigation Sidebar */}
        <div className="space-y-2">
          {[
            { id: 'profile', label: 'My Profile', icon: User },
            { id: 'courses', label: 'My Courses', icon: BookOpen },
            { id: 'saved', label: 'Saved Videos', icon: History },
            { id: 'bookmarks', label: 'Strategy Bookmarks', icon: Bookmark },
            { id: 'activity', label: 'Recent Activity', icon: History },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-xs font-bold border text-left transition ${
                  activeTab === tab.id 
                    ? 'bg-trading-gold/10 border-trading-gold/30 text-trading-gold' 
                    : 'bg-white/5 border-white/5 text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content Panel */}
        <div className="lg:col-span-3 glass-luxury-panel p-6 sm:p-8 rounded-3xl border border-white/10 shadow-glass-luxury min-h-[400px]">
          
          {/* PROFILE TAB */}
          {activeTab === 'profile' && (
            <div className="space-y-6">
              <h3 className="font-bold text-white text-sm uppercase tracking-wider border-b border-white/5 pb-3">My Trading Profile</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
                <div className="space-y-1.5">
                  <span className="block text-gray-400 font-bold uppercase tracking-wider">Account Role</span>
                  <span className="block font-black text-white bg-white/5 p-3.5 rounded-xl border border-white/5 capitalize">{userProfile.role}</span>
                </div>
                <div className="space-y-1.5">
                  <span className="block text-gray-400 font-bold uppercase tracking-wider">Membership Tier</span>
                  <span className="block font-black text-trading-gold bg-trading-gold/10 p-3.5 rounded-xl border border-trading-gold/20 uppercase">{userProfile.membership}</span>
                </div>
              </div>

              <div className="bg-white/5 p-5 rounded-2xl border border-white/5 space-y-3">
                <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
                  <CreditCard className="w-4 h-4 text-trading-gold" />
                  <span>Stripe & SSLCommerz Payment Log</span>
                </h4>
                <p className="text-[11px] text-gray-400 leading-relaxed">
                  Your last payment of **$29.00** was completed successfully on July 20, 2026. Next billing date: August 20, 2026.
                </p>
              </div>
            </div>
          )}

          {/* COURSES TAB */}
          {activeTab === 'courses' && (
            <div className="space-y-6">
              <h3 className="font-bold text-white text-sm uppercase tracking-wider border-b border-white/5 pb-3">My Enrolled Courses</h3>
              
              <div className="space-y-4">
                {myCourses.map((course) => (
                  <div key={course.id} className="bg-white/5 p-5 rounded-2xl border border-white/5 space-y-3">
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-white">{course.title}</h4>
                        <span className="text-[10px] text-gray-400 mt-1 block">{course.duration}</span>
                      </div>
                      <span className={`text-[10px] font-black px-2.5 py-1 rounded-md border ${
                        course.progress === 100 
                          ? 'bg-trading-bullish/10 border-trading-bullish/30 text-trading-bullish' 
                          : 'bg-trading-gold/10 border-trading-gold/30 text-trading-gold'
                      }`}>
                        {course.progress === 100 ? 'Completed' : 'In Progress'}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <div className="flex justify-between items-center text-[10px] text-gray-400">
                        <span>Progress</span>
                        <span>{course.progress}%</span>
                      </div>
                      <div className="w-full bg-black/40 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-trading-gold h-full rounded-full" style={{ width: `${course.progress}%` }}></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SAVED VIDEOS TAB */}
          {activeTab === 'saved' && (
            <div className="space-y-6">
              <h3 className="font-bold text-white text-sm uppercase tracking-wider border-b border-white/5 pb-3">My Saved Videos</h3>
              
              <div className="space-y-3">
                {savedVideos.map((video) => (
                  <div key={video.id} className="bg-white/5 p-4 rounded-xl border border-white/5 flex justify-between items-center gap-4 text-xs">
                    <span className="font-bold text-white line-clamp-1">{video.title}</span>
                    <span className="text-gray-400 shrink-0">{video.duration}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* BOOKMARKS TAB */}
          {activeTab === 'bookmarks' && (
            <div className="space-y-6">
              <h3 className="font-bold text-white text-sm uppercase tracking-wider border-b border-white/5 pb-3">Bookmarked Strategies</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {bookmarks.map((b) => (
                  <div key={b.id} className="bg-white/5 p-5 rounded-xl border border-white/5 space-y-2">
                    <span className="text-[10px] font-bold text-trading-gold uppercase tracking-wider bg-trading-gold/10 px-2 py-0.5 rounded border border-trading-gold/20">
                      {b.category}
                    </span>
                    <h4 className="text-xs font-bold text-white line-clamp-2">{b.title}</h4>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ACTIVITY TAB */}
          {activeTab === 'activity' && (
            <div className="space-y-6">
              <h3 className="font-bold text-white text-sm uppercase tracking-wider border-b border-white/5 pb-3">Recent Activity Logs</h3>
              
              <div className="space-y-3.5">
                {recentActivities.map((act) => (
                  <div key={act.id} className="flex justify-between items-center text-xs bg-white/5 p-3.5 rounded-xl border border-white/5">
                    <span className="text-gray-200">{act.action}</span>
                    <span className="text-gray-500 text-[10px]">{act.time}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>

    </div>
  );
}