"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, MessageCircle, Menu, X, ArrowUpRight } from "lucide-react";
import { BUSINESS_INFO } from "@/data/site-data";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Fleet", href: "/#fleet" },
    { name: "Services", href: "/#services" },
    { name: "Airports", href: "/#airports" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#050507]/90 backdrop-blur-xl py-4 border-b border-white/10"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="text-lg sm:text-xl font-bold tracking-tight text-white uppercase">
            Dogan <span className="text-gold-400 font-light">VIP</span>
          </div>
        </Link>

        {/* Minimal Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs font-medium text-zinc-400 hover:text-white transition-colors uppercase tracking-widest"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center space-x-4">
          <a
            href={`tel:${BUSINESS_INFO.phoneClean}`}
            className="text-xs text-zinc-300 hover:text-white transition-colors flex items-center space-x-1.5 font-medium tracking-wide"
          >
            <Phone className="w-3.5 h-3.5 text-gold-400" />
            <span>{BUSINESS_INFO.phoneDisplay}</span>
          </a>

          <a
            href="#booking-bar"
            className="px-4 py-2 rounded-full bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-gold-400 transition-all flex items-center space-x-1"
          >
            <span>Book a Ride</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-zinc-300 hover:text-white p-1"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0a0e] border-b border-white/10 px-6 py-6 space-y-4 animate-in fade-in">
          <div className="flex flex-col space-y-3 pb-4 border-b border-white/10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-zinc-300 hover:text-white py-1 uppercase tracking-wider"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="pt-2 space-y-3">
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="w-full flex items-center justify-center space-x-2 py-3 rounded-lg border border-white/10 text-xs font-semibold text-white uppercase tracking-wider"
            >
              <Phone className="w-3.5 h-3.5 text-gold-400" />
              <span>Call: {BUSINESS_INFO.phoneDisplay}</span>
            </a>
            <a
              href="#booking-bar"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center py-3 rounded-lg bg-gold-400 text-black text-xs font-bold uppercase tracking-wider"
            >
              Book Instant Ride
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
