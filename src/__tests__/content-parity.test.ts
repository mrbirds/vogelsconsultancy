import { describe, expect, it } from "vitest";
import { nl } from "@/content/nl";
import { en } from "@/content/en";
import { clientLogos } from "@/content/clients";

/**
 * Walks two objects and asserts they expose the same set of keys at every
 * level, regardless of value. This catches a missing translation key in
 * either locale file without hard-coding the full content shape here.
 */
function collectKeyPaths(value: unknown, prefix = ""): string[] {
  if (Array.isArray(value)) {
    // Arrays of primitives are fine; arrays of objects are checked via the
    // first element's shape (both locales must have equal-length content
    // arrays for structural items like expertise/experience entries).
    if (value.length > 0 && typeof value[0] === "object" && value[0] !== null) {
      return collectKeyPaths(value[0], `${prefix}[]`);
    }
    return [];
  }

  if (value !== null && typeof value === "object") {
    return Object.entries(value as Record<string, unknown>).flatMap(([key, val]) => {
      const path = prefix ? `${prefix}.${key}` : key;
      return [path, ...collectKeyPaths(val, path)];
    });
  }

  return [];
}

describe("content parity between nl and en", () => {
  it("exposes the same key structure in both locales", () => {
    const nlKeys = collectKeyPaths(nl).sort();
    const enKeys = collectKeyPaths(en).sort();
    expect(enKeys).toEqual(nlKeys);
  });

  it("has the same number of expertise items", () => {
    expect(en.expertise.items.length).toBe(nl.expertise.items.length);
  });

  it("uses the four approved expertise areas", () => {
    const titles = [
      "Technology & Engineering Leadership",
      "Solution Architecture",
      "Platform Modernisation",
      "Engineering Excellence",
    ];
    expect(en.expertise.items.map((item) => item.title)).toEqual(titles);
    expect(nl.expertise.items.map((item) => item.title)).toEqual(titles);
  });

  it("has the same number of selected experience companies", () => {
    expect(en.experience.companies.length).toBe(nl.experience.companies.length);
    expect(en.experience.companies.map((c) => c.id)).toEqual(
      nl.experience.companies.map((c) => c.id),
    );
  });

  it("keeps the three homepage cases concise and uses the authoritative DELA logo", () => {
    expect(nl.experience.companies.map((company) => company.id)).toEqual([
      "dela",
      "essent",
      "freo",
    ]);
    expect(
      nl.experience.companies.every((company) => company.homepageHighlights.length <= 3),
    ).toBe(true);
    expect(
      en.experience.companies.every((company) => company.homepageHighlights.length <= 3),
    ).toBe(true);
    expect(clientLogos.find((logo) => logo.id === "dela")?.logoFile).toBe(
      "/images/clients/dela-logo.png",
    );
  });

  it("has the same number of approach principles", () => {
    expect(en.approach.principles.length).toBe(nl.approach.principles.length);
  });

  it("does not leave any copy field empty", () => {
    const assertNonEmpty = (value: unknown, path: string) => {
      if (typeof value === "string") {
        expect(value.trim().length, `${path} should not be empty`).toBeGreaterThan(0);
      } else if (Array.isArray(value)) {
        value.forEach((item, index) => assertNonEmpty(item, `${path}[${index}]`));
      } else if (value !== null && typeof value === "object") {
        Object.entries(value as Record<string, unknown>).forEach(([key, val]) =>
          assertNonEmpty(val, `${path}.${key}`),
        );
      }
    };

    assertNonEmpty(nl, "nl");
    assertNonEmpty(en, "en");
  });
});
