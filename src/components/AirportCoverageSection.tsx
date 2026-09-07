"use client";

import React from "react";
import { Plane, ArrowUpRight } from "lucide-react";
import { AIRPORTS_DATA } from "@/data/site-data";

export default function AirportCoverageSection() {
  return (
    <section id="airports" className="py-24 bg-[#08080c] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="max-w-3xl mb-14 space-y-2">
          <div className="text-[11px] font-bold text-gold-400 uppercase tracking-widest">
            Direct Airport Access
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Serving All Tri-State Terminals.
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400">
            60 minutes complimentary waiting time on international flights &bull; Live flight radar tracking.
          </p>
        </div>

        {/* 4 Clean Minimal Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {AIRPORTS_DATA.map((ap) => (
            <div
              key={ap.code}
              className="bg-[#101015] border border-white/5 rounded-2xl p-6 hover:border-white/20 transition-all group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black text-white group-hover:text-gold-400 transition-colors">
                    {ap.code}
                  </span>
                  <span className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider">
                    {ap.tag}
                  </span>
                </div>
                <div className="text-sm font-semibold text-zinc-200">
                  {ap.name}
                </div>
              </div>

              <div className="pt-6">
                <a
                  href="#booking-bar"
                  className="inline-flex items-center space-x-1 text-xs font-semibold text-zinc-400 group-hover:text-white uppercase tracking-wider"
                >
                  <span>Book {ap.code}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
