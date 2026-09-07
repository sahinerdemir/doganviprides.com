"use client";

import React, { useState, useEffect, useRef } from "react";
import { Plane, MapPin, Building2, Search, X } from "lucide-react";

interface Suggestion {
  id: string;
  title: string;
  subtitle: string;
  type: "airport" | "landmark" | "city" | "fbo";
  code?: string;
}

// Comprehensive Pre-indexed VIP Hotspots & Airports for Florida / NY / Nationwide
const VIP_LOCATIONS: Suggestion[] = [
  // Florida Airports & FBOs
  { id: "mia", title: "Miami International Airport (MIA)", subtitle: "All Terminals & Curbside Pickup • Miami, FL", type: "airport", code: "MIA" },
  { id: "fll", title: "Fort Lauderdale-Hollywood International Airport (FLL)", subtitle: "Terminals 1-4 • Fort Lauderdale, FL", type: "airport", code: "FLL" },
  { id: "opf", title: "Miami-Opa Locka Executive Airport (OPF)", subtitle: "Signature Flight, Atlantic Aviation, Fontainebleau FBO • Miami, FL", type: "fbo", code: "OPF" },
  { id: "pbi", title: "Palm Beach International Airport (PBI)", subtitle: "West Palm Beach, FL", type: "airport", code: "PBI" },
  { id: "fxe", title: "Fort Lauderdale Executive Airport (FXE)", subtitle: "Private Aviation FBOs • Fort Lauderdale, FL", type: "fbo", code: "FXE" },
  { id: "apf", title: "Naples Municipal Airport (APF)", subtitle: "Naples, FL", type: "fbo", code: "APF" },
  { id: "mco", title: "Orlando International Airport (MCO)", subtitle: "Orlando, FL", type: "airport", code: "MCO" },

  // Miami Popular Neighborhoods & Luxury Landmarks
  { id: "south-beach", title: "South Beach (Ocean Drive / Collins Ave)", subtitle: "Miami Beach, FL", type: "landmark" },
  { id: "brickell", title: "Brickell Financial District", subtitle: "Downtown Miami, FL", type: "landmark" },
  { id: "downtown-miami", title: "Downtown Miami", subtitle: "Miami, FL", type: "city" },
  { id: "sunny-isles", title: "Sunny Isles Beach", subtitle: "Collins Avenue • Miami, FL", type: "landmark" },
  { id: "bal-harbour", title: "Bal Harbour & St. Regis", subtitle: "Bal Harbour, FL", type: "landmark" },
  { id: "coral-gables", title: "Coral Gables & Biltmore Hotel", subtitle: "Coral Gables, FL", type: "landmark" },
  { id: "design-district", title: "Miami Design District", subtitle: "Miami, FL", type: "landmark" },
  { id: "key-biscayne", title: "Key Biscayne / Ritz-Carlton", subtitle: "Key Biscayne, FL", type: "landmark" },
  { id: "palm-beach-island", title: "Palm Beach Island (Worth Ave / The Breakers)", subtitle: "Palm Beach, FL", type: "landmark" },
  { id: "boca-raton", title: "Boca Raton Resort & Club", subtitle: "Boca Raton, FL", type: "landmark" },
  { id: "fort-lauderdale-beach", title: "Fort Lauderdale Beach / Las Olas", subtitle: "Fort Lauderdale, FL", type: "landmark" },
  { id: "port-miami", title: "PortMiami Cruise Terminals (A-G)", subtitle: "Cruise Ship Terminal Transfers • Miami, FL", type: "landmark" },
  { id: "port-everglades", title: "Port Everglades Cruise Port", subtitle: "Fort Lauderdale, FL", type: "landmark" },
  { id: "hard-rock-stadium", title: "Hard Rock Stadium (F1 / Dolphins / Events)", subtitle: "Miami Gardens, FL", type: "landmark" },
  { id: "kaseya-center", title: "Kaseya Center (Miami Heat)", subtitle: "Biscayne Blvd, Miami, FL", type: "landmark" },

  // Tri-State (NY/NJ) Hubs
  { id: "jfk", title: "John F. Kennedy International Airport (JFK)", subtitle: "Queens, NY", type: "airport", code: "JFK" },
  { id: "ewr", title: "Newark Liberty International Airport (EWR)", subtitle: "Newark, NJ", type: "airport", code: "EWR" },
  { id: "lga", title: "LaGuardia Airport (LGA)", subtitle: "Queens, NY", type: "airport", code: "LGA" },
  { id: "teb", title: "Teterboro Airport (TEB)", subtitle: "Private Aviation FBO • Teterboro, NJ", type: "fbo", code: "TEB" },
  { id: "manhattan", title: "Manhattan, New York", subtitle: "New York, NY", type: "city" },
];

