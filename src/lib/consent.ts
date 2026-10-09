export const CONSENT_STORAGE_KEY = "vc-analytics-consent";
export const CONSENT_EVENT = "vc-consent-change";

export type ConsentState = "granted" | "denied";

export function getStoredConsent(): ConsentState | null {
  if (typeof window === "undefined") return null;
  const value = window.localStorage.getItem(CONSENT_STORAGE_KEY);
  return value === "granted" || value === "denied" ? value : null;
}

export function storeConsent(state: ConsentState): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(CONSENT_STORAGE_KEY, state);
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: state }));
}
