import type { ContactContent } from "@/content/types";
import { siteConfig } from "@/lib/site";
import { Container } from "./Container";

export function ContactCTA({ content, locale }: { content: ContactContent; locale: "nl" | "en" }) {
  return (
    <section className="border-t border-border bg-surface-subtle py-16 sm:py-20" aria-labelledby="contact-cta-heading">
      <Container className="max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-blue-link">
          {content.eyebrow}
        </p>
        <h2 id="contact-cta-heading" className="mt-3 text-[1.9rem] leading-tight sm:text-4xl">
          {content.heading}
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-ink-muted">{content.intro}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-ink px-7 text-[15px] font-semibold text-white transition-colors hover:bg-ink/90"
          >
            {content.ctaEmail}
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-border px-7 text-[15px] font-semibold text-ink transition-colors hover:border-ink"
          >
            {content.ctaLinkedin}
          </a>
        </div>
        <p className="mt-6 text-sm text-ink-muted">{siteConfig.location[locale]}</p>
      </Container>
    </section>
  );
}
