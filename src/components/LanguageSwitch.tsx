"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import type { Locale } from "@/lib/locales";

const LOCALE_COOKIE = "NEXT_LOCALE";

export function LanguageSwitch({
  locale,
  label,
}: {
  locale: Locale;
  label: string;
}) {
  const pathname = usePathname() ?? `/${locale}`;
  const otherLocale: Locale = locale === "nl" ? "en" : "nl";
  const rest = pathname.replace(/^\/(nl|en)/, "");
  const target = `/${otherLocale}${rest}`;

  const handleClick = () => {
    document.cookie = `${LOCALE_COOKIE}=${otherLocale}; path=/; max-age=${60 * 60 * 24 * 365}; samesite=lax`;
  };

  return (
    <Link
      href={target}
      hrefLang={otherLocale}
      onClick={handleClick}
      aria-label={label}
      className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-border px-4 text-sm font-semibold text-ink transition-colors hover:border-ink"
    >
      {otherLocale.toUpperCase()}
    </Link>
  );
}
