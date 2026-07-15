import Image from "next/image";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { projects } from "@/lib/content";

export function FeaturedProjects() {
  return (
    <section id="projects" className="section-padding bg-background">
      <Container>
        <div className="container-grid items-end">
          <Reveal className="col-span-12 lg:col-span-7">
            <SectionHeader
              eyebrow="Featured Projects"
              title="High-value programs designed for national impact."
            />
          </Reveal>
          <Reveal className="col-span-12 lg:col-span-4 lg:col-start-9" delay={0.12}>
            <p className="text-base leading-8 text-muted">
              UZINFRA brings together strategic planning, technical governance and capital discipline
              for assets that operate over decades.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-8">
          {projects.map((project, index) => (
            <Reveal key={project.name} delay={index * 0.08}>
              <article className="group grid overflow-hidden border border-white/10 bg-background-secondary lg:grid-cols-[1.12fr_0.88fr]">
                <div className="relative min-h-[24rem] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    sizes="(min-width: 1024px) 58vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background-secondary/35" />
                </div>
                <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
                  <p className="text-xs font-bold uppercase tracking-[0.26em] text-accent">
                    {project.sector}
                  </p>
                  <h3 className="mt-5 text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl">
                    {project.name}
                  </h3>
                  <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-white/55">
                    {project.location}
                  </p>
                  <p className="mt-7 max-w-xl text-base leading-8 text-muted">{project.summary}</p>
                  <div className="mt-9">
                    <Button href="#contact" variant="secondary">
                      Explore Project
                    </Button>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
