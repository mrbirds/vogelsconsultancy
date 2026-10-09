import { siteConfig } from "./site";
import type { Locale } from "./locales";

export function buildPersonJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.person,
    jobTitle: siteConfig.role[locale],
    url: `${siteConfig.url}/${locale}`,
    email: `mailto:${siteConfig.email}`,
    sameAs: [siteConfig.linkedin],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Rosmalen",
      addressCountry: "NL",
    },
    worksFor: {
      "@type": "ProfessionalService",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}

export function buildProfessionalServiceJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    url: `${siteConfig.url}/${locale}`,
    email: siteConfig.email,
    founder: {
      "@type": "Person",
      name: siteConfig.person,
    },
    areaServed: "NL",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Rosmalen",
      addressCountry: "NL",
    },
  };
}
