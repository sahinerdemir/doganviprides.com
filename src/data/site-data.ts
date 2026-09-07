export interface Vehicle {
  id: string;
  name: string;
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
    id: "cadillac-escalade-esv",
    name: "Cadillac Escalade ESV",
    category: "Executive Luxury SUV",
    passengers: 6,
    luggage: 6,
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1200&auto=format&fit=crop",
    description: "The gold standard of luxury SUVs. Offering expansive legroom, plush leather captain chairs, and unmatched prestige for airport transfers, corporate roadshows, and executive travel.",
    features: [
      "Ultra-Quiet Acoustic Cabin",
      "Complimentary High-Speed Wi-Fi",
      "Chilled Bottled Water & Mints",
      "Executive Rear Climate Controls",
      "Device Fast-Charging Ports",
      "Tinted Privacy Glass",
    ],
    startingRate: "From $110/hr",
    idealFor: "Airport Transfers, C-Suite Travel, Family VIP Trips",
  },
  {
    id: "mercedes-s-class",
    name: "Mercedes-Benz S-Class",
    category: "First-Class Luxury Sedan",
    passengers: 3,
    luggage: 3,
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=1200&auto=format&fit=crop",
    description: "The pinnacle of German engineering and refined elegance. Perfect for solo executives, couples, diplomatic meetings, and high-profile arrivals.",
    features: [
      "Heated & Ventilated Massage Seats",
      "Burmester 3D Surround Sound",
      "Privacy Rear Sunshades",
      "Bottled Artesian Water",
      "Whisper-Quiet Smooth Suspension",
      "Executive Work Tray",
    ],
    startingRate: "From $125/hr",
    idealFor: "VIP Solo Riders, Executive Meetings, Red Carpet Events",
  },
  {
    id: "chevrolet-suburban-premier",
    name: "Chevrolet Suburban Premier",
    category: "Premium Full-Size SUV",
    passengers: 7,
    luggage: 6,
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1200&auto=format&fit=crop",
    description: "Spacious, dependable, and sleek. Ideal for group airport transfers, family vacations, sports event transport, and multi-passenger road trips.",
    features: [
      "Spacious 3-Row Leather Seating",
      "Massive Luggage Capacity",
      "Rear Passenger Climate Zones",
      "Apple CarPlay / Fast USB-C Charging",
      "Privacy Windows",
      "Child Car Seats Available Upon Request",
    ],
    startingRate: "From $95/hr",
    idealFor: "Group Airport Pickups, Sports Events, Family Travel",
  },
  {
    id: "mercedes-sprinter-jet-van",
    name: "Mercedes-Benz Sprinter Executive",
    category: "Ultra-VIP Group Van",
    passengers: 14,
    luggage: 14,
    image: "https://images.unsplash.com/photo-1559297434-fae8a1916a79?q=80&w=1200&auto=format&fit=crop",
    description: "A private jet on wheels. Custom handcrafted interior with reclining leather captain chairs, Smart TV, ambient ceiling lighting, and generous standing headroom.",
    features: [
      "Reclining Diamond-Stitched Captain Chairs",
      "Large 4K Smart TV & HDMI Media Hub",
      "High-Power Wi-Fi & 110V Power Outlets",
      "LED Ambient Starlight Mood Ceiling",
      "Mini Bar & Beverage Cooler",
      "Dedicated Luggage Compartment",
    ],
    startingRate: "From $165/hr",
    idealFor: "Corporate Retreats, Wedding Parties, Hamptons Trips",
  },
];

