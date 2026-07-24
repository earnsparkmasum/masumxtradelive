'use client';

import React from 'react';

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 leading-relaxed text-xs sm:text-sm text-gray-300 space-y-6">
      <h1 className="text-3xl font-black text-white uppercase tracking-wider">Privacy Policy</h1>
      <p className="text-gray-400">Last updated: July 2026</p>

      <section className="space-y-3">
        <h2 className="text-lg font-bold text-white uppercase tracking-wider">1. Information We Collect</h2>
        <p>
          We collect personal data you provide, such as your full name, email address, profile photo, and billing logs, to configure your custom dashboard experience and authenticate premium content access via Firebase.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-bold text-white uppercase tracking-wider">2. Security & Compliance</h2>
        <p>
          Your password and sensitive authentication mechanisms are managed securely by Firebase Authentication. Payment details are handled directly by industry-standard third-party providers (Stripe and SSLCommerz). We never store raw credit card details on our Firestore databases.
        </p>
      </section>
    </div>
  );
}