"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Users, Briefcase, ArrowUpRight, Sparkles, ShieldCheck } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FLEET_DATA } from "@/data/site-data";
import { Reveal, StaggerContainer, StaggerItem } from "./Motion";

export default function FleetSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const yLight1 = useTransform(scrollYProgress, [0, 1], [-30, 50]);
  const yLight2 = useTransform(scrollYProgress, [0, 1], [50, -30]);

  return (
    <section
      id="fleet"
      ref={containerRef}
      className="py-24 sm:py-32 bg-gradient-to-b from-[#13131c] via-[#0d0f1a] to-[#121019] relative overflow-hidden border-t border-white/10"
    >
      {/* Subtle Parallax Ambient Glows */}
      <motion.div
        style={{ y: yLight1 }}
        className="absolute top-1/4 -left-20 w-[500px] h-[400px] bg-gold-400/8 blur-[160px] pointer-events-none rounded-full"
      />
      <motion.div
        style={{ y: yLight2 }}
        className="absolute bottom-1/4 -right-20 w-[500px] h-[400px] bg-blue-600/8 blur-[180px] pointer-events-none rounded-full"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4">
            <div className="space-y-2">
              <div className="inline-flex items-center space-x-1.5 text-[11px] font-bold text-gold-400 uppercase tracking-widest px-3 py-1 rounded-full bg-gold-400/10 border border-gold-400/25">
                <Sparkles className="w-3 h-3" />
                <span>2026 Executive Fleet &bull; Transparent Rates</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                First-Class Travel.
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-zinc-300 max-w-md font-light leading-relaxed">
              Brand-new 2026 showroom models, sanitized before every ride. Equipped with chilled artisan water, 5G Wi-Fi, and executive privacy amenities.
            </p>
          </div>
        </Reveal>

        {/* 4-Vehicle Grid with Smooth Stagger Animation */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FLEET_DATA.map((vehicle) => (
            <StaggerItem key={vehicle.id}>
              <div className="bg-[#151722]/90 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-gold-400/40 transition-all duration-500 flex flex-col justify-between group h-full shadow-2xl hover:shadow-gold-400/5">
                {/* Image */}
                <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-black/50">
                  <Image
                    src={vehicle.image}
                    alt={`${vehicle.name} - 2026 Dogan VIP Rides`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#151722] via-transparent to-transparent opacity-90" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-gold-400/40 text-[10px] font-bold text-gold-300 uppercase tracking-wider shadow-lg">
                      {vehicle.year} Model
                    </span>
                    <span className="px-3 py-1 rounded-full bg-gold-400/90 backdrop-blur-md text-black text-[11px] font-extrabold tracking-tight shadow-lg">
                      {vehicle.startingRate}
                    </span>
                  </div>

                  {/* Capacity badge */}
                  <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                    <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/15 text-[11px] font-medium text-zinc-200">
                      {vehicle.passengers} Guests
                    </span>
                    <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/15 text-[11px] font-medium text-zinc-200">
                      {vehicle.luggage} Bags
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6 sm:p-8 flex items-center justify-between gap-4">
                  <div>
                    <div className="text-xs text-gold-400 font-semibold uppercase tracking-wider">
                      {vehicle.category}
                    </div>
                    <h3 className="text-xl font-bold text-white mt-1 group-hover:text-gold-300 transition-colors">
                      {vehicle.name}
                    </h3>
                  </div>

                  <a
                    href="#booking-bar"
                    className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-gold-400 text-white hover:text-black text-xs font-bold uppercase tracking-wider transition-all flex items-center space-x-1.5 shadow-md flex-shrink-0"
                  >
                    <span>Reserve</span>
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
