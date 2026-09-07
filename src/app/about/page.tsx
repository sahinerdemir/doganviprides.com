import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { ShieldCheck, Award, Users, HeartHandshake, Sparkles, Phone, Mail } from "lucide-react";
import { BUSINESS_INFO } from "@/data/site-data";
import LeadCtaBanner from "@/components/LeadCtaBanner";

export const metadata: Metadata = {
  title: "About Us | Premier Luxury VIP Chauffeur Service NY & NJ",
  description:
    "Learn more about Dogan VIP Rides. Our mission is to provide the most reliable, luxurious, and seamless private transportation experience across New York and New Jersey.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20 bg-background text-zinc-100">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 mb-16">
        <div className="inline-flex items-center space-x-1.5 text-gold-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-surface-light border border-gold-400/30">
          <Sparkles className="w-3.5 h-3.5" />
          <span>About Dogan VIP Rides</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white">
          Redefining Luxury <br />
          <span className="gold-text-gradient">Executive Transportation</span>
        </h1>
        <p className="text-sm sm:text-base text-zinc-300 max-w-2xl mx-auto leading-relaxed">
          Founded with a passion for excellence, Dogan VIP Rides provides discerning clients with unmatched punctuality, immaculate luxury vehicles, and professional chauffeurs who prioritize your safety, comfort, and privacy.
        </p>
      </section>

      {/* Story & Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-5">
            <h2 className="text-3xl font-serif font-bold text-white">
              Driven by <span className="gold-text-gradient">Precision &amp; Hospitality</span>
            </h2>
            <p className="text-sm text-zinc-300 leading-relaxed">
              In a fast-paced metropolitan hub like New York and New Jersey, transportation shouldn&apos;t be a point of stress. Whether you are catching a high-stakes flight at JFK, heading into Wall Street for an investor summit, or celebrating a wedding in the Hamptons, every minute counts.
            </p>
            <p className="text-sm text-zinc-300 leading-relaxed">
              At Dogan VIP Rides, we combine state-of-the-art flight tracking and dispatch logistics with the warmth and discretion of traditional concierge hospitality. Our chauffeurs are seasoned professionals with deep knowledge of Tri-State traffic patterns, alternate bypass routes, and terminal procedures.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border/60">
              <div className="p-4 rounded-xl bg-surface border border-border">
                <div className="text-2xl font-black gold-text-gradient">100%</div>
                <div className="text-xs text-zinc-300 font-medium">On-Time Track Record</div>
              </div>
              <div className="p-4 rounded-xl bg-surface border border-border">
                <div className="text-2xl font-black gold-text-gradient">24/7/365</div>
                <div className="text-xs text-zinc-300 font-medium">Live Human Dispatch</div>
              </div>
            </div>
          </div>

          <div className="h-80 sm:h-96 relative rounded-3xl overflow-hidden glass-card border border-gold-400/30">
            <Image
              src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1200&auto=format&fit=crop"
              alt="Dogan VIP Chauffeur Service NYC & NJ"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white text-xs space-y-1">
              <div className="font-bold text-gold-400 uppercase tracking-wider">Licensed &amp; Insured</div>
              <div>Operating under TLC &amp; DOT compliance across NY &amp; NJ.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <h2 className="text-3xl font-serif font-bold text-white">
            Our Core <span className="gold-text-gradient">Commitments</span>
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400">
            The foundation of every ride we operate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-card rounded-2xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-gold-400/10 border border-gold-400/30 text-gold-400 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-serif font-bold text-white">Uncompromising Safety</h3>
            <p className="text-xs text-zinc-300 leading-relaxed">
              Rigorous driver background checks, ongoing vehicle maintenance inspections, and adherence to highest commercial safety protocols.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-gold-400/10 border border-gold-400/30 text-gold-400 flex items-center justify-center">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-serif font-bold text-white">Flawless Presentation</h3>
            <p className="text-xs text-zinc-300 leading-relaxed">
              Showroom-clean late-model luxury SUVs and sedans, sanitized before every ride, accompanied by suited, courteous chauffeurs.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-gold-400/10 border border-gold-400/30 text-gold-400 flex items-center justify-center">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-serif font-bold text-white">Client-First Integrity</h3>
            <p className="text-xs text-zinc-300 leading-relaxed">
              Upfront guaranteed flat pricing without surge surcharges. When you book with Dogan VIP Rides, your rate is locked and honored.
            </p>
          </div>
        </div>
      </section>

      <LeadCtaBanner />
    </div>
  );
}
