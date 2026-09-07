"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X, MessageCircle, ArrowUpRight, Sparkles } from "lucide-react";
import { BUSINESS_INFO } from "@/data/site-data";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Executive Fleet", href: "/#fleet" },
    { name: "Bespoke Services", href: "/#services" },
    { name: "Airport Coverage", href: "/#airports" },
    { name: "About Dogan VIP", href: "/about" },
    { name: "Contact & Concierge", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#060608]/95 backdrop-blur-2xl py-3.5 sm:py-4 border-b border-white/10 shadow-2xl"
            : "bg-transparent py-4 sm:py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center group flex-shrink-0">
            <div className="relative h-10 sm:h-14 w-44 sm:w-64 transition-transform duration-300 group-hover:scale-[1.02]">
              <Image
                src="/logo.png"
                alt="Dogan VIP Rides - Miami Premier Chauffeur"
                fill
                priority
                className="object-contain object-left"
                sizes="(max-width: 640px) 180px, 260px"
              />
            </div>
          </Link>

          {/* Navigation Items (Desktop) */}
          <nav className="hidden md:flex items-center space-x-7 lg:space-x-9">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs lg:text-sm font-semibold text-zinc-300 hover:text-white transition-colors uppercase tracking-wider relative group py-1"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gold-400 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Action Buttons (Desktop) */}
          <div className="hidden sm:flex items-center space-x-4 lg:space-x-5">
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="text-xs lg:text-sm text-zinc-200 hover:text-gold-300 transition-colors flex items-center space-x-2 font-semibold tracking-wide"
            >
              <Phone className="w-3.5 h-3.5 text-gold-400" />
              <span>{BUSINESS_INFO.phoneDisplay}</span>
            </a>

            <a
              href="#booking-bar"
              className="px-5 py-2.5 rounded-full bg-white hover:bg-gold-400 text-black font-extrabold text-xs uppercase tracking-wider transition-all flex items-center space-x-1.5 shadow-xl hover:shadow-gold-glow"
            >
              <span>Book a Ride</span>
            </a>
          </div>

          {/* Mobile Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden flex items-center justify-center w-11 h-11 rounded-full bg-white/5 border border-white/15 text-zinc-200 hover:text-white active:bg-white/20 transition-all touch-manipulation focus:outline-none"
            aria-label="Open Navigation Menu"
          >
            <Menu className="w-6 h-6 text-gold-400" />
          </button>
        </div>
      </header>

      {/* High-Performance Full-Screen Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-[100] bg-[#07070b]/98 backdrop-blur-2xl flex flex-col justify-between p-6 animate-in fade-in duration-200 touch-manipulation"
          style={{ overscrollBehavior: "contain" }}
        >
          {/* Top Bar inside Mobile Menu */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="relative h-10 w-44"
            >
              <Image
                src="/logo.png"
                alt="Dogan VIP Rides"
                fill
                priority
                className="object-contain object-left"
                sizes="180px"
              />
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="w-11 h-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white active:bg-white/30 transition-all"
              aria-label="Close Menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col space-y-2 py-6 overflow-y-auto">
            <div className="text-[10px] font-bold uppercase tracking-widest text-gold-400 mb-2 px-3">
              Navigation
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-4 py-3.5 rounded-2xl bg-white/[0.03] hover:bg-white/10 active:bg-gold-400 active:text-black border border-white/5 text-base font-bold text-zinc-100 uppercase tracking-wider transition-all"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-4 h-4 text-gold-400 opacity-80" />
              </Link>
            ))}
          </div>

          {/* Bottom Call & Instant Action Buttons */}
          <div className="space-y-3 pt-4 border-t border-white/10">
            <a
              href="#booking-bar"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center space-x-2 py-4 rounded-2xl bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 text-black font-extrabold text-sm uppercase tracking-wider shadow-gold-glow active:scale-[0.98] transition-all"
            >
              <Sparkles className="w-4 h-4" />
              <span>Instant Quote / Book</span>
            </a>

            <div className="grid grid-cols-2 gap-2.5">
              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="flex items-center justify-center space-x-2 py-3.5 rounded-2xl bg-white/10 border border-white/15 text-xs font-bold text-white uppercase tracking-wider active:bg-white/20"
              >
                <Phone className="w-4 h-4 text-gold-400" />
                <span>Call Dispatch</span>
              </a>

              <a
                href={`https://wa.me/${BUSINESS_INFO.phoneClean.replace('+', '')}?text=Hello,%20I%20would%20like%20to%20request%20a%20VIP%20ride%20quote.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 py-3.5 rounded-2xl bg-emerald-600 active:bg-emerald-500 text-xs font-bold text-white uppercase tracking-wider shadow-lg"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
