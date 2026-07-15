import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://uzinfra.com"),
  title: {
    default: "UZINFRA | Strategic Infrastructure Across Central Asia",
    template: "%s | UZINFRA"
  },
  description:
    "UZINFRA delivers strategic infrastructure solutions across Central Asia through engineering excellence, sustainable development and long-term partnerships.",
  keywords: [
    "UZINFRA",
    "infrastructure",
    "Central Asia",
    "transportation",
    "energy",
    "industrial infrastructure",
    "digital infrastructure"
  ],
  openGraph: {
    title: "UZINFRA | Building Tomorrow's Infrastructure",
    description:
      "Premium infrastructure development, engineering and investment capability for Central Asia's long-term growth.",
    url: "https://uzinfra.com",
    siteName: "UZINFRA",
    images: [
      {
        url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=85",
        width: 1600,
        height: 900,
        alt: "Large-scale infrastructure landscape at dusk"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "UZINFRA | Building Tomorrow's Infrastructure",
    description:
      "Strategic infrastructure solutions delivered with engineering excellence and international standards."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "UZINFRA",
    url: "https://uzinfra.com",
    logo: "https://uzinfra.com/logo.svg",
    description:
      "Strategic infrastructure development company delivering transport, energy, industrial, water and digital infrastructure across Central Asia.",
    areaServed: "Central Asia",
    email: "partnerships@uzinfra.com",
    telephone: "+998 78 000 00 00"
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
