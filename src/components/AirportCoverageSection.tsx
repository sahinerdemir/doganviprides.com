"use client";

import React from "react";
import { ArrowUpRight, Plane } from "lucide-react";
import { AIRPORTS_DATA } from "@/data/site-data";
import { Reveal, StaggerContainer, StaggerItem } from "./Motion";

export default function AirportCoverageSection() {
  return (
    <section
      id="airports"
      className="py-24 sm:py-32 bg-gradient-to-b from-[#0c0d14] via-[#0e1320] to-[#0d0f18] border-t border-white/10 relative overflow-hidden"
    >
      {/* High-Performance Radial Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(59,130,246,0.05)_0%,transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <Reveal>
          <div className="max-w-3xl mb-14 space-y-3">
            <div className="inline-flex items-center space-x-1.5 text-[11px] font-bold text-gold-400 uppercase tracking-widest px-3 py-1 rounded-full bg-gold-400/10 border border-gold-400/25">
              <Plane className="w-3 h-3" />
              <span>Florida &bull; South Florida Executive Hubs</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Serving All Miami &amp; Florida Terminals.
            </h2>
            <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
              60 minutes complimentary waiting time on international flights &bull; Commercial (MIA, FLL, PBI) &amp; Private Jet FBOs (Opa-Locka OPF).
            </p>
          </div>
        </Reveal>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {AIRPORTS_DATA.map((ap) => (
            <StaggerItem key={ap.code}>
              <div className="bg-[#131724]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-7 hover:border-gold-400/40 hover:bg-[#181d2f]/90 transition-all duration-300 group flex flex-col justify-between h-full shadow-xl">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-black text-white group-hover:text-gold-400 transition-colors">
                      {ap.code}
                    </span>
                    <span className="text-[10px] uppercase font-bold text-gold-400/80 px-2.5 py-0.5 rounded-full bg-gold-400/10 border border-gold-400/20 tracking-wider">
                      {ap.tag}
                    </span>
                  </div>
                  <div className="text-sm font-semibold text-zinc-100">
                    {ap.name}
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed font-light">
                    {ap.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/5 mt-4">
                  <a
                    href="#booking-bar"
                    className="inline-flex items-center space-x-1.5 text-xs sm:text-sm font-semibold text-zinc-300 group-hover:text-gold-400 transition-colors"
                  >
                    <span>Book {ap.code} Transfer</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
