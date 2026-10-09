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
import { AboutPreview } from "@/components/AboutPreview";
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
      <Approach content={content.approach} />
      <SelectedExperience locale={locale} content={content.experience} />
      <AboutPreview locale={locale} content={content.about} />
      <ContactCTA content={content.contact} locale={locale} />
    </>
  );
}
