import type { Dictionary, Locale } from "@/types";

const dictionaries: Record<string, () => Promise<Dictionary>> = {
  en: () => import("@/dictionaries/en.json").then(module => module.default),
  fr: () => import("@/dictionaries/fr.json").then(module => module.default),
};

export const getDictionary = (locale: Locale): Promise<Dictionary> => dictionaries[locale]?.();
