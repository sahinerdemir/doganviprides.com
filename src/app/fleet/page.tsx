import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Users, Briefcase, Check, Sparkles, ArrowRight, ShieldCheck } from "lucide-react";
import { FLEET_DATA, BUSINESS_INFO } from "@/data/site-data";
import BookingWidget from "@/components/BookingWidget";
import LeadCtaBanner from "@/components/LeadCtaBanner";

export const metadata: Metadata = {
  title: "Executive Luxury Fleet | Cadillac Escalade, Mercedes S-Class, Sprinter VIP",
  description:
    "Explore our pristine fleet of luxury vehicles for executive travel, airport rides, and group transportation in New York and New Jersey. Cadillac Escalade ESV, Mercedes S-Class, Chevrolet Suburban, and Luxury Sprinters.",
  alternates: {
    canonical: "/fleet",
  },
};

export default function FleetPage() {
  return (
    <div className="pt-28 pb-20 bg-background text-zinc-100">
      {/* Fleet Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 mb-16">
        <div className="inline-flex items-center space-x-1.5 text-gold-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-surface-light border border-gold-400/30">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Showroom Pristine Condition</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white">
          Our Executive <span className="gold-text-gradient">Luxury Fleet</span>
        </h1>
        <p className="text-sm sm:text-base text-zinc-300 max-w-2xl mx-auto leading-relaxed">
          Every Dogan VIP vehicle is meticulously detailed, sanitized before every ride, and stocked with premium amenities to ensure an exceptional travel experience.
        </p>
      </section>

      {/* Fleet Detailed List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 mb-24">
        {FLEET_DATA.map((vehicle, index) => {
          return (
            <div
              key={vehicle.id}
              className="glass-card rounded-3xl p-6 sm:p-10 border border-border/80 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Image */}
              <div className="lg:col-span-6 h-72 sm:h-96 relative rounded-2xl overflow-hidden bg-zinc-900">
                <Image
                  src={vehicle.image}
                  alt={`${vehicle.name} - Dogan VIP Luxury Transportation`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                {/* Starting Rate Badge */}
                <div className="absolute top-4 right-4 px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-gold-400/50 text-gold-300 font-bold text-xs">
                  {vehicle.startingRate}
                </div>

                {/* Capacity Badges */}
                <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                  <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-border text-xs text-white">
                    <Users className="w-3.5 h-3.5 text-gold-400" />
                    <span>{vehicle.passengers} Passengers</span>
                  </div>
                  <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-border text-xs text-white">
                    <Briefcase className="w-3.5 h-3.5 text-gold-400" />
                    <span>{vehicle.luggage} Suitcases</span>
                  </div>
                </div>
              </div>

              {/* Specs & Description */}
              <div className="lg:col-span-6 space-y-5">
                <div className="space-y-2">
                  <div className="text-xs font-bold uppercase tracking-widest text-gold-400">
                    {vehicle.category}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                    {vehicle.name}
                  </h2>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    {vehicle.description}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-surface border border-border/70 text-xs text-zinc-300">
                  <span className="font-semibold text-gold-400">Best Suited For: </span>
                  <span>{vehicle.idealFor}</span>
                </div>

                {/* Included Features */}
                <div className="space-y-2 pt-2 border-t border-border/60">
                  <div className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                    Vehicle Amenities:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {vehicle.features.map((feat, i) => (
                      <div key={i} className="flex items-center space-x-2 text-xs text-zinc-300">
                        <Check className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Booking Button */}
                <div className="pt-3">
                  <a
                    href="#booking-widget"
                    className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-gold-500 to-gold-400 text-black font-bold text-xs uppercase tracking-wider shadow-gold-glow hover:opacity-95 transition-all"
                  >
                    <span>Reserve {vehicle.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Booking Widget */}
      <section id="booking-widget" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
            Select Your Vehicle & <span className="gold-text-gradient">Get An Instant Quote</span>
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400">
            Guaranteed flat-rates with no surge fees or hidden taxes.
          </p>
        </div>
        <BookingWidget />
      </section>

      <LeadCtaBanner />
    </div>
  );
}
