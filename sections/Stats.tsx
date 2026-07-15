"use client";

import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { StatCounter } from "@/components/StatCounter";
import { useTranslations } from "@/hooks/useTranslations";
import { stats } from "@/lib/content";

export function Stats() {
  const { t } = useTranslations();

  return (
    <section className="border-y border-[#dfe8de] bg-[#f7faf5]" aria-label={t.stats.aria}>
      <Container>
        <div className="grid divide-y divide-[#dfe8de] md:grid-cols-4 md:divide-x md:divide-y-0">
          {stats.map((stat, index) => {
            const item = t.stats.items[stat.key];

            return (
            <Reveal key={stat.key} delay={index * 0.08}>
              <div className="py-10 md:px-8 md:py-14">
                <p className="text-5xl font-semibold text-[#17221c] sm:text-6xl">
                  <StatCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <h2 className="mt-4 text-sm font-bold uppercase tracking-[0.22em] text-accent">
                  {item.label}
                </h2>
                <p className="mt-3 max-w-48 text-sm leading-6 text-[#65736b]">{item.detail}</p>
              </div>
            </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
