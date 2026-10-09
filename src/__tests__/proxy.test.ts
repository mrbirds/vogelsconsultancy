import { describe, expect, it } from "vitest";
import { NextRequest } from "next/server";
import { detectLocale, proxy } from "@/proxy";

function makeRequest(url: string, headers: Record<string, string> = {}) {
  return new NextRequest(new URL(url, "https://www.vogelsconsultancy.nl"), {
    headers,
  });
}

describe("detectLocale", () => {
  it("uses the NEXT_LOCALE cookie when present", () => {
    const request = makeRequest("/", { cookie: "NEXT_LOCALE=en" });
    expect(detectLocale(request)).toBe("en");
  });

  it("falls back to the Accept-Language header when there is no cookie", () => {
    const request = makeRequest("/", { "accept-language": "en-US,en;q=0.9" });
    expect(detectLocale(request)).toBe("en");
  });

  it("defaults to nl when nothing matches", () => {
    const request = makeRequest("/", { "accept-language": "fr-FR,fr;q=0.9" });
    expect(detectLocale(request)).toBe("nl");
  });
});

describe("proxy", () => {
  it("redirects the root path to a locale-prefixed path", () => {
    const request = makeRequest("/", { "accept-language": "en-US,en;q=0.9" });
    const response = proxy(request);
    expect(response.status).toBe(307);
    expect(response.headers.get("location")).toBe("https://www.vogelsconsultancy.nl/en");
  });

  it("preserves the deep path when prefixing the locale", () => {
    const request = makeRequest("/expertise", { "accept-language": "nl-NL,nl;q=0.9" });
    const response = proxy(request);
    expect(response.headers.get("location")).toBe(
      "https://www.vogelsconsultancy.nl/nl/expertise",
    );
  });

  it("passes requests that already have a valid locale segment through unchanged", () => {
    const request = makeRequest("/nl/expertise");
    const response = proxy(request);
    expect(response.status).toBe(200);
  });
});
