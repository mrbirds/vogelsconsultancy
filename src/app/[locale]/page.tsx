import type { Metadata } from "next";
import { isLocale, type Locale } from "@/lib/locales";
import { getContent } from "@/content";
import { buildMetadata } from "@/lib/metadata";
import { notFound } from "next/navigation";
import { Hero } from "@/components/Hero";
import { CredibilityMarkers } from "@/components/CredibilityMarkers";
import { ExpertiseGrid } from "@/components/ExpertiseGrid";
import { Approach } from "@/components/Approach";
import { SelectedExperience } from "@/components/SelectedExperience";
import { ContactCTA } from "@/components/ContactCTA";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) return {};
  const content = getContent(rawLocale);
  return buildMetadata(rawLocale, "", content.meta.home);
}

export default async function HomePage({
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
      <Hero locale={locale} content={content.hero} />
      <CredibilityMarkers content={content.credibility} />
      <ExpertiseGrid content={content.expertise} />
      <SelectedExperience locale={locale} content={content.experience} />
      <Approach content={content.approach} />
      <ContactCTA content={content.contact} locale={locale} />
    </>
  );
}
