'use client';

import React from 'react';

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 leading-relaxed text-xs sm:text-sm text-gray-300 space-y-6">
      <h1 className="text-3xl font-black text-white uppercase tracking-wider">Terms & Conditions</h1>
      <p className="text-gray-400">Last updated: July 2026</p>

      <section className="space-y-3">
        <h2 className="text-lg font-bold text-white uppercase tracking-wider">1. Agreement to Terms</h2>
        <p>
          By accessing or using MASUMX TRADE website and services, you agree to be bound by these Terms and Conditions. If you do not agree, please immediately discontinue use.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-bold text-white uppercase tracking-wider">2. Educational Purposes Only</h2>
        <p>
          All information, courses, videos, indicators, strategies, calculators, and session market commentaries are strictly for educational and informational purposes. MASUMX TRADE is not a financial advisor or registered broker. Trading forex, crypto, indices, and commodities contains substantial mathematical risks. Past performance is not indicative of future results.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-bold text-white uppercase tracking-wider">3. No Refund Policy</h2>
        <p>
          Due to the immediate digital delivery and educational value of our premium strategies, indicators, and courses, all sales made through Stripe and SSLCommerz gateways are final and non-refundable.
        </p>
      </section>
    </div>
  );
}