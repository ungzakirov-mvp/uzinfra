import Image from "next/image";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";

const principles = ["Mission-led delivery", "International standards", "Public value creation"];

export function About() {
  return (
    <section id="about" className="section-padding bg-background">
      <Container>
        <div className="container-grid items-center">
          <Reveal className="col-span-12 lg:col-span-6">
            <div className="image-mask relative aspect-[4/5] overflow-hidden border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=84"
                alt="Modern infrastructure headquarters architecture"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/55 to-transparent" />
            </div>
          </Reveal>

          <Reveal className="col-span-12 lg:col-span-5 lg:col-start-8" delay={0.12}>
            <SectionHeader
              eyebrow="About UZINFRA"
              title="A disciplined platform for nationally significant infrastructure."
              copy="UZINFRA develops and manages complex infrastructure programs that connect capital, engineering and public-sector priorities. We work where long-term assets shape trade, energy security, industrial productivity and quality of life."
            />
            <div className="mt-10 grid gap-5">
              {principles.map((principle) => (
                <div key={principle} className="flex items-center gap-4 border-t border-white/10 pt-5">
                  <span className="h-px w-10 bg-accent" />
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/86">
                    {principle}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-10 grid gap-8 border-t border-white/10 pt-10 sm:grid-cols-2">
              <div>
                <h3 className="text-lg font-semibold text-white">Mission</h3>
                <p className="mt-3 text-sm leading-7 text-muted">
                  Deliver resilient infrastructure that accelerates regional growth while protecting
                  public value and investor confidence.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Vision</h3>
                <p className="mt-3 text-sm leading-7 text-muted">
                  Become Central Asia&apos;s reference institution for sustainable, financeable and
                  technically excellent infrastructure.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
