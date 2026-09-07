"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Users, Briefcase, Check, Sparkles, ArrowRight, ShieldCheck } from "lucide-react";
import { FLEET_DATA } from "@/data/site-data";

export default function FleetSection() {
  const [activeVehicle, setActiveVehicle] = useState(FLEET_DATA[0].id);

  return (
    <section id="fleet" className="py-20 lg:py-28 bg-surface/50 border-t border-b border-border/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center space-x-1.5 text-gold-400 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Meticulously Maintained Showroom Fleet</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white">
            Travel in Pure <span className="gold-text-gradient">Luxury & Comfort</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            From late-model executive SUVs to first-class sedans and custom Mercedes Sprinters, our fleet offers unmatched sophistication for every occasion.
          </p>
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FLEET_DATA.map((vehicle) => (
            <div
              key={vehicle.id}
              className="glass-card rounded-2xl overflow-hidden group hover:border-gold-400/40 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Container with Luxury Overlay */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-zinc-900">
                <Image
                  src={vehicle.image}
                  alt={`${vehicle.name} - Luxury Chauffeur Ride NY & NJ`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent" />

                {/* Starting Rate Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-gold-400/40 text-gold-300 text-xs font-bold">
                  {vehicle.startingRate}
                </div>

                {/* Capacity Badges */}
                <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                  <div className="flex items-center space-x-1 px-2.5 py-1 rounded-lg bg-black/80 backdrop-blur-md border border-border text-xs text-white">
                    <Users className="w-3.5 h-3.5 text-gold-400" />
                    <span>Up to {vehicle.passengers} Pax</span>
                  </div>
                  <div className="flex items-center space-x-1 px-2.5 py-1 rounded-lg bg-black/80 backdrop-blur-md border border-border text-xs text-white">
                    <Briefcase className="w-3.5 h-3.5 text-gold-400" />
                    <span>{vehicle.luggage} Suitcases</span>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 sm:p-7 space-y-5 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="text-xs font-semibold uppercase tracking-wider text-gold-400">
                    {vehicle.category}
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-white group-hover:text-gold-300 transition-colors">
                    {vehicle.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300 line-clamp-2 leading-relaxed">
                    {vehicle.description}
                  </p>
                </div>

                {/* Key Amenities */}
                <div className="space-y-2 pt-2 border-t border-border/50">
                  <div className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider">
                    Included Amenities:
                  </div>
                  <div className="grid grid-cols-2 gap-1.5">
                    {vehicle.features.slice(0, 4).map((feat, idx) => (
                      <div key={idx} className="flex items-center space-x-1.5 text-xs text-zinc-300">
                        <Check className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action CTA */}
                <div className="pt-4">
                  <a
                    href="#booking-section"
                    className="w-full py-2.5 rounded-xl border border-gold-400/40 text-gold-300 hover:bg-gold-400 hover:text-black font-semibold text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center space-x-1.5"
                  >
                    <span>Reserve {vehicle.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
