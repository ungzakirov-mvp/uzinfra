import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { advantages } from "@/lib/content";

export function WhyUzinfra() {
  return (
    <section className="section-padding border-y border-white/10 bg-background-secondary">
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow="Why UZINFRA"
            title="Built for complexity, accountability and enduring partnerships."
            copy="We combine institutional discipline with hands-on delivery capability, giving stakeholders a single platform for technically complex infrastructure programs."
            align="center"
          />
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden border border-white/10 bg-white/10 lg:grid-cols-3">
          {advantages.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={index * 0.08}>
                <article className="min-h-72 bg-background p-8 transition duration-300 hover:bg-[#101720] sm:p-10">
                  <Icon className="h-9 w-9 text-accent" aria-hidden="true" />
                  <h3 className="mt-12 text-2xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-5 max-w-sm text-sm leading-7 text-muted">{item.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
