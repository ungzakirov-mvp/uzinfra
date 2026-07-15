import Image from "next/image";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { news } from "@/lib/content";

export function News() {
  return (
    <section id="news" className="section-padding bg-background-secondary">
      <Container>
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <Reveal>
            <SectionHeader
              eyebrow="News"
              title="Perspectives from the infrastructure frontier."
            />
          </Reveal>
          <Reveal delay={0.12}>
            <Button href="#contact" variant="ghost">
              View All
            </Button>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {news.map((item, index) => (
            <Reveal key={item.headline} delay={index * 0.08}>
              <article className="group h-full border border-white/10 bg-background">
                <div className="relative aspect-[1.35] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.headline}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/72 to-transparent" />
                </div>
                <div className="p-7">
                  <div className="flex items-center gap-3 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-accent">
                    <span>{item.category}</span>
                    <span className="h-px w-8 bg-white/20" />
                    <time dateTime={new Date(item.date).toISOString()}>{item.date}</time>
                  </div>
                  <h3 className="mt-5 text-xl font-semibold leading-snug text-white">
                    {item.headline}
                  </h3>
                  <a
                    href="#contact"
                    className="mt-7 inline-flex text-xs font-bold uppercase tracking-[0.2em] text-white/70 transition hover:text-accent"
                  >
                    Read More
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
