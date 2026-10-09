import Image from "next/image";
import Link from "next/link";
import type { HeroContent } from "@/content/types";
import type { Locale } from "@/lib/locales";
import { Container } from "./Container";

export function Hero({ locale, content }: { locale: Locale; content: HeroContent }) {
  return (
    <section className="border-b border-border bg-surface">
      <Container className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16 lg:py-28">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-blue-link">
            {content.eyebrow}
          </p>
          <h1 className="mt-4 text-[2.4rem] leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem]">
            {content.heading}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted sm:text-xl">
            {content.intro}
          </p>
          <p className="mt-5 text-base font-medium text-ink">{content.supportingLine}</p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href={`/${locale}/contact`}
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-ink px-7 text-[15px] font-semibold text-white transition-colors hover:bg-ink/90"
            >
              {content.ctaPrimary}
            </Link>
            <Link
              href={`/${locale}/experience`}
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-border px-7 text-[15px] font-semibold text-ink transition-colors hover:border-ink"
            >
              {content.ctaSecondary}
            </Link>
          </div>
        </div>

        <div className="mx-auto w-full max-w-sm lg:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-surface-subtle">
            <Image
              src="/images/robin-vogels-profile.jpg"
              alt={content.photoAlt}
              fill
              priority
              sizes="(min-width: 1024px) 420px, 80vw"
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
