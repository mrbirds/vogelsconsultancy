import type { Metadata } from "next";
import { isLocale, type Locale } from "@/lib/locales";
import { getContent } from "@/content";
import { buildMetadata } from "@/lib/metadata";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ExperienceDetail } from "@/components/ExperienceDetail";
import { ContactCTA } from "@/components/ContactCTA";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) return {};
  const content = getContent(rawLocale);
  return buildMetadata(rawLocale, "/experience", content.meta.experience);
}

export default async function ExperiencePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale: Locale = rawLocale;
  const content = getContent(locale);
  const experience = content.experience;

  return (
    <>
      <PageHero eyebrow={experience.eyebrow} heading={experience.heading} intro={experience.intro} />

      <section className="py-[var(--section-space)]" aria-labelledby="selected-experience-heading">
        <Container className="max-w-5xl">
          <SectionHeading
            id="selected-experience-heading"
            heading={experience.selectedHeading}
            intro={experience.selectedIntro}
          />

          <div className="mt-9 sm:mt-11">
            {experience.companies.map((company) => (
              <ExperienceDetail key={company.id} company={company} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-surface-subtle py-[var(--section-space)]" aria-labelledby="earlier-experience-heading">
        <Container className="max-w-5xl">
          <SectionHeading
            id="earlier-experience-heading"
            heading={experience.earlierHeading}
            intro={experience.earlierIntro}
          />

          <div className="mt-8 divide-y divide-border border-y border-border">
            {[...experience.earlierExperience, ...experience.careerFoundation].map((engagement) => (
              <article
                key={`${engagement.period}-${engagement.title}`}
                className="grid gap-2 py-5 sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-6 sm:py-6"
              >
                <p className="text-sm text-ink-muted">{engagement.period}</p>
                <div>
                  <h3 className="text-base font-semibold text-ink">{engagement.title}</h3>
                  <p className="mt-1 text-sm text-brand-blue-link">{engagement.role}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{engagement.body}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <ContactCTA content={content.contact} locale={locale} />
    </>
  );
}
