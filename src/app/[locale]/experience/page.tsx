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

      <section className="py-16 sm:py-20" aria-labelledby="selected-experience-heading">
        <Container>
          <SectionHeading
            id="selected-experience-heading"
            heading={experience.selectedHeading}
            intro={experience.selectedIntro}
          />

          <div className="mt-12">
            {experience.companies.map((company) => (
              <ExperienceDetail key={company.id} company={company} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-surface-subtle py-16 sm:py-20" aria-labelledby="earlier-experience-heading">
        <Container>
          <SectionHeading
            id="earlier-experience-heading"
            heading={experience.earlierHeading}
            intro={experience.earlierIntro}
          />

          <div className="mt-10 max-w-2xl">
            <p className="text-sm font-medium text-ink-muted">{experience.earlierExperience.period}</p>
            <h3 className="mt-1 text-lg font-semibold text-ink">{experience.earlierExperience.title}</h3>
            <p className="mt-2 leading-relaxed text-ink-muted">{experience.earlierExperience.body}</p>
          </div>

          {/* Career foundation: deliberately the least prominent block, kept
              compact per PRD §32 — no logos, no per-employer rows. */}
          <div className="mt-10 max-w-2xl border-t border-border pt-8">
            <p className="text-sm text-ink-muted">{experience.careerFoundation.period}</p>
            <h3 className="mt-1 text-base font-semibold text-ink-muted">{experience.careerFoundation.title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">{experience.careerFoundation.body}</p>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20" aria-labelledby="technology-heading">
        <Container>
          <SectionHeading
            id="technology-heading"
            heading={experience.technologyHeading}
            intro={experience.technologyIntro}
          />
          <ul className="mt-8 flex flex-wrap gap-3">
            {experience.technologyList.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-border px-4 py-2 text-sm font-medium text-ink"
              >
                {tech}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <ContactCTA content={content.contact} locale={locale} />
    </>
  );
}
