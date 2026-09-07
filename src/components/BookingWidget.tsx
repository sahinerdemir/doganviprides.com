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
  Building2,
  Sparkles,
} from "lucide-react";
import { FLEET_DATA, BUSINESS_INFO } from "@/data/site-data";

type TabType = "transfer" | "hourly" | "corporate";

export default function BookingWidget() {
  const [activeTab, setActiveTab] = useState<TabType>("transfer");

  // Transfer Form State
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  // Hourly Form State
  const [hourlyPickup, setHourlyPickup] = useState("");
  const [hourlyDate, setHourlyDate] = useState("");
  const [hourlyTime, setHourlyTime] = useState("");
  const [duration, setDuration] = useState("4 Hours");

  // Corporate Form State
  const [companyName, setCompanyName] = useState("");
  const [corpName, setCorpName] = useState("");
  const [corpPhone, setCorpPhone] = useState("");
  const [corpEmail, setCorpEmail] = useState("");
  const [corpDetails, setCorpDetails] = useState("");

  // Modal / Step 2 State for Transfer & Hourly
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
    setError("");

    if (activeTab === "transfer") {
      if (!pickup) {
        setError("Please enter a pickup location or airport (e.g. MIA, FLL, Brickell).");
        return;
      }
      if (!dropoff) {
        setError("Please enter a destination (e.g. South Beach, Palm Beach).");
        return;
      }
    } else if (activeTab === "hourly") {
      if (!hourlyPickup) {
        setError("Please enter a pickup location.");
        return;
      }
    }
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

    const currentPickup = activeTab === "transfer" ? pickup : hourlyPickup;
    const currentDropoff = activeTab === "transfer" ? dropoff : `Hourly (${duration})`;
    const currentDate = activeTab === "transfer" ? date : hourlyDate;
    const currentTime = activeTab === "transfer" ? time : hourlyTime;

    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          serviceType: activeTab,
          pickupLocation: currentPickup,
          dropoffLocation: currentDropoff,
          pickupDate: currentDate,
          pickupTime: currentTime,
          hourlyDuration: activeTab === "hourly" ? duration : undefined,
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

  const handleCorporateSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!corpName || !corpPhone) {
      setError("Please enter your contact name and phone number.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          serviceType: "corporate",
          pickupLocation: "Miami Corporate Account",
          dropoffLocation: companyName || "Corporate Inquiry",
          fullName: corpName,
          phone: corpPhone,
          email: corpEmail,
          specialRequests: `Company: ${companyName}. Details: ${corpDetails}`,
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
    const currentPickup = activeTab === "transfer" ? pickup : hourlyPickup;
    const currentDest = activeTab === "transfer" ? dropoff : `Hourly (${duration})`;
    const currentDate = activeTab === "transfer" ? date : hourlyDate;
    const currentTime = activeTab === "transfer" ? time : hourlyTime;

    const text = `*New Miami VIP Ride Inquiry*%0A%0A` +
      `*Service:* ${activeTab.toUpperCase()}%0A` +
      `*Name:* ${name || corpName || "Guest"}%0A` +
      `*Phone:* ${phone || corpPhone || "N/A"}%0A` +
      `*Vehicle:* ${selectedVehicle.name}%0A` +
      `*Pickup:* ${currentPickup}%0A` +
      `*Destination:* ${currentDest}%0A` +
      `*Date/Time:* ${currentDate} ${currentTime}%0A` +
      (flightNum ? `*Flight #:* ${flightNum}` : "");
    return `https://wa.me/${BUSINESS_INFO.phoneClean.replace("+", "")}?text=${text}`;
  };

  return (
    <div id="booking-bar" className="w-full max-w-5xl mx-auto">
      {/* Main Glass Card Container */}
      <div className="bg-[#111116]/95 backdrop-blur-2xl rounded-3xl p-5 sm:p-7 border border-white/15 shadow-2xl relative overflow-hidden">
        {/* Subtle Gold Edge Highlight */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold-400 to-transparent opacity-80" />

        {/* 3 Top Category Tabs */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 border-b border-white/10 pb-4 mb-5">
          <button
            type="button"
            onClick={() => { setActiveTab("transfer"); setError(""); }}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all flex items-center space-x-2 ${
              activeTab === "transfer"
                ? "bg-white text-black shadow-lg shadow-white/10"
                : "text-zinc-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <span>Transfer</span>
          </button>

          <button
            type="button"
            onClick={() => { setActiveTab("hourly"); setError(""); }}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all flex items-center space-x-2 ${
              activeTab === "hourly"
                ? "bg-white text-black shadow-lg shadow-white/10"
                : "text-zinc-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <span>Hourly Service</span>
          </button>

          <button
            type="button"
            onClick={() => { setActiveTab("corporate"); setError(""); }}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all flex items-center space-x-2 ${
              activeTab === "corporate"
                ? "bg-gradient-to-r from-gold-500 to-gold-400 text-black shadow-gold-glow"
                : "text-zinc-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <Building2 className="w-4 h-4" />
            <span>Corporate Transportation</span>
          </button>
        </div>

        {error && (
          <div className="p-3 mb-4 rounded-xl bg-red-500/15 border border-red-500/30 text-red-300 text-xs font-semibold text-center">
            {error}
          </div>
        )}

        {/* TAB 1: TRANSFER (From, To, Date, Time) */}
        {activeTab === "transfer" && (
          <form onSubmit={handleOpenQuote} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
              {/* Pickup */}
              <div className="sm:col-span-4 space-y-1.5">
                <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider flex items-center space-x-1.5">
                  <MapPin className="w-3.5 h-3.5 text-gold-400" />
                  <span>Pick-Up Location</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. MIA Airport, South Beach, Brickell..."
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  className="w-full luxury-input rounded-xl px-4 py-3.5 text-sm"
                />
              </div>

              {/* Dropoff */}
              <div className="sm:col-span-4 space-y-1.5">
                <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider flex items-center space-x-1.5">
                  <MapPin className="w-3.5 h-3.5 text-gold-400" />
                  <span>Drop-Off Destination</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. FLL Airport, Palm Beach, Hotel..."
                  value={dropoff}
                  onChange={(e) => setDropoff(e.target.value)}
                  className="w-full luxury-input rounded-xl px-4 py-3.5 text-sm"
                />
              </div>

              {/* Date */}
              <div className="sm:col-span-2 space-y-1.5">
                <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider flex items-center space-x-1.5">
                  <Calendar className="w-3.5 h-3.5 text-gold-400" />
                  <span>Date</span>
                </label>
                <input
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full luxury-input rounded-xl px-3.5 py-3.5 text-xs sm:text-sm"
                />
              </div>

              {/* Time */}
              <div className="sm:col-span-2 space-y-1.5">
                <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider flex items-center space-x-1.5">
                  <Clock className="w-3.5 h-3.5 text-gold-400" />
                  <span>Time</span>
                </label>
                <input
                  type="time"
                  required
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full luxury-input rounded-xl px-3.5 py-3.5 text-xs sm:text-sm"
                />
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-xs text-zinc-400 font-medium">
                Flight radar tracking &amp; 60 min complimentary airport wait included.
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 text-black font-extrabold text-xs uppercase tracking-widest hover:opacity-95 shadow-gold-glow transition-all flex items-center justify-center space-x-2"
              >
                <span>Get Instant Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}

        {/* TAB 2: HOURLY SERVICE (Pickup, Date, Start Time, Duration) */}
        {activeTab === "hourly" && (
          <form onSubmit={handleOpenQuote} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
              {/* Pickup */}
              <div className="sm:col-span-4 space-y-1.5">
                <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider flex items-center space-x-1.5">
                  <MapPin className="w-3.5 h-3.5 text-gold-400" />
                  <span>Pick-Up Location</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Miami Beach, Downtown, Private Villa..."
                  value={hourlyPickup}
                  onChange={(e) => setHourlyPickup(e.target.value)}
                  className="w-full luxury-input rounded-xl px-4 py-3.5 text-sm"
                />
              </div>

              {/* Date */}
              <div className="sm:col-span-3 space-y-1.5">
                <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider flex items-center space-x-1.5">
                  <Calendar className="w-3.5 h-3.5 text-gold-400" />
                  <span>Date</span>
                </label>
                <input
                  type="date"
                  required
                  value={hourlyDate}
                  onChange={(e) => setHourlyDate(e.target.value)}
                  className="w-full luxury-input rounded-xl px-3.5 py-3.5 text-xs sm:text-sm"
                />
              </div>

              {/* Start Time */}
              <div className="sm:col-span-2 space-y-1.5">
                <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider flex items-center space-x-1.5">
                  <Clock className="w-3.5 h-3.5 text-gold-400" />
                  <span>Start Time</span>
                </label>
                <input
                  type="time"
                  required
                  value={hourlyTime}
                  onChange={(e) => setHourlyTime(e.target.value)}
                  className="w-full luxury-input rounded-xl px-3.5 py-3.5 text-xs sm:text-sm"
                />
              </div>

              {/* Duration */}
              <div className="sm:col-span-3 space-y-1.5">
                <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider flex items-center space-x-1.5">
                  <Clock className="w-3.5 h-3.5 text-gold-400" />
                  <span>Duration (Hours)</span>
                </label>
                <select
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className="w-full luxury-input rounded-xl px-3.5 py-3.5 text-xs sm:text-sm font-semibold"
                >
                  <option value="2 Hours" className="bg-zinc-900">2 Hours (Minimum)</option>
                  <option value="4 Hours" className="bg-zinc-900">4 Hours (Half Day)</option>
                  <option value="6 Hours" className="bg-zinc-900">6 Hours</option>
                  <option value="8 Hours" className="bg-zinc-900">8 Hours (Full Day)</option>
                  <option value="12 Hours" className="bg-zinc-900">12 Hours (All Day)</option>
                </select>
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-xs text-zinc-400 font-medium">
                Unlimited stops &bull; Dedicated vehicle &amp; chauffeur on standby.
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 text-black font-extrabold text-xs uppercase tracking-widest hover:opacity-95 shadow-gold-glow transition-all flex items-center justify-center space-x-2"
              >
                <span>Get Hourly Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}

        {/* TAB 3: CORPORATE TRANSPORTATION (Contact Us Dedicated View) */}
        {activeTab === "corporate" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              {/* Left Column: Direct Action & Perks */}
              <div className="lg:col-span-5 space-y-4">
                <div className="inline-flex items-center space-x-1.5 text-gold-400 text-xs font-bold uppercase tracking-widest">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Miami Executive Accounts</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                  Partner with Miami&apos;s Elite Chauffeur Service
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light">
                  Direct billing, priority 24/7 executive dispatch, and customized fleet management for corporate roadshows, C-Suite travel, and investor summits in Miami &amp; South Florida.
                </p>

                {/* Direct Contact Buttons */}
                <div className="pt-2 space-y-2.5">
                  <a
                    href={`tel:${BUSINESS_INFO.phoneClean}`}
                    className="w-full flex items-center justify-center space-x-2 py-3.5 rounded-xl border border-white/20 bg-white/5 hover:border-gold-400 text-white text-xs font-bold uppercase tracking-wider transition-all"
                  >
                    <Phone className="w-4 h-4 text-gold-400" />
                    <span>Call Corporate Dispatch: {BUSINESS_INFO.phoneDisplay}</span>
                  </a>

                  <a
                    href={`https://wa.me/${BUSINESS_INFO.phoneClean.replace("+", "")}?text=Hello,%20I%20would%20like%20to%20open%20a%20Corporate%20Account%20for%20executive%20transportation.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center space-x-2 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-lg"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Instant WhatsApp Corporate Concierge</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Quick Corporate Inquiry Form */}
              <div className="lg:col-span-7 bg-[#171720]/80 border border-white/10 rounded-2xl p-5 space-y-3.5">
                <div className="text-xs font-bold text-white uppercase tracking-wider">
                  Or Send Us a Quick Corporate Request:
                </div>

                {submitted ? (
                  <div className="py-8 text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div className="text-sm font-bold text-white">Inquiry Received!</div>
                    <p className="text-xs text-zinc-400">Our executive accounts director will contact you within 15 minutes.</p>
                  </div>
                ) : (
                  <form onSubmit={handleCorporateSubmit} className="space-y-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="text-[11px] font-bold text-zinc-300 block mb-1">Company / Organization *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Goldman Sachs Miami"
                          value={companyName}
                          onChange={(e) => setCompanyName(e.target.value)}
                          className="w-full luxury-input rounded-xl px-3.5 py-2.5 text-xs"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] font-bold text-zinc-300 block mb-1">Contact Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="Full Name"
                          value={corpName}
                          onChange={(e) => setCorpName(e.target.value)}
                          className="w-full luxury-input rounded-xl px-3.5 py-2.5 text-xs"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="text-[11px] font-bold text-zinc-300 block mb-1">Phone Number *</label>
                        <input
                          type="tel"
                          required
                          placeholder="+1 (551) 331-5426"
                          value={corpPhone}
                          onChange={(e) => setCorpPhone(e.target.value)}
                          className="w-full luxury-input rounded-xl px-3.5 py-2.5 text-xs"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] font-bold text-zinc-300 block mb-1">Corporate Email</label>
                        <input
                          type="email"
                          placeholder="executive@company.com"
                          value={corpEmail}
                          onChange={(e) => setCorpEmail(e.target.value)}
                          className="w-full luxury-input rounded-xl px-3.5 py-2.5 text-xs"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[11px] font-bold text-zinc-300 block mb-1">Travel Needs / Itinerary Notes</label>
                      <input
                        type="text"
                        placeholder="e.g. Monthly executive airport transfers, financial roadshow..."
                        value={corpDetails}
                        onChange={(e) => setCorpDetails(e.target.value)}
                        className="w-full luxury-input rounded-xl px-3.5 py-2.5 text-xs"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3.5 rounded-xl bg-gold-400 hover:bg-gold-300 text-black font-extrabold text-xs uppercase tracking-widest transition-all flex items-center justify-center space-x-2"
                    >
                      {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <span>Submit Corporate Inquiry</span>}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* STEP 2 MODAL (Vehicle Selection & Contact) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-[#101016] border border-white/15 rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            {/* Close */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 text-zinc-400 hover:text-white p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="text-center py-6 space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-white">Quote Request Received!</h3>
                  <p className="text-xs sm:text-sm text-zinc-300 max-w-sm mx-auto">
                    Thank you, <span className="text-gold-400 font-semibold">{name}</span>. Our Miami 24/7 dispatch is reviewing your route and will contact you at <span className="text-white font-medium">{phone}</span> shortly.
                  </p>
                </div>

                <div className="pt-2">
                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center space-x-2 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Instant WhatsApp Confirmation</span>
                  </a>
                </div>

                <button
                  onClick={() => {
                    setIsModalOpen(false);
                    setSubmitted(false);
                  }}
                  className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors pt-2 block mx-auto"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleFinalSubmit} className="space-y-5">
                <div>
                  <div className="text-[11px] font-bold text-gold-400 uppercase tracking-widest mb-1">
                    Step 2 of 2 &bull; Select Vehicle &amp; Confirm
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Confirm Your Miami VIP Ride
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1">
                    Route: <span className="text-white font-medium">{activeTab === "transfer" ? `${pickup} → ${dropoff}` : `${hourlyPickup} (${duration})`}</span>
                  </p>
                </div>

                {/* Vehicle Selection */}
                <div className="grid grid-cols-2 gap-2.5">
                  {FLEET_DATA.map((v) => (
                    <div
                      key={v.id}
                      onClick={() => setSelectedVehicle(v)}
                      className={`cursor-pointer rounded-xl p-3 border transition-all text-left ${
                        selectedVehicle.id === v.id
                          ? "bg-white/10 border-gold-400 shadow-gold-glow"
                          : "bg-white/5 border-white/10 hover:border-white/20"
                      }`}
                    >
                      <div className="text-xs font-bold text-white truncate">{v.name}</div>
                      <div className="text-[10px] text-zinc-400">{v.category}</div>
                      <div className="text-[11px] text-gold-400 font-bold mt-1">
                        {v.startingRate}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bold Contact Inputs */}
                <div className="space-y-3 pt-1">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] font-bold text-zinc-300 block mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full luxury-input rounded-xl px-3.5 py-3 text-xs"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-bold text-zinc-300 block mb-1">Phone Number (For SMS Quote) *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+1 (551) 331-5426"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full luxury-input rounded-xl px-3.5 py-3 text-xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] font-bold text-zinc-300 block mb-1">Email (Optional)</label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full luxury-input rounded-xl px-3.5 py-3 text-xs"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-bold text-zinc-300 block mb-1">Flight Number (If Airport)</label>
                      <input
                        type="text"
                        placeholder="e.g. AA 1420 / Private Tail"
                        value={flightNum}
                        onChange={(e) => setFlightNum(e.target.value)}
                        className="w-full luxury-input rounded-xl px-3.5 py-3 text-xs"
                      />
                    </div>
                  </div>
                </div>

                {/* Final Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 text-black font-extrabold text-xs uppercase tracking-widest hover:opacity-95 shadow-gold-glow transition-all flex items-center justify-center space-x-2"
                >
                  {loading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <>
                      <span>Receive Guaranteed Flat Rate</span>
                      <ArrowRight className="w-4 h-4" />
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
