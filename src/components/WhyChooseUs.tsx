"use client";

import React from "react";
import { ShieldCheck, Clock, Award, DollarSign, Sparkles, HeartHandshake } from "lucide-react";

export default function WhyChooseUs() {
  const pillars = [
    {
      icon: Clock,
      title: "100% Punctuality Guarantee",
      desc: "Our chauffeurs arrive 15 minutes ahead of schedule. Your time is invaluable, and we ensure you never wait.",
    },
    {
      icon: ShieldCheck,
      title: "Vetted & Licensed Chauffeurs",
      desc: "Strict background checks, drug testing, and executive etiquette training for maximum passenger safety and privacy.",
    },
    {
      icon: DollarSign,
      title: "Transparent All-Inclusive Rates",
      desc: "Fixed, guaranteed quotes with no hidden tolls, surprise airport fees, or peak hour surge pricing.",
    },
    {
      icon: HeartHandshake,
      title: "24/7 VIP Concierge & Live Dispatch",
      desc: "Instant live human customer support available around the clock for flight changes, custom stops, and last-minute requests.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-1.5 text-gold-400 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Gold Standard in Chauffeur Service</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white">
            Why Discerning Clients Choose <br />
            <span className="gold-text-gradient">Dogan VIP Rides</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            We bridge the gap between traditional black car services and true five-star executive hospitality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl p-6 space-y-4 hover:border-gold-400/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-gold-400/10 border border-gold-400/30 text-gold-400 flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-serif font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-2">
                  <span className="text-[11px] font-bold text-gold-400 tracking-wider uppercase">
                    Pillar 0{idx + 1}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
