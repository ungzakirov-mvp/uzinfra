export type ImageMedia = {
  type: "image";
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  loading?: "eager" | "lazy";
};

export type VideoMedia = {
  type: "video";
  alt: string;
  poster: string;
  mp4Src?: string;
  webmSrc?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  playsInline?: boolean;
  preload?: "auto" | "metadata" | "none";
  lazy?: boolean;
  sizes?: string;
};

export type MediaHeroMedia = ImageMedia | VideoMedia;

export const heroMedia: MediaHeroMedia = {
  type: "image",
  src: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=2400&q=88",
  alt: "Cinematic aerial view of large-scale urban infrastructure",
  priority: true,
  sizes: "100vw"
};

export const sustainabilityMedia: MediaHeroMedia = {
  type: "image",
  src: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=2200&q=85",
  alt: "Renewable energy infrastructure at sunset",
  sizes: "100vw"
};

export const careersMedia: MediaHeroMedia = {
  type: "image",
  src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1800&q=84",
  alt: "Infrastructure professionals in a strategic project meeting",
  sizes: "100vw"
};
