"use client";

import React from "react";
import { Phone, ArrowRight, Sparkles } from "lucide-react";
import { BUSINESS_INFO } from "@/data/site-data";
import { Reveal } from "./Motion";

export default function LeadCtaBanner() {
  return (
    <section className="py-24 sm:py-32 bg-gradient-to-b from-[#141210] via-[#1f1910] to-[#08080c] border-t border-b border-white/10 text-center relative overflow-hidden">
      {/* Radiant Gold Glow Center */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.12)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 sm:px-8 space-y-8 relative z-10">
        <Reveal>
          <div className="space-y-4">
            <div className="inline-flex items-center space-x-1.5 text-[11px] font-bold text-gold-400 uppercase tracking-widest px-3.5 py-1 rounded-full bg-gold-400/10 border border-gold-400/30">
              <Sparkles className="w-3 h-3" />
              <span>Miami &bull; South Florida &bull; Nationwide</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Experience First-Class Mobility.
            </h2>
            <p className="text-xs sm:text-sm text-zinc-300 max-w-lg mx-auto font-light leading-relaxed">
              Available 24/7 across Miami, Fort Lauderdale, Palm Beach, and nationwide. Fixed transparent rates with zero surge pricing.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="#booking-bar"
              className="px-8 py-4 rounded-full bg-gold-400 text-black font-bold text-sm hover:bg-white hover:scale-105 transition-all flex items-center space-x-2 shadow-2xl shadow-gold-400/20"
            >
              <span>Instant Quote</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="px-8 py-4 rounded-full bg-white/5 border border-white/15 hover:border-gold-400/50 hover:bg-white/10 text-white text-sm font-semibold transition-all flex items-center space-x-2 backdrop-blur-md"
            >
              <Phone className="w-4 h-4 text-gold-400" />
              <span>Call {BUSINESS_INFO.phoneDisplay}</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
