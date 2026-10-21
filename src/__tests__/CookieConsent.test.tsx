import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import { CookieConsent } from "@/components/CookieConsent";
import {
  COOKIE_SETTINGS_EVENT,
  CONSENT_STORAGE_KEY,
} from "@/lib/consent";

const content = {
  title: "Cookies & analytics",
  body: "Analytics is only enabled with permission.",
  accept: "Accept",
  reject: "Reject",
  moreInfo: "More information",
  close: "Close",
};

describe("cookie consent controls", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("stores rejection and hides the initial banner", async () => {
    render(<CookieConsent content={content} locale="en" />);

    fireEvent.click(await screen.findByRole("button", { name: "Reject" }));

    await waitFor(() =>
      expect(localStorage.getItem(CONSENT_STORAGE_KEY)).toBe(
        JSON.stringify({ analytics: false, version: 1 }),
      ),
    );
    expect(screen.queryByRole("region")).not.toBeInTheDocument();
  });

  it("reopens the controls from the cookie settings event", async () => {
    localStorage.setItem(
      CONSENT_STORAGE_KEY,
      JSON.stringify({ analytics: false, version: 1 }),
    );
    render(<CookieConsent content={content} locale="en" />);

    await waitFor(() => expect(screen.queryByRole("region")).not.toBeInTheDocument());
    window.dispatchEvent(new Event(COOKIE_SETTINGS_EVENT));

    expect(await screen.findByRole("button", { name: "Accept" })).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Accept" }));

    await waitFor(() =>
      expect(localStorage.getItem(CONSENT_STORAGE_KEY)).toBe(
        JSON.stringify({ analytics: true, version: 1 }),
      ),
    );
  });
});
