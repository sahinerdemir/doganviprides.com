"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Phone, Menu, X, MessageCircle, ArrowUpRight, Sparkles } from "lucide-react";
import { BUSINESS_INFO } from "@/data/site-data";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Fleet", href: "/#fleet", targetId: "fleet" },
    { name: "Services", href: "/#services", targetId: "services" },
    { name: "Airports", href: "/#airports", targetId: "airports" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const handleNavClick = useCallback((e: React.MouseEvent, item: typeof navLinks[0]) => {
    setMobileMenuOpen(false);

    if (item.targetId && pathname === "/") {
      e.preventDefault();
      const el = document.getElementById(item.targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#060608]/95 backdrop-blur-2xl py-3 sm:py-4 border-b border-white/10 shadow-2xl"
            : "bg-transparent py-4 sm:py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center group flex-shrink-0">
            <div className="relative h-10 sm:h-14 w-44 sm:w-60 transition-transform duration-300 group-hover:scale-[1.02]">
              <Image
                src="/logo.png"
                alt="Dogan VIP Rides - Miami Premier Chauffeur"
                fill
                priority
                className="object-contain object-left"
                sizes="(max-width: 640px) 180px, 240px"
              />
            </div>
          </Link>

          {/* Navigation Items (Desktop) - Single Line Guarantee */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 flex-nowrap flex-shrink-0">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link)}
                className="text-xs lg:text-sm font-semibold text-zinc-300 hover:text-white transition-colors uppercase tracking-wider relative group py-1 whitespace-nowrap"
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
              onClick={(e) => {
                if (pathname === "/") {
                  e.preventDefault();
                  document.getElementById("booking-bar")?.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="px-5 py-2.5 rounded-full bg-white hover:bg-gold-400 text-black font-extrabold text-xs uppercase tracking-wider transition-all flex items-center space-x-1.5 shadow-xl hover:shadow-gold-glow"
            >
              <span>Book a Ride</span>
            </a>
          </div>

          {/* Mobile Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden flex items-center justify-center w-11 h-11 rounded-full bg-white/10 border border-white/20 text-zinc-100 hover:text-white active:bg-white/25 transition-all touch-manipulation cursor-pointer"
            aria-label="Open Navigation Menu"
          >
            <Menu className="w-6 h-6 text-gold-400" />
          </button>
        </div>
      </header>

      {/* Rock-Solid Full-Screen Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-[99999] bg-[#07070b] flex flex-col justify-between p-6 pointer-events-auto select-none"
          style={{ height: "100dvh" }}
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
              className="w-11 h-11 rounded-full bg-white/15 border border-white/20 flex items-center justify-center text-white active:bg-white/30 cursor-pointer touch-manipulation transition-all"
              aria-label="Close Menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col space-y-2.5 py-4 overflow-y-auto">
            <div className="text-[10px] font-bold uppercase tracking-widest text-gold-400 px-3">
              Navigation Menu
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link)}
                className="flex items-center justify-between px-4 py-3.5 rounded-2xl bg-white/[0.04] active:bg-gold-400 active:text-black border border-white/10 text-base font-bold text-zinc-100 uppercase tracking-wider transition-all cursor-pointer touch-manipulation"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-4 h-4 text-gold-400" />
              </Link>
            ))}
          </div>

          {/* Bottom Call & Instant Action Buttons */}
          <div className="space-y-3 pt-4 border-t border-white/10">
            <a
              href="#booking-bar"
              onClick={(e) => {
                setMobileMenuOpen(false);
                if (pathname === "/") {
                  e.preventDefault();
                  document.getElementById("booking-bar")?.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="w-full flex items-center justify-center space-x-2 py-4 rounded-2xl bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 text-black font-extrabold text-sm uppercase tracking-wider shadow-gold-glow active:scale-[0.98] transition-all cursor-pointer touch-manipulation"
            >
              <Sparkles className="w-4 h-4" />
              <span>Instant Quote / Book</span>
            </a>

            <div className="grid grid-cols-2 gap-2.5">
              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="flex items-center justify-center space-x-2 py-3.5 rounded-2xl bg-white/10 border border-white/15 text-xs font-bold text-white uppercase tracking-wider active:bg-white/20 cursor-pointer touch-manipulation"
              >
                <Phone className="w-4 h-4 text-gold-400" />
                <span>Call Dispatch</span>
              </a>

              <a
                href={`https://wa.me/${BUSINESS_INFO.phoneClean.replace('+', '')}?text=Hello,%20I%20would%20like%20to%20request%20a%20VIP%20ride%20quote.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 py-3.5 rounded-2xl bg-emerald-600 active:bg-emerald-500 text-xs font-bold text-white uppercase tracking-wider shadow-lg cursor-pointer touch-manipulation"
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
