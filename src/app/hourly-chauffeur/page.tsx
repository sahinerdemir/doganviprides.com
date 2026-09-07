import React from "react";
import type { Metadata } from "next";
import { Clock, Shield, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { BUSINESS_INFO } from "@/data/site-data";
import BookingWidget from "@/components/BookingWidget";
import LeadCtaBanner from "@/components/LeadCtaBanner";

export const metadata: Metadata = {
  title: "Hourly & As-Directed Luxury Chauffeur Service NY & NJ",
  description:
    "Hire a private executive chauffeur by the hour in New York City and New Jersey. Unlimited stops, premium vehicle at your disposal, and flexible luxury scheduling.",
  alternates: {
    canonical: "/hourly-chauffeur",
  },
};

export default function HourlyChauffeurPage() {
  return (
    <div className="pt-28 pb-20 bg-background text-zinc-100">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 mb-16">
        <div className="inline-flex items-center space-x-1.5 text-gold-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-surface-light border border-gold-400/30">
          <Clock className="w-3.5 h-3.5" />
          <span>Maximum Flexibility</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white">
          Hourly &amp; As-Directed <br />
          <span className="gold-text-gradient">Chauffeur Hire</span>
        </h1>
        <p className="text-sm sm:text-base text-zinc-300 max-w-2xl mx-auto leading-relaxed">
          Take total control of your schedule. Have a dedicated executive vehicle and personal driver waiting for you between meetings, dinner reservations, or shopping destinations.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-card rounded-2xl p-6 space-y-3">
            <h3 className="text-lg font-serif font-bold text-white">Unlimited Stops</h3>
            <p className="text-xs sm:text-sm text-zinc-300">
              Travel seamlessly to multiple locations without booking individual rides. Your chauffeur waits right outside.
            </p>
          </div>
          <div className="glass-card rounded-2xl p-6 space-y-3">
            <h3 className="text-lg font-serif font-bold text-white">Dedicated Vehicle</h3>
            <p className="text-xs sm:text-sm text-zinc-300">
              Leave your belongings, coat, or briefcase safely in the locked vehicle while you attend meetings or events.
            </p>
          </div>
          <div className="glass-card rounded-2xl p-6 space-y-3">
            <h3 className="text-lg font-serif font-bold text-white">Transparent Flat Hourly Rate</h3>
            <p className="text-xs sm:text-sm text-zinc-300">
              No surge pricing, hidden mileage surcharges, or peak demand fees. Simple, predictable rates.
            </p>
          </div>
        </div>
      </section>

      <section id="booking-widget" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
            Book Hourly <span className="gold-text-gradient">Chauffeur Service</span>
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400">
            Select your hours and preferred vehicle below.
          </p>
        </div>
        <BookingWidget />
      </section>

      <LeadCtaBanner />
    </div>
  );
}
