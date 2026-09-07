"use client";

import React, { useState, useEffect } from "react";
import { Phone, MessageCircle, ArrowUp } from "lucide-react";
import { BUSINESS_INFO } from "@/data/site-data";

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end space-y-2.5 pointer-events-auto">
      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#121218]/90 backdrop-blur-md border border-white/20 text-zinc-300 hover:text-gold-400 hover:border-gold-400 shadow-xl flex items-center justify-center transition-all duration-200"
          aria-label="Scroll to Top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Direct Call Floating Button */}
      <a
        href={`tel:${BUSINESS_INFO.phoneClean}`}
        className="flex items-center space-x-2 px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-full bg-[#14141c]/90 backdrop-blur-md border border-gold-400/40 text-gold-300 shadow-xl hover:bg-gold-400 hover:text-black transition-all group duration-200"
        aria-label="Direct Phone Call"
      >
        <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold-400 group-hover:text-black transition-colors" />
        <span className="text-[11px] sm:text-xs font-bold hidden md:inline">{BUSINESS_INFO.phoneDisplay}</span>
      </a>

      {/* WhatsApp Pulse Floating Button */}
      <a
        href={`https://wa.me/${BUSINESS_INFO.phoneClean.replace('+', '')}?text=Hello,%20I%20would%20like%20to%20request%20a%20VIP%20ride%20quote.`}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center space-x-2 px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-600/30 transition-all transform hover:scale-105 duration-200"
        aria-label="WhatsApp Live Chat"
      >
        <span className="absolute -top-1 -right-1 flex h-3 w-3 sm:h-3.5 sm:w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 sm:h-3.5 sm:w-3.5 bg-emerald-400" />
        </span>
        <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 fill-white text-emerald-600" />
        <span className="text-[11px] sm:text-xs font-bold tracking-wide">
          <span className="hidden sm:inline">WhatsApp VIP Booking</span>
          <span className="sm:hidden">WhatsApp</span>
        </span>
      </a>
    </div>
  );
}
