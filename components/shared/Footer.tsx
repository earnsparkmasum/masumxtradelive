import Link from 'next/link';
import { 
  TrendingUp, Github, Twitter, Youtube, ShieldAlert, FileText, Send 
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black/80 border-t border-white/5 mt-auto">
      {/* Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-trading-gold/40 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-black tracking-wider bg-gradient-to-r from-trading-gold to-yellow-500 bg-clip-text text-transparent">
                MASUMX<span className="text-white">TRADE</span>
              </span>
            </Link>
            <p className="text-xs text-gray-400 leading-relaxed">
              Premium quality online education, strategy hub, and live analytics platform for smart traders worldwide.
            </p>
            <div className="flex space-x-3 pt-2">
              <a href="https://t.me/masumxtrade" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-trading-gold/10 hover:text-trading-gold transition">
                <Send className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-trading-gold/10 hover:text-trading-gold transition">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-trading-gold/10 hover:text-trading-gold transition">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-trading-gold/10 hover:text-trading-gold transition">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-white mb-4 tracking-wider uppercase">Menu</h3>
            <ul className="space-y-2 text-xs text-gray-400">
              <li><Link href="/" className="hover:text-trading-gold transition">Home</Link></li>
              <li><Link href="/videos" className="hover:text-trading-gold transition">Videos</Link></li>
              <li><Link href="/courses" className="hover:text-trading-gold transition">Courses</Link></li>
              <li><Link href="/strategy" className="hover:text-trading-gold transition">Premium Strategies</Link></li>
              <li><Link href="/live-trading" className="hover:text-trading-gold transition">Live Sessions</Link></li>
            </ul>
          </div>

          {/* Legal / Policy */}
          <div>
            <h3 className="text-sm font-bold text-white mb-4 tracking-wider uppercase">Legal & Contact</h3>
            <ul className="space-y-2 text-xs text-gray-400">
              <li><Link href="/terms" className="hover:text-trading-gold transition">Terms & Conditions</Link></li>
              <li><Link href="/privacy" className="hover:text-trading-gold transition">Privacy Policy</Link></li>
              <li><Link href="/dmca" className="hover:text-trading-gold transition">DMCA Compliance</Link></li>
              <li><Link href="/faq" className="hover:text-trading-gold transition">Frequently Asked Questions</Link></li>
              <li><Link href="/contact" className="hover:text-trading-gold transition">Contact Support</Link></li>
            </ul>
          </div>

          {/* VIP Announcement */}
          <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-3 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-trading-gold/10 rounded-full blur-xl"></div>
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-trading-gold bg-trading-gold/10 px-2 py-0.5 rounded border border-trading-gold/20">
              VIP VIP VIP
            </span>
            <h4 className="text-xs font-bold text-white">Join Lifetime Membership</h4>
            <p className="text-[11px] text-gray-400">
              Get access to indicators, SSLCommerz and Stripe secure gateway, and exclusive Bangladesh Time trading session updates.
            </p>
            <Link
              href="/register"
              className="block text-center text-xs font-semibold py-2 rounded-lg bg-gold-gradient text-black hover:brightness-110 transition mt-2"
            >
              Get Premium Access
            </Link>
          </div>

        </div>

        <div className="pt-8 border-t border-white/5 text-center flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {currentYear} MASUMX TRADE. All rights reserved.</p>
          <div className="flex space-x-4">
            <Link href="/privacy" className="hover:underline">Privacy</Link>
            <Link href="/terms" className="hover:underline">Terms</Link>
            <Link href="/dmca" className="hover:underline">DMCA</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}