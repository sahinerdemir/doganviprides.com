"use client";

import React, { useState } from "react";
import {
  MapPin,
  Calendar,
  Clock,
  ArrowRight,
  CheckCircle2,
  Users,
  Briefcase,
  Loader2,
  X,
  MessageCircle,
  Phone,
} from "lucide-react";
import { FLEET_DATA, BUSINESS_INFO } from "@/data/site-data";

export default function BookingWidget() {
  const [tripType, setTripType] = useState<"oneway" | "hourly">("oneway");
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [hours, setHours] = useState("4 Hours");

  // Modal / Quote Request State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(FLEET_DATA[0]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [flightNum, setFlightNum] = useState("");

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleOpenQuote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pickup) {
      setError("Please enter a pickup address or airport.");
      return;
    }
    setError("");
    setIsModalOpen(true);
  };

  const handleFinalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      setError("Please provide your name and phone number.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          serviceType: tripType,
          pickupLocation: pickup,
          dropoffLocation: tripType === "hourly" ? `Hourly (${hours})` : dropoff,
          pickupDate: date,
          pickupTime: time,
          hourlyDuration: tripType === "hourly" ? hours : undefined,
          vehicle: selectedVehicle.name,
          fullName: name,
          phone,
          email,
          flightNumber: flightNum,
          createdAt: new Date().toISOString(),
        }),
      });
      setSubmitted(true);
    } catch (err) {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const getWhatsAppLink = () => {
    const text = `*New Ride Inquiry - Dogan VIP*%0A%0A` +
      `*Name:* ${name || "Guest"}%0A` +
      `*Phone:* ${phone || "N/A"}%0A` +
      `*Vehicle:* ${selectedVehicle.name}%0A` +
      `*Pickup:* ${pickup}%0A` +
      `*Destination:* ${tripType === "hourly" ? hours : dropoff || "TBD"}%0A` +
      `*Date/Time:* ${date} ${time}%0A` +
      (flightNum ? `*Flight:* ${flightNum}` : "");
    return `https://wa.me/${BUSINESS_INFO.phoneClean.replace("+", "")}?text=${text}`;
  };

  return (
    <div id="booking-bar" className="w-full max-w-5xl mx-auto">
      {/* Sleek Floating Booking Bar */}
      <div className="bg-[#0f0f14]/90 backdrop-blur-2xl rounded-2xl sm:rounded-full p-2.5 sm:p-3 border border-white/10 shadow-2xl">
        {/* Toggle Mode */}
        <div className="flex items-center space-x-2 px-3 pb-2 sm:pb-0 sm:hidden border-b border-white/5 mb-2">
          <button
            type="button"
            onClick={() => setTripType("oneway")}
            className={`text-xs uppercase tracking-wider py-1 px-3 rounded-full font-semibold ${
              tripType === "oneway" ? "bg-white text-black" : "text-zinc-400"
            }`}
          >
            One-Way / Airport
          </button>
          <button
            type="button"
            onClick={() => setTripType("hourly")}
            className={`text-xs uppercase tracking-wider py-1 px-3 rounded-full font-semibold ${
              tripType === "hourly" ? "bg-white text-black" : "text-zinc-400"
            }`}
          >
            Hourly Hire
          </button>
        </div>

        <form onSubmit={handleOpenQuote} className="grid grid-cols-1 sm:grid-cols-12 gap-2 items-center">
          {/* Pickup */}
          <div className="sm:col-span-4 flex items-center px-4 py-2.5 rounded-xl sm:rounded-full bg-white/5 border border-white/5 focus-within:border-gold-400 transition-colors">
            <MapPin className="w-4 h-4 text-gold-400 mr-2.5 flex-shrink-0" />
            <input
              type="text"
              required
              placeholder="Pickup location or airport (JFK, EWR...)"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              className="w-full bg-transparent text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none"
            />
          </div>

          {/* Dropoff / Hourly */}
          <div className="sm:col-span-4 flex items-center px-4 py-2.5 rounded-xl sm:rounded-full bg-white/5 border border-white/5 focus-within:border-gold-400 transition-colors">
            <MapPin className="w-4 h-4 text-zinc-500 mr-2.5 flex-shrink-0" />
            {tripType === "hourly" ? (
              <select
                value={hours}
                onChange={(e) => setHours(e.target.value)}
                className="w-full bg-transparent text-xs sm:text-sm text-white focus:outline-none"
              >
                <option value="2 Hours" className="bg-zinc-900">2 Hours</option>
                <option value="4 Hours" className="bg-zinc-900">4 Hours (Half Day)</option>
                <option value="8 Hours" className="bg-zinc-900">8 Hours (Full Day)</option>
                <option value="12 Hours" className="bg-zinc-900">12 Hours (All Day)</option>
              </select>
            ) : (
              <input
                type="text"
                placeholder="Destination address..."
                value={dropoff}
                onChange={(e) => setDropoff(e.target.value)}
                className="w-full bg-transparent text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none"
              />
            )}
          </div>

          {/* Date & Time Mini */}
          <div className="sm:col-span-2 flex items-center px-3 py-2.5 rounded-xl sm:rounded-full bg-white/5 border border-white/5 focus-within:border-gold-400">
            <Calendar className="w-4 h-4 text-zinc-500 mr-2 flex-shrink-0" />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full bg-transparent text-xs text-white focus:outline-none"
            />
          </div>

          {/* Submit Button */}
          <div className="sm:col-span-2">
            <button
              type="submit"
              className="w-full py-3 sm:py-3.5 px-4 rounded-xl sm:rounded-full bg-white hover:bg-gold-400 text-black font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center space-x-1 shadow-lg"
            >
              <span>Get Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </form>
      </div>

      {error && (
        <div className="text-center text-xs text-red-400 mt-2 font-medium">
          {error}
        </div>
      )}

      {/* MODAL: INSTANT VEHICLE SELECTION & 10-SEC CONTACT */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-[#0e0e13] border border-white/10 rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 text-zinc-400 hover:text-white p-1 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              /* Success State */
              <div className="text-center py-6 space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-white">Quote Request Sent!</h3>
                  <p className="text-xs sm:text-sm text-zinc-400 max-w-sm mx-auto">
                    Thank you {name}. Our 24/7 dispatch is reviewing your route and will contact you at <span className="text-white font-medium">{phone}</span> shortly.
                  </p>
                </div>

                <div className="pt-2">
                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center space-x-2 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Instant WhatsApp Dispatch</span>
                  </a>
                </div>

                <button
                  onClick={() => {
                    setIsModalOpen(false);
                    setSubmitted(false);
                  }}
                  className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors pt-2 block mx-auto"
                >
                  Close window
                </button>
              </div>
            ) : (
              /* Form State */
              <form onSubmit={handleFinalSubmit} className="space-y-6">
                <div>
                  <div className="text-[11px] font-bold text-gold-400 uppercase tracking-widest mb-1">
                    Step 2 of 2 &bull; Fast Confirmation
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Select Vehicle &amp; Confirm Quote
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1">
                    Route: <span className="text-white">{pickup} &rarr; {dropoff || "Hourly"}</span>
                  </p>
                </div>

                {/* Select Vehicle Category (Compact Cards) */}
                <div className="grid grid-cols-2 gap-2.5">
                  {FLEET_DATA.map((v) => (
                    <div
                      key={v.id}
                      onClick={() => setSelectedVehicle(v)}
                      className={`cursor-pointer rounded-xl p-3 border transition-all text-left ${
                        selectedVehicle.id === v.id
                          ? "bg-white/10 border-gold-400"
                          : "bg-white/5 border-white/5 hover:border-white/20"
                      }`}
                    >
                      <div className="text-xs font-bold text-white truncate">{v.name}</div>
                      <div className="text-[10px] text-zinc-400">{v.category}</div>
                      <div className="text-[11px] text-gold-400 font-semibold mt-1">
                        {v.startingRate}
                      </div>
                    </div>
                  ))}
                </div>

                {/* 2 Simple Contact Inputs */}
                <div className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] font-medium text-zinc-400 block mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 focus:border-gold-400 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-zinc-600 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-medium text-zinc-400 block mb-1">Phone Number (For SMS/Quote) *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+1 (551) 331-5426"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 focus:border-gold-400 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-zinc-600 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] font-medium text-zinc-400 block mb-1">Email (Optional)</label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 focus:border-gold-400 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-zinc-600 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-medium text-zinc-400 block mb-1">Flight Number (If Airport)</label>
                      <input
                        type="text"
                        placeholder="e.g. UA 1234"
                        value={flightNum}
                        onChange={(e) => setFlightNum(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 focus:border-gold-400 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-zinc-600 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Confirm Quote Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-full bg-gold-400 hover:bg-gold-300 text-black font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center space-x-2"
                >
                  {loading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <>
                      <span>Receive Guaranteed Flat Rate</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
