import { Leaf } from "lucide-react";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { sustainabilityPillars } from "@/lib/content";
import { MediaHero } from "@/components/MediaHero";
import { sustainabilityMedia } from "@/lib/media";

export function Sustainability() {
  return (
    <section className="relative overflow-hidden bg-background">
      <MediaHero
        media={sustainabilityMedia}
        className="absolute inset-0"
        imageClassName="object-cover opacity-50"
      >
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#0b0f14_0%,rgba(11,15,20,0.88)_42%,rgba(11,15,20,0.58)_100%)]" />
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
                  Sustainability
                </p>
              </div>
              <h2 className="text-balance text-4xl font-semibold leading-[1.04] text-white sm:text-6xl">
                Infrastructure that strengthens economies without borrowing from the future.
              </h2>
              <p className="mt-7 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
                ESG is embedded in project selection, procurement, delivery and operations. We
                prioritize lower-carbon systems, resilient communities and transparent reporting
                across the asset lifecycle.
              </p>
              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                {sustainabilityPillars.map((pillar) => (
                  <div key={pillar} className="border border-white/12 bg-white/[0.035] p-4">
                    <p className="text-sm font-semibold text-white/86">{pillar}</p>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <Button href="#contact" variant="secondary">
                  ESG Approach
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
