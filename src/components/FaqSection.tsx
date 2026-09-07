"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FAQ_DATA } from "@/data/site-data";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = FAQ_DATA.slice(0, 4);

  return (
    <section id="faq" className="py-24 sm:py-32 bg-[#050507] border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <div className="text-center space-y-2 mb-16">
          <div className="text-[11px] font-bold text-gold-400 uppercase tracking-widest">
            Help &amp; Answers
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Frequently Asked Questions.
          </h2>
        </div>

        <div className="divide-y divide-white/10">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="py-6">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left flex items-center justify-between text-sm sm:text-base font-semibold text-white focus:outline-none"
                >
                  <span>{faq.question}</span>
                  <div className="text-zinc-400 ml-4 flex-shrink-0">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <p className="mt-4 text-xs sm:text-sm text-zinc-400 leading-relaxed font-light pr-8">
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
