"use client";

import { useEffect, useRef, useState } from "react";
import { analyticsConfig } from "@/lib/analytics-config";
import {
  CONSENT_EVENT,
  type ConsentPreferences,
  getStoredConsent,
  removeAnalyticsCookies,
} from "@/lib/consent";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    [key: `ga-disable-${string}`]: boolean | undefined;
  }
}

const deniedConsent = {
  analytics_storage: "denied",
  ad_storage: "denied",
  ad_user_data: "denied",
  ad_personalization: "denied",
} as const;

export function Analytics() {
  const [consent, setConsent] = useState<ConsentPreferences | null>(null);
  const previousConsent = useRef<boolean | null>(null);
  const configuredSession = useRef(0);
  const consentSession = useRef(0);

  useEffect(() => {
    // Read browser-only storage after hydration to keep server and client markup aligned.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setConsent(getStoredConsent());

    const handleConsentChange = (event: Event) => {
      setConsent((event as CustomEvent<ConsentPreferences>).detail);
    };
    window.addEventListener(CONSENT_EVENT, handleConsentChange);
    return () => window.removeEventListener(CONSENT_EVENT, handleConsentChange);
  }, []);

  useEffect(() => {
    const disableKey = `ga-disable-${analyticsConfig.gaId}` as const;

    if (consent?.analytics !== true) {
      window[disableKey] = true;
      if (previousConsent.current === true) {
        window.gtag?.("consent", "update", deniedConsent);
      }
      removeAnalyticsCookies();
      previousConsent.current = consent?.analytics ?? null;
      return;
    }

    if (previousConsent.current !== true) {
      consentSession.current += 1;
    }
    previousConsent.current = true;
    window[disableKey] = false;

    window.dataLayer = window.dataLayer || [];
    window.gtag =
      window.gtag ||
      function gtag() {
        // eslint-disable-next-line prefer-rest-params -- gtag expects the native Arguments object.
        window.dataLayer?.push(arguments);
      };

    if (configuredSession.current !== consentSession.current) {
      window.gtag("consent", "default", deniedConsent);
      window.gtag("consent", "update", {
        analytics_storage: "granted",
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
      });
      window.gtag("js", new Date());
      window.gtag("config", analyticsConfig.gaId);

      const scriptId = "vogels-ga4-script";
      if (!document.getElementById(scriptId)) {
        const script = document.createElement("script");
        script.id = scriptId;
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${analyticsConfig.gaId}`;
        script.onerror = () => console.error("Google Analytics failed to load.");
        document.head.appendChild(script);
      }
      configuredSession.current = consentSession.current;
    }
  }, [consent]);

  return null;
}
