import Link from "next/link";
import type { ExpertisePageContent } from "@/content/types";
import type { Locale } from "@/lib/locales";
import { Container } from "./Container";

export function ExpertisePageContentView({
  content,
  locale,
}: {
  content: ExpertisePageContent;
  locale: Locale;
}) {
  return (
    <>
      <section className="py-12 sm:py-16 lg:py-20">
        <Container className="max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-blue-link">
            {content.eyebrow}
          </p>
          <h1 className="mt-3 text-[clamp(2rem,4vw,3.25rem)] leading-tight">
            {content.heading}
          </h1>
          <p className="mt-5 max-w-[var(--reading-width)] text-base leading-relaxed text-ink-muted sm:text-lg">
            {content.intro}
          </p>
        </Container>
      </section>

      <section className="pb-[var(--section-space)]" aria-label={content.areasLabel}>
        <Container className="max-w-5xl">
          <div>
            {content.areas.map((area, index) => (
              <article
                key={area.id}
                className="grid gap-x-8 gap-y-4 border-t border-border py-7 sm:grid-cols-[3rem_minmax(0,1fr)] sm:py-9 lg:grid-cols-[4rem_minmax(16rem,0.9fr)_minmax(0,1.1fr)] lg:gap-x-10"
              >
                <p className="text-sm font-semibold tracking-wide text-brand-blue-link">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div>
                  <h2 className="text-lg font-semibold leading-snug text-ink sm:text-2xl">
                    {area.title}
                  </h2>
                  <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-ink-muted sm:text-base">
                    {area.statement}
                  </p>
                </div>
                <ul className="grid gap-x-6 gap-y-3 sm:grid-cols-2 lg:grid-cols-1">
                  {area.capabilities.map((capability) => (
                    <li
                      key={capability}
                      className="border-l border-brand-blue/60 pl-4 text-[15px] leading-relaxed text-ink"
                    >
                      {capability}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-surface-subtle py-14 sm:py-16">
        <Container className="max-w-5xl">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <h2 className="text-lg font-semibold leading-snug text-ink sm:text-2xl">
                {content.proofHeading}
              </h2>
            </div>
            <div>
              <ul className="divide-y divide-border border-y border-border">
                {content.proofPoints.map((point) => (
                  <li key={point} className="py-4 text-[15px] leading-relaxed text-ink">
                    {point}
                  </li>
                ))}
              </ul>
              <Link
                href={`/${locale}/experience`}
                className="mt-6 inline-flex text-sm font-semibold text-brand-blue-link underline underline-offset-4"
              >
                {content.experienceLink}
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-[var(--section-space)]" aria-labelledby="expertise-contact-heading">
        <Container className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-blue-link">
            {content.ctaLabel}
          </p>
          <h2 id="expertise-contact-heading" className="mt-3 text-[clamp(1.75rem,3.5vw,2.5rem)] leading-tight">
            {content.ctaHeading}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
            {content.ctaIntro}
          </p>
          <Link
            href={`/${locale}/contact`}
            className="mt-7 inline-flex min-h-12 items-center justify-center rounded-full bg-ink px-7 text-[15px] font-semibold text-white transition-colors hover:bg-ink/90"
          >
            {content.ctaButton}
          </Link>
        </Container>
      </section>
    </>
  );
}
