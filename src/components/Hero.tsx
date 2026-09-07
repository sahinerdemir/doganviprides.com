"use client";

import React from "react";
import BookingWidget from "./BookingWidget";
import { Sparkles, Shield, Clock } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[95vh] flex flex-col justify-center items-center text-center px-4 pt-32 pb-20 overflow-hidden bg-[#060608]">
      {/* Animated Subtle Ambient Luxury Light Flows */}
      <div className="absolute top-1/4 left-1/3 w-[650px] h-[400px] bg-gold-400/15 blur-[160px] pointer-events-none rounded-full ambient-glow-1" />
      <div className="absolute bottom-1/4 right-1/3 w-[550px] h-[350px] bg-amber-600/10 blur-[180px] pointer-events-none rounded-full ambient-glow-2" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gold-300/5 blur-[200px] pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto space-y-6 relative z-10">
        {/* Miami Flagship Badge */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/15 backdrop-blur-md shadow-gold-glow">
          <Sparkles className="w-3.5 h-3.5 text-gold-400" />
          <span className="text-[11px] font-bold tracking-widest text-gold-300 uppercase">
            Miami &bull; South Florida Premier Executive Chauffeur
          </span>
        </div>

        {/* Minimalist Bold Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]">
          First-Class Rides. <br />
          <span className="gold-gradient-text">Miami &amp; Beyond.</span>
        </h1>

        {/* Concise Subtitle with Breathing Room */}
        <p className="text-sm sm:text-base text-zinc-300 max-w-xl mx-auto font-normal leading-relaxed">
          Bespoke private transportation with licensed chauffeurs across Miami, South Beach, Brickell, Palm Beach, MIA, FLL, and private jet FBOs.
        </p>

        {/* 3-Tab Booking Bar */}
        <div className="pt-6 w-full">
          <BookingWidget />
        </div>

        {/* 3 Quick Minimal Metrics */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 pt-8 text-xs text-zinc-400 uppercase tracking-widest font-semibold">
          <div className="flex items-center space-x-1.5">
            <Clock className="w-3.5 h-3.5 text-gold-400" />
            <span>MIA &bull; FLL &bull; PBI Delay Tracking</span>
          </div>
          <div className="hidden sm:block text-zinc-600">&bull;</div>
          <div className="flex items-center space-x-1.5">
            <Shield className="w-3.5 h-3.5 text-gold-400" />
            <span>Guaranteed All-Inclusive Flat Rates</span>
          </div>
          <div className="hidden sm:block text-zinc-600">&bull;</div>
          <div>24/7 Live Executive Dispatch</div>
        </div>
      </div>
    </section>
  );
}
