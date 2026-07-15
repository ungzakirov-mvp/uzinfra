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

export const navItems = [
  { key: "about", href: "#about" },
  { key: "sectors", href: "#sectors" },
  { key: "projects", href: "#projects" },
  { key: "news", href: "#news" },
  { key: "careers", href: "#careers" },
  { key: "contact", href: "#contact" }
] as const;

export const stats = [
  { key: "years", value: 25, suffix: "+" },
  { key: "projects", value: 120, suffix: "+" },
  { key: "countries", value: 8, suffix: "" },
  { key: "experts", value: 500, suffix: "+" }
] as const;

export type SectorAsset = {
  key:
    | "infrastructureDevelopment"
    | "energy"
    | "transportation"
    | "industrial"
    | "waterSystems"
    | "digitalInfrastructure";
  image: string;
  icon: LucideIcon;
};

export const sectors: SectorAsset[] = [
  {
    key: "infrastructureDevelopment",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=82",
    icon: Building2
  },
  {
    key: "energy",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=82",
    icon: Zap
  },
  {
    key: "transportation",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=82",
    icon: RailSymbol
  },
  {
    key: "industrial",
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1200&q=82",
    icon: Factory
  },
  {
    key: "waterSystems",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=82",
    icon: Waves
  },
  {
    key: "digitalInfrastructure",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=82",
    icon: Network
  }
];

export const projects = [
  {
    key: "tashkentMobility",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1500&q=84"
  },
  {
    key: "zarafshanEnergy",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1500&q=84"
  },
  {
    key: "logisticsGateway",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1500&q=84"
  }
] as const;

export const advantages = [
  {
    key: "engineering",
    icon: ShieldCheck
  },
  {
    key: "innovation",
    icon: Sparkles
  },
  {
    key: "partnerships",
    icon: Handshake
  }
] as const;

export const news = [
  {
    key: "capitalPlatform",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=82"
  },
  {
    key: "esgFramework",
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1000&q=82"
  },
  {
    key: "technicalOffice",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1000&q=82"
  }
] as const;

export { Leaf, Plane };
