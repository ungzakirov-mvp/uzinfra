import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { MediaHero } from "@/components/MediaHero";
import { Reveal } from "@/components/Reveal";
import { careersMedia } from "@/lib/media";

export function Careers() {
  return (
    <section id="careers" className="bg-background">
      <Container className="py-12">
        <Reveal>
          <MediaHero
            media={careersMedia}
            className="relative min-h-[32rem] overflow-hidden border border-white/10"
          >
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,15,20,0.92)_0%,rgba(11,15,20,0.7)_45%,rgba(11,15,20,0.18)_100%)]" />
            <div className="relative z-10 flex min-h-[32rem] max-w-3xl flex-col justify-center p-7 sm:p-12 lg:p-16">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-accent">Careers</p>
              <h2 className="mt-6 text-balance text-4xl font-semibold leading-tight text-white sm:text-6xl">
                Join the teams shaping Central Asia&apos;s next generation of infrastructure.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/74">
                UZINFRA hires engineers, project directors, investment specialists and analysts who
                thrive on complex work with national significance.
              </p>
              <div className="mt-9">
                <Button href="#contact">Join Our Team</Button>
              </div>
            </div>
          </MediaHero>
        </Reveal>
      </Container>
    </section>
  );
}
