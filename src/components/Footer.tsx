import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BUSINESS_INFO } from "@/data/site-data";

export default function Footer() {
  return (
    <footer className="bg-[#050507] text-zinc-500 text-xs border-t border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Logo & Info */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <div className="relative h-12 w-48">
                <Image
                  src="/logo.png"
                  alt="Dogan VIP Rides"
                  fill
                  className="object-contain object-left"
                  sizes="200px"
                />
              </div>
            </Link>
            <p className="text-xs text-zinc-400 max-w-xs leading-relaxed">
              Premier executive chauffeur and luxury black car service across New York and New Jersey.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <div className="text-xs font-semibold text-white uppercase tracking-wider">
              Navigation
            </div>
            <ul className="space-y-2 text-zinc-400">
              <li><Link href="/#fleet" className="hover:text-white transition-colors">Fleet</Link></li>
              <li><Link href="/#services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/#airports" className="hover:text-white transition-colors">Airports (JFK, EWR, LGA)</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-3">
            <div className="text-xs font-semibold text-white uppercase tracking-wider">
              Services
            </div>
            <ul className="space-y-2 text-zinc-400">
              <li><Link href="/airport-transfers" className="hover:text-white transition-colors">Airport Transfers</Link></li>
              <li><Link href="/hourly-chauffeur" className="hover:text-white transition-colors">Hourly Chauffeur</Link></li>
              <li><Link href="/corporate-travel" className="hover:text-white transition-colors">Corporate Accounts</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">24/7 Dispatch</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <div className="text-xs font-semibold text-white uppercase tracking-wider">
              Direct Contact
            </div>
            <div className="space-y-1 text-zinc-400">
              <div><a href={`tel:${BUSINESS_INFO.phoneClean}`} className="text-white hover:text-gold-400 font-semibold">{BUSINESS_INFO.phoneDisplay}</a></div>
              <div><a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-white">{BUSINESS_INFO.email}</a></div>
              <div className="text-[11px] text-zinc-500 pt-1">New York &bull; New Jersey &bull; 24/7 Dispatch</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-600">
          <div>&copy; {new Date().getFullYear()} Dogan VIP Rides LLC. All rights reserved.</div>
          <div>TLC &amp; DOT Certified Executive Transportation</div>
        </div>
      </div>
    </footer>
  );
}
