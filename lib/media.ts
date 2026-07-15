export type ImageMedia = {
  type: "image";
  src: string;
  alt?: string;
  priority?: boolean;
  sizes?: string;
  loading?: "eager" | "lazy";
};

export type VideoMedia = {
  type: "video";
  alt?: string;
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
  src: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=2400&q=88",
  priority: true,
  sizes: "100vw"
};

export const sustainabilityMedia: MediaHeroMedia = {
  type: "image",
  src: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=2200&q=85",
  sizes: "100vw"
};

export const careersMedia: MediaHeroMedia = {
  type: "image",
  src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1800&q=84",
  sizes: "100vw"
};
