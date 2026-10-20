import type { Metadata } from "next";
import { isLocale, type Locale } from "@/lib/locales";
import { getContent } from "@/content";
import { buildMetadata } from "@/lib/metadata";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { siteConfig } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) return {};
  const content = getContent(rawLocale);
  return buildMetadata(rawLocale, "/contact", content.meta.contact);
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale: Locale = rawLocale;
  const content = getContent(locale);
  const contact = content.contact;

  return (
    <section className="py-[var(--section-space)]">
      <Container className="max-w-[var(--reading-width)]">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-blue-link">
          {contact.eyebrow}
        </p>
        <h1 className="mt-3 text-[clamp(2rem,4vw,3.25rem)] leading-tight">{contact.heading}</h1>
        <p className="mt-5 text-base leading-relaxed text-ink-muted sm:text-lg">{contact.intro}</p>

        <dl className="mt-10 space-y-6 border-t border-border pt-8">
          <div>
            <dt className="text-sm font-semibold uppercase tracking-wide text-ink-muted">
              {contact.emailLabel}
            </dt>
            <dd className="mt-1">
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-lg font-medium text-brand-blue-link underline underline-offset-4"
              >
                {siteConfig.email}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-sm font-semibold uppercase tracking-wide text-ink-muted">
              {contact.linkedinLabel}
            </dt>
            <dd className="mt-1">
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="text-lg font-medium text-brand-blue-link underline underline-offset-4"
              >
                {siteConfig.linkedinHandle}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-sm font-semibold uppercase tracking-wide text-ink-muted">
              {contact.locationLabel}
            </dt>
            <dd className="mt-1 text-lg font-medium text-ink">{siteConfig.location[locale]}</dd>
          </div>
        </dl>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-ink px-7 text-[15px] font-semibold text-white transition-colors hover:bg-ink/90"
          >
            {contact.ctaEmail}
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-border px-7 text-[15px] font-semibold text-ink transition-colors hover:border-ink"
          >
            {contact.ctaLinkedin}
          </a>
        </div>
      </Container>
    </section>
  );
}
