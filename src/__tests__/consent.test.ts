import { beforeEach, describe, expect, it, vi } from "vitest";
import { CONSENT_EVENT, getStoredConsent, storeConsent } from "@/lib/consent";

describe("consent storage", () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it("returns null when no consent decision has been stored", () => {
    expect(getStoredConsent()).toBeNull();
  });

  it("persists a granted decision and reads it back", () => {
    storeConsent("granted");
    expect(getStoredConsent()).toBe("granted");
  });

  it("persists a denied decision and reads it back", () => {
    storeConsent("denied");
    expect(getStoredConsent()).toBe("denied");
  });

  it("dispatches a consent-change event when the decision changes", () => {
    const handler = vi.fn();
    window.addEventListener(CONSENT_EVENT, handler);

    storeConsent("granted");

    expect(handler).toHaveBeenCalledTimes(1);
    const event = handler.mock.calls[0][0] as CustomEvent<string>;
    expect(event.detail).toBe("granted");

    window.removeEventListener(CONSENT_EVENT, handler);
  });
});
