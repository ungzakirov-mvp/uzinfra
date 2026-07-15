import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { LocaleProvider } from "@/components/LocaleProvider";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import { ru } from "@/locales/ru";

export const metadata: Metadata = {
  metadataBase: new URL("https://uzinfra.com"),
  title: {
    default: ru.meta.title,
    template: "%s | UZINFRA"
  },
  description: ru.meta.description,
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
    title: ru.meta.title,
    description: ru.meta.description,
    url: "https://uzinfra.com",
    siteName: "UZINFRA",
    images: [
      {
        url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=85",
        width: 1600,
        height: 900,
        alt: ru.media.heroAlt
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: ru.meta.title,
    description: ru.meta.description
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
    description: ru.meta.description,
    areaServed: "Central Asia",
    email: "partnerships@uzinfra.com",
    telephone: "+998 78 000 00 00"
  };

  return (
    <html lang="ru">
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
        <LocaleProvider>
          <SmoothScrollProvider>{children}</SmoothScrollProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
