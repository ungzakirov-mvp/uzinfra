import { ArrowRight } from "lucide-react";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
};

export function Button({
  children,
  className = "",
  variant = "primary",
  ...props
}: ButtonProps) {
  const variants = {
    primary:
      "border-accent/70 bg-accent text-background hover:border-white hover:bg-white",
    secondary:
      "border-white/25 bg-transparent text-white hover:border-accent hover:text-accent",
    ghost:
      "border-transparent bg-transparent text-white hover:border-white/20 hover:bg-white/[0.04]"
  };

  return (
    <a
      className={`group inline-flex min-h-12 items-center gap-3 border px-5 text-sm font-semibold uppercase tracking-[0.16em] transition duration-300 ${variants[variant]} ${className}`}
      {...props}
    >
      <span>{children}</span>
      <ArrowRight
        aria-hidden="true"
        className="h-4 w-4 transition duration-300 group-hover:translate-x-1"
      />
    </a>
  );
}
