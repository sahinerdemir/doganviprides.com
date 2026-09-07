import React from "react";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import FleetSection from "@/components/FleetSection";
import ServicesSection from "@/components/ServicesSection";
import AirportCoverageSection from "@/components/AirportCoverageSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";
import LeadCtaBanner from "@/components/LeadCtaBanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <FleetSection />
      <ServicesSection />
      <AirportCoverageSection />
      <TestimonialsSection />
      <FaqSection />
      <LeadCtaBanner />
    </>
  );
}
