"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { CookieConsentContent } from "@/content/types";
import type { Locale } from "@/lib/locales";
import {
  COOKIE_SETTINGS_EVENT,
  getStoredConsent,
  storeConsent,
  type ConsentState,
} from "@/lib/consent";

interface CookieConsentProps {
  content: CookieConsentContent;
  locale: Locale;
}

export function CookieConsent({ content, locale }: CookieConsentProps) {
  const [ready, setReady] = useState(false);
  const [visible, setVisible] = useState(false);
  const [canClose, setCanClose] = useState(false);

  useEffect(() => {
    const storedConsent = getStoredConsent();
    // Consent is read after hydration to prevent a banner flash for returning visitors.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setVisible(storedConsent === null);
    setCanClose(storedConsent !== null);
    setReady(true);

    const openSettings = () => {
      setCanClose(true);
      setVisible(true);
    };
    window.addEventListener(COOKIE_SETTINGS_EVENT, openSettings);
    return () => window.removeEventListener(COOKIE_SETTINGS_EVENT, openSettings);
  }, []);

  const handleChoice = (choice: ConsentState) => {
    storeConsent(choice);
    setCanClose(true);
    setVisible(false);
  };

  if (!ready || !visible) return null;

  return (
    <aside
      role="region"
      aria-labelledby="cookie-consent-title"
      className="fixed inset-x-3 bottom-3 z-50 rounded-xl border border-border bg-surface p-4 shadow-[0_8px_32px_rgba(11,13,16,0.14)] sm:inset-x-auto sm:bottom-6 sm:right-6 sm:w-[min(34rem,calc(100vw-3rem))] sm:p-6"
    >
      <div className="flex items-start justify-between gap-4">
        <h2 id="cookie-consent-title" className="text-base font-semibold text-ink">
          {content.title}
        </h2>
        {canClose ? (
          <button
            type="button"
            onClick={() => setVisible(false)}
            className="shrink-0 rounded text-sm text-ink-muted underline underline-offset-2 hover:text-ink"
          >
            {content.close}
          </button>
        ) : null}
      </div>
      <p className="mt-2 text-[13px] leading-5 text-ink-muted">
        {content.body}{" "}
        <Link
          href={`/${locale}/privacy`}
          className="font-medium text-brand-blue-link underline underline-offset-2"
        >
          {content.moreInfo}
        </Link>
      </p>
      <div className="mt-4 flex gap-2 sm:mt-5 sm:justify-end sm:gap-3">
        <button
          type="button"
          onClick={() => handleChoice("rejected")}
          className="min-h-10 flex-1 rounded-full border border-border px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-ink sm:flex-none sm:px-5"
        >
          {content.reject}
        </button>
        <button
          type="button"
          onClick={() => handleChoice("accepted")}
          className="min-h-10 flex-1 rounded-full bg-brand-blue px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-blue/90 sm:flex-none sm:px-5"
        >
          {content.accept}
        </button>
      </div>
    </aside>
  );
}
