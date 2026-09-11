"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { SERVICES_DATA } from "@/data/site-data";
import { Reveal, StaggerContainer, StaggerItem } from "./Motion";

export default function ServicesSection() {
  const topServices = SERVICES_DATA.slice(0, 3);

  return (
    <section
      id="services"
      className="py-24 sm:py-32 bg-gradient-to-b from-[#121019] via-[#17141b] to-[#0c0d14] relative overflow-hidden border-t border-white/10"
    >
      {/* High-Performance Radial Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(168,85,247,0.04)_0%,transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4">
            <div className="space-y-2">
              <div className="inline-flex items-center space-x-1.5 text-[11px] font-bold text-gold-400 uppercase tracking-widest px-3 py-1 rounded-full bg-gold-400/10 border border-gold-400/25">
                <Sparkles className="w-3 h-3" />
                <span>Tailored Travel</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                Bespoke Services.
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-zinc-300 max-w-md font-light leading-relaxed">
              Whether arriving on a red-eye flight or navigating back-to-back executive meetings, we ensure seamless mobility across Miami & beyond.
            </p>
          </div>
        </Reveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {topServices.map((service) => (
            <StaggerItem key={service.id}>
              <div className="bg-[#181520]/80 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-gold-400/40 hover:bg-[#1f1b29]/90 transition-all duration-500 flex flex-col justify-between group h-full shadow-2xl">
                <div className="relative h-56 w-full overflow-hidden bg-black/40">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#181520] via-[#181520]/40 to-transparent" />
                </div>

                <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2.5">
                    <h3 className="text-xl font-bold text-white group-hover:text-gold-300 transition-colors">
                      {service.title.split("(")[0]}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-300 line-clamp-3 leading-relaxed font-light">
                      {service.shortDesc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <a
                      href="#booking-bar"
                      className="inline-flex items-center space-x-1.5 text-xs sm:text-sm font-semibold text-zinc-300 group-hover:text-gold-400 transition-colors"
                    >
                      <span>Instant Quote</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
