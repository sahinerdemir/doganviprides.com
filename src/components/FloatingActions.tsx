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
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end space-y-3 pointer-events-auto">
      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-surface-light/90 border border-border/80 text-zinc-300 hover:text-gold-400 hover:border-gold-400/50 shadow-lg flex items-center justify-center transition-all duration-200"
          aria-label="Scroll to Top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Direct Call Floating Button */}
      <a
        href={`tel:${BUSINESS_INFO.phoneClean}`}
        className="flex items-center space-x-2 px-3.5 py-2.5 rounded-full bg-surface border border-gold-400/40 text-gold-300 shadow-luxury hover:bg-gold-400 hover:text-black transition-all group duration-200"
        aria-label="Direct Phone Call"
      >
        <Phone className="w-4 h-4 text-gold-400 group-hover:text-black transition-colors" />
        <span className="text-xs font-bold hidden sm:inline">{BUSINESS_INFO.phoneDisplay}</span>
      </a>

      {/* WhatsApp Pulse Floating Button */}
      <a
        href={`https://wa.me/${BUSINESS_INFO.phoneClean.replace('+', '')}?text=Hello,%20I%20would%20like%20to%20request%20a%20VIP%20ride%20quote.`}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center space-x-2 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-600/30 transition-all transform hover:scale-105 duration-200"
        aria-label="WhatsApp Live Chat"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400" />
        </span>
        <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
        <span className="text-xs font-bold tracking-wide">WhatsApp VIP Booking</span>
      </a>
    </div>
  );
}