export const SERVICES_DATA: Service[] = [
  {
    id: "airport-transfers",
    slug: "airport-transfers",
    title: "Airport VIP Transfers (JFK, EWR, LGA, TEB)",
    shortDesc: "Guaranteed on-time airport pickups with live flight tracking, complimentary wait time, and inside meet-and-greet chauffeur service.",
    fullDesc: "Eliminate the stress of airport arrivals and departures. Our chauffeurs continuously monitor your flight in real-time, adjusting for delays or early arrivals. Whether arriving via commercial airline at JFK, Newark (EWR), LaGuardia (LGA) or private jet at Teterboro (TEB), your personal driver awaits with luggage assistance.",
    icon: "Plane",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1000&auto=format&fit=crop",
    highlights: [
      "Automated Live Flight Radar Tracking",
      "60-Minute Complimentary Wait Time on International Flights",
      "30-Minute Free Wait on Domestic Flights",
      "Inside Baggage Claim Meet & Greet with Name Board",
      "Curbside Express Express Pickup Option",
    ],
  },
  {
    id: "hourly-chauffeur",
    slug: "hourly-chauffeur",
    title: "Hourly & As-Directed Chauffeur",
    shortDesc: "Total flexibility and luxury on your own terms. Have a dedicated chauffeur and premium vehicle at your disposal for as long as you need.",
    fullDesc: "Need to visit multiple client offices in Manhattan, attend a series of meetings across New Jersey, or embark on a luxury shopping spree? Our hourly 'As-Directed' service allows you to make unlimited stops with your personal chauffeur standing by ready to depart the moment you step outside.",
    icon: "Clock",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=1000&auto=format&fit=crop",
    highlights: [
      "Unlimited Stops & Flexible Route Planning",
      "Vehicle & Chauffeur Dedicated Exclusively to You",
      "Transparent Hourly Rates with No Hidden Surcharges",
      "Ideal for Roadshows, VIP Shopping & Real Estate Tours",
    ],
  },
  {
    id: "corporate-travel",
    slug: "corporate-travel",
    title: "Corporate & Executive Transportation",
    shortDesc: "Discreet, reliable, and professional black car service tailored for executives, VIP guests, board members, and business roadshows.",
    fullDesc: "First impressions matter in business. Dogan VIP Rides delivers a silent, comfortable, mobile-office environment equipped with fast Wi-Fi and power outlets, allowing you to prepare for your keynote, conduct private calls, or relax in absolute serenity between corporate engagements.",
    icon: "Briefcase",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop",
    highlights: [
      "Monthly Corporate Invoicing & Expense Receipts",
      "Discreet & Vetted Chauffeurs Under Strict NDA Standards",
      "Guaranteed Punctuality with 15-Minute Early Arrival",
      "Premium Sedans & SUVs for Individual or Team Travel",
    ],
  },
  {
    id: "city-to-city",
    slug: "city-to-city",
    title: "City-to-City Long Distance Rides",
    shortDesc: "Comfortable private point-to-point transfers across the Tri-State area, Philadelphia, Boston, DC, and the Hamptons without crowded trains or airports.",
    fullDesc: "Skip the crowded train stations, security lines, and rigid flight schedules. Enjoy door-to-door, first-class private transportation between NYC/NJ and anywhere in the Northeast corridor in the supreme comfort of a luxury SUV or executive sedan.",
    icon: "MapPin",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1000&auto=format&fit=crop",
    highlights: [
      "Door-to-Door Private Express Service",
      "Direct Transfers to Hamptons, Atlantic City, Boston & DC",
      "No Luggage Restrictions & Pet-Friendly Options",
      "Rest Stops at Your Discretion",
    ],
  },
  {
    id: "weddings-events",
    slug: "weddings-events",
    title: "Weddings, Galas & Special Events",
    shortDesc: "Make an unforgettable grand entrance with our immaculate luxury fleet for weddings, red carpets, concerts, and gala evenings.",
    fullDesc: "Your special moments deserve perfection. From transporting the bride and groom in a pristine Mercedes S-Class to coordinating Sprinter VIP vans for your wedding party and out-of-town guests, we manage every transportation detail with elegance and precision.",
    icon: "Sparkles",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop",
    highlights: [
      "Red-Carpet-Ready Showroom Vehicles",
      "Custom Itinerary Coordination with Wedding Planners",
      "Group Shuttling for Family & Guests in Luxury Sprinters",
      "Uniformed, Impeccably Dressed Chauffeurs",
    ],
  },
  {
    id: "night-out-vip",
    slug: "night-out-vip",
    title: "VIP Night Out & Sporting Events",
    shortDesc: "Enjoy NYC nightlife, Broadway shows, Madison Square Garden, or MetLife Stadium games without parking or designated driver worries.",
    fullDesc: "Celebrate birthdays, anniversaries, dinner reservations in Manhattan, or concert nights with complete peace of mind. Your chauffeur drops you right at the front entrance and waits for you until the evening concludes.",
    icon: "ShieldCheck",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1000&auto=format&fit=crop",
    highlights: [
      "VIP Curbside Drop-off & Pickup at Venues",
      "No Parking Hassles or Surge Pricing",
      "Safe, Reliable & Luxurious Ride Home",
      "Customizable Music & Ambient Lighting Controls",
    ],
  },
];

