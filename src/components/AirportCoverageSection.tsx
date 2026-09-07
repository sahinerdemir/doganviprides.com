"use client";

import React, { useRef } from "react";
import { ArrowUpRight, Plane, Sparkles } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { AIRPORTS_DATA } from "@/data/site-data";
import { Reveal, StaggerContainer, StaggerItem } from "./Motion";

export default function AirportCoverageSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const yLight = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section
      id="airports"
      ref={containerRef}
      className="py-24 sm:py-32 bg-gradient-to-b from-[#0c0d14] via-[#0e1320] to-[#0d0f18] border-t border-white/10 relative overflow-hidden"
    >
      {/* Background Parallax Accents */}
      <motion.div
        style={{ y: yLight }}
        className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-blue-500/8 blur-[180px] pointer-events-none rounded-full"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [50, -50]) }}
        className="absolute top-10 left-10 w-[400px] h-[400px] bg-gold-400/6 blur-[160px] pointer-events-none rounded-full"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <Reveal>
          <div className="max-w-3xl mb-14 space-y-3">
            <div className="inline-flex items-center space-x-1.5 text-[11px] font-bold text-gold-400 uppercase tracking-widest px-3 py-1 rounded-full bg-gold-400/10 border border-gold-400/25">
              <Plane className="w-3 h-3" />
              <span>Florida &bull; South Florida Executive Hubs</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Serving All Miami &amp; Florida Terminals.
            </h2>
            <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
              60 minutes complimentary waiting time on international flights &bull; Commercial (MIA, FLL, PBI) &amp; Private Jet FBOs (Opa-Locka OPF).
            </p>
          </div>
        </Reveal>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {AIRPORTS_DATA.map((ap) => (
            <StaggerItem key={ap.code}>
              <div className="bg-[#131724]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-7 hover:border-gold-400/40 hover:bg-[#181d2f]/90 transition-all duration-300 group flex flex-col justify-between h-full shadow-xl">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-black text-white group-hover:text-gold-400 transition-colors">
                      {ap.code}
                    </span>
                    <span className="text-[10px] uppercase font-bold text-gold-400/80 px-2.5 py-0.5 rounded-full bg-gold-400/10 border border-gold-400/20 tracking-wider">
                      {ap.tag}
                    </span>
                  </div>
                  <div className="text-sm font-semibold text-zinc-100">
                    {ap.name}
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed font-light">
                    {ap.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/5 mt-4">
                  <a
                    href="#booking-bar"
                    className="inline-flex items-center space-x-1.5 text-xs font-semibold text-zinc-300 group-hover:text-gold-400 uppercase tracking-wider transition-colors"
                  >
                    <span>Book {ap.code} Transfer</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
