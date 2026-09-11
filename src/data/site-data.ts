export interface Vehicle {
  id: string;
  name: string;
  year: string;
  category: string;
  passengers: number;
  luggage: number;
  image: string;
  description: string;
  features: string[];
  startingRate: string;
  idealFor: string;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  image: string;
  highlights: string[];
}

export interface Airport {
  code: string;
  name: string;
  city: string;
  tag: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  rating: number;
  comment: string;
  date: string;
  location: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export const BUSINESS_INFO = {
  name: "Dogan VIP Rides",
  legalName: "Dogan VIP Rides LLC",
  tagline: "Miami's Premier Executive Chauffeur & Luxury Transportation",
  phone: "+1 (551) 331-5426",
  phoneDisplay: "(551) 331-5426",
  phoneClean: "+15513315426",
  email: "info@doganviprides.com",
  website: "https://www.doganviprides.com",
  primaryLocation: "Miami, Florida",
  address: {
    streetAddress: "Brickell & South Beach Metro",
    addressLocality: "Miami",
    addressRegion: "FL",
    postalCode: "33131",
    addressCountry: "US",
  },
  geo: {
    latitude: 25.7617,
    longitude: -80.1918,
  },
  openingHours: "Mo-Su 00:00-24:00 (24/7 Service)",
  priceRange: "$$$$",
  serviceAreas: [
    "Miami (Brickell, Downtown, South Beach, Coral Gables, Sunny Isles, Bal Harbour)",
    "Miami International Airport (MIA)",
    "Fort Lauderdale-Hollywood International Airport (FLL)",
    "Palm Beach International Airport (PBI)",
    "Miami-Opa Locka Executive Airport (OPF)",
    "Fort Lauderdale Executive Airport (FXE)",
    "Palm Beach, Boca Raton, Key Biscayne & The Florida Keys",
    "Nationwide & Interstate VIP Transfers (including NY/NJ hubs)",
  ],
};

export const FLEET_DATA: Vehicle[] = [
  {
    id: "2026-cadillac-escalade-esv",
    name: "2026 Cadillac Escalade ESV",
    year: "2026",
    category: "Flagship Luxury SUV",
    passengers: 6,
    luggage: 6,
    image: "/fleet/cadillac-escalade-2026.jpg",
    description: "The brand-new 2026 Escalade ESV with pillar-to-pillar 55-inch curved display, power executive doors, and whisper-quiet acoustic cabin.",
    features: [
      "55-Inch Curved Pillar-to-Pillar OLED Display",
      "AKG Studio Reference 36-Speaker Spatial Audio",
      "Executive Rear Captain Chairs with Heated Massage",
      "High-Speed 5G Wi-Fi & Multiple USB-C Fast Chargers",
      "Acoustic Laminated Privacy Glass",
      "Chilled Artesian Water & Executive Amenities",
    ],
    startingRate: "From $175/hr",
    idealFor: "Miami Airport Transfers, C-Suite Travel, South Beach VIP Trips",
  },
  {
    id: "2026-mercedes-s-class",
    name: "2026 Mercedes-Benz S-Class",
    year: "2026",
    category: "First-Class Executive Sedan",
    passengers: 3,
    luggage: 3,
    image: "/fleet/mercedes-s-class-2026.jpg",
    description: "The pinnacle of executive luxury. The 2026 S 580 offers reclining rear executive seating, active road noise cancellation, and massage functionality.",
    features: [
      "Burmester 4D High-End Surround Sound",
      "Executive Rear Reclining Lounge with Calf Rest",
      "Active Road Noise Cancellation & Air Suspension",
      "MBUX Rear Tablet & Fast Wireless Charging",
      "Privacy Electric Sunshades",
      "Bottled Artesian Water & Fresh Mints",
    ],
    startingRate: "From $250/hr",
    idealFor: "VIP Solo Riders, Executive Meetings, Miami Gala Arrivals",
  },
  {
    id: "2026-chevrolet-suburban",
    name: "2026 Chevrolet Suburban High Country",
    year: "2026",
    category: "Full-Size Luxury SUV",
    passengers: 7,
    luggage: 7,
    image: "/fleet/chevrolet-suburban-2026.jpg",
    description: "The redesigned 2026 Suburban High Country. Exceptional 3-row comfort and massive luggage capacity for group airport transfers and family travel.",
    features: [
      "Redesigned 2026 High Country Leather Cabin",
      "Air Ride Adaptive Suspension for Maximum Smoothness",
      "Class-Leading Cargo Space (144+ Cu-Ft)",
      "Tri-Zone Independent Climate Control",
      "Child Safety Seats Available Upon Request",
      "High-Speed Wi-Fi & Apple CarPlay Support",
    ],
    startingRate: "From $150/hr",
    idealFor: "MIA/FLL Group Pickups, Yacht Charters, Family Travel",
  },
  {
    id: "2026-mercedes-sprinter-jet",
    name: "2026 Mercedes Sprinter VIP Jet Edition",
    year: "2026",
    category: "Ultra-VIP Executive Van",
    passengers: 14,
    luggage: 14,
    image: "/fleet/mercedes-sprinter-2026.jpg",
    description: "A private jet cabin on wheels. Custom handcrafted interior with diamond-stitched captain chairs, 4K smart TV, and fiber-optic starlight ceiling.",
    features: [
      "Reclining Diamond-Stitched Captain Chairs",
      "43-inch 4K Smart TV & HDMI Media Hub",
      "Starlight Fiber-Optic Mood Ceiling",
      "Mini Bar, Beverage Cooler & Crystal Glassware",
      "High-Power 110V Outlets & High-Speed Wi-Fi",
      "Dedicated Full-Capacity Luggage Bay",
    ],
    startingRate: "From $250/hr",
    idealFor: "Miami Events, Corporate Roadshows, Palm Beach Parties",
  },
];

export const SERVICES_DATA: Service[] = [
  {
    id: "airport-transfers",
    slug: "airport-transfers",
    title: "Airport VIP Transfers (MIA, FLL, PBI, OPF)",
    shortDesc: "Guaranteed on-time airport pickups with live flight radar tracking, 60 minutes complimentary wait time, and inside meet-and-greet in Miami & South Florida.",
    fullDesc: "Eliminate the stress of airport arrivals. Our chauffeurs monitor your flight in real-time, automatically adjusting for delays or early arrivals across Miami International (MIA), Fort Lauderdale (FLL), Palm Beach (PBI), and Opa-Locka Private Jet Executive (OPF).",
    icon: "Plane",
    image: "/services/airport-transfers.jpg",
    highlights: [
      "Automated Live Flight Radar Tracking",
      "60-Minute Complimentary Wait Time on International Flights",
      "Inside Baggage Claim Meet & Greet with Name Sign",
      "Curbside Express Pickup Option",
    ],
  },
  {
    id: "hourly-chauffeur",
    slug: "hourly-chauffeur",
    title: "Hourly & As-Directed Chauffeur in Miami",
    shortDesc: "Total flexibility on your schedule. Have a dedicated executive vehicle and chauffeur at your disposal across Miami, Brickell, and South Beach.",
    fullDesc: "Navigate multiple business meetings in Brickell, attend private dinners in South Beach, or tour Bal Harbour and Palm Beach with your personal chauffeur standing by ready at any moment.",
    icon: "Clock",
    image: "/services/hourly-chauffeur.jpg",
    highlights: [
      "Unlimited Stops & Total Route Freedom",
      "Dedicated Chauffeur on Standby",
      "Transparent Flat Hourly Rates",
    ],
  },
  {
    id: "corporate-travel",
    slug: "corporate-travel",
    title: "Corporate & Executive Transportation",
    shortDesc: "Discreet, punctual black car service tailored for corporate executives, VIP guests, and financial roadshows in Florida & beyond.",
    fullDesc: "First impressions matter. Dogan VIP Rides provides a quiet mobile-office environment equipped with high-speed Wi-Fi and power charging ports.",
    icon: "Briefcase",
    image: "/services/corporate-travel.jpg",
    highlights: [
      "Monthly Corporate Invoicing & Receipts",
      "Strict Confidentiality & NDA Standards",
      "15-Minute Guaranteed Early Arrival",
    ],
  },
];

export const AIRPORTS_DATA: Airport[] = [
  {
    code: "MIA",
    name: "Miami International Airport",
    city: "Miami, FL",
    tag: "Primary Miami Hub",
    description: "Serving all commercial terminals with VIP curbside and inside baggage meet & greet.",
  },
  {
    code: "FLL",
    name: "Fort Lauderdale-Hollywood Int'l",
    city: "Fort Lauderdale, FL",
    tag: "South Florida Hub",
    description: "Direct luxury transfers to Miami, South Beach, and Broward county destinations.",
  },
  {
    code: "OPF",
    name: "Miami-Opa Locka Executive Airport",
    city: "Miami, FL",
    tag: "Private Aviation / FBOs",
    description: "Direct tarmac & private jet FBO transfers (Signature, Atlantic, Fontainebleau Aviation).",
  },
  {
    code: "PBI",
    name: "Palm Beach International Airport",
    city: "West Palm Beach, FL",
    tag: "Palm Beach Hub",
    description: "First-class executive transportation serving Palm Beach, Boca Raton, and Jupiter.",
  },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "1",
    name: "Alexander Vance",
    role: "Managing Director",
    company: "Vance Global",
    rating: 5,
    comment: "Dogan VIP Rides is the only car service I trust in Miami. Punctual, pristine 2026 Escalades, and chauffeurs who know South Florida traffic inside out.",
    date: "February 2025",
    location: "Miami (Brickell), FL",
  },
  {
    id: "2",
    name: "Dr. Elena Rostova",
    role: "Keynote Speaker",
    company: "Miami Tech Summit",
    rating: 5,
    comment: "My private flight into Opa-Locka (OPF) arrived ahead of schedule, and my chauffeur was already on the tarmac ready. Flawless five-star service.",
    date: "January 2025",
    location: "South Beach, FL",
  },
];

export const FAQ_DATA: FaqItem[] = [
  {
    question: "Where do you primarily operate?",
    answer: "Our primary flagship market is Miami and South Florida (including Brickell, South Beach, Sunny Isles, Fort Lauderdale, Palm Beach, and the Keys), serving all major commercial and private airports (MIA, FLL, PBI, OPF). We also coordinate interstate transfers and services across other major metropolitan hubs.",
  },
  {
    question: "How does airport pickup work with flight delays at MIA / FLL / OPF?",
    answer: "We track your flight in real-time. Whether your flight lands early or is delayed, your chauffeur is synchronized with your actual landing time. We include 60 minutes of complimentary waiting time for international arrivals and 30 minutes for domestic arrivals.",
  },
  {
    question: "What is your cancellation and modification policy?",
    answer: "You can modify or cancel your booking up to 4 hours before scheduled pickup with zero penalty for sedans and SUVs.",
  },
  {
    question: "How do I receive an instant quote?",
    answer: "Use our streamlined booking tabs above or message us directly on WhatsApp. We provide upfront, guaranteed flat-rate quotes within minutes.",
  },
];
