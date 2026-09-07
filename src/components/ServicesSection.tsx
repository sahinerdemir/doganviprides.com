"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Plane, Clock, Briefcase, MapPin, Sparkles, ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";
import { SERVICES_DATA } from "@/data/site-data";

const iconMap: Record<string, React.ElementType> = {
  Plane,
  Clock,
  Briefcase,
  MapPin,
  Sparkles,
  ShieldCheck,
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-1.5 text-gold-400 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Tailored VIP Transportation Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white">
            Executive Chauffeur <span className="gold-text-gradient">Services</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            Whether arriving on a late-night international flight or coordinating VIP corporate roadshows, our bespoke transportation ensures absolute punctuality, privacy, and prestige.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_DATA.map((service) => {
            const IconComponent = iconMap[service.icon] || Plane;
            return (
              <div
                key={service.id}
                className="glass-card glass-card-hover rounded-2xl p-6 sm:p-7 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  {/* Icon & Badge */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-gold-400/10 border border-gold-400/30 text-gold-400 flex items-center justify-center group-hover:bg-gold-400 group-hover:text-black transition-colors duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold text-zinc-500 uppercase tracking-wider">
                      VIP Level
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-serif font-bold text-white group-hover:text-gold-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Feature Highlights */}
                  <div className="space-y-2 pt-2 border-t border-border/40">
                    {service.highlights.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-start space-x-2 text-xs text-zinc-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 mt-0.5 flex-shrink-0" />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-6">
                  <a
                    href="#booking-section"
                    className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-gold-400 hover:text-gold-300 transition-colors group/btn"
                  >
                    <span>Request Instant Quote</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
