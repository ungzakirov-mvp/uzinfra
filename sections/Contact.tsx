"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { useTranslations } from "@/hooks/useTranslations";

const icons = [MapPin, Mail, Phone];

export function Contact() {
  const { t } = useTranslations();

  return (
    <section id="contact" className="section-padding bg-[#fbfcf8]">
      <Container>
        <div className="container-grid">
          <Reveal className="col-span-12 lg:col-span-5">
            <SectionHeader
              eyebrow={t.contact.eyebrow}
              title={t.contact.title}
              copy={t.contact.copy}
            />
            <div className="mt-10 grid gap-5">
              {t.contact.details.map((detail, index) => {
                const Icon = icons[index];
                return (
                  <div key={detail} className="flex items-center gap-4 text-[#425047]">
                    <span className="grid h-11 w-11 place-items-center border border-[#dfe8de] text-accent">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="text-sm leading-6">{detail}</span>
                  </div>
                );
              })}
            </div>
            <div className="mt-10 h-72 border border-[#dfe8de] bg-[#eef4ee] p-5">
              <div className="relative h-full overflow-hidden border border-[#d8e4d8] bg-[linear-gradient(135deg,rgba(200,154,69,0.16),rgba(31,99,70,0.08))]">
                <div className="noise-overlay" />
                <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 border border-accent/50" />
                <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 bg-accent" />
                <p className="absolute bottom-5 left-5 text-xs font-bold uppercase tracking-[0.22em] text-[#526158]">
                  {t.media.mapLabel}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal className="col-span-12 lg:col-span-6 lg:col-start-7" delay={0.12}>
            <form className="border border-[#dfe8de] bg-white p-6 sm:p-10">
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="grid gap-3">
                  <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#65736b]">
                    {t.contact.form.name}
                  </span>
                  <input
                    className="h-13 border border-[#dfe8de] bg-[#f8faf6] px-4 text-[#17221c] outline-none transition placeholder:text-[#7b877f] focus:border-accent"
                    placeholder={t.contact.form.namePlaceholder}
                    type="text"
                    name="name"
                  />
                </label>
                <label className="grid gap-3">
                  <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#65736b]">
                    {t.contact.form.email}
                  </span>
                  <input
                    className="h-13 border border-[#dfe8de] bg-[#f8faf6] px-4 text-[#17221c] outline-none transition placeholder:text-[#7b877f] focus:border-accent"
                    placeholder={t.contact.form.emailPlaceholder}
                    type="email"
                    name="email"
                  />
                </label>
              </div>
              <label className="mt-6 grid gap-3">
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#65736b]">
                  {t.contact.form.organization}
                </span>
                <input
                  className="h-13 border border-[#dfe8de] bg-[#f8faf6] px-4 text-[#17221c] outline-none transition placeholder:text-[#7b877f] focus:border-accent"
                  placeholder={t.contact.form.organizationPlaceholder}
                  type="text"
                  name="organization"
                />
              </label>
              <label className="mt-6 grid gap-3">
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#65736b]">
                  {t.contact.form.inquiry}
                </span>
                <textarea
                  className="min-h-40 resize-y border border-[#dfe8de] bg-[#f8faf6] p-4 text-[#17221c] outline-none transition placeholder:text-[#7b877f] focus:border-accent"
                  placeholder={t.contact.form.inquiryPlaceholder}
                  name="message"
                />
              </label>
              <div className="mt-8">
                <Button href="mailto:partnerships@uzinfra.com">
                  {t.buttons.submitInquiry}
                </Button>
              </div>
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
