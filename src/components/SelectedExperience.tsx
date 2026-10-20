import Link from "next/link";
import type { ExperienceContent } from "@/content/types";
import type { Locale } from "@/lib/locales";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import { ExperienceCard } from "./ExperienceCard";

export function SelectedExperience({
  locale,
  content,
}: {
  locale: Locale;
  content: ExperienceContent;
}) {
  return (
    <section className="py-[var(--section-space)]" aria-labelledby="experience-heading">
      <Container>
        <SectionHeading
          id="experience-heading"
          eyebrow={content.eyebrow}
          heading={content.selectedHeading}
          intro={content.selectedIntro}
        />

        <div className="mt-9 grid gap-x-8 gap-y-10 sm:mt-11 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-10">
          {content.companies.map((company) => (
            <ExperienceCard key={company.id} company={company} />
          ))}
        </div>

        <div className="mt-10">
          <Link
            href={`/${locale}/experience`}
            className="inline-flex text-sm font-semibold text-brand-blue-link underline underline-offset-4"
          >
            {content.viewAllCta}
          </Link>
        </div>
      </Container>
    </section>
  );
}
