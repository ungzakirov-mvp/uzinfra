"use client";

import Image from "next/image";
import {
  forwardRef,
  type ReactNode,
  useEffect,
  useRef,
  useState
} from "react";
import type { MediaHeroMedia } from "@/lib/media";

type MediaHeroProps = {
  media: MediaHeroMedia;
  children?: ReactNode;
  className?: string;
  mediaClassName?: string;
  imageClassName?: string;
};

export const MediaHero = forwardRef<HTMLDivElement, MediaHeroProps>(
  (
    {
      media,
      children,
      className = "absolute inset-0",
      mediaClassName = "absolute inset-0",
      imageClassName = "object-cover"
    },
    ref
  ) => {
    const localRef = useRef<HTMLDivElement | null>(null);
    const videoSourceKey =
      media.type === "video"
        ? `${media.mp4Src ?? ""}|${media.webmSrc ?? ""}|${media.poster}|${media.lazy ?? true}`
        : "image";
    const isVideoLazy = media.type === "video" ? media.lazy : undefined;
    const [shouldLoadVideo, setShouldLoadVideo] = useState(media.type === "video" && !media.lazy);
    const [videoReady, setVideoReady] = useState(false);

    useEffect(() => {
      if (media.type !== "video" || !media.lazy || shouldLoadVideo || !localRef.current) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setShouldLoadVideo(true);
            observer.disconnect();
          }
        },
        { rootMargin: "420px 0px" }
      );

      observer.observe(localRef.current);
      return () => observer.disconnect();
    }, [media.type, isVideoLazy, shouldLoadVideo, videoSourceKey]);

    useEffect(() => {
      if (media.type !== "video") {
        setShouldLoadVideo(false);
        setVideoReady(false);
        return;
      }

      setShouldLoadVideo(!media.lazy);
      setVideoReady(false);
    }, [media.type, isVideoLazy, videoSourceKey]);

    const setRefs = (node: HTMLDivElement | null) => {
      localRef.current = node;
      if (typeof ref === "function") {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    };

    return (
      <div ref={setRefs} className={className}>
        <div className={mediaClassName}>
          {media.type === "image" ? (
            <Image
              src={media.src}
              alt={media.alt ?? ""}
              fill
              priority={media.priority}
              loading={media.priority ? undefined : media.loading}
              sizes={media.sizes ?? "100vw"}
              className={imageClassName}
            />
          ) : (
            <>
              <Image
                src={media.poster}
                alt={media.alt ?? ""}
                fill
                loading="lazy"
                sizes={media.sizes ?? "100vw"}
                className={`z-0 ${imageClassName}`}
              />
              {shouldLoadVideo ? (
                <video
                  aria-label={media.alt ?? undefined}
                  autoPlay={media.autoPlay ?? true}
                  muted={media.muted ?? true}
                  loop={media.loop ?? true}
                  playsInline={media.playsInline ?? true}
                  poster={media.poster}
                  preload={media.lazy ? "none" : media.preload ?? "metadata"}
                  onCanPlay={() => setVideoReady(true)}
                  onLoadedData={() => setVideoReady(true)}
                  className={`absolute inset-0 z-10 h-full w-full transition-opacity duration-700 ${
                    videoReady ? "opacity-100" : "opacity-0"
                  } ${imageClassName}`}
                >
                  {media.webmSrc ? <source src={media.webmSrc} type="video/webm" /> : null}
                  {media.mp4Src ? <source src={media.mp4Src} type="video/mp4" /> : null}
                </video>
              ) : null}
            </>
          )}
        </div>
        {children}
      </div>
    );
  }
);

MediaHero.displayName = "MediaHero";
