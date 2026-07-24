# MASUMX TRADE

MASUMX TRADE is a complete, production-ready, highly interactive online academy, strategic hub, and live analytical trading platform designed for modern retail investors.

## Features

- **Next.js 15 (App Router)** & **TypeScript**
- **Tailwind CSS** & **Glassmorphism Dark Theme** (Black, Blue, Gold Accent)
- **Framer Motion** & Smooth Candlestick Animation Backgrounds
- **Firebase integration** (Auth, Firestore Collections, and Storage Rules)
- **Interactive Live Trading Session Page** (BST Dhaka Clock + Active chat)
- **Trading Journal** (Real-time win rate analytics, P&L log, and diary database)
- **Professional Calculators** (Risk Position Size & Profit/Loss projector)
- **Responsive Layout** (Fully optimized for Desktop, Tablet, and Mobile devices)

## Tech Stack
- Framework: Next.js 15
- Language: TypeScript
- CSS: Tailwind CSS (with Glassmorphism panels)
- Icons: Lucide React
- Database & Auth: Firebase v10

## Environment Variables (.env.example)

Create a `.env.local` file with the following variables:

```bash
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-auth-domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-storage-bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
```

## Setup & Deployment Guide

1. Clone or extract this project folder.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Build for Production:
   ```bash
   npm run build
   ```
5. Deploy directly on Vercel by uploading this repository to GitHub and importing it inside Vercel Dashboard without any modifications.
