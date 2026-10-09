import type { Metadata } from "next";
import Image from "next/image";
import { isLocale, type Locale } from "@/lib/locales";
import { getContent } from "@/content";
import { buildMetadata } from "@/lib/metadata";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { ContactCTA } from "@/components/ContactCTA";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) return {};
  const content = getContent(rawLocale);
  return buildMetadata(rawLocale, "/about", content.meta.about);
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale: Locale = rawLocale;
  const content = getContent(locale);
  const about = content.about;

  return (
    <>
      <section className="py-14 sm:py-20">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-blue-link">
            {about.eyebrow}
          </p>
          <h1 className="mt-3 max-w-3xl text-[2.1rem] leading-tight sm:text-5xl">
            {about.heading}
          </h1>

          <div className="mt-10 grid gap-10 lg:grid-cols-[0.6fr_1fr] lg:gap-16">
            <div>
              <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl bg-surface-subtle lg:max-w-none">
                <Image
                  src="/images/robin-vogels-profile.jpg"
                  alt={about.photoAlt}
                  fill
                  sizes="(min-width: 1024px) 420px, 80vw"
                  className="object-cover"
                />
              </div>
              <div className="mt-8">
                <h2 className="text-sm font-semibold uppercase tracking-wide text-ink-muted">
                  {about.factsHeading}
                </h2>
                <ul className="mt-3 space-y-2 text-[15px] text-ink">
                  {about.facts.map((fact) => (
                    <li key={fact}>{fact}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-5 text-lg leading-relaxed text-ink-muted">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <ContactCTA content={content.contact} locale={locale} />
    </>
  );
}
