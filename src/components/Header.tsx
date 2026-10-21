import type { Locale } from "@/lib/locales";
import type { NavContent } from "@/content/types";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { SiteNav } from "./SiteNav";

export function Header({ locale, nav }: { locale: Locale; nav: NavContent }) {
  const items = [
    { href: `/${locale}/expertise`, label: nav.expertise },
    { href: `/${locale}/experience`, label: nav.experience },
    { href: `/${locale}/about`, label: nav.about },
    { href: `/${locale}/contact`, label: nav.contact },
  ];

  return (
    <header className="relative z-40 border-b border-border bg-surface">
      <Container className="flex h-20 items-center justify-between sm:h-24">
        <Logo locale={locale} />
        <SiteNav
          locale={locale}
          items={items}
          languageSwitchLabel={nav.languageSwitchLabel}
          menuOpenLabel={nav.menuOpen}
          menuCloseLabel={nav.menuClose}
        />
      </Container>
    </header>
  );
}
