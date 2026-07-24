'use client';

import React, { useState } from 'react';
import { BookOpen, Award, Lock, LockOpen, Play, CheckCircle, Flame, Star } from 'lucide-react';

export default function CoursesPage() {
  const [lang, setLang] = useState<'en' | 'bn'>('en');
  const [selectedCourse, setSelectedCategory] = useState<'All' | 'SMC' | 'Price Action' | 'Basics'>('All');

  const courses = [
    {
      id: 'c1',
      title: lang === 'en' ? 'Smart Money Concepts (SMC) Mentorship' : 'স্মার্ট মানি কনসেপ্টস (SMC) মেন্টরশিপ',
      description: 'The complete professional roadmap to bank trading, institutional liquidity, order blocks and mitigation rules.',
      thumbnail: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&auto=format&fit=crop&q=60',
      duration: '12 Hours',
      lessonsCount: 15,
      isPremium: true,
      category: 'SMC',
      progress: 45,
    },
    {
      id: 'c2',
      title: lang === 'en' ? 'Price Action & Candlestick Anatomy' : 'প্রাইস অ্যাকশন এবং ক্যান্ডেলস্টিক অ্যানাটমি',
      description: 'Master trendlines, support and resistance, head and shoulders, double bottom, and premium entry configurations.',
      thumbnail: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=500&auto=format&fit=crop&q=60',
      duration: '8 Hours',
      lessonsCount: 10,
      isPremium: false,
      category: 'Price Action',
      progress: 100,
    },
    {
      id: 'c3',
      title: lang === 'en' ? 'Advanced Risk & Psychology System' : 'অ্যাডভান্সড রিস্ক এবং সাইকোলজি সিস্টেম',
      description: 'Mathematical rules on position sizing, maximum drawdown limits, journaling techniques and control mechanisms.',
      thumbnail: 'https://images.unsplash.com/photo-1642390061910-0f7121466f8f?w=500&auto=format&fit=crop&q=60',
      duration: '5 Hours',
      lessonsCount: 8,
      isPremium: true,
      category: 'Price Action',
      progress: 0,
    },
    {
      id: 'c4',
      title: lang === 'en' ? 'Forex Trading Basics for Beginners' : 'ফরেক্স ট্রেডিং বেসিকস (নতুনদের জন্য)',
      description: 'Learn currency pairs, spreads, leverage, lots, trading hours, and MT5 setup from scratch in Bengali/English.',
      thumbnail: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&auto=format&fit=crop&q=60',
      duration: '6 Hours',
      lessonsCount: 12,
      isPremium: false,
      category: 'Basics',
      progress: 100,
    }
  ];

  const filteredCourses = selectedCourse === 'All' 
    ? courses 
    : courses.filter(c => c.category === selectedCourse);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      {/* Title */}
      <div className="text-center mb-12">
        <span className="text-[10px] font-bold text-trading-gold bg-trading-gold/10 px-3 py-1 rounded-full border border-trading-gold/20 inline-block mb-3 uppercase tracking-wider">
          MASUMX ACADEMY
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-white mb-3">PREMIUM TRADING COURSES</h1>
        <p className="text-xs sm:text-sm text-gray-400 max-w-xl mx-auto">
          Start with our free beginner guides or unlock full lifetime access to high win-rate institutional SMC mentorship programs.
        </p>
      </div>

      {/* Categories filter */}
      <div className="flex justify-center gap-2 mb-10">
        {(['All', 'SMC', 'Price Action', 'Basics'] as const).map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition ${
              selectedCourse === cat 
                ? 'bg-trading-gold text-black' 
                : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/5'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCourses.map((course) => (
          <div key={course.id} className="glass-luxury-panel rounded-3xl overflow-hidden border border-white/5 hover:border-trading-gold/20 transition duration-300 flex flex-col justify-between group">
            
            {/* Image / Badge Banner */}
            <div className="relative aspect-video overflow-hidden bg-black/30 border-b border-white/5">
              <img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              <div className="absolute top-4 right-4 flex gap-1.5">
                {course.isPremium ? (
                  <span className="flex items-center space-x-1 bg-trading-premium text-white text-[9px] font-extrabold uppercase px-2.5 py-1 rounded-md shadow-lg border border-yellow-500/20">
                    <Lock className="w-3 h-3" />
                    <span>Premium</span>
                  </span>
                ) : (
                  <span className="flex items-center space-x-1 bg-trading-bullish text-white text-[9px] font-extrabold uppercase px-2.5 py-1 rounded-md shadow-lg">
                    <LockOpen className="w-3 h-3" />
                    <span>Free</span>
                  </span>
                )}
              </div>
            </div>

            {/* Course Details */}
            <div className="p-6 space-y-4">
              <span className="text-[10px] font-bold text-trading-gold uppercase tracking-wider bg-trading-gold/10 px-2 py-0.5 rounded border border-trading-gold/20">
                {course.category}
              </span>
              <h3 className="text-base sm:text-lg font-bold text-white line-clamp-1">{course.title}</h3>
              <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">{course.description}</p>
              
              {/* Progress Bar (simulated) */}
              {course.progress > 0 && (
                <div className="space-y-1">
                  <div className="flex justify-between items-center text-[10px] text-gray-400">
                    <span>Progress</span>
                    <span>{course.progress}%</span>
                  </div>
                  <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-trading-gold h-full rounded-full" style={{ width: `${course.progress}%` }}></div>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Info / Button */}
            <div className="p-6 pt-0 border-t border-white/5 flex justify-between items-center">
              <div className="flex items-center space-x-3 text-[10px] text-gray-400">
                <span className="flex items-center space-x-1">
                  <Play className="w-3.5 h-3.5" />
                  <span>{course.lessonsCount} lessons</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Award className="w-3.5 h-3.5" />
                  <span>{course.duration}</span>
                </span>
              </div>
              <button className="px-4 py-2 rounded-xl text-xs font-bold bg-white/5 border border-white/10 hover:border-trading-gold/30 hover:bg-trading-gold/10 hover:text-trading-gold transition duration-300">
                {course.isPremium ? 'Unlock Class' : 'Start Study'}
              </button>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}