"use client";

import React from "react";
import Image from "next/image";
import BookingWidget from "./BookingWidget";
import { Sparkles, Shield, Clock } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] sm:min-h-[95vh] flex flex-col justify-center items-center text-center px-4 pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden bg-[#060608]">
      {/* Full-Screen Crisp & Vibrant Luxury Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <Image
          src="/hero-bg.jpg"
          alt="Miami Luxury Private Jet Chauffeur VIP Service"
          fill
          priority
          quality={80}
          className="object-cover object-center opacity-75 sm:opacity-80"
          sizes="100vw"
        />
        {/* Balanced Vignette & Dark Overlays for Ultra-Crisp Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#060608] via-[#060608]/45 to-[#060608]/65" />
        <div className="absolute inset-0 bg-black/25" />
      </div>

      {/* Lightweight Radial Ambient Gold Highlight */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.08)_0%,transparent_60%)] pointer-events-none z-0" />

      <div className="max-w-4xl mx-auto space-y-5 sm:space-y-6 relative z-10 w-full">
        {/* Miami Flagship Badge */}
        <div className="inline-flex items-center space-x-1.5 sm:space-x-2 px-3.5 py-1.5 rounded-full bg-black/80 border border-gold-400/50 backdrop-blur-xl shadow-gold-glow">
          <Sparkles className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
          <span className="text-[10px] sm:text-[11px] font-bold tracking-widest text-gold-300 uppercase">
            Miami &bull; South Florida Premier Chauffeur
          </span>
        </div>

        {/* Minimalist Bold Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.15] drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
          First-Class Rides. <br />
          <span className="gold-gradient-text">Miami &amp; Beyond.</span>
        </h1>

        {/* Concise Subtitle with High Contrast */}
        <p className="text-xs sm:text-sm md:text-base text-zinc-100 max-w-xl mx-auto font-medium leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] px-2">
          Bespoke private transportation with licensed chauffeurs across Miami, South Beach, Brickell, Palm Beach, MIA, FLL, and private jet FBOs.
        </p>

        {/* 3-Tab Booking Bar */}
        <div className="pt-2 sm:pt-4 w-full">
          <BookingWidget />
        </div>

        {/* 3 Quick Minimal Metrics */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-10 pt-4 sm:pt-6 text-[11px] sm:text-xs text-zinc-200 uppercase tracking-wider font-semibold drop-shadow-md">
          <div className="flex items-center space-x-1.5">
            <Clock className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
            <span>MIA &bull; FLL &bull; PBI Delay Tracking</span>
          </div>
          <div className="hidden sm:block text-zinc-400">&bull;</div>
          <div className="flex items-center space-x-1.5">
            <Shield className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
            <span>Guaranteed All-Inclusive Rates</span>
          </div>
          <div className="hidden sm:block text-zinc-400">&bull;</div>
          <div>24/7 Live Executive Dispatch</div>
        </div>
      </div>
    </section>
  );
}
