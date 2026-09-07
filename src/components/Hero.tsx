"use client";

import React from "react";
import Image from "next/image";
import { Shield, Star, Clock, Sparkles, Award } from "lucide-react";
import BookingWidget from "./BookingWidget";
import { BUSINESS_INFO } from "@/data/site-data";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex flex-col justify-center overflow-hidden bg-background">
      {/* Background Decorative Gradients & Luxury Mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(212,175,55,0.15),rgba(255,255,255,0))]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background pointer-events-none" />

      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Badges */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-surface-light/80 border border-gold-400/30 backdrop-blur-md shadow-gold-glow">
            <Sparkles className="w-4 h-4 text-gold-400" />
            <span className="text-xs font-semibold uppercase tracking-widest text-gold-300">
              New York & New Jersey Premier Chauffeur Service
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white leading-tight">
            First-Class Rides. <br />
            <span className="gold-text-gradient">Executive Precision.</span>
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-zinc-300 font-light leading-relaxed max-w-2xl mx-auto">
            Experience bespoke private transportation with licensed chauffeurs across NYC, New Jersey, JFK, EWR, LGA, and Teterboro. Seamless airport transfers, hourly executive hire, and luxury event travel.
          </p>

          {/* Quick Trust Highlights */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 pt-2 text-xs text-zinc-300">
            <div className="flex items-center space-x-1.5">
              <Clock className="w-4 h-4 text-gold-400" />
              <span>100% On-Time Guarantee</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <Shield className="w-4 h-4 text-gold-400" />
              <span>TLC & DOT Certified Chauffeurs</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <Star className="w-4 h-4 text-gold-400 fill-gold-400" />
              <span className="font-semibold text-white">4.9 / 5</span>
              <span className="text-zinc-400">(Google Verified)</span>
            </div>
          </div>
        </div>

        {/* Dynamic Booking & Lead Capture Widget */}
        <div className="mt-4">
          <BookingWidget />
        </div>
      </div>
    </section>
  );
}
