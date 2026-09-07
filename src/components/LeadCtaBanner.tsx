"use client";

import React from "react";
import { Phone, ArrowRight } from "lucide-react";
import { BUSINESS_INFO } from "@/data/site-data";

export default function LeadCtaBanner() {
  return (
    <section className="py-24 bg-[#08080c] border-t border-b border-white/5 text-center">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 space-y-8">
        <div className="space-y-3">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Experience First-Class Mobility.
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-lg mx-auto">
            Available 24/7 across New York &amp; New Jersey. Fixed rates, zero surge pricing.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#booking-bar"
            className="px-6 py-3.5 rounded-full bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-gold-400 transition-all flex items-center space-x-2 shadow-xl"
          >
            <span>Instant Quote</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          <a
            href={`tel:${BUSINESS_INFO.phoneClean}`}
            className="px-6 py-3.5 rounded-full border border-white/10 hover:border-white/30 text-white text-xs font-semibold uppercase tracking-wider transition-all flex items-center space-x-2"
          >
            <Phone className="w-3.5 h-3.5 text-gold-400" />
            <span>Call {BUSINESS_INFO.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
