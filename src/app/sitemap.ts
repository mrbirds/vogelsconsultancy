import type { MetadataRoute } from "next";
import { locales } from "@/lib/locales";
import { siteConfig } from "@/lib/site";

const paths = ["", "/expertise", "/experience", "/about", "/contact", "/privacy"];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const path of paths) {
    for (const locale of locales) {
      entries.push({
        url: `${siteConfig.url}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency: path === "" ? "monthly" : "yearly",
        priority: path === "" ? 1 : 0.6,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${siteConfig.url}/${l}${path}`]),
          ),
        },
      });
    }
  }

  return entries;
}
