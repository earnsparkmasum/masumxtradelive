'use client';

import React from 'react';

export default function DMCAPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 leading-relaxed text-xs sm:text-sm text-gray-300 space-y-6">
      <h1 className="text-3xl font-black text-white uppercase tracking-wider">DMCA Compliance Notice</h1>
      <p className="text-gray-400">Last updated: July 2026</p>

      <section className="space-y-3">
        <h2 className="text-lg font-bold text-white uppercase tracking-wider">Digital Millennium Copyright Act (DMCA)</h2>
        <p>
          MASUMX TRADE respects the intellectual property rights of others. If you believe any course, thumbnail, video, or community post listed on our platform infringes your valid copyright, please send a structured DMCA takedown notice containing:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-xs">
          <li>Detailed description of the copyrighted work claimed to have been infringed.</li>
          <li>Direct link to the material you claim is infringing.</li>
          <li>Your full contact details (Name, Address, Email, Phone).</li>
          <li>A clear statement of good faith belief and signature.</li>
        </ul>
        <p className="pt-2">Send all formal DMCA notices to: <strong className="text-trading-gold">dmca@masumxtrade.com</strong></p>
      </section>
    </div>
  );
}