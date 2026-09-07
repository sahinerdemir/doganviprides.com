"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { AIRPORTS_DATA } from "@/data/site-data";
import { Reveal, StaggerContainer, StaggerItem } from "./Motion";

export default function AirportCoverageSection() {
  return (
    <section id="airports" className="py-24 bg-[#08080c] border-t border-white/5 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-gold-400/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <Reveal>
          <div className="max-w-3xl mb-14 space-y-2">
            <div className="text-[11px] font-bold text-gold-400 uppercase tracking-widest">
              Florida &bull; South Florida Hubs
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Serving All Miami &amp; Florida Terminals.
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 font-light">
              60 minutes complimentary waiting time on international flights &bull; Commercial (MIA, FLL, PBI) &amp; Private Jet FBOs (Opa-Locka OPF).
            </p>
          </div>
        </Reveal>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {AIRPORTS_DATA.map((ap) => (
            <StaggerItem key={ap.code}>
              <div className="bg-[#101015] border border-white/5 rounded-2xl p-6 hover:border-gold-400/30 transition-all duration-300 group flex flex-col justify-between h-full">
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
                    className="inline-flex items-center space-x-1 text-xs font-semibold text-zinc-400 group-hover:text-white uppercase tracking-wider transition-colors"
                  >
                    <span>Book {ap.code}</span>
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
