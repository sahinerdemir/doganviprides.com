"use client";

import React from "react";
import Image from "next/image";
import BookingWidget from "./BookingWidget";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center items-center text-center px-4 pt-32 pb-20 overflow-hidden bg-[#050507]">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gold-400/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto space-y-6 relative z-10">
        {/* Subtle Pill */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
          <span className="text-[11px] font-medium tracking-widest text-zinc-300 uppercase">
            New York &amp; New Jersey Premier Chauffeur
          </span>
        </div>

        {/* Minimalist Bold Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]">
          Private Chauffeur Service. <br />
          <span className="text-zinc-500 font-light">Without Compromise.</span>
        </h1>

        {/* Short Subtitle with Breathing Room */}
        <p className="text-sm sm:text-base text-zinc-400 max-w-xl mx-auto font-normal leading-relaxed">
          Pristine executive fleet, licensed professional chauffeurs, and guaranteed on-time airport transfers across JFK, EWR, LGA, and Manhattan.
        </p>

        {/* Booking Bar */}
        <div className="pt-6 w-full">
          <BookingWidget />
        </div>

        {/* 3 Quick Minimal Metrics */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 pt-10 text-xs text-zinc-500 uppercase tracking-widest">
          <div>Flight Delay Tracking</div>
          <div>&bull;</div>
          <div>All-Inclusive Flat Rates</div>
          <div>&bull;</div>
          <div>24/7 Dedicated Concierge</div>
        </div>
      </div>
    </section>
  );
}
