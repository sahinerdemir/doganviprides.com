import React from "react";
import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageCircle, Sparkles, ShieldCheck } from "lucide-react";
import { BUSINESS_INFO } from "@/data/site-data";
import BookingWidget from "@/components/BookingWidget";

export const metadata: Metadata = {
  title: "Contact Us & 24/7 VIP Chauffeur Dispatch | Dogan VIP Rides",
  description:
    "Contact Dogan VIP Rides for instant quote requests, airport pickup bookings, or corporate travel inquiries. Call (954) 806-1142 or message us on WhatsApp.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="pt-28 pb-20 bg-background text-zinc-100">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 mb-16">
        <div className="inline-flex items-center space-x-1.5 text-gold-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-surface-light border border-gold-400/30">
          <Sparkles className="w-3.5 h-3.5" />
          <span>24/7 Live Concierge &amp; Dispatch</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white">
          Get in Touch With <br />
          <span className="gold-text-gradient">Dogan VIP Rides</span>
        </h1>
        <p className="text-sm sm:text-base text-zinc-300 max-w-2xl mx-auto leading-relaxed">
          Need an immediate airport pickup, a custom quote for a multi-day corporate event, or have a special request? We are available 24 hours a day, 7 days a week.
        </p>
      </section>

      {/* Contact Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Phone */}
          <div className="glass-card rounded-2xl p-7 space-y-4 text-center border border-border/80">
            <div className="w-14 h-14 rounded-full bg-gold-400/10 border border-gold-400/30 text-gold-400 flex items-center justify-center mx-auto">
              <Phone className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-serif font-bold text-white">24/7 Phone Dispatch</h3>
              <p className="text-xs text-zinc-400">Immediate telephone reservations</p>
            </div>
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="inline-block text-lg font-bold text-gold-400 hover:text-gold-300 transition-colors"
            >
              {BUSINESS_INFO.phoneDisplay}
            </a>
          </div>

          {/* WhatsApp */}
          <div className="glass-card rounded-2xl p-7 space-y-4 text-center border border-border/80">
            <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-serif font-bold text-white">WhatsApp Live Chat</h3>
              <p className="text-xs text-zinc-400">Fast quote &amp; text dispatch</p>
            </div>
            <a
              href={`https://wa.me/${BUSINESS_INFO.phoneClean.replace('+', '')}?text=Hello,%20I%20would%20like%20to%20inquire%20about%20a%20VIP%20ride.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm font-bold text-emerald-400 hover:text-emerald-300 underline transition-colors"
            >
              Chat on WhatsApp ({BUSINESS_INFO.phoneDisplay})
            </a>
          </div>

          {/* Email */}
          <div className="glass-card rounded-2xl p-7 space-y-4 text-center border border-border/80">
            <div className="w-14 h-14 rounded-full bg-gold-400/10 border border-gold-400/30 text-gold-400 flex items-center justify-center mx-auto">
              <Mail className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-serif font-bold text-white">Email Inquiries</h3>
              <p className="text-xs text-zinc-400">Corporate accounts &amp; receipts</p>
            </div>
            <a
              href={`mailto:${BUSINESS_INFO.email}`}
              className="inline-block text-sm font-bold text-gold-400 hover:text-gold-300 transition-colors"
            >
              {BUSINESS_INFO.email}
            </a>
          </div>
        </div>
      </section>

      {/* Online Reservation & Quote Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
            Send A Direct <span className="gold-text-gradient">Quote Request</span>
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400">
            Fill in your trip details below for instant dispatch review.
          </p>
        </div>
        <BookingWidget />
      </section>
    </div>
  );
}
