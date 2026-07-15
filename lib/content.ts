import {
  Building2,
  Factory,
  Handshake,
  Leaf,
  Network,
  Plane,
  RailSymbol,
  ShieldCheck,
  Sparkles,
  Waves,
  Zap
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Sector = {
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
};

export type Project = {
  name: string;
  location: string;
  sector: string;
  summary: string;
  image: string;
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Sectors", href: "#sectors" },
  { label: "Projects", href: "#projects" },
  { label: "News", href: "#news" },
  { label: "Careers", href: "#careers" },
  { label: "Contact", href: "#contact" }
];

export const stats = [
  { value: 25, suffix: "+", label: "Years", detail: "of infrastructure delivery" },
  { value: 120, suffix: "+", label: "Projects", detail: "across strategic sectors" },
  { value: 8, suffix: "", label: "Countries", detail: "served by regional expertise" },
  { value: 500, suffix: "+", label: "Experts", detail: "in engineering and finance" }
];

export const sectors: Sector[] = [
  {
    title: "Infrastructure Development",
    description: "Complex public-private programs from feasibility and financing to delivery governance.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=82",
    icon: Building2
  },
  {
    title: "Energy",
    description: "Utility-scale generation, grid modernization and renewable assets designed for resilience.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=82",
    icon: Zap
  },
  {
    title: "Transportation",
    description: "Rail, highway, logistics and aviation systems that improve national connectivity.",
    image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1200&q=82",
    icon: RailSymbol
  },
  {
    title: "Industrial",
    description: "Industrial parks, manufacturing zones and mission-critical facilities built to global standards.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=1200&q=82",
    icon: Factory
  },
  {
    title: "Water Systems",
    description: "Water security, treatment, distribution and irrigation programs for long-term growth.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=82",
    icon: Waves
  },
  {
    title: "Digital Infrastructure",
    description: "Data centers, fiber corridors and intelligent networks for a more connected region.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=82",
    icon: Network
  }
];

export const projects: Project[] = [
  {
    name: "Tashkent Integrated Mobility Corridor",
    location: "Tashkent, Uzbekistan",
    sector: "Transportation",
    summary:
      "A multimodal urban corridor improving rail, arterial road and interchange capacity for the capital's next phase of growth.",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1500&q=84"
  },
  {
    name: "Zarafshan Renewable Energy Platform",
    location: "Navoi Region, Uzbekistan",
    sector: "Energy",
    summary:
      "Utility-scale solar and storage assets designed to strengthen national energy security and reduce lifecycle emissions.",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1500&q=84"
  },
  {
    name: "Central Asia Logistics Gateway",
    location: "Sirdarya Region, Uzbekistan",
    sector: "Industrial",
    summary:
      "A high-capacity logistics and industrial hub connecting rail, highway and customs infrastructure for regional trade.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1500&q=84"
  }
];

export const advantages = [
  {
    title: "Engineering Excellence",
    description:
      "Integrated technical teams manage complexity from early studies to commissioning with disciplined controls.",
    icon: ShieldCheck
  },
  {
    title: "Innovation",
    description:
      "Digital planning, advanced procurement and data-led delivery improve transparency, speed and asset performance.",
    icon: Sparkles
  },
  {
    title: "Long-Term Partnerships",
    description:
      "We structure projects for durable alignment between governments, investors, communities and operators.",
    icon: Handshake
  }
];

export const news = [
  {
    category: "Investment",
    date: "15 July 2026",
    headline: "UZINFRA advances regional capital platform for strategic infrastructure delivery",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1000&q=82"
  },
  {
    category: "Sustainability",
    date: "28 June 2026",
    headline: "New ESG framework aligns project governance with international reporting standards",
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1000&q=82"
  },
  {
    category: "Engineering",
    date: "04 June 2026",
    headline: "Technical office expands capabilities in transport, water and digital infrastructure",
    image: "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&w=1000&q=82"
  }
];

export const contactDetails = [
  "International Business Center, Tashkent",
  "partnerships@uzinfra.com",
  "+998 78 000 00 00"
];

export const sustainabilityPillars = [
  "Lower-carbon asset planning",
  "Responsible procurement",
  "Community resilience",
  "Lifecycle performance"
];

export { Leaf, Plane };
