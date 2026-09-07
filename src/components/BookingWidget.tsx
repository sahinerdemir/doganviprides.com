"use client";

import React, { useState } from "react";
import {
  Plane,
  MapPin,
  Clock,
  Calendar,
  Users,
  Briefcase,
  Car,
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  MessageCircle,
  Phone,
  Sparkles,
  Loader2,
} from "lucide-react";
import { FLEET_DATA, BUSINESS_INFO } from "@/data/site-data";

type ServiceType = "airport" | "point-to-point" | "hourly";

export default function BookingWidget() {
  const [serviceType, setServiceType] = useState<ServiceType>("airport");
  const [step, setStep] = useState<1 | 2>(1);

  // Form State
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [hourlyDuration, setHourlyDuration] = useState("4 Hours");
  const [passengers, setPassengers] = useState(2);
  const [luggage, setLuggage] = useState(2);
  const [selectedVehicle, setSelectedVehicle] = useState(FLEET_DATA[0].id);

  // Customer Contact State
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [flightNumber, setFlightNumber] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const airports = [
    { code: "EWR", name: "Newark (EWR)" },
    { code: "JFK", name: "JFK Airport" },
    { code: "LGA", name: "LaGuardia (LGA)" },
    { code: "TEB", name: "Teterboro (TEB)" },
  ];

  const handleAirportQuickSelect = (code: string, target: "pickup" | "dropoff") => {
    if (target === "pickup") {
      setPickupLocation(`${code} - Terminal Pickup`);
    } else {
      setDropoffLocation(`${code} - Terminal Drop-off`);
    }
  };

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pickupLocation) {
      setErrorMessage("Please enter a pickup location or select an airport.");
      return;
    }
    if (serviceType !== "hourly" && !dropoffLocation) {
      setErrorMessage("Please enter a destination / drop-off location.");
      return;
    }
    setErrorMessage("");
    setStep(2);
  };

  const handleSubmitLead = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) {
      setErrorMessage("Please provide your name and phone number so we can send your quote.");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");

    const vehicleObj = FLEET_DATA.find((v) => v.id === selectedVehicle);

    const leadPayload = {
      serviceType,
      pickupLocation,
      dropoffLocation: serviceType === "hourly" ? `Hourly Hire (${hourlyDuration})` : dropoffLocation,
      pickupDate,
      pickupTime,
      hourlyDuration: serviceType === "hourly" ? hourlyDuration : undefined,
      passengers,
      luggage,
      vehicle: vehicleObj?.name || selectedVehicle,
      fullName,
      phone,
      email,
      flightNumber,
      specialRequests,
      createdAt: new Date().toISOString(),
    };

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(leadPayload),
      });

      if (!response.ok) {
        throw new Error("Failed to submit quote request");
      }

      setIsSubmitted(true);
    } catch (err) {
      console.error(err);
      // Even if network fails, we still allow WhatsApp direct trigger
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectedVehicleObj = FLEET_DATA.find((v) => v.id === selectedVehicle) || FLEET_DATA[0];

  const getWhatsAppMessage = () => {
    const text = `*New Dogan VIP Ride Inquiry*%0A%0A` +
      `*Name:* ${fullName || "Guest"}%0A` +
      `*Phone:* ${phone || "N/A"}%0A` +
      `*Service:* ${serviceType.toUpperCase()}%0A` +
      `*Vehicle:* ${selectedVehicleObj.name}%0A` +
      `*Pickup:* ${pickupLocation}%0A` +
      `*Drop-off:* ${serviceType === "hourly" ? hourlyDuration : dropoffLocation}%0A` +
      `*Date/Time:* ${pickupDate} ${pickupTime}%0A` +
      `*Passengers/Bags:* ${passengers} Pax / ${luggage} Bags%0A` +
      (flightNumber ? `*Flight #:* ${flightNumber}%0A` : "") +
      (specialRequests ? `*Notes:* ${specialRequests}` : "");
    return text;
  };

  return (
    <div id="booking-section" className="w-full max-w-4xl mx-auto">
      <div className="glass-card rounded-2xl p-4 sm:p-7 shadow-2xl relative overflow-hidden border border-gold-400/20">
        {/* Glow Header Accent */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-gold-400 to-transparent" />

        {/* Tab Selection */}
        <div className="grid grid-cols-3 gap-1.5 sm:gap-3 p-1.5 bg-surface-light/70 rounded-xl border border-border/60 mb-6">
          <button
            type="button"
            onClick={() => { setServiceType("airport"); setStep(1); }}
            className={`flex items-center justify-center space-x-1.5 sm:space-x-2 py-2.5 sm:py-3 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
              serviceType === "airport"
                ? "bg-gradient-to-r from-gold-500 to-gold-400 text-black shadow-gold-glow"
                : "text-zinc-300 hover:text-white hover:bg-surface"
            }`}
          >
            <Plane className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Airport Transfer</span>
          </button>

          <button
            type="button"
            onClick={() => { setServiceType("point-to-point"); setStep(1); }}
            className={`flex items-center justify-center space-x-1.5 sm:space-x-2 py-2.5 sm:py-3 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
              serviceType === "point-to-point"
                ? "bg-gradient-to-r from-gold-500 to-gold-400 text-black shadow-gold-glow"
                : "text-zinc-300 hover:text-white hover:bg-surface"
            }`}
          >
            <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Point-to-Point</span>
          </button>

          <button
            type="button"
            onClick={() => { setServiceType("hourly"); setStep(1); }}
            className={`flex items-center justify-center space-x-1.5 sm:space-x-2 py-2.5 sm:py-3 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
              serviceType === "hourly"
                ? "bg-gradient-to-r from-gold-500 to-gold-400 text-black shadow-gold-glow"
                : "text-zinc-300 hover:text-white hover:bg-surface"
            }`}
          >
            <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Hourly / By Hour</span>
          </button>
        </div>

        {isSubmitted ? (
          /* Submission Success State */
          <div className="py-8 px-4 text-center space-y-5 animate-in fade-in zoom-in-95 duration-300">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-serif font-bold text-white">
                Quote Request Received!
              </h3>
              <p className="text-sm text-zinc-300 max-w-md mx-auto">
                Thank you, <span className="text-gold-400 font-semibold">{fullName}</span>. Our 24/7 executive dispatch team is reviewing your route and will contact you at <span className="text-white font-medium">{phone}</span> within minutes.
              </p>
            </div>

            {/* Quick WhatsApp Push */}
            <div className="p-4 rounded-xl bg-surface border border-border/80 max-w-md mx-auto text-left space-y-3">
              <div className="flex items-center space-x-2 text-xs text-zinc-400">
                <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                <span>Need an immediate confirmation right now?</span>
              </div>
              <a
                href={`https://wa.me/${BUSINESS_INFO.phoneClean.replace('+', '')}?text=${getWhatsAppMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center space-x-2 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-bold shadow-lg shadow-emerald-600/30 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Instant WhatsApp Dispatch ({BUSINESS_INFO.phoneDisplay})</span>
              </a>
            </div>

            <button
              onClick={() => {
                setIsSubmitted(false);
                setStep(1);
              }}
              className="text-xs text-zinc-400 hover:text-gold-400 underline transition-colors"
            >
              Book another trip
            </button>
          </div>
        ) : step === 1 ? (
          /* STEP 1: ROUTE & VEHICLE DETAILS */
          <form onSubmit={handleNextStep} className="space-y-5">
            {errorMessage && (
              <div className="p-3 rounded-lg bg-red-500/15 border border-red-500/30 text-red-300 text-xs">
                {errorMessage}
              </div>
            )}

            {/* Airport Quick Select Bar (If airport transfer) */}
            {serviceType === "airport" && (
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider flex items-center justify-between">
                  <span>Quick Airport Select</span>
                  <span className="text-[11px] text-gold-400 font-normal">Flight tracking included</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {airports.map((ap) => (
                    <div key={ap.code} className="flex space-x-1">
                      <button
                        type="button"
                        onClick={() => handleAirportQuickSelect(ap.code, "pickup")}
                        className="flex-1 py-1.5 px-2 bg-surface hover:bg-surface-light border border-border/70 hover:border-gold-400/50 rounded text-xs text-zinc-300 hover:text-gold-300 transition-colors text-center"
                      >
                        From {ap.code}
                      </button>
                      <button
                        type="button"
                        onClick={() => handleAirportQuickSelect(ap.code, "dropoff")}
                        className="flex-1 py-1.5 px-2 bg-surface hover:bg-surface-light border border-border/70 hover:border-gold-400/50 rounded text-xs text-zinc-300 hover:text-gold-300 transition-colors text-center"
                      >
                        To {ap.code}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Locations Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Pickup */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-zinc-300 flex items-center space-x-1.5">
                  <MapPin className="w-3.5 h-3.5 text-gold-400" />
                  <span>Pick-Up Location</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. JFK Terminal 4, or Manhattan Hotel..."
                  value={pickupLocation}
                  onChange={(e) => setPickupLocation(e.target.value)}
                  className="w-full bg-surface border border-border focus:border-gold-400 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-gold-400 transition-colors"
                />
              </div>

              {/* Destination or Hourly Duration */}
              {serviceType === "hourly" ? (
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-zinc-300 flex items-center space-x-1.5">
                    <Clock className="w-3.5 h-3.5 text-gold-400" />
                    <span>Duration of Service</span>
                  </label>
                  <select
                    value={hourlyDuration}
                    onChange={(e) => setHourlyDuration(e.target.value)}
                    className="w-full bg-surface border border-border focus:border-gold-400 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-gold-400 transition-colors"
                  >
                    <option value="2 Hours">2 Hours (Minimum for Local)</option>
                    <option value="3 Hours">3 Hours</option>
                    <option value="4 Hours">4 Hours (Standard Half-Day)</option>
                    <option value="6 Hours">6 Hours</option>
                    <option value="8 Hours">8 Hours (Full-Day Executive)</option>
                    <option value="12 Hours">12 Hours (All-Day Dedicated)</option>
                  </select>
                </div>
              ) : (
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-zinc-300 flex items-center space-x-1.5">
                    <MapPin className="w-3.5 h-3.5 text-gold-400" />
                    <span>Drop-Off Destination</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Jersey City, EWR, or Wall Street NYC..."
                    value={dropoffLocation}
                    onChange={(e) => setDropoffLocation(e.target.value)}
                    className="w-full bg-surface border border-border focus:border-gold-400 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-gold-400 transition-colors"
                  />
                </div>
              )}
            </div>

            {/* Date & Time Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-zinc-300 flex items-center space-x-1.5">
                  <Calendar className="w-3.5 h-3.5 text-gold-400" />
                  <span>Date</span>
                </label>
                <input
                  type="date"
                  required
                  value={pickupDate}
                  onChange={(e) => setPickupDate(e.target.value)}
                  className="w-full bg-surface border border-border focus:border-gold-400 rounded-lg px-3 py-2 text-xs sm:text-sm text-white focus:outline-none focus:ring-1 focus:ring-gold-400"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-zinc-300 flex items-center space-x-1.5">
                  <Clock className="w-3.5 h-3.5 text-gold-400" />
                  <span>Time</span>
                </label>
                <input
                  type="time"
                  required
                  value={pickupTime}
                  onChange={(e) => setPickupTime(e.target.value)}
                  className="w-full bg-surface border border-border focus:border-gold-400 rounded-lg px-3 py-2 text-xs sm:text-sm text-white focus:outline-none focus:ring-1 focus:ring-gold-400"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-zinc-300 flex items-center space-x-1.5">
                  <Users className="w-3.5 h-3.5 text-gold-400" />
                  <span>Passengers</span>
                </label>
                <select
                  value={passengers}
                  onChange={(e) => setPassengers(Number(e.target.value))}
                  className="w-full bg-surface border border-border focus:border-gold-400 rounded-lg px-3 py-2 text-xs sm:text-sm text-white focus:outline-none"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 10, 14].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? "Passenger" : "Passengers"}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-zinc-300 flex items-center space-x-1.5">
                  <Briefcase className="w-3.5 h-3.5 text-gold-400" />
                  <span>Luggage</span>
                </label>
                <select
                  value={luggage}
                  onChange={(e) => setLuggage(Number(e.target.value))}
                  className="w-full bg-surface border border-border focus:border-gold-400 rounded-lg px-3 py-2 text-xs sm:text-sm text-white focus:outline-none"
                >
                  {[0, 1, 2, 3, 4, 5, 6, 8, 10, 14].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? "Suitcase" : "Suitcases"}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Vehicle Selection Grid */}
            <div className="space-y-2 pt-2">
              <label className="text-xs font-semibold text-zinc-300 flex items-center justify-between">
                <span className="flex items-center space-x-1.5">
                  <Car className="w-3.5 h-3.5 text-gold-400" />
                  <span>Select Luxury Vehicle Category</span>
                </span>
                <span className="text-[11px] text-zinc-400">All vehicles include bottled water & Wi-Fi</span>
              </label>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {FLEET_DATA.map((v) => (
                  <div
                    key={v.id}
                    onClick={() => setSelectedVehicle(v.id)}
                    className={`cursor-pointer rounded-xl p-2.5 text-left border transition-all relative ${
                      selectedVehicle === v.id
                        ? "bg-surface-light border-gold-400 shadow-gold-glow"
                        : "bg-surface border-border/70 hover:border-border hover:bg-surface-light/60"
                    }`}
                  >
                    {selectedVehicle === v.id && (
                      <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
                    )}
                    <div className="text-xs font-bold text-white truncate">{v.name}</div>
                    <div className="text-[10px] text-gold-400 font-medium">{v.category}</div>
                    <div className="mt-1 flex items-center space-x-2 text-[10px] text-zinc-400">
                      <span>Max {v.passengers} pax</span>
                      <span>•</span>
                      <span>{v.luggage} bags</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 1 Next Button */}
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 text-black font-bold text-sm uppercase tracking-wider hover:opacity-95 shadow-gold-glow transition-all flex items-center justify-center space-x-2 group"
            >
              <span>Continue to Instant Quote & VIP Confirmation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        ) : (
          /* STEP 2: CONTACT DETAILS & INSTANT SUBMISSION */
          <form onSubmit={handleSubmitLead} className="space-y-4 animate-in fade-in duration-200">
            {errorMessage && (
              <div className="p-3 rounded-lg bg-red-500/15 border border-red-500/30 text-red-300 text-xs">
                {errorMessage}
              </div>
            )}

            {/* Trip Summary Pill */}
            <div className="p-3 rounded-xl bg-surface border border-border/80 flex flex-wrap items-center justify-between gap-2 text-xs">
              <div className="text-zinc-300">
                <span className="text-gold-400 font-semibold">{selectedVehicleObj.name}</span>
                {" • "}
                <span>{pickupLocation || "Pickup"} &rarr; {serviceType === "hourly" ? hourlyDuration : dropoffLocation}</span>
                {pickupDate && ` (${pickupDate})`}
              </div>
              <button
                type="button"
                onClick={() => setStep(1)}
                className="text-gold-400 hover:text-gold-300 underline font-medium"
              >
                Edit Trip Details
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-zinc-300">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Jonathan Smith"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-surface border border-border focus:border-gold-400 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-gold-400"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-zinc-300">Phone Number (For SMS / Call) *</label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. +1 (551) 331-5426"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-surface border border-border focus:border-gold-400 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-gold-400"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-zinc-300">Email Address</label>
                <input
                  type="email"
                  placeholder="e.g. executive@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-surface border border-border focus:border-gold-400 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-gold-400"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-zinc-300">Flight Number (If Airport Transfer)</label>
                <input
                  type="text"
                  placeholder="e.g. UA 1450 / DL 402 (For flight tracking)"
                  value={flightNumber}
                  onChange={(e) => setFlightNumber(e.target.value)}
                  className="w-full bg-surface border border-border focus:border-gold-400 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-gold-400"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-zinc-300">Special Requests / Child Seat / Luggage Notes</label>
              <textarea
                rows={2}
                placeholder="e.g. Infant car seat needed, meet inside baggage claim, extra luggage space..."
                value={specialRequests}
                onChange={(e) => setSpecialRequests(e.target.value)}
                className="w-full bg-surface border border-border focus:border-gold-400 rounded-lg px-3.5 py-2 text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-gold-400 resize-none"
              />
            </div>

            {/* Submit Lead Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 text-black font-bold text-sm uppercase tracking-wider hover:opacity-95 shadow-gold-glow transition-all flex items-center justify-center space-x-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Submitting to VIP Dispatch...</span>
                </>
              ) : (
                <>
                  <span>Request Guaranteed Flat-Rate Quote</span>
                  <CheckCircle2 className="w-4 h-4" />
                </>
              )}
            </button>

            <div className="flex items-center justify-center space-x-4 text-[11px] text-zinc-400 pt-1">
              <span className="flex items-center">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 mr-1" />
                Zero Obligation Quote
              </span>
              <span>•</span>
              <span>24/7 Live Chauffeur Dispatch</span>
              <span>•</span>
              <span>No Hidden Fees</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
