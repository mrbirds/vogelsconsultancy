import Link from "next/link";
import type { HeroContent } from "@/content/types";
import type { Locale } from "@/lib/locales";
import { Container } from "./Container";

export function Hero({ locale, content }: { locale: Locale; content: HeroContent }) {
  return (
    <section className="border-b border-border bg-surface">
      <Container className="max-w-4xl py-20 sm:py-28 lg:py-32">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-blue-link">
            {content.eyebrow}
          </p>
          <h1 className="mt-4 max-w-4xl text-[1.875rem] leading-[1.08] tracking-tight sm:text-6xl lg:text-[4.25rem]">
            {content.heading}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink-muted sm:text-xl">
            {content.intro}
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href={`/${locale}/expertise`}
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-brand-blue px-3 text-sm font-semibold text-ink transition-colors hover:bg-brand-blue/90 sm:px-7 sm:text-[15px]"
            >
              {content.ctaPrimary}
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-border px-3 text-sm font-semibold text-ink transition-colors hover:border-ink sm:px-7 sm:text-[15px]"
            >
              {content.ctaSecondary}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
