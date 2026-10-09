import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/locales";
import type { FooterContent } from "@/content/types";
import { Container } from "./Container";
import { siteConfig } from "@/lib/site";
import { LanguageSwitch } from "./LanguageSwitch";

export function Footer({
  locale,
  content,
  languageSwitchLabel,
}: {
  locale: Locale;
  content: FooterContent;
  languageSwitchLabel: string;
}) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface-subtle">
      <Container className="flex flex-col gap-8 py-12 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-start gap-4">
          <Image
            src="/images/vogels-consultancy-logo.png"
            alt="Vogels Consultancy"
            width={274}
            height={195}
            className="h-9 w-auto"
          />
          <div>
            <p className="font-semibold text-ink">{siteConfig.person}</p>
            <p className="text-sm text-ink-muted">{content.tagline}</p>
          </div>
        </div>

        <div className="flex flex-col gap-2 text-sm text-ink-muted sm:items-end">
          <a href={`mailto:${siteConfig.email}`} className="hover:text-brand-blue-link">
            {siteConfig.email}
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="hover:text-brand-blue-link"
          >
            LinkedIn
          </a>
          <Link href={`/${locale}/privacy`} className="hover:text-brand-blue-link">
            {content.privacy}
          </Link>
          <LanguageSwitch locale={locale} label={languageSwitchLabel} />
        </div>
      </Container>
      <Container className="border-t border-border py-6">
        <p className="text-xs text-ink-muted">{content.rightsReserved(year)}</p>
      </Container>
    </footer>
  );
}
