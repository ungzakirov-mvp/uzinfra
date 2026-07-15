"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { navItems } from "@/lib/content";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
          ? "border-b border-white/10 bg-background/94 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <Container>
        <nav className="flex h-20 items-center justify-between" aria-label="Primary navigation">
          <a href="#top" className="group flex items-center gap-3" aria-label="UZINFRA home">
            <span className="grid h-10 w-10 place-items-center border border-accent/70 text-sm font-extrabold text-accent transition group-hover:bg-accent group-hover:text-background">
              U
            </span>
            <span className="text-lg font-extrabold tracking-[0.22em] text-white">UZINFRA</span>
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-xs font-semibold uppercase tracking-[0.18em] text-white/72 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:block">
            <Button href="#contact" variant="secondary" className="min-h-10 px-4 text-[0.68rem]">
              Inquire
            </Button>
          </div>

          <button
            type="button"
            className="grid h-11 w-11 place-items-center border border-white/15 text-white transition hover:border-accent hover:text-accent lg:hidden"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </Container>

      <div
        className={`overflow-hidden border-t border-white/10 bg-background-secondary transition-all duration-500 lg:hidden ${
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
                className="border-b border-white/8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white/80"
              >
                {item.label}
              </a>
            ))}
          </div>
        </Container>
      </div>
    </header>
  );
}
