import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, ShieldCheck, Sparkles, Clock, Star } from "lucide-react";
import { BUSINESS_INFO, FLEET_DATA, SERVICES_DATA, AIRPORTS_DATA } from "@/data/site-data";

export default function Footer() {
  return (
    <footer className="bg-surface text-zinc-400 text-xs border-t border-border/70 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold-300 via-gold-500 to-gold-700 flex items-center justify-center text-black font-black text-xl shadow-gold-glow">
                D
              </div>
              <div>
                <div className="font-serif text-xl font-bold tracking-wide gold-text-gradient uppercase leading-none">
                  Dogan VIP
                </div>
                <div className="text-[10px] tracking-[0.25em] text-zinc-400 uppercase font-medium mt-0.5">
                  Rides &bull; Executive Transportation
                </div>
              </div>
            </Link>

            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Dogan VIP Rides delivers world-class executive chauffeur services, private airport transfers, and bespoke luxury transportation across New Jersey, New York City, and the entire Tri-State region.
            </p>

            <div className="space-y-2 pt-1 text-zinc-300">
              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="flex items-center space-x-2 text-white hover:text-gold-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-gold-400" />
                <span className="font-semibold">{BUSINESS_INFO.phoneDisplay} (24/7 Dispatch)</span>
              </a>

              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="flex items-center space-x-2 text-zinc-300 hover:text-gold-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-gold-400" />
                <span>{BUSINESS_INFO.email}</span>
              </a>

              <div className="flex items-start space-x-2 text-zinc-400">
                <MapPin className="w-4 h-4 text-gold-400 mt-0.5 flex-shrink-0" />
                <span>{BUSINESS_INFO.address.streetAddress}, {BUSINESS_INFO.address.addressLocality}, {BUSINESS_INFO.address.addressRegion} {BUSINESS_INFO.address.postalCode}</span>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div className="space-y-3">
            <div className="text-white font-serif font-bold text-sm tracking-wider uppercase">
              VIP Services
            </div>
            <ul className="space-y-2">
              {SERVICES_DATA.map((srv) => (
                <li key={srv.id}>
                  <Link
                    href={`/services#${srv.slug}`}
                    className="hover:text-gold-400 transition-colors block py-0.5"
                  >
                    {srv.title.split("(")[0]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Airport Transfers Column */}
          <div className="space-y-3">
            <div className="text-white font-serif font-bold text-sm tracking-wider uppercase">
              Airport Hubs
            </div>
            <ul className="space-y-2">
              {AIRPORTS_DATA.map((ap) => (
                <li key={ap.code}>
                  <Link
                    href="/airport-transfers"
                    className="hover:text-gold-400 transition-colors flex items-center justify-between py-0.5"
                  >
                    <span>{ap.name}</span>
                    <span className="text-[10px] text-gold-400 font-bold">{ap.code}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/airport-transfers"
                  className="hover:text-gold-400 transition-colors flex items-center justify-between py-0.5"
                >
                  <span>Westchester Airport</span>
                  <span className="text-[10px] text-gold-400 font-bold">HPN</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/airport-transfers"
                  className="hover:text-gold-400 transition-colors flex items-center justify-between py-0.5"
                >
                  <span>Philadelphia International</span>
                  <span className="text-[10px] text-gold-400 font-bold">PHL</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Luxury Fleet & Areas Column */}
          <div className="space-y-3">
            <div className="text-white font-serif font-bold text-sm tracking-wider uppercase">
              Executive Fleet
            </div>
            <ul className="space-y-2">
              {FLEET_DATA.map((v) => (
                <li key={v.id}>
                  <Link href="/fleet" className="hover:text-gold-400 transition-colors block py-0.5">
                    {v.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="pt-3">
              <div className="text-white font-serif font-bold text-sm tracking-wider uppercase mb-2">
                Service Areas
              </div>
              <p className="text-[11px] text-zinc-400 leading-relaxed">
                Manhattan, Brooklyn, Queens, Bergen County, Hudson County, Essex County, Long Island, Hamptons, Greenwich CT.
              </p>
            </div>
          </div>
        </div>

        {/* SEO Tag Cloud / Coverage Badges */}
        <div className="p-4 rounded-xl bg-surface-light border border-border/60 space-y-2">
          <div className="text-[11px] font-bold uppercase tracking-wider text-zinc-300">
            Tri-State Regional Coverage & Executive Transport Keywords:
          </div>
          <div className="flex flex-wrap gap-1.5 text-[11px] text-zinc-400">
            <span className="bg-surface px-2 py-0.5 rounded border border-border">VIP Chauffeur NJ</span>
            <span className="bg-surface px-2 py-0.5 rounded border border-border">Executive Car Service NYC</span>
            <span className="bg-surface px-2 py-0.5 rounded border border-border">EWR Newark Airport Car Service</span>
            <span className="bg-surface px-2 py-0.5 rounded border border-border">JFK Airport VIP Transfer</span>
            <span className="bg-surface px-2 py-0.5 rounded border border-border">LaGuardia LGA Chauffeur</span>
            <span className="bg-surface px-2 py-0.5 rounded border border-border">Teterboro TEB Private Jet FBO Ride</span>
            <span className="bg-surface px-2 py-0.5 rounded border border-border">Cadillac Escalade Rental with Driver NYC</span>
            <span className="bg-surface px-2 py-0.5 rounded border border-border">Mercedes Sprinter VIP Van NJ</span>
            <span className="bg-surface px-2 py-0.5 rounded border border-border">Hourly Chauffeur Manhattan</span>
            <span className="bg-surface px-2 py-0.5 rounded border border-border">NYC to Hamptons Private Car</span>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Badges */}
        <div className="pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-400 text-xs">
          <div>
            &copy; {new Date().getFullYear()} {BUSINESS_INFO.legalName}. All rights reserved.
          </div>

          <div className="flex items-center space-x-6 text-zinc-400">
            <span className="flex items-center space-x-1 text-emerald-400">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>TLC & DOT Insured & Licensed</span>
            </span>
            <span>•</span>
            <span className="text-zinc-400">24/7/365 On-Demand Chauffeurs</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