export const AIRPORTS_DATA: Airport[] = [
  {
    code: "EWR",
    name: "Newark Liberty International Airport",
    city: "Newark, NJ",
    tag: "Primary NJ Hub",
    description: "Serving all terminals (A, B, C) with rapid curbside or baggage claim meet & greet.",
  },
  {
    code: "JFK",
    name: "John F. Kennedy International Airport",
    city: "Queens, NY",
    tag: "Major Global Hub",
    description: "Seamless international and domestic transfers with 60-min complimentary flight delay tracking.",
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
    tag: "Private Aviation / FBOs",
    description: "Direct tarmac and FBO hangar transfers (Signature, Jet Aviation, Meridian, Atlantic).",
  },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "1",
    name: "Alexander Vance",
    role: "Managing Director",
    company: "Vance Global Partners",
    rating: 5,
    comment: "Dogan VIP Rides is the only car service I trust for our executive roadshows in New York and New Jersey. Punctual, pristine Escalades, and chauffeurs who truly respect privacy and comfort.",
    date: "February 2025",
    location: "Manhattan, NY",
  },
  {
    id: "2",
    name: "Dr. Elena Rostova",
    role: "International Keynote Speaker",
    company: "Biotech Summit",
    rating: 5,
    comment: "My flight into JFK was delayed by over two hours, but my chauffeur was right there waiting at the terminal when I walked out. The inside meet and greet made my arrival completely effortless!",
    date: "January 2025",
    location: "Bergen County, NJ",
  },
  {
    id: "3",
    name: "Marcus Sterling",
    role: "Private Investor",
    company: "Sterling Holdings",
    rating: 5,
    comment: "Booked their luxury Mercedes Sprinter for a weekend trip to the Hamptons with friends. The vehicle was like a private jet on wheels. Flawless service from start to finish.",
    date: "August 2024",
    location: "Hoboken, NJ",
  },
  {
    id: "4",
    name: "Sophia & David Martinez",
    role: "Wedding Client",
    company: "Bride & Groom",
    rating: 5,
    comment: "They coordinated transportation for our entire wedding party across three venues in NJ. Every single car was spotless and exactly on time. Thank you Dogan VIP!",
    date: "November 2024",
    location: "Jersey City, NJ",
  },
];

export const FAQ_DATA: FaqItem[] = [
  {
    question: "How does airport pickup work with flight delays?",
    answer: "We automatically track your commercial or private flight in real-time using live radar feeds. Whether your flight lands 45 minutes early or is delayed by 3 hours, your chauffeur will be synchronized with your actual landing time at no extra charge. We also include 60 minutes of complimentary waiting time for international arrivals and 30 minutes for domestic arrivals after wheels-down.",
    category: "Airport Transfers",
  },
  {
    question: "What areas and airports do you service?",
    answer: "We provide comprehensive VIP chauffeur services across the entire New Jersey and New York metropolitan area, including Manhattan, Brooklyn, Queens, Bergen County, Hudson County, Essex County, Morris County, Long Island, and Connecticut. We serve all major airports: EWR, JFK, LGA, TEB (Teterboro), HPN (Westchester), and PHL (Philadelphia).",
    category: "Coverage",
  },
  {
    question: "What is your cancellation and modification policy?",
    answer: "We offer flexible cancellation policies designed for busy schedules. For standard sedans and SUVs, you can cancel or modify your reservation up to 4 hours prior to scheduled pickup with zero penalty. For executive Sprinter vans and special event bookings, 24-hour notice is requested.",
    category: "Booking",
  },
  {
    question: "Can I request child car seats or special amenities?",
    answer: "Yes, absolutely! We provide sanitised rear-facing infant seats, forward-facing toddler seats, and booster seats upon request during booking. Our vehicles also come stocked with complimentary chilled bottled water, mints, device chargers, and Wi-Fi.",
    category: "Vehicles & Amenities",
  },
  {
    question: "How do I receive an instant quote or book a ride?",
    answer: "You can use our online Instant Quote & Booking form on this website, send us a quick WhatsApp message, or call our 24/7 VIP concierge line at (551) 331-5426. We confirm all bookings promptly with clear flat-rate pricing.",
    category: "Booking",
  },
  {
    question: "Are your chauffeurs vetted and licensed?",
    answer: "Every Dogan VIP Rides chauffeur undergoes comprehensive background checks, regular driving record audits, and professional customer service training. All vehicles are fully insured, TLC/DOT compliant, and commercially permitted.",
    category: "Safety & Security",
  },
];
