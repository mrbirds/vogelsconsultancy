import type { Metadata } from "next";
import { isLocale, type Locale } from "@/lib/locales";
import { getContent } from "@/content";
import { buildMetadata } from "@/lib/metadata";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) return {};
  const content = getContent(rawLocale);
  return buildMetadata(rawLocale, "/privacy", content.meta.privacy);
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale: Locale = rawLocale;
  const content = getContent(locale);
  const privacy = content.privacy;

  return (
    <section className="py-16 sm:py-24">
      <Container className="max-w-2xl">
        <h1 className="text-[2.1rem] leading-tight sm:text-5xl">{privacy.heading}</h1>
        <p className="mt-5 text-lg leading-relaxed text-ink-muted">{privacy.intro}</p>

        <div className="mt-10 space-y-10 border-t border-border pt-8">
          {privacy.sections.map((section) => (
            <div key={section.heading}>
              <h2 className="text-xl font-semibold text-ink">{section.heading}</h2>
              <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-ink-muted">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
