import Image from "next/image";
import Link from "next/link";
import type { AboutContent } from "@/content/types";
import type { Locale } from "@/lib/locales";
import { Container } from "./Container";

export function AboutPreview({ locale, content }: { locale: Locale; content: AboutContent }) {
  return (
    <section className="py-16 sm:py-20" aria-labelledby="about-preview-heading">
      <Container className="grid gap-10 lg:grid-cols-[0.55fr_1fr] lg:items-center lg:gap-16">
        <div className="relative mx-auto aspect-square w-48 overflow-hidden rounded-full bg-surface-subtle sm:w-56 lg:mx-0">
          <Image
            src="/images/robin-vogels-profile.jpg"
            alt={content.photoAlt}
            fill
            sizes="224px"
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-blue-link">
            {content.eyebrow}
          </p>
          <h2 id="about-preview-heading" className="mt-3 text-[1.9rem] leading-tight sm:text-4xl">
            {content.previewHeading}
          </h2>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink-muted">
            {content.previewIntro}
          </p>
          <Link
            href={`/${locale}/about`}
            className="mt-6 inline-flex text-[15px] font-semibold text-brand-blue-link underline underline-offset-4"
          >
            {content.previewCta}
          </Link>
        </div>
      </Container>
    </section>
  );
}
