"use client";

import React from "react";
import { Star } from "lucide-react";
import { TESTIMONIALS_DATA } from "@/data/site-data";

export default function TestimonialsSection() {
  const reviews = TESTIMONIALS_DATA.slice(0, 2);

  return (
    <section className="py-24 sm:py-32 bg-[#08080c] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4">
          <div className="space-y-2">
            <div className="text-[11px] font-bold text-gold-400 uppercase tracking-widest">
              Client Feedback
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Trusted by Discerning Travelers.
            </h2>
          </div>
          <div className="flex items-center space-x-1 text-gold-400 text-xs font-semibold">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-gold-400 text-gold-400" />
              ))}
            </div>
            <span className="text-white ml-2">4.9 / 5.0</span>
            <span className="text-zinc-500 font-normal ml-1">(Google Reviews)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((r) => (
            <div
              key={r.id}
              className="bg-[#101015] border border-white/5 rounded-3xl p-8 sm:p-10 space-y-6 flex flex-col justify-between"
            >
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
                &ldquo;{r.comment}&rdquo;
              </p>

              <div className="border-t border-white/5 pt-4 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-white">{r.name}</div>
                  <div className="text-xs text-zinc-500">{r.role}</div>
                </div>
                <div className="text-xs text-zinc-500">{r.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
