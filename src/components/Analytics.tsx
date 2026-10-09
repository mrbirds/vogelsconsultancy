"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { analyticsConfig, isAnalyticsConfigured } from "@/lib/analytics-config";
import { CONSENT_EVENT, type ConsentState, getStoredConsent } from "@/lib/consent";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

/**
 * Loads Google Analytics 4 only when:
 * 1. Analytics is explicitly enabled via NEXT_PUBLIC_ENABLE_ANALYTICS + NEXT_PUBLIC_GA_ID, and
 * 2. The visitor has explicitly granted consent (Google Consent Mode v2).
 *
 * Consent defaults to "denied" for both analytics and ad storage, and the
 * gtag.js script itself is only injected after consent is granted — not
 * merely "pinged" with a denied signal — to keep behaviour unambiguous.
 */
export function Analytics() {
  const [consent, setConsent] = useState<ConsentState | null>(null);

  useEffect(() => {
    if (!isAnalyticsConfigured) return;

    // Reading persisted consent after mount (rather than during render) is
    // the correct pattern here: it avoids a client/server hydration
    // mismatch, since the stored value only exists in the browser.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setConsent(getStoredConsent());

    const handleConsentChange = (event: Event) => {
      const custom = event as CustomEvent<ConsentState>;
      setConsent(custom.detail);
    };

    window.addEventListener(CONSENT_EVENT, handleConsentChange);
    return () => window.removeEventListener(CONSENT_EVENT, handleConsentChange);
  }, []);

  if (!isAnalyticsConfigured) return null;

  return (
    <>
      <Script id="consent-mode-default" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('consent', 'default', {
            analytics_storage: 'denied',
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            wait_for_update: 500
          });
        `}
      </Script>
      {consent === "granted" ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${analyticsConfig.gaId}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('consent', 'update', { analytics_storage: 'granted' });
              gtag('js', new Date());
              gtag('config', '${analyticsConfig.gaId}', { anonymize_ip: true });
            `}
          </Script>
        </>
      ) : null}
    </>
  );
}
