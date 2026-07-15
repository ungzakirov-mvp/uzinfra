"use client";

import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { useTranslations } from "@/hooks/useTranslations";
import { advantages } from "@/lib/content";

export function WhyUzinfra() {
  const { t } = useTranslations();

  return (
    <section className="section-padding border-y border-white/10 bg-background-secondary">
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow={t.why.eyebrow}
            title={t.why.title}
            copy={t.why.copy}
            align="center"
          />
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden border border-white/10 bg-white/10 lg:grid-cols-3">
          {advantages.map((item, index) => {
            const Icon = item.icon;
            const content = t.why.items[item.key];
            return (
              <Reveal key={item.key} delay={index * 0.08}>
                <article className="min-h-72 bg-background p-8 transition duration-300 hover:bg-[#101720] sm:p-10">
                  <Icon className="h-9 w-9 text-accent" aria-hidden="true" />
                  <h3 className="mt-12 text-2xl font-semibold text-white">{content.title}</h3>
                  <p className="mt-5 max-w-sm text-sm leading-7 text-muted">
                    {content.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
