import React from "react";
import type { Metadata } from "next";
import { Plane, Clock, Radar, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";
import { AIRPORTS_DATA, BUSINESS_INFO } from "@/data/site-data";
import BookingWidget from "@/components/BookingWidget";
import LeadCtaBanner from "@/components/LeadCtaBanner";

export const metadata: Metadata = {
  title: "VIP Airport Transfers | JFK, EWR, LGA & Teterboro Chauffeur Service",
  description:
    "Reliable luxury airport transfers to and from JFK, Newark EWR, LaGuardia LGA, and Teterboro TEB. Automated flight radar tracking, 60 minutes complimentary wait time, and inside meet & greet.",
  alternates: {
    canonical: "/airport-transfers",
  },
};

export default function AirportTransfersPage() {
  return (
    <div className="pt-28 pb-20 bg-background text-zinc-100">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 mb-16">
        <div className="inline-flex items-center space-x-1.5 text-gold-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-surface-light border border-gold-400/30">
          <Plane className="w-3.5 h-3.5" />
          <span>Tri-State Airport Specialists</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white">
          VIP Airport <span className="gold-text-gradient">Chauffeur Transfers</span>
        </h1>
        <p className="text-sm sm:text-base text-zinc-300 max-w-2xl mx-auto leading-relaxed">
          Arrive refreshed and relaxed. We offer guaranteed on-time private airport transportation for commercial and private aviation travelers across New York and New Jersey.
        </p>
      </section>

      {/* 3 Key Airport Promises */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-card rounded-2xl p-6 space-y-3 border border-border/80">
            <div className="w-12 h-12 rounded-xl bg-gold-400/10 border border-gold-400/30 text-gold-400 flex items-center justify-center">
              <Radar className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-serif font-bold text-white">Live Radar Flight Tracking</h3>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              We sync directly with global aviation feeds. If your flight is delayed or lands early, your chauffeur automatically adjusts pickup time.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-6 space-y-3 border border-border/80">
            <div className="w-12 h-12 rounded-xl bg-gold-400/10 border border-gold-400/30 text-gold-400 flex items-center justify-center">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-serif font-bold text-white">60 Min Complimentary Wait</h3>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              Take your time through customs and baggage claim. International flights include 60 minutes free wait; domestic includes 30 minutes.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-6 space-y-3 border border-border/80">
            <div className="w-12 h-12 rounded-xl bg-gold-400/10 border border-gold-400/30 text-gold-400 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-serif font-bold text-white">Baggage Claim Meet & Greet</h3>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              Your professional chauffeur will meet you inside the terminal with a personalized digital name sign and provide full luggage escort to your vehicle.
            </p>
          </div>
        </div>
      </section>

      {/* Airport Hubs Detail Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 mb-24">
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-8">
          <h2 className="text-3xl font-serif font-bold text-white">
            Major Airport Hubs <span className="gold-text-gradient">We Cover Daily</span>
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400">
            Serving all commercial terminals and private FBO aviation hangars.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {AIRPORTS_DATA.map((airport) => (
            <div
              key={airport.code}
              className="glass-card rounded-2xl p-7 space-y-4 hover:border-gold-400/40 transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <div className="text-3xl font-serif font-black gold-text-gradient">
                  {airport.code}
                </div>
                <span className="px-3 py-1 rounded-md bg-gold-400/10 border border-gold-400/30 text-xs font-bold text-gold-300">
                  {airport.tag}
                </span>
              </div>

              <div className="space-y-1">
                <h3 className="text-xl font-bold text-white">{airport.name}</h3>
                <div className="text-xs text-zinc-400">{airport.city}</div>
              </div>

              <p className="text-sm text-zinc-300 leading-relaxed">
                {airport.description}
              </p>

              <div className="pt-3 border-t border-border/60 flex items-center justify-between">
                <span className="text-xs text-emerald-400 font-semibold flex items-center">
                  <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
                  Terminal & Curbside Ready
                </span>
                <a
                  href="#booking-widget"
                  className="text-xs font-bold uppercase tracking-wider text-gold-400 hover:text-gold-300 flex items-center space-x-1"
                >
                  <span>Book {airport.code}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Booking Widget */}
      <section id="booking-widget" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
            Book Your Airport <span className="gold-text-gradient">VIP Chauffeur</span>
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400">
            Enter your flight info and destination for instant flat-rate quote and confirmation.
          </p>
        </div>
        <BookingWidget />
      </section>

      <LeadCtaBanner />
    </div>
  );
}
