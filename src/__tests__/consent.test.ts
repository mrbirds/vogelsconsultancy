import { beforeEach, describe, expect, it, vi } from "vitest";
import {
  CONSENT_EVENT,
  CONSENT_STORAGE_KEY,
  CONSENT_VERSION,
  getStoredConsent,
  storeConsent,
} from "@/lib/consent";

describe("consent storage", () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it("returns null when no consent decision has been stored", () => {
    expect(getStoredConsent()).toBeNull();
  });

  it("persists an accepted decision in the versioned consent schema", () => {
    storeConsent(true);
    expect(getStoredConsent()).toEqual({ necessary: true, analytics: true });
    expect(JSON.parse(localStorage.getItem(CONSENT_STORAGE_KEY) ?? "")).toEqual({
      analytics: true,
      version: CONSENT_VERSION,
    });
  });

  it("persists a rejected decision in the versioned consent schema", () => {
    storeConsent(false);
    expect(getStoredConsent()).toEqual({ necessary: true, analytics: false });
    expect(JSON.parse(localStorage.getItem(CONSENT_STORAGE_KEY) ?? "")).toEqual({
      analytics: false,
      version: CONSENT_VERSION,
    });
  });

  it("asks again when the stored consent schema version is outdated", () => {
    localStorage.setItem(
      CONSENT_STORAGE_KEY,
      JSON.stringify({ analytics: true, version: CONSENT_VERSION - 1 }),
    );
    expect(getStoredConsent()).toBeNull();
  });

  it("asks again when the stored consent value is malformed", () => {
    localStorage.setItem(CONSENT_STORAGE_KEY, "{");
    expect(getStoredConsent()).toBeNull();
  });

  it("dispatches a consent-change event when the decision changes", () => {
    const handler = vi.fn();
    window.addEventListener(CONSENT_EVENT, handler);

    storeConsent(true);

    expect(handler).toHaveBeenCalledTimes(1);
    const event = handler.mock.calls[0][0] as CustomEvent<{
      necessary: true;
      analytics: boolean;
    }>;
    expect(event.detail).toEqual({ necessary: true, analytics: true });

    window.removeEventListener(CONSENT_EVENT, handler);
  });
});
