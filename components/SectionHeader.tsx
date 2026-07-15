import type { ReactNode } from "react";

type SectionHeaderProps = {
  eyebrow: string;
  title: ReactNode;
  copy?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  copy,
  align = "left",
  className = ""
}: SectionHeaderProps) {
  const centered = align === "center";

  return (
    <div
      className={`gold-rule max-w-4xl pt-8 ${centered ? "mx-auto text-center before:left-1/2 before:-translate-x-1/2" : ""} ${className}`}
    >
      <p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-accent">
        {eyebrow}
      </p>
      <h2 className="text-balance text-4xl font-semibold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {copy ? (
        <p
          className={`mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg ${centered ? "mx-auto" : ""}`}
        >
          {copy}
        </p>
      ) : null}
    </div>
  );
}
