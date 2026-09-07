"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SERVICES_DATA } from "@/data/site-data";
import { Reveal, StaggerContainer, StaggerItem } from "./Motion";

export default function ServicesSection() {
  const topServices = SERVICES_DATA.slice(0, 3);

  return (
    <section id="services" className="py-24 sm:py-32 bg-[#050507]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4">
            <div className="space-y-2">
              <div className="text-[11px] font-bold text-gold-400 uppercase tracking-widest">
                Tailored Travel
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Bespoke Services.
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-md font-light">
              Whether arriving on a red-eye flight or navigating back-to-back executive meetings, we ensure seamless mobility.
            </p>
          </div>
        </Reveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {topServices.map((service) => (
            <StaggerItem key={service.id}>
              <div className="bg-[#0e0e13] border border-white/5 rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-500 flex flex-col justify-between group h-full">
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e13] via-transparent to-transparent" />
                </div>

                <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-gold-300 transition-colors">
                      {service.title.split("(")[0]}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-400 line-clamp-3 leading-relaxed font-light">
                      {service.shortDesc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/5">
                    <a
                      href="#booking-bar"
                      className="inline-flex items-center space-x-1.5 text-xs font-semibold text-white group-hover:text-gold-400 uppercase tracking-wider transition-colors"
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
