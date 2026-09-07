"use client";

import React, { useState } from "react";
import { ChevronDown, Sparkles, HelpCircle } from "lucide-react";
import { FAQ_DATA } from "@/data/site-data";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-background relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <div className="inline-flex items-center space-x-1.5 text-gold-400 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Clear Answers & Policies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white">
            Frequently Asked <span className="gold-text-gradient">Questions</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            Everything you need to know about our VIP rides, airport policies, booking process, and vehicle amenities.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_DATA.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl overflow-hidden border border-border/70 hover:border-gold-400/40 transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between space-x-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-semibold text-white">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-surface-light flex items-center justify-center text-gold-400 transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? "rotate-180 bg-gold-400 text-black" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-xs sm:text-sm text-zinc-300 leading-relaxed border-t border-border/40 pt-4 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-10 p-6 rounded-2xl bg-surface border border-border/80 text-center space-y-3">
          <h3 className="text-base font-bold text-white">Have a special itinerary or custom group request?</h3>
          <p className="text-xs text-zinc-400 max-w-md mx-auto">
            Our 24/7 executive concierge is standing by to assist with multi-vehicle logistics, wedding escorts, or long-distance travel.
          </p>
          <div className="pt-1">
            <a
              href={`tel:+15513315426`}
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-lg bg-surface-light border border-gold-400/40 text-gold-400 hover:bg-gold-400 hover:text-black text-xs font-bold uppercase tracking-wider transition-all"
            >
              <span>Call 24/7 Dispatch: (551) 331-5426</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
