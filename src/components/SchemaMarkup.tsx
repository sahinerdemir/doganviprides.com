import React from "react";
import { BUSINESS_INFO, FAQ_DATA, FLEET_DATA, SERVICES_DATA } from "@/data/site-data";

export default function SchemaMarkup() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    "@id": `${BUSINESS_INFO.website}/#localbusiness`,
    "name": BUSINESS_INFO.name,
    "legalName": BUSINESS_INFO.legalName,
    "url": BUSINESS_INFO.website,
    "logo": `${BUSINESS_INFO.website}/icon.png`,
    "image": "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1200&auto=format&fit=crop",
    "description": "Premier luxury VIP chauffeur and executive black car transportation service in New Jersey, New York City, JFK, EWR, LGA, and Teterboro airports.",
    "telephone": BUSINESS_INFO.phoneClean,
    "email": BUSINESS_INFO.email,
    "priceRange": BUSINESS_INFO.priceRange,
    "currenciesAccepted": "USD",
    "paymentAccepted": "Cash, Credit Card, Corporate Invoicing, Amex, Visa, Mastercard",
    "openingHours": "Mo-Su 00:00-24:00",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": BUSINESS_INFO.address.streetAddress,
      "addressLocality": BUSINESS_INFO.address.addressLocality,
      "addressRegion": BUSINESS_INFO.address.addressRegion,
      "postalCode": BUSINESS_INFO.address.postalCode,
      "addressCountry": BUSINESS_INFO.address.addressCountry,
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": BUSINESS_INFO.geo.latitude,
      "longitude": BUSINESS_INFO.geo.longitude,
    },
    "areaServed": BUSINESS_INFO.serviceAreas.map((area) => ({
      "@type": "Place",
      "name": area,
    })),
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "350",
      "bestRating": "5",
      "worstRating": "1",
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "VIP Chauffeur & Transportation Services",
      "itemListElement": SERVICES_DATA.map((srv, idx) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": srv.title,
          "description": srv.shortDesc,
        },
      })),
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQ_DATA.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
