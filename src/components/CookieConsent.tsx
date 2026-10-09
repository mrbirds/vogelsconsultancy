"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { isAnalyticsConfigured } from "@/lib/analytics-config";
import { getStoredConsent, storeConsent } from "@/lib/consent";
import type { CookieConsentContent } from "@/content/types";
import type { Locale } from "@/lib/locales";

interface CookieConsentProps {
  content: CookieConsentContent;
  locale: Locale;
}

/**
 * Minimal consent banner. Only rendered at all when analytics is actually
 * enabled for this deployment (see PRD §16) — there is nothing to consent
 * to otherwise.
 */
export function CookieConsent({ content, locale }: CookieConsentProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!isAnalyticsConfigured) return;
    // See Analytics.tsx for why this read happens post-mount.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setVisible(getStoredConsent() === null);
  }, []);

  if (!isAnalyticsConfigured || !visible) return null;

  const handleChoice = (granted: boolean) => {
    storeConsent(granted ? "granted" : "denied");
    setVisible(false);
  };

  return (
    <div
      role="region"
      aria-label={content.message}
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-surface px-4 py-4 shadow-[0_-4px_16px_rgba(11,13,16,0.08)] sm:px-6"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-ink-muted">
          {content.message}{" "}
          <Link
            href={`/${locale}/privacy`}
            className="font-medium text-brand-blue-link underline underline-offset-2"
          >
            {content.settingsLink}
          </Link>
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => handleChoice(false)}
            className="min-h-11 rounded-full border border-border px-5 py-2 text-sm font-medium text-ink transition-colors hover:border-ink"
          >
            {content.rejectAll}
          </button>
          <button
            type="button"
            onClick={() => handleChoice(true)}
            className="min-h-11 rounded-full bg-ink px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-ink/90"
          >
            {content.acceptAll}
          </button>
        </div>
      </div>
    </div>
  );
}
