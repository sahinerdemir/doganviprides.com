"use client";

import React from "react";
import { Plane, CheckCircle2, ArrowRight, Shield, Clock, Radar } from "lucide-react";
import { AIRPORTS_DATA } from "@/data/site-data";

export default function AirportCoverageSection() {
  return (
    <section id="airports" className="py-20 lg:py-28 bg-surface-light/40 border-t border-b border-border/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Airport VIP Value Proposition */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center space-x-1.5 text-gold-400 text-xs font-bold uppercase tracking-widest">
              <Plane className="w-3.5 h-3.5" />
              <span>Direct Airport Chauffeur Hubs</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white leading-tight">
              Stress-Free Travel To & From <br />
              <span className="gold-text-gradient">All Tri-State Airports</span>
            </h2>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              Never worry about missing a flight or finding a ride after a long journey. We monitor flight radar 24/7 and coordinate seamless terminal curbside pickups or inside baggage claim meet-and-greets.
            </p>

            <div className="space-y-3.5 pt-2">
              <div className="flex items-start space-x-3">
                <div className="p-2 rounded-lg bg-gold-400/10 border border-gold-400/30 text-gold-400 mt-1">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">60 Min Free Waiting Time</div>
                  <div className="text-xs text-zinc-400">Complimentary buffer on all international commercial flights.</div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="p-2 rounded-lg bg-gold-400/10 border border-gold-400/30 text-gold-400 mt-1">
                  <Radar className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">Live Radar Flight Tracking</div>
                  <div className="text-xs text-zinc-400">We auto-adjust for delays, cancellations, and early arrivals.</div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="p-2 rounded-lg bg-gold-400/10 border border-gold-400/30 text-gold-400 mt-1">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">Inside Baggage Meet & Greet</div>
                  <div className="text-xs text-zinc-400">Personal chauffeur holding your name tablet + full luggage assistance.</div>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="#booking-section"
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-gold-400 text-black font-bold text-xs uppercase tracking-wider shadow-gold-glow hover:bg-gold-300 transition-all"
              >
                <span>Book Airport VIP Ride</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: 4 Airport Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {AIRPORTS_DATA.map((airport) => (
              <div
                key={airport.code}
                className="glass-card rounded-2xl p-6 space-y-4 hover:border-gold-400/40 transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-serif font-black gold-text-gradient">
                    {airport.code}
                  </div>
                  <span className="px-2.5 py-1 rounded-md bg-gold-400/10 border border-gold-400/30 text-[10px] font-bold text-gold-300 uppercase">
                    {airport.tag}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-base font-bold text-white">
                    {airport.name}
                  </h3>
                  <div className="text-xs text-zinc-400">
                    {airport.city}
                  </div>
                </div>

                <p className="text-xs text-zinc-300 leading-relaxed">
                  {airport.description}
                </p>

                <div className="pt-2 border-t border-border/50">
                  <a
                    href="#booking-section"
                    className="text-xs font-semibold text-gold-400 hover:text-gold-300 inline-flex items-center space-x-1"
                  >
                    <span>Instant {airport.code} Rate</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
