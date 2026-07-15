"use client";

import { Leaf } from "lucide-react";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { MediaHero } from "@/components/MediaHero";
import { useTranslations } from "@/hooks/useTranslations";
import { sustainabilityMedia } from "@/lib/media";

export function Sustainability() {
  const { t } = useTranslations();

  return (
    <section className="relative overflow-hidden bg-[#10251c]">
      <MediaHero
        media={{ ...sustainabilityMedia, alt: t.media.sustainabilityAlt }}
        className="absolute inset-0"
        imageClassName="object-cover opacity-[0.78]"
      >
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,37,28,0.86)_0%,rgba(16,37,28,0.62)_42%,rgba(16,37,28,0.2)_100%)]" />
      </MediaHero>

      <Container className="relative z-10">
        <div className="container-grid min-h-[46rem] items-center py-24">
          <Reveal className="col-span-12 lg:col-span-6">
            <div className="gold-rule pt-8">
              <div className="mb-7 flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center border border-accent/60 text-accent">
                  <Leaf className="h-5 w-5" aria-hidden="true" />
                </span>
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-accent">
                  {t.sustainability.eyebrow}
                </p>
              </div>
              <h2 className="text-balance text-4xl font-semibold leading-[1.04] text-white sm:text-6xl">
                {t.sustainability.title}
              </h2>
              <p className="mt-7 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
                {t.sustainability.copy}
              </p>
              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                {t.sustainability.pillars.map((pillar) => (
                  <div key={pillar} className="border border-white/18 bg-white/[0.08] p-4">
                    <p className="text-sm font-semibold text-white/86">{pillar}</p>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <Button href="#contact" variant="secondary">
                  {t.buttons.esgApproach}
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
