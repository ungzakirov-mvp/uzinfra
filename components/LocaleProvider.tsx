"use client";

import {
  createContext,
  type ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState
} from "react";
import {
  defaultLocale,
  dictionaries,
  type Dictionary,
  isLocale,
  type Locale
} from "@/locales";

const storageKey = "uzinfra-locale";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Dictionary;
};

export const LocaleContext = createContext<LocaleContextValue | null>(null);

function detectBrowserLocale(): Locale {
  if (typeof navigator === "undefined") return defaultLocale;

  const languages = navigator.languages?.length ? navigator.languages : [navigator.language];
  const normalized = languages.map((language) => language.toLowerCase());

  if (normalized.some((language) => language.startsWith("ru"))) return "ru";
  if (normalized.some((language) => language.startsWith("uz"))) return "uz";
  if (normalized.some((language) => language.startsWith("en"))) return "en";

  return defaultLocale;
}

type LocaleProviderProps = {
  children: ReactNode;
};

export function LocaleProvider({ children }: LocaleProviderProps) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  useEffect(() => {
    const storedLocale = window.localStorage.getItem(storageKey);
    const nextLocale = isLocale(storedLocale) ? storedLocale : detectBrowserLocale();
    setLocaleState(nextLocale);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback((nextLocale: Locale) => {
    setLocaleState(nextLocale);
    window.localStorage.setItem(storageKey, nextLocale);
  }, []);

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t: dictionaries[locale]
    }),
    [locale, setLocale]
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}
