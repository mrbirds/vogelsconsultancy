export const CONSENT_STORAGE_KEY = "vogels-consent";
export const CONSENT_EVENT = "vogels-consent-change";
export const COOKIE_SETTINGS_EVENT = "vogels-cookie-settings";
export const CONSENT_VERSION = 1;

export type ConsentState = "accepted" | "rejected";

interface StoredConsent {
  analytics: boolean;
  version: number;
}

export function getStoredConsent(): ConsentState | null {
  if (typeof window === "undefined") return null;

  const value = window.localStorage.getItem(CONSENT_STORAGE_KEY);
  if (!value) return null;

  let stored: unknown;
  try {
    stored = JSON.parse(value);
  } catch {
    return null;
  }

  if (
    typeof stored !== "object" ||
    stored === null ||
    !("version" in stored) ||
    !("analytics" in stored) ||
    stored.version !== CONSENT_VERSION ||
    typeof stored.analytics !== "boolean"
  ) {
    return null;
  }

  return stored.analytics ? "accepted" : "rejected";
}

export function storeConsent(state: ConsentState): void {
  if (typeof window === "undefined") return;

  const value: StoredConsent = {
    analytics: state === "accepted",
    version: CONSENT_VERSION,
  };
  window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(value));
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: state }));
}

export function removeAnalyticsCookies(): void {
  if (typeof document === "undefined") return;

  const cookieNames = document.cookie
    .split(";")
    .map((cookie) => cookie.trim().split("=")[0])
    .filter((name) => /^_ga(?:_|$)/.test(name));
  const hostParts = window.location.hostname.split(".");
  const domains = hostParts.length > 1
    ? hostParts.slice(0, -1).map((_, index) => hostParts.slice(index).join("."))
    : [];

  for (const name of cookieNames) {
    document.cookie = `${name}=; Max-Age=0; path=/`;
    for (const domain of domains) {
      document.cookie = `${name}=; Max-Age=0; path=/; domain=${domain}`;
      document.cookie = `${name}=; Max-Age=0; path=/; domain=.${domain}`;
    }
  }
}
