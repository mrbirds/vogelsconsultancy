import { nl } from "./nl";
import { en } from "./en";
import type { Content } from "./types";
import type { Locale } from "@/lib/locales";

const dictionaries: Record<Locale, Content> = { nl, en };

export function getContent(locale: Locale): Content {
  return dictionaries[locale];
}

export type { Content } from "./types";
