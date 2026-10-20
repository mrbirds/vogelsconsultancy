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
    <section className="py-[var(--section-space)]">
      <Container className="max-w-[var(--reading-width)]">
        <h1 className="text-[clamp(2rem,4vw,3.25rem)] leading-tight">{privacy.heading}</h1>
        <p className="mt-5 text-base leading-relaxed text-ink-muted sm:text-lg">{privacy.intro}</p>

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
