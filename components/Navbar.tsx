"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { localeOptions } from "@/locales";
import { navItems } from "@/lib/content";
import { useTranslations } from "@/hooks/useTranslations";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { locale, setLocale, t } = useTranslations();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition duration-500 ${
        scrolled || open
          ? "border-b border-[#dfe8de] bg-white/92 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <Container>
        <nav className="flex h-20 items-center justify-between" aria-label={t.nav.primary}>
          <a href="#top" className="group flex items-center gap-3" aria-label={t.brand.home}>
            <span className="grid h-10 w-10 place-items-center border border-accent/70 text-sm font-extrabold text-accent transition group-hover:bg-accent group-hover:text-background">
              {t.brand.name.charAt(0)}
            </span>
            <span
              className={`text-lg font-extrabold tracking-[0.22em] transition ${
                scrolled || open ? "text-[#17221c]" : "text-white"
              }`}
            >
              {t.brand.name}
            </span>
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-xs font-semibold uppercase tracking-[0.18em] transition ${
                  scrolled || open
                    ? "text-[#425047] hover:text-[#17221c]"
                    : "text-white/78 hover:text-white"
                }`}
              >
                {t.nav.items[item.key]}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-5 lg:flex">
            <div
              className={`flex items-center gap-2 text-[0.68rem] font-bold uppercase tracking-[0.18em] ${
                scrolled || open ? "text-[#7b877f]" : "text-white/52"
              }`}
              aria-label={t.language.label}
            >
              {localeOptions.map((option, index) => (
                <span key={option.code} className="flex items-center gap-2">
                  <button
                    type="button"
                    aria-label={`${t.language.switchTo} ${t.language.names[option.code]}`}
                    aria-pressed={locale === option.code}
                    onClick={() => setLocale(option.code)}
                    className={`transition ${
                      scrolled || open ? "hover:text-[#17221c]" : "hover:text-white"
                    } ${locale === option.code ? "text-accent" : scrolled || open ? "text-[#7b877f]" : "text-white/52"
                    }`}
                  >
                    {t.language.options[option.code]}
                  </button>
                  {index < localeOptions.length - 1 ? <span aria-hidden="true">|</span> : null}
                </span>
              ))}
            </div>
            <Button
              href="#contact"
              variant="secondary"
              className={`min-h-10 px-4 text-[0.68rem] ${
                scrolled || open
                  ? "border-[#17221c]/25 text-[#17221c] hover:border-accent hover:text-accent"
                  : ""
              }`}
            >
              {t.buttons.inquire}
            </Button>
          </div>

          <button
            type="button"
            className={`grid h-11 w-11 place-items-center border transition hover:border-accent hover:text-accent lg:hidden ${
              scrolled || open
                ? "border-[#dfe8de] text-[#17221c]"
                : "border-white/20 text-white"
            }`}
            aria-label={open ? t.nav.close : t.nav.open}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </Container>

      <div
        className={`overflow-hidden border-t border-[#dfe8de] bg-white transition-all duration-500 lg:hidden ${
          open ? "max-h-[30rem]" : "max-h-0"
        }`}
      >
        <Container className="py-5">
          <div className="grid gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-[#dfe8de] py-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#425047]"
              >
                {t.nav.items[item.key]}
              </a>
            ))}
            <div
              className="flex items-center gap-3 py-4 text-xs font-bold uppercase tracking-[0.2em]"
              aria-label={t.language.label}
            >
              {localeOptions.map((option, index) => (
                <span key={option.code} className="flex items-center gap-3">
                  <button
                    type="button"
                    aria-label={`${t.language.switchTo} ${t.language.names[option.code]}`}
                    aria-pressed={locale === option.code}
                    onClick={() => setLocale(option.code)}
                    className={`transition hover:text-[#17221c] ${
                      locale === option.code ? "text-accent" : "text-[#7b877f]"
                    }`}
                  >
                    {t.language.options[option.code]}
                  </button>
                  {index < localeOptions.length - 1 ? (
                    <span className="text-[#b2bdb5]" aria-hidden="true">
                      |
                    </span>
                  ) : null}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
}
