import Image from "next/image";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { sectors } from "@/lib/content";

export function Sectors() {
  return (
    <section id="sectors" className="section-padding bg-background-secondary">
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow="Sectors"
            title="Strategic assets across the systems that move economies."
            copy="Each sector is approached through disciplined planning, bankable structuring and lifecycle performance."
          />
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2 xl:grid-cols-3">
          {sectors.map((sector, index) => {
            const Icon = sector.icon;
            return (
              <Reveal key={sector.title} delay={index * 0.05}>
                <article className="group relative min-h-[28rem] overflow-hidden bg-background">
                  <Image
                    src={sector.image}
                    alt={`${sector.title} infrastructure`}
                    fill
                    sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover opacity-[0.62] transition duration-700 group-hover:scale-105 group-hover:opacity-[0.82]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/54 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-7 sm:p-8">
                    <Icon className="mb-7 h-8 w-8 text-accent" aria-hidden="true" />
                    <h3 className="text-2xl font-semibold text-white">{sector.title}</h3>
                    <p className="mt-4 max-w-sm text-sm leading-7 text-white/72">
                      {sector.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
