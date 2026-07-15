"use client";

import { useContext } from "react";
import { LocaleContext } from "@/components/LocaleProvider";

export function useTranslations() {
  const context = useContext(LocaleContext);

  if (!context) {
    throw new Error("useTranslations must be used inside LocaleProvider");
  }

  return context;
}
