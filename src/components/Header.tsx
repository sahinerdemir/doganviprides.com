"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, MessageCircle, Menu, X, Shield, Sparkles, ChevronRight } from "lucide-react";
import { BUSINESS_INFO } from "@/data/site-data";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Fleet", href: "/fleet" },
    { name: "Airport Transfers", href: "/airport-transfers" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Top Notification / VIP Bar */}
      <div className="bg-surface border-b border-border/40 text-xs py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-zinc-400">
          <div className="flex items-center space-x-4">
            <span className="flex items-center text-gold-400">
              <Sparkles className="w-3.5 h-3.5 mr-1" />
              Tri-State Premier Luxury Chauffeur Service
            </span>
            <span>•</span>
            <span>NYC • New Jersey • JFK • EWR • LGA • Teterboro</span>
          </div>
          <div className="flex items-center space-x-6">
            <span className="flex items-center text-zinc-300">
              <Shield className="w-3.5 h-3.5 mr-1 text-gold-400" />
              24/7 Executive Dispatch
            </span>
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="text-gold-400 font-semibold hover:text-gold-300 transition-colors flex items-center"
            >
              <Phone className="w-3.5 h-3.5 mr-1" />
              {BUSINESS_INFO.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* Main Glassmorphic Navigation */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "glass-nav py-3.5 shadow-luxury"
            : "bg-background/90 backdrop-blur-md py-4 border-b border-border/30"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold-300 via-gold-500 to-gold-700 flex items-center justify-center text-black font-black text-xl shadow-gold-glow group-hover:scale-105 transition-transform duration-200">
              D
            </div>
            <div>
              <div className="font-serif text-xl sm:text-2xl font-bold tracking-wide gold-text-gradient uppercase leading-none">
                Dogan VIP
              </div>
              <div className="text-[10px] tracking-[0.25em] text-zinc-400 uppercase font-medium mt-0.5">
                Rides &bull; Executive Car Service
              </div>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-zinc-300 hover:text-gold-400 transition-colors tracking-wide relative group py-1"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gold-400 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Actions: Call & Book Now */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href={`https://wa.me/${BUSINESS_INFO.phoneClean.replace('+', '')}?text=Hello,%20I%20would%20like%20to%20request%20a%20VIP%20ride%20quote.`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10 hover:border-emerald-500 transition-all flex items-center justify-center"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="px-3.5 py-2 rounded-lg border border-border/80 text-zinc-200 text-xs font-semibold hover:border-gold-400/50 hover:text-gold-300 transition-all flex items-center space-x-2"
            >
              <Phone className="w-3.5 h-3.5 text-gold-400" />
              <span>{BUSINESS_INFO.phoneDisplay}</span>
            </a>

            <a
              href="#booking-section"
              className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 text-black font-semibold text-xs uppercase tracking-wider hover:opacity-95 shadow-gold-glow hover:shadow-gold-glow-lg transition-all transform hover:-translate-y-0.5 flex items-center space-x-1.5"
            >
              <span>Instant Quote</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-zinc-300 hover:text-gold-400 hover:bg-surface border border-border/50"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-surface/98 border-b border-border/60 px-6 py-6 mt-3 space-y-4 animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-3 pb-4 border-b border-border/40">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-zinc-200 hover:text-gold-400 transition-colors py-1.5"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="pt-2 space-y-3">
              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="w-full flex items-center justify-center space-x-2 py-3 rounded-lg border border-border bg-background text-sm font-semibold text-zinc-200"
              >
                <Phone className="w-4 h-4 text-gold-400" />
                <span>Call {BUSINESS_INFO.phoneDisplay}</span>
              </a>

              <a
                href={`https://wa.me/${BUSINESS_INFO.phoneClean.replace('+', '')}?text=Hello,%20I%20would%20like%20to%20inquire%20about%20a%20VIP%20ride.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center space-x-2 py-3 rounded-lg bg-emerald-600/20 border border-emerald-500/40 text-emerald-400 text-sm font-semibold hover:bg-emerald-600/30"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Direct Booking</span>
              </a>

              <a
                href="#booking-section"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center space-x-2 py-3 rounded-lg bg-gradient-to-r from-gold-500 to-gold-400 text-black text-sm font-bold uppercase tracking-wider shadow-gold-glow"
              >
                <span>Request Instant Quote</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
