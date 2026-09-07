import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import SchemaMarkup from "@/components/SchemaMarkup";
import { BUSINESS_INFO } from "@/data/site-data";

export const viewport: Viewport = {
  themeColor: "#08080A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS_INFO.website),
  title: {
    default: "Dogan VIP Rides | Luxury Chauffeur & Executive Car Service NY & NJ",
    template: "%s | Dogan VIP Rides",
  },
  description:
    "Premier luxury VIP chauffeur, private airport transfers (JFK, EWR, LGA, Teterboro), hourly executive car service, and VIP Sprinter vans in New York & New Jersey. 24/7 live dispatch.",
  keywords: [
    "VIP chauffeur NJ",
    "Executive car service NYC",
    "JFK airport private transfer",
    "Newark EWR luxury ride",
    "LaGuardia LGA black car service",
    "Teterboro private jet car service",
    "Luxury SUV chauffeur New Jersey",
    "Mercedes Sprinter VIP van NYC",
    "Hourly chauffeur Manhattan",
    "Tri-State executive transportation",
    "Dogan VIP Rides",
  ],
  authors: [{ name: "Dogan VIP Rides" }],
  creator: "Dogan VIP Rides",
  publisher: "Dogan VIP Rides",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Dogan VIP Rides | First-Class Executive Chauffeur Service NY & NJ",
    description:
      "Experience first-class private transportation with licensed chauffeurs across NYC, NJ, JFK, EWR, LGA, and Teterboro. Guaranteed on-time airport transfers and luxury hourly hire.",
    url: BUSINESS_INFO.website,
    siteName: BUSINESS_INFO.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Dogan VIP Rides - Luxury Cadillac Escalade Chauffeur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dogan VIP Rides | Executive Chauffeur Service NY & NJ",
    description:
      "Premier VIP airport transfers and hourly chauffeur services in New York & New Jersey. Instant quotes & 24/7 dispatch.",
    images: ["https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1200&auto=format&fit=crop"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,600;0,700;0,800;1,600&display=swap"
          rel="stylesheet"
        />
        <SchemaMarkup />
      </head>
      <body className="bg-background text-zinc-100 antialiased selection:bg-gold-400 selection:text-black min-h-screen flex flex-col justify-between font-sans">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
