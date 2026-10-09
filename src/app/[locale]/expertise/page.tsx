import type { Metadata } from "next";
import { isLocale, type Locale } from "@/lib/locales";
import { getContent } from "@/content";
import { buildMetadata } from "@/lib/metadata";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { ExpertiseGrid } from "@/components/ExpertiseGrid";
import { ContactCTA } from "@/components/ContactCTA";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) return {};
  const content = getContent(rawLocale);
  return buildMetadata(rawLocale, "/expertise", content.meta.expertise);
}

export default async function ExpertisePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale: Locale = rawLocale;
  const content = getContent(locale);

  return (
    <>
      <PageHero
        eyebrow={content.expertise.eyebrow}
        heading={content.expertise.heading}
        intro={content.expertise.intro}
      />
      <ExpertiseGrid content={content.expertise} hideHeading />
      <ContactCTA content={content.contact} locale={locale} />
    </>
  );
}
