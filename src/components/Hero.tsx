"use client";

import React from "react";
import Image from "next/image";
import BookingWidget from "./BookingWidget";
import { Sparkles, Shield, Clock } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[98vh] flex flex-col justify-center items-center text-center px-4 pt-32 pb-24 overflow-hidden bg-[#060608]">
      {/* Full-Screen Crisp & Vibrant Luxury Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <Image
          src="/hero-bg.jpg"
          alt="Miami Luxury Private Jet Chauffeur VIP Service"
          fill
          priority
          quality={95}
          className="object-cover object-center opacity-75 sm:opacity-80"
          sizes="100vw"
        />
        {/* Balanced Vignette & Dark Overlays for Ultra-Crisp Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#060608] via-[#060608]/45 to-[#060608]/65" />
        <div className="absolute inset-0 bg-black/25" />
      </div>

      {/* Living Ambient Light Accents */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[350px] bg-gold-400/15 blur-[170px] pointer-events-none rounded-full ambient-glow-1 z-0" />
      <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[300px] bg-amber-600/10 blur-[180px] pointer-events-none rounded-full ambient-glow-2 z-0" />

      <div className="max-w-4xl mx-auto space-y-6 relative z-10">
        {/* Miami Flagship Badge */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-black/75 border border-gold-400/50 backdrop-blur-xl shadow-gold-glow">
          <Sparkles className="w-3.5 h-3.5 text-gold-400" />
          <span className="text-[11px] font-bold tracking-widest text-gold-300 uppercase">
            Miami &bull; South Florida Premier Executive Chauffeur
          </span>
        </div>

        {/* Minimalist Bold Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.1] drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
          First-Class Rides. <br />
          <span className="gold-gradient-text">Miami &amp; Beyond.</span>
        </h1>

        {/* Concise Subtitle with High Contrast */}
        <p className="text-sm sm:text-base text-zinc-100 max-w-xl mx-auto font-medium leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
          Bespoke private transportation with licensed chauffeurs across Miami, South Beach, Brickell, Palm Beach, MIA, FLL, and private jet FBOs.
        </p>

        {/* 3-Tab Booking Bar */}
        <div className="pt-4 w-full">
          <BookingWidget />
        </div>

        {/* 3 Quick Minimal Metrics */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 pt-8 text-xs text-zinc-200 uppercase tracking-widest font-semibold drop-shadow-md">
          <div className="flex items-center space-x-1.5">
            <Clock className="w-3.5 h-3.5 text-gold-400" />
            <span>MIA &bull; FLL &bull; PBI Delay Tracking</span>
          </div>
          <div className="hidden sm:block text-zinc-400">&bull;</div>
          <div className="flex items-center space-x-1.5">
            <Shield className="w-3.5 h-3.5 text-gold-400" />
            <span>Guaranteed All-Inclusive Flat Rates</span>
          </div>
          <div className="hidden sm:block text-zinc-400">&bull;</div>
          <div>24/7 Live Executive Dispatch</div>
        </div>
      </div>
    </section>
  );
}
