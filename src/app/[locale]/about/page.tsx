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
      <section className="py-[var(--section-space)]">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-blue-link">
            {about.eyebrow}
          </p>
          <h1 className="mt-3 max-w-3xl text-[clamp(2rem,4vw,3.25rem)] leading-tight">
            {about.heading}
          </h1>

          <div className="mt-8 grid gap-8 sm:mt-10 sm:gap-10 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-14">
            <div>
              <Image
                src="/images/robin-vogels-profile.jpg"
                alt={about.photoAlt}
                width={1536}
                height={1024}
                loading="eager"
                sizes="(min-width: 1024px) 340px, (min-width: 640px) 320px, 320px"
                className="mx-auto block h-auto w-full max-w-[320px] lg:mx-0 lg:max-w-[340px]"
              />
              <div className="mx-auto mt-6 max-w-[320px] lg:mx-0 lg:mt-7">
                <h2 className="text-sm font-semibold uppercase tracking-wide text-ink-muted">
                  {about.factsHeading}
                </h2>
                <ul className="mt-3 space-y-2 text-sm text-ink sm:text-[15px]">
                  {about.facts.map((fact) => (
                    <li key={fact}>{fact}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="max-w-[var(--reading-width)] space-y-5 text-base leading-relaxed text-ink-muted sm:text-lg lg:pt-1">
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
