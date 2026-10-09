import type { Metadata } from "next";
import { locales, type Locale } from "./locales";
import { siteConfig } from "./site";
import type { PageMeta } from "@/content/types";

/**
 * Build a full Next.js Metadata object for a single locale page, including
 * canonical URL and hreflang alternates for every supported locale plus
 * x-default.
 *
 * @param locale current locale
 * @param path locale-relative path without leading locale segment, e.g. "" for home or "/expertise"
 */
export function buildMetadata(locale: Locale, path: string, meta: PageMeta): Metadata {
  const normalizedPath = path === "" ? "" : path;
  const canonical = `${siteConfig.url}/${locale}${normalizedPath}`;

  const languages: Record<string, string> = {};
  for (const l of locales) {
    languages[l] = `${siteConfig.url}/${l}${normalizedPath}`;
  }
  languages["x-default"] = `${siteConfig.url}/nl${normalizedPath}`;

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical,
      languages,
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: canonical,
      siteName: siteConfig.name,
      locale: locale === "nl" ? "nl_NL" : "en_US",
      type: "website",
      images: [
        {
          url: `${siteConfig.url}/images/robin-vogels-profile.jpg`,
          width: 1200,
          height: 1500,
          alt: siteConfig.person,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
    },
  };
}
