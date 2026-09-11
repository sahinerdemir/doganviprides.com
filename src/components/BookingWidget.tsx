"use client";

import React, { useState } from "react";
import {
  MapPin,
  Calendar,
  Clock,
  CheckCircle2,
  Loader2,
  MessageCircle,
  Phone,
  Building2,
  Sparkles,
  Car,
  Plane,
} from "lucide-react";
import LocationAutocomplete from "./LocationAutocomplete";
import { FLEET_DATA, BUSINESS_INFO } from "@/data/site-data";

type TabType = "hourly" | "transfer" | "corporate";

export default function BookingWidget() {
  const [activeTab, setActiveTab] = useState<TabType>("hourly");

  // Hourly Form State (Tab 1)
  const [hourlyPickup, setHourlyPickup] = useState("");
  const [hourlyDate, setHourlyDate] = useState("");
  const [hourlyTime, setHourlyTime] = useState("");
  const [duration, setDuration] = useState("4 Hours");
  const [hourlyVehicle, setHourlyVehicle] = useState(FLEET_DATA[0]);
  const [hourlyName, setHourlyName] = useState("");
  const [hourlyPhone, setHourlyPhone] = useState("");
  const [hourlyEmail, setHourlyEmail] = useState("");
  const [hourlyNotes, setHourlyNotes] = useState("");

  // Transfer Form State (Tab 2 - Like Corporate, no prices displayed)
  const [transferPickup, setTransferPickup] = useState("");
  const [transferDropoff, setTransferDropoff] = useState("");
  const [transferDate, setTransferDate] = useState("");
  const [transferTime, setTransferTime] = useState("");
  const [transferVehiclePref, setTransferVehiclePref] = useState("Any Luxury Vehicle");
  const [transferName, setTransferName] = useState("");
  const [transferPhone, setTransferPhone] = useState("");
  const [transferEmail, setTransferEmail] = useState("");
  const [transferFlight, setTransferFlight] = useState("");
  const [transferNotes, setTransferNotes] = useState("");

  // Corporate Form State (Tab 3)
  const [companyName, setCompanyName] = useState("");
  const [corpName, setCorpName] = useState("");
  const [corpPhone, setCorpPhone] = useState("");
  const [corpEmail, setCorpEmail] = useState("");
  const [corpDetails, setCorpDetails] = useState("");

  const [loading, setLoading] = useState(false);
  const [submittedTab, setSubmittedTab] = useState<TabType | null>(null);
  const [error, setError] = useState("");

  // WhatsApp Generation Handlers (Clean text, no emojis, no footer tag)
  const generateHourlyWhatsAppUrl = () => {
    const messageLines = [
      `*NEW HOURLY CHAUFFEUR REQUEST - DOGAN VIP RIDES*`,
      ``,
      `*Service:* Hourly As-Directed Chauffeur`,
      `*Vehicle:* ${hourlyVehicle.name} (${hourlyVehicle.startingRate})`,
      `*Duration:* ${duration}`,
      `*Passenger Name:* ${hourlyName}`,
      `*Phone:* ${hourlyPhone}`,
      hourlyEmail ? `*Email:* ${hourlyEmail}` : null,
      ``,
      `*Pick-Up Location:* ${hourlyPickup}`,
      hourlyDate ? `*Date:* ${hourlyDate}` : null,
      hourlyTime ? `*Start Time:* ${hourlyTime}` : null,
      hourlyNotes ? `*Special Notes:* ${hourlyNotes}` : null,
    ].filter(Boolean).join("\n");

    return `https://wa.me/${BUSINESS_INFO.phoneClean.replace("+", "")}?text=${encodeURIComponent(messageLines)}`;
  };

  const generateTransferWhatsAppUrl = () => {
    const messageLines = [
      `*NEW TRANSFER REQUEST - DOGAN VIP RIDES*`,
      ``,
      `*Service:* Point-to-Point VIP / Airport Transfer`,
      transferVehiclePref && transferVehiclePref !== "Any Luxury Vehicle" ? `*Preferred Vehicle:* ${transferVehiclePref}` : null,
      `*Passenger Name:* ${transferName}`,
      `*Phone:* ${transferPhone}`,
      transferEmail ? `*Email:* ${transferEmail}` : null,
      transferFlight ? `*Flight #:* ${transferFlight}` : null,
      ``,
      `*Pick-Up Location:* ${transferPickup}`,
      `*Destination:* ${transferDropoff}`,
      transferDate ? `*Date:* ${transferDate}` : null,
      transferTime ? `*Time:* ${transferTime}` : null,
      transferNotes ? `*Special Requests:* ${transferNotes}` : null,
    ].filter(Boolean).join("\n");

    return `https://wa.me/${BUSINESS_INFO.phoneClean.replace("+", "")}?text=${encodeURIComponent(messageLines)}`;
  };

  const generateCorporateWhatsAppUrl = () => {
    const messageLines = [
      `*NEW CORPORATE ACCOUNT INQUIRY - DOGAN VIP RIDES*`,
      ``,
      `*Company / Organization:* ${companyName}`,
      `*Contact Name:* ${corpName}`,
      `*Phone:* ${corpPhone}`,
      corpEmail ? `*Email:* ${corpEmail}` : null,
      corpDetails ? `*Requirements / Notes:* ${corpDetails}` : null,
    ].filter(Boolean).join("\n");

    return `https://wa.me/${BUSINESS_INFO.phoneClean.replace("+", "")}?text=${encodeURIComponent(messageLines)}`;
  };

  // Submission Handlers
  const handleHourlySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!hourlyPickup || !hourlyName || !hourlyPhone) {
      setError("Please fill in the pickup location, contact name, and phone number.");
      return;
    }

    setLoading(true);
    setError("");

    const waUrl = generateHourlyWhatsAppUrl();

    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          serviceType: "hourly",
          pickupLocation: hourlyPickup,
          dropoffLocation: `Hourly As-Directed (${duration})`,
          pickupDate: hourlyDate,
          pickupTime: hourlyTime,
          hourlyDuration: duration,
          vehicle: hourlyVehicle.name,
          fullName: hourlyName,
          phone: hourlyPhone,
          email: hourlyEmail,
          specialRequests: hourlyNotes,
          createdAt: new Date().toISOString(),
        }),
      });
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
      setSubmittedTab("hourly");
      window.open(waUrl, "_blank");
    }
  };

  const handleTransferSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!transferPickup || !transferDropoff || !transferName || !transferPhone) {
      setError("Please fill in pickup location, destination, name, and phone number.");
      return;
    }

    setLoading(true);
    setError("");

    const waUrl = generateTransferWhatsAppUrl();

    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          serviceType: "transfer",
          pickupLocation: transferPickup,
          dropoffLocation: transferDropoff,
          pickupDate: transferDate,
          pickupTime: transferTime,
          vehicle: transferVehiclePref,
          fullName: transferName,
          phone: transferPhone,
          email: transferEmail,
          flightNumber: transferFlight,
          specialRequests: transferNotes,
          createdAt: new Date().toISOString(),
        }),
      });
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
      setSubmittedTab("transfer");
      window.open(waUrl, "_blank");
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

    const waUrl = generateCorporateWhatsAppUrl();

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
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
      setSubmittedTab("corporate");
      window.open(waUrl, "_blank");
    }
  };

  return (
    <div id="booking-bar" className="w-full max-w-5xl mx-auto px-1 text-left">
      {/* Main Container */}
      <div className="bg-[#111116]/95 backdrop-blur-2xl rounded-3xl p-4 sm:p-7 border border-white/15 shadow-2xl relative overflow-visible w-full box-border text-left">
        {/* Subtle Gold Edge Highlight */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold-400 to-transparent opacity-80" />

        {/* 3 Top Category Tabs - Title Case, no all-caps */}
        <div className="grid grid-cols-3 sm:flex sm:flex-wrap items-center gap-1.5 sm:gap-2 border-b border-white/10 pb-4 mb-6">
          <button
            type="button"
            onClick={() => { setActiveTab("hourly"); setError(""); setSubmittedTab(null); }}
            className={`px-3 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center space-x-1.5 touch-manipulation ${
              activeTab === "hourly"
                ? "bg-white text-black shadow-lg shadow-white/10"
                : "text-zinc-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <Clock className="w-3.5 h-3.5 flex-shrink-0" />
            <span className="hidden sm:inline">Hourly Service</span>
            <span className="sm:hidden">Hourly</span>
          </button>

          <button
            type="button"
            onClick={() => { setActiveTab("transfer"); setError(""); setSubmittedTab(null); }}
            className={`px-3 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center space-x-1.5 touch-manipulation ${
              activeTab === "transfer"
                ? "bg-white text-black shadow-lg shadow-white/10"
                : "text-zinc-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <Plane className="w-3.5 h-3.5 flex-shrink-0" />
            <span className="hidden sm:inline">Airport &amp; Transfer</span>
            <span className="sm:hidden">Transfer</span>
          </button>

          <button
            type="button"
            onClick={() => { setActiveTab("corporate"); setError(""); setSubmittedTab(null); }}
            className={`px-3 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center space-x-1.5 touch-manipulation ${
              activeTab === "corporate"
                ? "bg-gradient-to-r from-gold-500 to-gold-400 text-black shadow-gold-glow"
                : "text-zinc-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <Building2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
            <span className="hidden md:inline">Corporate Transportation</span>
            <span className="hidden sm:inline md:hidden">Corporate</span>
            <span className="sm:hidden">Corporate</span>
          </button>
        </div>

        {error && (
          <div className="p-3 mb-4 rounded-xl bg-red-500/15 border border-red-500/30 text-red-300 text-xs font-semibold text-left">
            {error}
          </div>
        )}

        {/* TAB 1: HOURLY SERVICE (FIRST) */}
        {activeTab === "hourly" && (
          <div className="animate-in fade-in duration-200 text-left">
            {submittedTab === "hourly" ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-white">Opening WhatsApp...</h3>
                  <p className="text-xs sm:text-sm text-zinc-300 max-w-md mx-auto">
                    Thank you, <span className="text-gold-400 font-semibold">{hourlyName}</span>. Your hourly reservation details have been transferred to our 24/7 executive dispatch.
                  </p>
                </div>
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={generateHourlyWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-lg flex items-center space-x-2"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Re-Open WhatsApp Chat</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setSubmittedTab(null)}
                    className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-zinc-300 text-xs font-bold transition-all"
                  >
                    New Hourly Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleHourlySubmit} className="space-y-4 w-full text-left">
                {/* Row 1: Location, Date, Time, Duration */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 w-full text-left">
                  <div className="lg:col-span-5 space-y-1.5 min-w-0 w-full text-left">
                    <label className="text-xs font-bold text-zinc-300 flex items-center justify-start space-x-1.5 text-left block">
                      <MapPin className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
                      <span>Pick-Up Location *</span>
                    </label>
                    <LocationAutocomplete
                      required
                      placeholder="Type South Beach, Brickell, Villa..."
                      value={hourlyPickup}
                      onChange={setHourlyPickup}
                    />
                  </div>

                  <div className="lg:col-span-4 grid grid-cols-2 gap-3 min-w-0 w-full text-left">
                    <div className="space-y-1.5 min-w-0 text-left">
                      <label className="text-xs font-bold text-zinc-300 flex items-center justify-start space-x-1.5 truncate text-left block">
                        <Calendar className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
                        <span>Date</span>
                      </label>
                      <input
                        type="date"
                        required
                        value={hourlyDate}
                        onChange={(e) => setHourlyDate(e.target.value)}
                        className="w-full luxury-input rounded-xl px-3 py-3 text-xs sm:text-sm font-medium text-left"
                      />
                    </div>

                    <div className="space-y-1.5 min-w-0 text-left">
                      <label className="text-xs font-bold text-zinc-300 flex items-center justify-start space-x-1.5 truncate text-left block">
                        <Clock className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
                        <span>Start Time</span>
                      </label>
                      <input
                        type="time"
                        required
                        value={hourlyTime}
                        onChange={(e) => setHourlyTime(e.target.value)}
                        className="w-full luxury-input rounded-xl px-3 py-3 text-xs sm:text-sm font-medium text-left"
                      />
                    </div>
                  </div>

                  <div className="lg:col-span-3 space-y-1.5 min-w-0 w-full text-left">
                    <label className="text-xs font-bold text-zinc-300 flex items-center justify-start space-x-1.5 text-left block">
                      <Clock className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
                      <span>Duration</span>
                    </label>
                    <select
                      value={duration}
                      onChange={(e) => setDuration(e.target.value)}
                      className="w-full luxury-input rounded-xl px-3.5 py-3 text-xs sm:text-sm font-semibold text-left"
                    >
                      <option value="2 Hours" className="bg-zinc-900">2 Hours (Minimum)</option>
                      <option value="3 Hours" className="bg-zinc-900">3 Hours</option>
                      <option value="4 Hours" className="bg-zinc-900">4 Hours (Half Day)</option>
                      <option value="6 Hours" className="bg-zinc-900">6 Hours</option>
                      <option value="8 Hours" className="bg-zinc-900">8 Hours (Full Day)</option>
                      <option value="12 Hours" className="bg-zinc-900">12 Hours (All Day)</option>
                    </select>
                  </div>
                </div>

                {/* Row 2: Select Vehicle with Updated Prices */}
                <div className="pt-2 text-left">
                  <label className="text-xs font-bold text-zinc-300 block text-left mb-2 flex items-center justify-start space-x-1.5">
                    <Car className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
                    <span>Select 2026 Executive Vehicle &amp; Rate</span>
                  </label>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 w-full text-left">
                    {FLEET_DATA.map((v) => (
                      <div
                        key={v.id}
                        onClick={() => setHourlyVehicle(v)}
                        className={`cursor-pointer rounded-2xl p-3.5 border transition-all text-left min-w-0 ${
                          hourlyVehicle.id === v.id
                            ? "bg-white/10 border-gold-400 shadow-gold-glow"
                            : "bg-white/[0.04] border-white/10 hover:border-white/20"
                        }`}
                      >
                        <div className="text-xs font-bold text-white truncate text-left">{v.name}</div>
                        <div className="text-[11px] text-zinc-400 truncate text-left">{v.category}</div>
                        <div className="text-xs text-gold-400 font-extrabold mt-1 text-left">
                          {v.startingRate}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Row 3: Passenger Contact Information */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-1 w-full text-left">
                  <div className="min-w-0 text-left">
                    <label className="text-[11px] font-bold text-zinc-300 block text-left mb-1">Passenger / Client Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Full Name"
                      value={hourlyName}
                      onChange={(e) => setHourlyName(e.target.value)}
                      className="w-full luxury-input rounded-xl px-3.5 py-2.5 text-xs text-left"
                    />
                  </div>

                  <div className="min-w-0 text-left">
                    <label className="text-[11px] font-bold text-zinc-300 block text-left mb-1">Phone Number (For WhatsApp) *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (551) 331-5426"
                      value={hourlyPhone}
                      onChange={(e) => setHourlyPhone(e.target.value)}
                      className="w-full luxury-input rounded-xl px-3.5 py-2.5 text-xs text-left"
                    />
                  </div>

                  <div className="min-w-0 text-left">
                    <label className="text-[11px] font-bold text-zinc-300 block text-left mb-1">Email (Optional)</label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={hourlyEmail}
                      onChange={(e) => setHourlyEmail(e.target.value)}
                      className="w-full luxury-input rounded-xl px-3.5 py-2.5 text-xs text-left"
                    />
                  </div>
                </div>

                {/* Action Bar */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 w-full border-t border-white/10 pt-4">
                  <div className="text-xs text-zinc-400 font-medium text-left">
                    Unlimited stops &bull; Dedicated chauffeur on standby &bull; Transparent flat rates.
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 hover:opacity-95 text-white font-bold text-xs sm:text-sm transition-all flex items-center justify-center space-x-2 touch-manipulation shadow-lg"
                  >
                    {loading ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <>
                        <MessageCircle className="w-4 h-4 fill-white" />
                        <span>Request Hourly via WhatsApp</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        )}

        {/* TAB 2: TRANSFER (SECOND - LIKE CORPORATE, NO PRICES DISPLAYED) */}
        {activeTab === "transfer" && (
          <div className="animate-in fade-in duration-200 text-left">
            {submittedTab === "transfer" ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-white">Opening WhatsApp...</h3>
                  <p className="text-xs sm:text-sm text-zinc-300 max-w-md mx-auto">
                    Thank you, <span className="text-gold-400 font-semibold">{transferName}</span>. Your transfer itinerary has been forwarded to our 24/7 executive dispatch.
                  </p>
                </div>
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={generateTransferWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-lg flex items-center space-x-2"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Re-Open WhatsApp Chat</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setSubmittedTab(null)}
                    className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-zinc-300 text-xs font-bold transition-all"
                  >
                    New Transfer Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleTransferSubmit} className="space-y-4 w-full text-left">
                {/* Row 1: Pick-Up & Drop-Off Locations */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full text-left">
                  <div className="space-y-1.5 min-w-0 w-full text-left">
                    <label className="text-xs font-bold text-zinc-300 flex items-center justify-start space-x-1.5 text-left block">
                      <MapPin className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
                      <span>Pick-Up Location *</span>
                    </label>
                    <LocationAutocomplete
                      required
                      placeholder="Type MIA, FLL, Brickell..."
                      value={transferPickup}
                      onChange={setTransferPickup}
                    />
                  </div>

                  <div className="space-y-1.5 min-w-0 w-full text-left">
                    <label className="text-xs font-bold text-zinc-300 flex items-center justify-start space-x-1.5 text-left block">
                      <MapPin className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
                      <span>Drop-Off Destination *</span>
                    </label>
                    <LocationAutocomplete
                      required
                      placeholder="Type South Beach, Hotel, PBI..."
                      value={transferDropoff}
                      onChange={setTransferDropoff}
                    />
                  </div>
                </div>

                {/* Row 2: Date, Time & Vehicle Preference (No price shown) */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full text-left">
                  <div className="space-y-1.5 min-w-0 text-left">
                    <label className="text-xs font-bold text-zinc-300 flex items-center justify-start space-x-1.5 truncate text-left block">
                      <Calendar className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
                      <span>Date *</span>
                    </label>
                    <input
                      type="date"
                      required
                      value={transferDate}
                      onChange={(e) => setTransferDate(e.target.value)}
                      className="w-full luxury-input rounded-xl px-3 py-2.5 text-xs sm:text-sm font-medium text-left"
                    />
                  </div>

                  <div className="space-y-1.5 min-w-0 text-left">
                    <label className="text-xs font-bold text-zinc-300 flex items-center justify-start space-x-1.5 truncate text-left block">
                      <Clock className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
                      <span>Pick-Up Time *</span>
                    </label>
                    <input
                      type="time"
                      required
                      value={transferTime}
                      onChange={(e) => setTransferTime(e.target.value)}
                      className="w-full luxury-input rounded-xl px-3 py-2.5 text-xs sm:text-sm font-medium text-left"
                    />
                  </div>

                  <div className="space-y-1.5 min-w-0 text-left">
                    <label className="text-xs font-bold text-zinc-300 flex items-center justify-start space-x-1.5 text-left block">
                      <Car className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
                      <span>Vehicle Preference (Optional)</span>
                    </label>
                    <select
                      value={transferVehiclePref}
                      onChange={(e) => setTransferVehiclePref(e.target.value)}
                      className="w-full luxury-input rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-medium text-left"
                    >
                      <option value="Any Luxury Vehicle" className="bg-zinc-900">Any Luxury Vehicle</option>
                      <option value="Chevrolet Suburban (Luxury SUV)" className="bg-zinc-900">Chevrolet Suburban (Luxury SUV)</option>
                      <option value="Cadillac Escalade ESV (Flagship SUV)" className="bg-zinc-900">Cadillac Escalade ESV (Flagship SUV)</option>
                      <option value="Mercedes-Benz S-Class (First-Class Sedan)" className="bg-zinc-900">Mercedes-Benz S-Class (First-Class Sedan)</option>
                      <option value="Mercedes Sprinter VIP Jet Edition" className="bg-zinc-900">Mercedes Sprinter VIP Jet Edition</option>
                    </select>
                  </div>
                </div>

                {/* Row 3: Passenger Details & Flight # */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-1 w-full text-left">
                  <div className="min-w-0 text-left">
                    <label className="text-[11px] font-bold text-zinc-300 block text-left mb-1">Passenger Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Full Name"
                      value={transferName}
                      onChange={(e) => setTransferName(e.target.value)}
                      className="w-full luxury-input rounded-xl px-3.5 py-2.5 text-xs text-left"
                    />
                  </div>

                  <div className="min-w-0 text-left">
                    <label className="text-[11px] font-bold text-zinc-300 block text-left mb-1">Phone Number (For WhatsApp) *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (551) 331-5426"
                      value={transferPhone}
                      onChange={(e) => setTransferPhone(e.target.value)}
                      className="w-full luxury-input rounded-xl px-3.5 py-2.5 text-xs text-left"
                    />
                  </div>

                  <div className="min-w-0 text-left">
                    <label className="text-[11px] font-bold text-zinc-300 block text-left mb-1">Email (Optional)</label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={transferEmail}
                      onChange={(e) => setTransferEmail(e.target.value)}
                      className="w-full luxury-input rounded-xl px-3.5 py-2.5 text-xs text-left"
                    />
                  </div>

                  <div className="min-w-0 text-left">
                    <label className="text-[11px] font-bold text-zinc-300 block text-left mb-1">Flight # / Notes (Optional)</label>
                    <input
                      type="text"
                      placeholder="e.g. AA 1420 / Terminal 2"
                      value={transferFlight}
                      onChange={(e) => setTransferFlight(e.target.value)}
                      className="w-full luxury-input rounded-xl px-3.5 py-2.5 text-xs text-left"
                    />
                  </div>
                </div>

                {/* Action Bar */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 w-full border-t border-white/10 pt-4">
                  <div className="text-xs text-zinc-400 font-medium text-left">
                    Live flight tracking &bull; 60 min complimentary airport wait time included.
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 hover:opacity-95 text-white font-bold text-xs sm:text-sm transition-all flex items-center justify-center space-x-2 touch-manipulation shadow-lg"
                  >
                    {loading ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <>
                        <MessageCircle className="w-4 h-4 fill-white" />
                        <span>Send Transfer Request via WhatsApp</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        )}

        {/* TAB 3: CORPORATE TRANSPORTATION (THIRD) */}
        {activeTab === "corporate" && (
          <div className="space-y-6 animate-in fade-in duration-200 w-full text-left">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center w-full text-left">
              {/* Left Column */}
              <div className="lg:col-span-5 space-y-4 text-left">
                <div className="inline-flex items-center space-x-1.5 text-gold-400 text-xs font-bold px-3 py-1 rounded-full bg-gold-400/10 border border-gold-400/25">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Miami Executive Accounts</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                  Partner with Miami&apos;s Elite Chauffeur Service
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light">
                  Direct billing, priority 24/7 executive dispatch, and customized fleet management for corporate roadshows, C-Suite travel, and investor summits in Miami &amp; South Florida.
                </p>

                {/* Direct Contact Buttons - Title Case */}
                <div className="pt-2 space-y-2.5">
                  <a
                    href={`tel:${BUSINESS_INFO.phoneClean}`}
                    className="w-full flex items-center justify-center space-x-2 py-3.5 rounded-xl border border-white/20 bg-white/5 hover:border-gold-400 text-white text-xs sm:text-sm font-bold transition-all"
                  >
                    <Phone className="w-4 h-4 text-gold-400" />
                    <span>Call Dispatch: {BUSINESS_INFO.phoneDisplay}</span>
                  </a>

                  <a
                    href={`https://wa.me/${BUSINESS_INFO.phoneClean.replace("+", "")}?text=Hello,%20I%20would%20like%20to%20open%20a%20Corporate%20Account%20for%20executive%20transportation.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center space-x-2 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold transition-all shadow-lg"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Instant WhatsApp Concierge</span>
                  </a>
                </div>
              </div>

              {/* Right Column Form */}
              <div className="lg:col-span-7 bg-[#171720]/80 border border-white/10 rounded-2xl p-4 sm:p-5 space-y-3.5 min-w-0 w-full box-border text-left">
                <div className="text-xs sm:text-sm font-bold text-white text-left">
                  Send Corporate Account Request:
                </div>

                {submittedTab === "corporate" ? (
                  <div className="py-8 text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div className="text-sm font-bold text-white">Inquiry Received!</div>
                    <p className="text-xs text-zinc-400">Our executive accounts director will contact you within 15 minutes.</p>
                    <button
                      type="button"
                      onClick={() => setSubmittedTab(null)}
                      className="px-5 py-2.5 rounded-xl bg-white/10 text-xs text-white hover:bg-white/15"
                    >
                      New Corporate Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleCorporateSubmit} className="space-y-3 w-full text-left">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full text-left">
                      <div className="min-w-0 text-left">
                        <label className="text-[11px] font-bold text-zinc-300 block text-left mb-1">Company / Organization *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Goldman Sachs Miami"
                          value={companyName}
                          onChange={(e) => setCompanyName(e.target.value)}
                          className="w-full luxury-input rounded-xl px-3.5 py-2.5 text-xs text-left"
                        />
                      </div>
                      <div className="min-w-0 text-left">
                        <label className="text-[11px] font-bold text-zinc-300 block text-left mb-1">Contact Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="Full Name"
                          value={corpName}
                          onChange={(e) => setCorpName(e.target.value)}
                          className="w-full luxury-input rounded-xl px-3.5 py-2.5 text-xs text-left"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full text-left">
                      <div className="min-w-0 text-left">
                        <label className="text-[11px] font-bold text-zinc-300 block text-left mb-1">Phone Number (For WhatsApp) *</label>
                        <input
                          type="tel"
                          required
                          placeholder="+1 (551) 331-5426"
                          value={corpPhone}
                          onChange={(e) => setCorpPhone(e.target.value)}
                          className="w-full luxury-input rounded-xl px-3.5 py-2.5 text-xs text-left"
                        />
                      </div>
                      <div className="min-w-0 text-left">
                        <label className="text-[11px] font-bold text-zinc-300 block text-left mb-1">Corporate Email</label>
                        <input
                          type="email"
                          placeholder="executive@company.com"
                          value={corpEmail}
                          onChange={(e) => setCorpEmail(e.target.value)}
                          className="w-full luxury-input rounded-xl px-3.5 py-2.5 text-xs text-left"
                        />
                      </div>
                    </div>

                    <div className="w-full min-w-0 text-left">
                      <label className="text-[11px] font-bold text-zinc-300 block text-left mb-1">Travel Needs / Itinerary Notes</label>
                      <input
                        type="text"
                        placeholder="e.g. Monthly executive airport transfers, financial roadshow..."
                        value={corpDetails}
                        onChange={(e) => setCorpDetails(e.target.value)}
                        className="w-full luxury-input rounded-xl px-3.5 py-2.5 text-xs text-left"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 hover:opacity-95 text-white font-bold text-xs sm:text-sm transition-all flex items-center justify-center space-x-2 touch-manipulation shadow-lg"
                    >
                      {loading ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <>
                          <MessageCircle className="w-4 h-4 fill-white" />
                          <span>Send Corporate Request via WhatsApp</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
