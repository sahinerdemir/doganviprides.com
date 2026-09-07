"use client";

import React from "react";
import Image from "next/image";
import { Users, Briefcase, ArrowUpRight } from "lucide-react";
import { FLEET_DATA } from "@/data/site-data";

export default function FleetSection() {
  return (
    <section id="fleet" className="py-24 sm:py-32 bg-[#08080c] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4">
          <div className="space-y-2">
            <div className="text-[11px] font-bold text-gold-400 uppercase tracking-widest">
              Executive Fleet
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              First-Class Travel.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-md">
            Meticulously detailed and sanitized before every journey. Equipped with chilled bottled water and device charging.
          </p>
        </div>

        {/* Clean 4-Vehicle Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FLEET_DATA.map((vehicle) => (
            <div
              key={vehicle.id}
              className="bg-[#101015] border border-white/5 rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Image */}
              <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-black/40">
                <Image
                  src={vehicle.image}
                  alt={vehicle.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101015] via-transparent to-transparent" />

                {/* Capacity badge */}
                <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                  <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[11px] text-zinc-300">
                    {vehicle.passengers} Guests
                  </span>
                  <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[11px] text-zinc-300">
                    {vehicle.luggage} Bags
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-6 sm:p-8 flex items-center justify-between">
                <div>
                  <div className="text-xs text-gold-400 font-medium uppercase tracking-wider">
                    {vehicle.category}
                  </div>
                  <h3 className="text-xl font-bold text-white mt-1">
                    {vehicle.name}
                  </h3>
                </div>

                <a
                  href="#booking-bar"
                  className="px-4 py-2.5 rounded-full bg-white/10 hover:bg-white text-white hover:text-black text-xs font-semibold uppercase tracking-wider transition-all flex items-center space-x-1"
                >
                  <span>Book</span>
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
