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
  tagline: "First-Class Chauffeur & Executive Transportation in NY & NJ",
  phone: "+1 (551) 331-5426",
  phoneDisplay: "(551) 331-5426",
  phoneClean: "+15513315426",
  email: "info@doganviprides.com",
  website: "https://www.doganviprides.com",
  address: {
    streetAddress: "Bergen & Hudson County Metro Area",
    addressLocality: "Jersey City / North Bergen",
    addressRegion: "NJ",
    postalCode: "07047",
    addressCountry: "US",
  },
  geo: {
    latitude: 40.7937,
    longitude: -74.0243,
  },
  openingHours: "Mo-Su 00:00-24:00 (24/7 Service)",
  priceRange: "$$$$",
  serviceAreas: [
    "New Jersey (Bergen, Hudson, Essex, Morris, Union Counties)",
    "New York City (Manhattan, Brooklyn, Queens, Bronx, Staten Island)",
    "Newark Liberty International Airport (EWR)",
    "John F. Kennedy International Airport (JFK)",
    "LaGuardia Airport (LGA)",
    "Teterboro Private Airport (TEB)",
    "Westchester County Airport (HPN)",
    "Long Island & The Hamptons",
    "Greenwich & Stamford CT",
    "Philadelphia International Airport (PHL)",
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
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1200&auto=format&fit=crop",
    description: "The brand-new 2026 Escalade ESV with pillar-to-pillar 55-inch curved display, power executive doors, and whisper-quiet acoustic cabin.",
    features: [
      "55-Inch Curved Pillar-to-Pillar OLED Display",
      "AKG Studio Reference 36-Speaker Spatial Audio",
      "Executive Rear Captain Chairs with Heated Massage",
      "High-Speed 5G Wi-Fi & Multiple USB-C Fast Chargers",
      "Acoustic Laminated Privacy Glass",
      "Chilled Artesian Water & Executive Amenities",
    ],
    startingRate: "From $110/hr",
    idealFor: "Airport Transfers, C-Suite Travel, Family VIP Trips",
  },
  {
    id: "2026-mercedes-s-class",
    name: "2026 Mercedes-Benz S-Class",
    year: "2026",
    category: "First-Class Executive Sedan",
    passengers: 3,
    luggage: 3,
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=1200&auto=format&fit=crop",
    description: "The pinnacle of executive luxury. The 2026 S 580 offers reclining rear executive seating, active road noise cancellation, and massage functionality.",
    features: [
      "Burmester 4D High-End Surround Sound",
      "Executive Rear Reclining Lounge with Calf Rest",
      "Active Road Noise Cancellation & Air Suspension",
      "MBUX Rear Tablet & Fast Wireless Charging",
      "Privacy Electric Sunshades",
      "Bottled Artesian Water & Fresh Mints",
    ],
    startingRate: "From $125/hr",
    idealFor: "VIP Solo Riders, Executive Meetings, Red Carpet Arrivals",
  },
  {
    id: "2026-chevrolet-suburban",
    name: "2026 Chevrolet Suburban High Country",
    year: "2026",
    category: "Full-Size Luxury SUV",
    passengers: 7,
    luggage: 7,
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1200&auto=format&fit=crop",
    description: "The redesigned 2026 Suburban High Country. Exceptional 3-row comfort and massive luggage capacity for group airport transfers and family travel.",
    features: [
      "Redesigned 2026 High Country Leather Cabin",
      "Air Ride Adaptive Suspension for Maximum Smoothness",
      "Class-Leading Cargo Space (144+ Cu-Ft)",
      "Tri-Zone Independent Climate Control",
      "Child Safety Seats Available Upon Request",
      "High-Speed Wi-Fi & Apple CarPlay Support",
    ],
    startingRate: "From $95/hr",
    idealFor: "Group Airport Pickups, Sports Events, Family Travel",
  },
  {
    id: "2026-mercedes-sprinter-jet",
    name: "2026 Mercedes Sprinter VIP Jet Edition",
    year: "2026",
    category: "Ultra-VIP Executive Van",
    passengers: 14,
    luggage: 14,
    image: "https://images.unsplash.com/photo-1559297434-fae8a1916a79?q=80&w=1200&auto=format&fit=crop",
    description: "A private jet cabin on wheels. Custom handcrafted interior with diamond-stitched captain chairs, 4K smart TV, and fiber-optic starlight ceiling.",
    features: [
      "Reclining Diamond-Stitched Captain Chairs",
      "43-inch 4K Smart TV & HDMI Media Hub",
      "Starlight Fiber-Optic Mood Ceiling",
      "Mini Bar, Beverage Cooler & Crystal Glassware",
      "High-Power 110V Outlets & High-Speed Wi-Fi",
      "Dedicated Full-Capacity Luggage Bay",
    ],
    startingRate: "From $165/hr",
    idealFor: "Corporate Roadshows, Wedding Parties, Hamptons Trips",
  },
];