interface AutocompleteProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  required?: boolean;
  className?: string;
}

export default function LocationAutocomplete({
  value,
  onChange,
  placeholder,
  required = false,
  className = "",
}: AutocompleteProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState(value);
  const [filtered, setFiltered] = useState<Suggestion[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setQuery(value);
  }, [value]);

  useEffect(() => {
    if (!query || query.trim().length === 0) {
      setFiltered([]);
      return;
    }

    const q = query.toLowerCase().trim();
    const matches = VIP_LOCATIONS.filter((item) => {
      const titleMatch = item.title.toLowerCase().includes(q);
      const subMatch = item.subtitle.toLowerCase().includes(q);
      const codeMatch = item.code?.toLowerCase().includes(q);
      return titleMatch || subMatch || codeMatch;
    }).slice(0, 6);

    setFiltered(matches);
  }, [query]);

  // Click / Touch outside listener to close dropdown
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  const handleSelect = (item: Suggestion) => {
    const selectedText = item.code ? `${item.code} - ${item.title.split("(")[0].trim()}` : item.title;
    setQuery(selectedText);
    onChange(selectedText);
    setIsOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setQuery(val);
    onChange(val);
    setIsOpen(true);
  };

  return (
    <div ref={containerRef} className="relative w-full">
      <input
        type="text"
        required={required}
        placeholder={placeholder}
        value={query}
        onChange={handleInputChange}
        onFocus={() => setIsOpen(true)}
        className={`${className} w-full luxury-input rounded-xl px-4 py-3.5 text-base sm:text-sm pr-9`}
      />

      {query && (
        <button
          type="button"
          onClick={() => {
            setQuery("");
            onChange("");
            setFiltered([]);
          }}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white p-1.5 touch-manipulation"
        >
          <X className="w-4 h-4" />
        </button>
      )}

      {/* Dropdown Suggestions */}
      {isOpen && filtered.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1.5 bg-[#14141c] border border-white/20 rounded-2xl shadow-2xl z-[70] overflow-hidden divide-y divide-white/5 animate-in fade-in zoom-in-95 duration-150">
          <div className="px-3.5 py-2 text-[10px] font-bold text-gold-400 uppercase tracking-widest bg-black/60">
            Suggested Locations &amp; Airports
          </div>
          {filtered.map((item) => {
            const isAirport = item.type === "airport" || item.type === "fbo";
            return (
              <div
                key={item.id}
                onMouseDown={(e) => {
                  e.preventDefault(); // Prevent input blur before select
                  handleSelect(item);
                }}
                className="px-4 py-3.5 hover:bg-white/10 active:bg-white/15 cursor-pointer flex items-center justify-between transition-colors group touch-manipulation"
              >
                <div className="flex items-center space-x-3 overflow-hidden">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    isAirport ? "bg-gold-400/15 text-gold-400 border border-gold-400/30" : "bg-white/5 text-zinc-400"
                  }`}>
                    {isAirport ? <Plane className="w-4 h-4" /> : <MapPin className="w-4 h-4" />}
                  </div>
                  <div className="truncate">
                    <div className="text-sm font-semibold text-white group-hover:text-gold-300 transition-colors truncate">
                      {item.title}
                    </div>
                    <div className="text-xs text-zinc-400 truncate">
                      {item.subtitle}
                    </div>
                  </div>
                </div>

                {item.code && (
                  <span className="ml-2 px-2.5 py-1 rounded-md bg-black/60 border border-gold-400/40 text-[10px] font-black text-gold-300 flex-shrink-0">
                    {item.code}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
