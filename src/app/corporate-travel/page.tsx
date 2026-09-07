import React from "react";
import type { Metadata } from "next";
import { Briefcase, ShieldCheck, Clock, Award, CheckCircle2, ArrowRight } from "lucide-react";
import { BUSINESS_INFO } from "@/data/site-data";
import BookingWidget from "@/components/BookingWidget";
import LeadCtaBanner from "@/components/LeadCtaBanner";

export const metadata: Metadata = {
  title: "Corporate & Executive Transportation | Business Black Car Service NY & NJ",
  description:
    "First-class executive black car service for corporate clients, business roadshows, VIP guests, and C-Suite executives in NYC and New Jersey. Monthly billing and dedicated dispatch.",
  alternates: {
    canonical: "/corporate-travel",
  },
};

export default function CorporateTravelPage() {
  return (
    <div className="pt-28 pb-20 bg-background text-zinc-100">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 mb-16">
        <div className="inline-flex items-center space-x-1.5 text-gold-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-surface-light border border-gold-400/30">
          <Briefcase className="w-3.5 h-3.5" />
          <span>C-Suite & Executive Grade</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white">
          Corporate &amp; Executive <br />
          <span className="gold-text-gradient">Transportation Services</span>
        </h1>
        <p className="text-sm sm:text-base text-zinc-300 max-w-2xl mx-auto leading-relaxed">
          Elevate your corporate travel standards. We deliver punctual, discreet, and seamless transportation solutions for business executives, board meetings, and high-profile clients.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="glass-card rounded-2xl p-6 space-y-3">
            <h3 className="text-base font-serif font-bold text-white">Monthly Billing & Accounts</h3>
            <p className="text-xs text-zinc-300">
              Streamlined invoicing, consolidated monthly billing statements, and itemized travel expense receipts.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-6 space-y-3">
            <h3 className="text-base font-serif font-bold text-white">Mobile Office Quiet Cabin</h3>
            <p className="text-xs text-zinc-300">
              Acoustic insulation, high-speed Wi-Fi, and 110V/USB-C charging ports allow executives to work without interruption.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-6 space-y-3">
            <h3 className="text-base font-serif font-bold text-white">Strict Confidentiality</h3>
            <p className="text-xs text-zinc-300">
              All chauffeurs adhere to strict non-disclosure guidelines, ensuring all phone conversations remain private.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-6 space-y-3">
            <h3 className="text-base font-serif font-bold text-white">Dedicated Account Manager</h3>
            <p className="text-xs text-zinc-300">
              Direct line to our executive dispatch manager for multi-car coordination and last-minute schedule modifications.
            </p>
          </div>
        </div>
      </section>

      <section id="booking-widget" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
            Open A Corporate Account or <span className="gold-text-gradient">Book A Ride</span>
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400">
            Submit your corporate itinerary below for immediate dispatch handling.
          </p>
        </div>
        <BookingWidget />
      </section>

      <LeadCtaBanner />
    </div>
  );
}
