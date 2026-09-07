"use client";

import React from "react";
import { Star, Quote, Sparkles, CheckCircle2 } from "lucide-react";
import { TESTIMONIALS_DATA } from "@/data/site-data";

export default function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28 bg-surface/40 border-t border-b border-border/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-1.5 text-gold-400 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Verified Passenger Experiences</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white">
            Trusted by Executives & <br />
            <span className="gold-text-gradient">VIP Travelers</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            Read what corporate leaders, international travelers, and event organizers have to say about our black car service.
          </p>

          {/* Aggregate Rating Pill */}
          <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-xl bg-surface border border-gold-400/30 shadow-gold-glow">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-gold-400 fill-gold-400" />
              ))}
            </div>
            <span className="text-sm font-bold text-white">4.9 / 5.0</span>
            <span className="text-xs text-zinc-400 border-l border-border/80 pl-3">Over 350+ 5-Star Rides</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS_DATA.map((item) => (
            <div
              key={item.id}
              className="glass-card rounded-2xl p-7 space-y-4 hover:border-gold-400/30 transition-all flex flex-col justify-between relative"
            >
              <Quote className="w-8 h-8 text-gold-400/20 absolute top-6 right-6 pointer-events-none" />

              <div className="space-y-3">
                <div className="flex items-center space-x-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gold-400 fill-gold-400" />
                  ))}
                </div>
                <p className="text-sm text-zinc-200 leading-relaxed italic">
                  &ldquo;{item.comment}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-border/50 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-white flex items-center space-x-1.5">
                    <span>{item.name}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <div className="text-xs text-gold-400/90 font-medium">
                    {item.role} {item.company && `• ${item.company}`}
                  </div>
                </div>
                <div className="text-[11px] text-zinc-400 text-right">
                  <div>{item.location}</div>
                  <div>{item.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