export const SERVICES_DATA: Service[] = [
  {
    id: "airport-transfers",
    slug: "airport-transfers",
    title: "Airport VIP Transfers (JFK, EWR, LGA, TEB)",
    shortDesc: "Guaranteed on-time airport pickups with live flight radar tracking, 60 minutes complimentary wait time, and inside meet-and-greet.",
    fullDesc: "Eliminate the stress of airport travel. Our chauffeurs monitor your flight in real-time, automatically adjusting for delays or early arrivals across JFK, Newark (EWR), LaGuardia (LGA) and Teterboro (TEB).",
    icon: "Plane",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1000&auto=format&fit=crop",
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
    title: "Hourly & As-Directed Chauffeur",
    shortDesc: "Total flexibility on your schedule. Have a dedicated executive vehicle and chauffeur at your disposal with unlimited stops.",
    fullDesc: "Navigate multiple client meetings in Manhattan, attend private appointments across New Jersey, or embark on a luxury shopping tour with your personal chauffeur standing by.",
    icon: "Clock",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=1000&auto=format&fit=crop",
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
    shortDesc: "Discreet, punctual black car service tailored for C-Suite executives, corporate roadshows, and VIP guests.",
    fullDesc: "First impressions matter. Dogan VIP Rides provides a quiet mobile-office environment equipped with high-speed Wi-Fi and power charging ports.",
    icon: "Briefcase",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop",
    highlights: [
      "Monthly Corporate Invoicing & Receipts",
      "Strict Confidentiality & NDA Standards",
      "15-Minute Guaranteed Early Arrival",
    ],
  },
];

export const AIRPORTS_DATA: Airport[] = [
  {
    code: "EWR",
    name: "Newark Liberty International",
    city: "Newark, NJ",
    tag: "Primary NJ Hub",
    description: "Serving all terminals (A, B, C) with rapid curbside or baggage claim meet & greet.",
  },
  {
    code: "JFK",
    name: "John F. Kennedy International",
    city: "Queens, NY",
    tag: "Major Global Hub",
    description: "Seamless international and domestic transfers with 60-min complimentary flight delay buffer.",
  },
  {
    code: "LGA",
    name: "LaGuardia Airport",
    city: "Queens, NY",
    tag: "NYC Regional Hub",
    description: "Fast terminal-to-city transfers directly into Manhattan, Brooklyn, or New Jersey.",
  },
  {
    code: "TEB",
    name: "Teterboro Airport (Private FBOs)",
    city: "Teterboro, NJ",
    tag: "Private Aviation",
    description: "Direct tarmac and FBO hangar transfers (Signature, Jet Aviation, Meridian, Atlantic).",
  },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "1",
    name: "Alexander Vance",
    role: "Managing Director",
    company: "Vance Global",
    rating: 5,
    comment: "Dogan VIP Rides is the only car service I trust for our executive roadshows in New York and New Jersey. Punctual, pristine 2026 Escalades, and chauffeurs who truly respect privacy.",
    date: "February 2025",
    location: "Manhattan, NY",
  },
  {
    id: "2",
    name: "Dr. Elena Rostova",
    role: "Keynote Speaker",
    company: "Biotech Summit",
    rating: 5,
    comment: "My flight into JFK was delayed by two hours, but my chauffeur was right there waiting at the terminal when I walked out. The meet and greet made my arrival effortless.",
    date: "January 2025",
    location: "Bergen County, NJ",
  },
];

export const FAQ_DATA: FaqItem[] = [
  {
    question: "How does airport pickup work with flight delays?",
    answer: "We track your flight in real-time. Whether your flight lands early or is delayed, your chauffeur is synchronized with your actual landing time. We include 60 minutes of complimentary waiting time for international arrivals and 30 minutes for domestic arrivals.",
  },
  {
    question: "What areas and airports do you service?",
    answer: "We serve the entire New Jersey and New York metropolitan area, including Manhattan, Brooklyn, Queens, Bergen County, Hudson County, Long Island, and Connecticut, with direct service to EWR, JFK, LGA, and Teterboro (TEB).",
  },
  {
    question: "What is your cancellation and modification policy?",
    answer: "You can modify or cancel your booking up to 4 hours before scheduled pickup with zero penalty for sedans and SUVs.",
  },
  {
    question: "How do I receive an instant quote?",
    answer: "Use our streamlined booking bar above or message us directly on WhatsApp. We provide upfront, guaranteed flat-rate quotes within minutes.",
  },
];
