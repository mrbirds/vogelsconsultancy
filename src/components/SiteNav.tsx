"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import type { Locale } from "@/lib/locales";
import { LanguageSwitch } from "./LanguageSwitch";

interface NavItem {
  href: string;
  label: string;
}

export function SiteNav({
  locale,
  items,
  languageSwitchLabel,
  menuOpenLabel,
  menuCloseLabel,
}: {
  locale: Locale;
  items: NavItem[];
  languageSwitchLabel: string;
  menuOpenLabel: string;
  menuCloseLabel: string;
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() ?? "";

  return (
    <>
      <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
        {items.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              className={`text-[15px] font-medium transition-colors hover:text-brand-blue-link ${
                isActive ? "text-ink" : "text-ink-muted"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
        <LanguageSwitch locale={locale} label={languageSwitchLabel} />
      </nav>

      <button
        type="button"
        className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-border md:hidden"
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? menuCloseLabel : menuOpenLabel}
        onClick={() => setOpen((v) => !v)}
      >
        <span aria-hidden="true" className="relative block h-3.5 w-5">
          <span
            className={`absolute left-0 top-0 block h-0.5 w-5 bg-ink transition-transform ${
              open ? "translate-y-[6px] rotate-45" : ""
            }`}
          />
          <span
            className={`absolute left-0 top-1/2 block h-0.5 w-5 -translate-y-1/2 bg-ink transition-opacity ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute bottom-0 left-0 block h-0.5 w-5 bg-ink transition-transform ${
              open ? "-translate-y-[6px] -rotate-45" : ""
            }`}
          />
        </span>
      </button>

      {open ? (
        <div
          id="mobile-nav"
          className="absolute inset-x-0 top-full border-b border-border bg-surface px-6 py-6 shadow-sm md:hidden"
        >
          <nav aria-label="Primary" className="flex flex-col gap-5">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-lg font-medium text-ink"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2">
              <LanguageSwitch locale={locale} label={languageSwitchLabel} />
            </div>
          </nav>
        </div>
      ) : null}
    </>
  );
}
