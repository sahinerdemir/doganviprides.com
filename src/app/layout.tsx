import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import SchemaMarkup from "@/components/SchemaMarkup";
import SmoothScroll from "@/components/SmoothScroll";
import { BUSINESS_INFO } from "@/data/site-data";

export const viewport: Viewport = {
  themeColor: "#050507",
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
    "Premier luxury VIP chauffeur, private airport transfers (JFK, EWR, LGA, Teterboro), hourly executive car service, and 2026 VIP Sprinter vans in New York & New Jersey. 24/7 live dispatch.",
  keywords: [
    "VIP chauffeur NJ",
    "Executive car service NYC",
    "JFK airport private transfer",
    "Newark EWR luxury ride",
    "LaGuardia LGA black car service",
    "Teterboro private jet car service",
    "2026 Cadillac Escalade chauffeur",
    "2026 Mercedes S-Class ride NYC",
    "Hourly chauffeur Manhattan",
    "Dogan VIP Rides",
  ],
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
        alt: "2026 Cadillac Escalade ESV - Dogan VIP Rides",
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
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <SchemaMarkup />
      </head>
      <body className="bg-[#050507] text-zinc-100 antialiased selection:bg-gold-400 selection:text-black min-h-screen flex flex-col justify-between font-sans">
        <SmoothScroll>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <FloatingActions />
        </SmoothScroll>
      </body>
    </html>
  );
}
