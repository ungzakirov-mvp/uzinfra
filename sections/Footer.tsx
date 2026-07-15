"use client";

import { Linkedin, Twitter } from "lucide-react";
import { Container } from "@/components/Container";
import { useTranslations } from "@/hooks/useTranslations";
import { navItems } from "@/lib/content";

export function Footer() {
  const { t } = useTranslations();

  return (
    <footer className="border-t border-white/10 bg-background-secondary">
      <Container>
        <div className="grid gap-10 py-12 lg:grid-cols-[1fr_2fr] lg:py-16">
          <div>
            <a href="#top" className="inline-flex items-center gap-3" aria-label={t.brand.home}>
              <span className="grid h-10 w-10 place-items-center border border-accent/70 text-sm font-extrabold text-accent">
                {t.brand.name.charAt(0)}
              </span>
              <span className="text-lg font-extrabold tracking-[0.22em] text-white">
                {t.brand.name}
              </span>
            </a>
            <p className="mt-6 max-w-sm text-sm leading-7 text-muted">
              {t.footer.copy}
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1fr_0.7fr]">
            <nav className="grid gap-4 sm:grid-cols-2" aria-label={t.nav.footer}>
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-xs font-bold uppercase tracking-[0.2em] text-white/62 transition hover:text-white"
                >
                  {t.nav.items[item.key]}
                </a>
              ))}
            </nav>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent">
                {t.footer.connect}
              </p>
              <div className="mt-5 flex gap-3">
                <a
                  href="https://www.linkedin.com"
                  aria-label={t.footer.linkedin}
                  className="grid h-11 w-11 place-items-center border border-white/12 text-white/70 transition hover:border-accent hover:text-accent"
                >
                  <Linkedin className="h-5 w-5" aria-hidden="true" />
                </a>
                <a
                  href="https://www.twitter.com"
                  aria-label={t.footer.x}
                  className="grid h-11 w-11 place-items-center border border-white/12 text-white/70 transition hover:border-accent hover:text-accent"
                >
                  <Twitter className="h-5 w-5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-4 border-t border-white/10 py-6 text-xs text-white/46 sm:flex-row">
          <p>{t.footer.rights}</p>
          <p>{t.footer.standard}</p>
        </div>
      </Container>
    </footer>
  );
}
