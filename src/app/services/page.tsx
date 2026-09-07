import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Clock } from "lucide-react";
import { SERVICES_DATA, BUSINESS_INFO } from "@/data/site-data";
import BookingWidget from "@/components/BookingWidget";
import LeadCtaBanner from "@/components/LeadCtaBanner";

export const metadata: Metadata = {
  title: "Executive Chauffeur & VIP Transportation Services",
  description:
    "Explore our complete range of luxury transportation services: Airport transfers (EWR, JFK, LGA, TEB), hourly as-directed chauffeurs, corporate travel, weddings, and long-distance city rides.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <div className="pt-28 pb-20 bg-background text-zinc-100">
      {/* Services Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 mb-16">
        <div className="inline-flex items-center space-x-1.5 text-gold-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-surface-light border border-gold-400/30">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Bespoke Executive Mobility</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white">
          Our VIP <span className="gold-text-gradient">Chauffeur Services</span>
        </h1>
        <p className="text-sm sm:text-base text-zinc-300 max-w-2xl mx-auto leading-relaxed">
          From executive business travel to private jet transfers and unforgettable red-carpet events, discover how Dogan VIP Rides sets the benchmark for first-class transportation in NY & NJ.
        </p>
      </section>

      {/* Services Detailed List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 mb-24">
        {SERVICES_DATA.map((service, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={service.id}
              id={service.slug}
              className={`glass-card rounded-3xl p-6 sm:p-10 border border-border/80 flex flex-col ${
                isEven ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-8 lg:gap-12 items-center`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2 h-72 sm:h-96 relative rounded-2xl overflow-hidden bg-zinc-900">
                <Image
                  src={service.image}
                  alt={`${service.title} - Dogan VIP Rides`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-zinc-200">
                  <span className="px-3 py-1 rounded-md bg-black/80 backdrop-blur-md border border-gold-400/30 font-semibold text-gold-300">
                    24/7 Available
                  </span>
                  <span className="flex items-center text-emerald-400">
                    <ShieldCheck className="w-4 h-4 mr-1" />
                    Insured & Licensed
                  </span>
                </div>
              </div>

              {/* Text Info */}
              <div className="w-full lg:w-1/2 space-y-5">
                <div className="space-y-2">
                  <div className="text-xs font-bold uppercase tracking-widest text-gold-400">
                    Service 0{index + 1}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                    {service.title}
                  </h2>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    {service.fullDesc}
                  </p>
                </div>

                <div className="space-y-2.5 pt-2 border-t border-border/60">
                  <div className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                    Key Advantages:
                  </div>
                  <div className="space-y-2">
                    {service.highlights.map((item, i) => (
                      <div key={i} className="flex items-start space-x-2.5 text-xs sm:text-sm text-zinc-300">
                        <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-3">
                  <a
                    href="#booking-widget"
                    className="px-5 py-3 rounded-xl bg-gradient-to-r from-gold-500 to-gold-400 text-black font-bold text-xs uppercase tracking-wider shadow-gold-glow hover:opacity-95 transition-all flex items-center space-x-2"
                  >
                    <span>Instant Quote for This Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={`tel:${BUSINESS_INFO.phoneClean}`}
                    className="px-4 py-3 rounded-xl border border-border hover:border-gold-400/50 text-zinc-200 text-xs font-semibold transition-all"
                  >
                    Call: {BUSINESS_INFO.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Embedded Booking Widget */}
      <section id="booking-widget" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
            Ready to Experience <span className="gold-text-gradient">First-Class Travel?</span>
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400">
            Submit your route below to receive a guaranteed flat-rate quote from our 24/7 dispatch.
          </p>
        </div>
        <BookingWidget />
      </section>

      <LeadCtaBanner />
    </div>
  );
}
