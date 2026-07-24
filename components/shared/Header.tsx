'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  TrendingUp, Video, Play, BookOpen, Layers, Users, Info, 
  User, ShieldAlert, LogOut, Search, Menu, X, Bell, Globe2, Calculator, BookOpenCheck
} from 'lucide-react';

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [lang, setLang] = useState<'en' | 'bn'>('en');

  // Simulated User / Admin State for visual preview
  const [user, setUser] = useState<{ displayName: string; role: string } | null>({
    displayName: 'Masum Ahmed',
    role: 'admin',
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: lang === 'en' ? 'Home' : 'হোম', href: '/', icon: TrendingUp },
    { name: lang === 'en' ? 'Videos' : 'ভিডিও', href: '/videos', icon: Video },
    { name: lang === 'en' ? 'Shorts' : 'শর্টস', href: '/shorts', icon: Play },
    { name: lang === 'en' ? 'Courses' : 'কোর্সসমূহ', href: '/courses', icon: BookOpen },
    { name: lang === 'en' ? 'Strategy' : 'কৌশল', href: '/strategy', icon: Layers },
    { name: lang === 'en' ? 'Live Session' : 'লাইভ সেশন', href: '/live-trading', icon: Globe2 },
    { name: lang === 'en' ? 'Community' : 'কমিউনিটি', href: '/community', icon: Users },
    { name: lang === 'en' ? 'Calculators' : 'ক্যালকুলেটর', href: '/calculators', icon: Calculator },
    { name: lang === 'en' ? 'Journal' : 'ট্রেডিং জার্নাল', href: '/trading-journal', icon: BookOpenCheck },
    { name: lang === 'en' ? 'About' : 'আমাদের সম্পর্কে', href: '/about', icon: Info },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass-luxury-panel py-3 glow-blue' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 shrink-0">
            <span className="text-xl sm:text-2xl font-extrabold tracking-wider bg-gradient-to-r from-trading-gold to-yellow-500 bg-clip-text text-transparent hover:brightness-110 transition">
              MASUMX<span className="text-white">TRADE</span>
            </span>
            <div className="w-2.5 h-2.5 rounded-full bg-trading-bullish animate-pulse"></div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive 
                      ? 'bg-trading-gold/10 text-trading-gold border border-trading-gold/30' 
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Actions & Buttons */}
          <div className="flex items-center space-x-3 shrink-0">
            
            {/* Search Bar */}
            <div className="relative hidden md:block w-48 lg:w-60">
              <input
                type="text"
                placeholder={lang === 'en' ? "Search videos, courses..." : "খুঁজুন..."}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-black/40 border border-white/10 rounded-full px-4 py-1.5 pl-10 text-xs focus:outline-none focus:border-trading-gold focus:ring-1 focus:ring-trading-gold transition-all duration-300"
              />
              <Search className="absolute left-3 top-2 w-4 h-4 text-gray-400" />
            </div>

            {/* Language Switcher */}
            <button
              onClick={() => setLang(lang === 'en' ? 'bn' : 'en')}
              className="flex items-center gap-1 text-xs border border-white/10 px-2 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 transition text-trading-gold font-bold"
            >
              <Globe2 className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'BN' : 'EN'}</span>
            </button>

            {/* Notification Bell */}
            <button className="relative p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 transition">
              <Bell className="w-4 h-4" />
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-trading-bearish"></span>
            </button>

            {/* Auth Buttons */}
            {user ? (
              <div className="flex items-center space-x-2">
                <Link
                  href="/dashboard"
                  className="flex items-center space-x-1 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white/5 border border-white/10 text-white hover:bg-white/10 transition"
                >
                  <User className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Dashboard</span>
                </Link>

                {user.role === 'admin' && (
                  <Link
                    href="/admin"
                    className="flex items-center space-x-1 px-3 py-1.5 rounded-lg text-xs font-semibold bg-trading-gold/20 border border-trading-gold text-trading-gold hover:bg-trading-gold/30 transition"
                  >
                    <ShieldAlert className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Admin</span>
                  </Link>
                )}

                <button
                  onClick={() => setUser(null)}
                  className="p-1.5 rounded-lg bg-trading-bearish/10 border border-trading-bearish/30 text-trading-bearish hover:bg-trading-bearish/20 transition"
                  title="Logout"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-1.5">
                <Link
                  href="/login"
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold text-gray-300 hover:text-white transition"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-gold-gradient text-black hover:brightness-110 transition"
                >
                  Join Premium
                </Link>
              </div>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden p-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white transition"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>

        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="xl:hidden glass-luxury-panel border-t border-white/5 py-4 px-6 animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                    isActive 
                      ? 'bg-trading-gold/10 text-trading-gold border border-trading-gold/30' 
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}