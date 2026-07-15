import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { StatCounter } from "@/components/StatCounter";
import { stats } from "@/lib/content";

export function Stats() {
  return (
    <section className="border-y border-white/10 bg-background" aria-label="Company statistics">
      <Container>
        <div className="grid divide-y divide-white/10 md:grid-cols-4 md:divide-x md:divide-y-0">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.08}>
              <div className="py-10 md:px-8 md:py-14">
                <p className="text-5xl font-semibold text-white sm:text-6xl">
                  <StatCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <h2 className="mt-4 text-sm font-bold uppercase tracking-[0.22em] text-accent">
                  {stat.label}
                </h2>
                <p className="mt-3 max-w-48 text-sm leading-6 text-muted">{stat.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
