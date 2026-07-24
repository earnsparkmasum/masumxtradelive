'use client';

import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'What is MASUMX TRADE?',
      a: 'MASUMX TRADE is a premium trading education portal and resource platform designed to teach high-probability Smart Money Concepts (SMC), institutional price action models, risk management, and trading strategies.'
    },
    {
      q: 'Is there a free trial?',
      a: 'Yes, we provide several free beginner-friendly modules on Price Action, basic trading terminologies, and indicators without requiring any credit card details.'
    },
    {
      q: 'How do I pay for premium or lifetime tiers?',
      a: 'We support local and international payment methods. Users in Bangladesh can easily complete payments using SSLCommerz gateway (bKash, Nagad, Visa/Mastercard). International users can safely pay using Stripe Credit/Debit card processors.'
    },
    {
      q: 'Can I request a refund?',
      a: 'Due to the immediate digital nature and proprietary strategies of our courses, we have a strict no-refund policy. We encourage watching our free content on the homepage and videos page prior to purchasing.'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <span className="text-[10px] font-bold text-trading-gold bg-trading-gold/10 px-3 py-1 rounded-full border border-trading-gold/20 inline-block mb-3 uppercase tracking-wider">
          SUPPORT HUB
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-white mb-3">FREQUENTLY ASKED QUESTIONS</h1>
        <p className="text-xs text-gray-400">Everything you need to know about MASUMX subscription models, payments, and strategy files.</p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={idx} className="glass-luxury-panel rounded-2xl border border-white/5 overflow-hidden transition duration-300">
              <button
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full flex justify-between items-center p-5 text-left text-sm font-bold text-white hover:bg-white/5 transition"
              >
                <span>{faq.q}</span>
                {isOpen ? <ChevronUp className="w-4 h-4 text-trading-gold" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
              </button>
              {isOpen && (
                <div className="p-5 pt-0 border-t border-white/5 bg-black/20 text-xs text-gray-300 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}