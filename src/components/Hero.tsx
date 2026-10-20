import Link from "next/link";
import type { HeroContent } from "@/content/types";
import type { Locale } from "@/lib/locales";
import { Container } from "./Container";

export function Hero({ locale, content }: { locale: Locale; content: HeroContent }) {
  return (
    <section className="border-b border-border bg-surface">
      <Container className="max-w-5xl py-16 sm:py-24 lg:py-28">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-blue-link">
            {content.eyebrow}
          </p>
          <h1 className="mt-4 max-w-4xl text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.1] tracking-tight">
            {content.heading}
          </h1>
          <p className="mt-6 max-w-[var(--reading-width)] text-base leading-relaxed text-ink-muted sm:text-lg">
            {content.intro}
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href={`/${locale}/expertise`}
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-brand-blue px-5 text-sm font-semibold text-ink transition-colors hover:bg-brand-blue/90 sm:px-7 sm:text-[15px]"
            >
              {content.ctaPrimary}
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-border px-5 text-sm font-semibold text-ink transition-colors hover:border-ink sm:px-7 sm:text-[15px]"
            >
              {content.ctaSecondary}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
