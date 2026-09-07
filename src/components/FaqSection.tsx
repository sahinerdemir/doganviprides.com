"use client";

import React, { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { FAQ_DATA } from "@/data/site-data";
import { Reveal } from "./Motion";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = FAQ_DATA.slice(0, 4);

  return (
    <section
      id="faq"
      className="py-24 sm:py-32 bg-gradient-to-b from-[#0a0a0f] via-[#11131a] to-[#141210] border-t border-white/10 relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-6 sm:px-8 relative z-10">
        <Reveal>
          <div className="text-center space-y-3 mb-16">
            <div className="inline-flex items-center space-x-1.5 text-[11px] font-bold text-gold-400 uppercase tracking-widest px-3 py-1 rounded-full bg-gold-400/10 border border-gold-400/25">
              <HelpCircle className="w-3 h-3" />
              <span>Help &amp; Answers</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Frequently Asked Questions.
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 font-light max-w-md mx-auto">
              Everything you need to know about our executive chauffeur protocols, airport pickups, and rates.
            </p>
          </div>
        </Reveal>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 p-6 ${
                  isOpen
                    ? "bg-[#181a24]/90 border-gold-400/40 shadow-xl"
                    : "bg-[#12131a]/60 border-white/5 hover:border-white/20"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left flex items-center justify-between text-base sm:text-lg font-semibold text-white focus:outline-none"
                >
                  <span className={isOpen ? "text-gold-300" : "text-white"}>{faq.question}</span>
                  <div className={`p-1.5 rounded-full ml-4 flex-shrink-0 transition-colors ${isOpen ? "bg-gold-400 text-black" : "bg-white/10 text-zinc-400"}`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <p className="mt-4 text-xs sm:text-sm text-zinc-300 leading-relaxed font-light pr-4 pt-2 border-t border-white/5">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
