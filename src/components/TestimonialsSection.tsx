"use client";

import React, { useRef } from "react";
import { Star, Sparkles, Quote } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { TESTIMONIALS_DATA } from "@/data/site-data";
import { Reveal, StaggerContainer, StaggerItem } from "./Motion";

export default function TestimonialsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const yGlow = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const reviews = TESTIMONIALS_DATA.slice(0, 2);

  return (
    <section
      ref={containerRef}
      className="py-24 sm:py-32 bg-gradient-to-b from-[#0d0f18] via-[#15151e] to-[#0a0a0f] border-t border-white/10 relative overflow-hidden"
    >
      {/* Background Parallax Light */}
      <motion.div
        style={{ y: yGlow }}
        className="absolute top-1/4 left-1/3 w-[450px] h-[350px] bg-gold-400/8 blur-[170px] pointer-events-none rounded-full"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4">
            <div className="space-y-2">
              <div className="inline-flex items-center space-x-1.5 text-[11px] font-bold text-gold-400 uppercase tracking-widest px-3 py-1 rounded-full bg-gold-400/10 border border-gold-400/25">
                <Sparkles className="w-3 h-3" />
                <span>Client Feedback</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                Trusted by Discerning Travelers.
              </h2>
            </div>
            <div className="flex items-center space-x-2 text-gold-400 text-xs font-semibold px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-gold-400 text-gold-400" />
                ))}
              </div>
              <span className="text-white ml-1">4.9 / 5.0</span>
              <span className="text-zinc-400 font-light ml-1">(Google Reviews)</span>
            </div>
          </div>
        </Reveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((r) => (
            <StaggerItem key={r.id}>
              <div className="bg-[#181824]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-10 space-y-6 flex flex-col justify-between h-full shadow-2xl hover:border-gold-400/30 transition-all duration-300">
                <div className="space-y-4">
                  <Quote className="w-8 h-8 text-gold-400/40" />
                  <p className="text-base sm:text-lg text-zinc-200 leading-relaxed font-light italic">
                    &ldquo;{r.comment}&rdquo;
                  </p>
                </div>

                <div className="border-t border-white/10 pt-5 flex items-center justify-between">
                  <div>
                    <div className="text-base font-bold text-white">{r.name}</div>
                    <div className="text-xs text-gold-400/90 font-medium">{r.role} &bull; {r.company}</div>
                  </div>
                  <div className="text-xs text-zinc-400 font-light">{r.location}</div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
