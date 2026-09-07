"use client";

import React from "react";
import { Clock, Shield, DollarSign, Sparkles } from "lucide-react";
import { Reveal, StaggerContainer, StaggerItem } from "./Motion";

export default function WhyChooseUs() {
  const points = [
    {
      icon: Clock,
      title: "Guaranteed Punctuality",
      desc: "Chauffeurs arrive 15 minutes prior to scheduled pickup. Live GPS flight and traffic tracking keeps you ahead.",
    },
    {
      icon: Shield,
      title: "Vetted & Certified",
      desc: "Commercial TLC & DOT licensing, rigorous background checks, and executive five-star etiquette training.",
    },
    {
      icon: DollarSign,
      title: "Fixed All-Inclusive Rates",
      desc: "Upfront pricing with zero hidden surcharges, toll surprises, or peak-demand surge pricing in Miami.",
    },
  ];

  return (
    <section
      className="py-24 sm:py-32 bg-gradient-to-b from-[#060608] via-[#0e0e16] to-[#13131c] relative overflow-hidden border-t border-white/10"
    >
      {/* High-Performance Radial Ambient Highlight */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(212,175,55,0.06)_0%,transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-3">
            <div className="inline-flex items-center space-x-1.5 text-[11px] font-bold text-gold-400 uppercase tracking-widest px-3.5 py-1 rounded-full bg-gold-400/10 border border-gold-400/30">
              <Sparkles className="w-3 h-3" />
              <span>Unmatched Executive Standards</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              The Gold Standard in Miami.
            </h2>
            <p className="text-xs sm:text-sm text-zinc-300 font-light max-w-md mx-auto">
              Combining world-class fleet logistics with discrete VIP hospitality across South Florida.
            </p>
          </div>
        </Reveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <StaggerItem key={idx}>
                <div className="bg-[#171722]/90 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-gold-400/40 hover:bg-[#1c1c2b] transition-all duration-300 group flex flex-col justify-between h-full shadow-xl">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-gold-400/10 border border-gold-400/30 flex items-center justify-center text-gold-400 group-hover:bg-gold-400 group-hover:text-black transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-gold-300 transition-colors">
                      {pt.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light">
                      {pt.desc}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-white/5 mt-4 text-[10px] font-bold uppercase tracking-widest text-gold-400/80">
                    Pillar 0{idx + 1}
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
