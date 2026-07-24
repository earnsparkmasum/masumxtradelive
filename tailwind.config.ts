import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#030712',
        foreground: '#f9fafb',
        trading: {
          bullish: '#10b981',
          bearish: '#ef4444',
          gold: '#fbbf24',
          premium: '#d97706',
          glow: '#3b82f6',
        },
      },
      backgroundImage: {
        'luxury-gradient': 'linear-gradient(135deg, #030712 0%, #0b1528 50%, #111827 100%)',
        'gold-gradient': 'linear-gradient(135deg, #f59e0b 0%, #b45309 100%)',
      },
      boxShadow: {
        'glass-luxury': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'gold-glow': '0 0 20px rgba(251, 191, 36, 0.15)',
        'blue-glow': '0 0 25px rgba(59, 130, 246, 0.2)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;