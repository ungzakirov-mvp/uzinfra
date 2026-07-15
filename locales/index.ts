import { en } from "./en";
import { ru } from "./ru";
import { uz } from "./uz";
import type { Dictionary } from "./types";

export const dictionaries = {
  ru,
  uz,
  en
} as const;

export const localeOptions = [
  { code: "ru" },
  { code: "uz" },
  { code: "en" }
] as const;

export type Locale = keyof typeof dictionaries;
export type { Dictionary };

export const defaultLocale: Locale = "ru";

export function isLocale(value: string | null | undefined): value is Locale {
  return value === "ru" || value === "uz" || value === "en";
}
