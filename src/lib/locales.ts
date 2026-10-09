export const locales = ["nl", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "nl";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Label for the *other* locale, as shown in the language switch control. */
export const localeLabels: Record<Locale, string> = {
  nl: "NL",
  en: "EN",
};

export const localeNames: Record<Locale, string> = {
  nl: "Nederlands",
  en: "English",
};

export const htmlLang: Record<Locale, string> = {
  nl: "nl-NL",
  en: "en",
};
