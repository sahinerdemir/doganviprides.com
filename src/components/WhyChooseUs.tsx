"use client";

import React from "react";
import { Clock, Shield, DollarSign } from "lucide-react";

export default function WhyChooseUs() {
  const points = [
    {
      icon: Clock,
      title: "Guaranteed Punctuality",
      desc: "Chauffeurs arrive 15 minutes prior to scheduled pickup. Live GPS dispatch ensures your schedule stays on track.",
    },
    {
      icon: Shield,
      title: "Vetted & Certified",
      desc: "Commercial TLC & DOT licensing, rigorous background checks, and executive etiquette training.",
    },
    {
      icon: DollarSign,
      title: "Fixed All-Inclusive Rates",
      desc: "Upfront pricing with zero hidden surcharges, toll surprises, or peak-hour surge fees.",
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#050507] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-16">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div key={idx} className="space-y-4">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gold-400">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  {pt.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">
                  {pt.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
