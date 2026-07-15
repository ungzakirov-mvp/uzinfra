"use client";

import Image from "next/image";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { useTranslations } from "@/hooks/useTranslations";

export function About() {
  const { t } = useTranslations();

  return (
    <section id="about" className="section-padding bg-[#fbfcf8]">
      <Container>
        <div className="container-grid items-center">
          <Reveal className="col-span-12 lg:col-span-6">
            <div className="image-mask relative aspect-[4/5] overflow-hidden border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=84"
                alt={t.media.aboutAlt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
            </div>
          </Reveal>

          <Reveal className="col-span-12 lg:col-span-5 lg:col-start-8" delay={0.12}>
            <SectionHeader
              eyebrow={t.about.eyebrow}
              title={t.about.title}
              copy={t.about.copy}
            />
            <div className="mt-10 grid gap-5">
              {t.about.principles.map((principle) => (
                <div key={principle} className="flex items-center gap-4 border-t border-white/10 pt-5">
                  <span className="h-px w-10 bg-accent" />
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#27362e]">
                    {principle}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-10 grid gap-8 border-t border-white/10 pt-10 sm:grid-cols-2">
              <div>
                <h3 className="text-lg font-semibold text-[#17221c]">{t.about.mission.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#65736b]">
                  {t.about.mission.copy}
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#17221c]">{t.about.vision.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#65736b]">
                  {t.about.vision.copy}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
