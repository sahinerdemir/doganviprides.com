import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import SchemaMarkup from "@/components/SchemaMarkup";
import SmoothScroll from "@/components/SmoothScroll";
import { BUSINESS_INFO } from "@/data/site-data";

export const viewport: Viewport = {
  themeColor: "#060608",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS_INFO.website),
  title: {
    default: "Dogan VIP Rides | Miami Luxury Chauffeur & Executive Car Service",
    template: "%s | Dogan VIP Rides Miami",
  },
  description:
    "Miami's premier luxury VIP chauffeur service, private airport transfers (MIA, FLL, PBI, OPF), hourly executive car service, and 2026 VIP Sprinter vans in South Florida & beyond. 24/7 live dispatch.",
  keywords: [
    "Miami VIP chauffeur",
    "Executive car service Miami",
    "Miami airport private transfer MIA",
    "Fort Lauderdale FLL luxury ride",
    "Opa Locka OPF private jet car service",
    "Palm Beach chauffeur service",
    "South Beach luxury black car",
    "2026 Cadillac Escalade chauffeur Miami",
    "2026 Mercedes S-Class ride Miami",
    "Hourly chauffeur Brickell",
    "Dogan VIP Rides Miami",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Dogan VIP Rides | Miami's Premier Executive Chauffeur Service",
    description:
      "Experience first-class private transportation with licensed chauffeurs across Miami, South Beach, Brickell, MIA, FLL, PBI, and Opa-Locka. Guaranteed on-time airport transfers and luxury hourly hire.",
    url: BUSINESS_INFO.website,
    siteName: BUSINESS_INFO.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/fleet/cadillac-escalade-2026.jpg",
        width: 1200,
        height: 630,
        alt: "2026 Cadillac Escalade ESV - Dogan VIP Rides Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dogan VIP Rides | Miami Executive Chauffeur Service",
    description:
      "Miami's premier VIP airport transfers and hourly chauffeur services in South Florida. Instant quotes & 24/7 dispatch.",
    images: ["/fleet/cadillac-escalade-2026.jpg"],
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
        <SchemaMarkup />
      </head>
      <body className="bg-[#060608] text-zinc-100 antialiased selection:bg-gold-400 selection:text-black min-h-screen flex flex-col justify-between font-sans relative">
        <SmoothScroll>
          <div className="relative z-10 flex flex-col min-h-screen justify-between">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
            <FloatingActions />
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
