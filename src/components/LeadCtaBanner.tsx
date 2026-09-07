"use client";

import React from "react";
import { Phone, MessageCircle, ArrowRight, Sparkles, ShieldCheck } from "lucide-react";
import { BUSINESS_INFO } from "@/data/site-data";

export default function LeadCtaBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-surface via-surface-light to-surface border-t border-b border-gold-400/30 relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[250px] bg-gold-400/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center space-x-1.5 text-gold-400 text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Ready for First-Class Comfort?</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white leading-tight">
              Reserve Your VIP Ride in <span className="gold-text-gradient">Under 60 Seconds</span>
            </h2>
            <p className="text-xs sm:text-sm text-zinc-300">
              Instant guaranteed flat quotes. No surge pricing, no delays. Serving NYC, New Jersey, and all Tri-State airports 24/7.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl border border-border bg-surface text-white text-xs font-bold uppercase tracking-wider hover:border-gold-400 hover:text-gold-300 transition-all flex items-center justify-center space-x-2 shadow-lg"
            >
              <Phone className="w-4 h-4 text-gold-400" />
              <span>{BUSINESS_INFO.phoneDisplay}</span>
            </a>

            <a
              href={`https://wa.me/${BUSINESS_INFO.phoneClean.replace('+', '')}?text=Hello,%20I%20would%20like%20to%20book%20a%20VIP%20ride.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center space-x-2 shadow-lg shadow-emerald-600/30"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Booking</span>
            </a>

            <a
              href="#booking-section"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 text-black text-xs font-bold uppercase tracking-wider hover:opacity-95 shadow-gold-glow transition-all flex items-center justify-center space-x-2"
            >
              <span>Instant Online Quote</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
