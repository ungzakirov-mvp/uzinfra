"use client";

import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { MediaHero } from "@/components/MediaHero";
import { Reveal } from "@/components/Reveal";
import { useTranslations } from "@/hooks/useTranslations";
import { careersMedia } from "@/lib/media";

export function Careers() {
  const { t } = useTranslations();

  return (
    <section id="careers" className="bg-[#fbfcf8]">
      <Container className="py-12">
        <Reveal>
          <MediaHero
            media={{ ...careersMedia, alt: t.media.careersAlt }}
            className="relative min-h-[32rem] overflow-hidden border border-white/10"
          >
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,37,28,0.8)_0%,rgba(16,37,28,0.52)_45%,rgba(16,37,28,0.08)_100%)]" />
            <div className="relative z-10 flex min-h-[32rem] max-w-3xl flex-col justify-center p-7 sm:p-12 lg:p-16">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-accent">
                {t.careers.eyebrow}
              </p>
              <h2 className="mt-6 text-balance text-4xl font-semibold leading-tight text-white sm:text-6xl">
                {t.careers.title}
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/74">
                {t.careers.copy}
              </p>
              <div className="mt-9">
                <Button href="#contact">{t.buttons.joinTeam}</Button>
              </div>
            </div>
          </MediaHero>
        </Reveal>
      </Container>
    </section>
  );
}
