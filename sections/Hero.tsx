"use client";

import { motion, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { MediaHero } from "@/components/MediaHero";
import { useTranslations } from "@/hooks/useTranslations";
import { heroMedia } from "@/lib/media";

export function Hero() {
  const imageRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { t } = useTranslations();

  useEffect(() => {
    if (shouldReduceMotion || !imageRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      gsap.to(imageRef.current, {
        yPercent: 12,
        ease: "none",
        scrollTrigger: {
          trigger: "#top",
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });
    });

    return () => context.revert();
  }, [shouldReduceMotion]);

  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden">
      <MediaHero
        ref={imageRef}
        media={{ ...heroMedia, alt: t.media.heroAlt }}
        className="absolute inset-0 scale-110"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.20)_0%,rgba(0,0,0,0.45)_52%,rgba(0,0,0,0.65)_100%)]" />
      <div className="noise-overlay" />

      <Container className="relative z-10">
        <div className="relative mx-auto max-w-5xl pt-20 text-center before:absolute before:inset-[-4rem_-6rem] before:-z-10 before:bg-[radial-gradient(circle_at_center,rgba(0,0,0,.35)_0%,rgba(0,0,0,.18)_40%,transparent_75%)] before:content-['']">
          <motion.p
            className="mb-7 text-xs font-bold uppercase tracking-[0.34em] text-accent [text-shadow:0_2px_12px_rgba(0,0,0,.38)]"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {t.hero.eyebrow}
          </motion.p>
          <motion.h1
            className="text-balance text-5xl font-bold leading-[0.98] text-[#FFFFFF] [text-shadow:0_4px_24px_rgba(0,0,0,.45)] sm:text-7xl lg:text-[6.8rem]"
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            {t.hero.title}
          </motion.h1>
          <motion.p
            className="mx-auto mt-7 max-w-3xl text-pretty text-base leading-8 text-white/[0.92] [text-shadow:0_2px_12px_rgba(0,0,0,.40)] sm:text-xl"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            {t.hero.subtitle}
          </motion.p>
          <motion.div
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
          >
            <Button href="#projects">{t.buttons.exploreProjects}</Button>
            <Button href="#about" variant="secondary">
              {t.buttons.about}
            </Button>
          </motion.div>
        </div>
      </Container>

      <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 text-white/70 md:flex">
        <span className="text-[0.65rem] font-bold uppercase tracking-[0.26em]">
          {t.hero.scroll}
        </span>
        <span className="relative h-12 w-px overflow-hidden bg-white/20">
          <span className="absolute left-0 top-0 h-5 w-px animate-[pulse_1.8s_ease-in-out_infinite] bg-accent" />
        </span>
      </div>
    </section>
  );
}
