"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X } from "lucide-react";
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
          ? "bg-[#060608]/95 backdrop-blur-2xl py-4 border-b border-white/10 shadow-2xl"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand Logo - 20% Larger */}
        <Link href="/" className="flex items-center group">
          <div className="relative h-12 sm:h-14 w-52 sm:w-64 transition-transform duration-300 group-hover:scale-[1.03]">
            <Image
              src="/logo.png"
              alt="Dogan VIP Rides - Miami Premier Chauffeur"
              fill
              priority
              className="object-contain object-left"
              sizes="(max-width: 640px) 210px, 260px"
            />
          </div>
        </Link>

        {/* Navigation Items - 20% Larger Font Size */}
        <nav className="hidden md:flex items-center space-x-8 lg:space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-zinc-300 hover:text-white transition-colors uppercase tracking-wider relative group py-1"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gold-400 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center space-x-5">
          <a
            href={`tel:${BUSINESS_INFO.phoneClean}`}
            className="text-sm text-zinc-200 hover:text-gold-300 transition-colors flex items-center space-x-2 font-semibold tracking-wide"
          >
            <Phone className="w-4 h-4 text-gold-400" />
            <span>{BUSINESS_INFO.phoneDisplay}</span>
          </a>

          <a
            href="#booking-bar"
            className="px-6 py-3 rounded-full bg-white hover:bg-gold-400 text-black font-bold text-xs uppercase tracking-wider transition-all flex items-center space-x-1.5 shadow-xl hover:shadow-gold-glow"
          >
            <span>Book a Ride</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-zinc-300 hover:text-white p-2"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0c0c10] border-b border-white/10 px-6 py-6 space-y-4 animate-in fade-in">
          <div className="flex flex-col space-y-3 pb-4 border-b border-white/10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-zinc-200 hover:text-gold-400 py-1 uppercase tracking-wider"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="pt-2 space-y-3">
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="w-full flex items-center justify-center space-x-2 py-3.5 rounded-xl border border-white/15 text-sm font-semibold text-white uppercase tracking-wider"
            >
              <Phone className="w-4 h-4 text-gold-400" />
              <span>Call: {BUSINESS_INFO.phoneDisplay}</span>
            </a>
            <a
              href="#booking-bar"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center py-3.5 rounded-xl bg-gold-400 text-black text-sm font-bold uppercase tracking-wider"
            >
              Book Instant Ride
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
