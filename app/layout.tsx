import type { Metadata, Viewport } from 'next';
import '../styles/globals.css';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';

export const metadata: Metadata = {
  title: 'MASUMX TRADE | Premium Trading Platform & Academy',
  description: 'Learn premium strategies, indicators, risk management, price action and access real-time charts, tools & economic calendars.',
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    apple: '/icons/icon-192x192.png',
  },
  openGraph: {
    type: 'website',
    url: 'https://masumxtrade.com',
    title: 'MASUMX TRADE',
    description: 'Learn premium trading strategies and access live charts & analytics.',
    images: [{ url: '/assets/banner.jpg', width: 1200, height: 630 }],
  },
};

export const viewport: Viewport = {
  themeColor: '#030712',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="flex flex-col min-h-screen bg-background text-foreground selection:bg-trading-gold/30">
        <Header />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}