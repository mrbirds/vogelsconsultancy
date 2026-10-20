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

  it("keeps the expertise page concise and aligned in both languages", () => {
    const ids = ["leadership", "architecture", "modernisation", "engineering-excellence"];

    expect(nl.expertisePage.areas.map((area) => area.id)).toEqual(ids);
    expect(en.expertisePage.areas.map((area) => area.id)).toEqual(ids);
    expect(nl.expertisePage.areas.every((area) => area.capabilities.length <= 3)).toBe(true);
    expect(en.expertisePage.areas.every((area) => area.capabilities.length <= 3)).toBe(true);
    expect(nl.expertisePage.proofPoints).toHaveLength(3);
    expect(en.expertisePage.proofPoints).toHaveLength(3);
    expect(nl.expertisePage.experienceLink).toBe("Bekijk mijn ervaring →");
    expect(en.expertisePage.experienceLink).toBe("Explore my experience →");
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

  it("aligns selected roles and dates with the CV", () => {
    const [delaNl, essentNl, freoNl] = nl.experience.companies;
    const [delaEn, essentEn, freoEn] = en.experience.companies;

    expect(delaNl.role).toBe("Engineering Lead & Solution Architect");
    expect(delaEn.role).toBe(delaNl.role);
    expect(delaNl.period).toContain("2021");
    expect(delaNl.homepageSummary).toContain("21");
    expect(delaEn.homepageSummary).toContain("21");

    expect(essentNl.role).toBe("Lead Consultant / Solution Architect");
    expect(essentEn.role).toBe(essentNl.role);
    expect(essentNl.period).toBe("jul 2020 — apr 2022");
    expect(essentEn.period).toBe("Jul 2020 — Apr 2022");

    expect(freoNl.role).toBe("Lead Sitecore Developer / Scrum Master");
    expect(freoEn.role).toBe(freoNl.role);
    expect(freoNl.period).toBe("feb 2019 — jul 2020");
    expect(freoEn.period).toBe("Feb 2019 — Jul 2020");
  });

  it("keeps the Experience cases concise and evidence-led", () => {
    for (const content of [nl, en]) {
      const [dela, essent, freo] = content.experience.companies;
      expect(dela.evidenceGroups).toHaveLength(4);
      expect(essent.evidenceGroups).toHaveLength(3);
      expect(freo.evidenceGroups).toHaveLength(3);
      expect(content.experience.earlierExperience.length).toBe(1);
      expect(content.experience.careerFoundation.length).toBe(4);
    }

    expect(nl.experience.companies[0].evidenceGroups.map(({ heading }) => heading)).toEqual([
      "Leiderschap & organisatie",
      "Business & innovatie",
      "Engineering Excellence",
      "Architectuur & digitaal landschap",
    ]);
    expect(en.experience.companies[0].evidenceGroups.map(({ heading }) => heading)).toEqual([
      "Leadership & organisation",
      "Business & innovation",
      "Engineering excellence",
      "Architecture & digital landscape",
    ]);
    expect(nl.experience.companies[1].evidenceGroups[2].body).toContain("Sitecore 9.3");
    expect(en.experience.companies[2].evidenceGroups[2].body).toContain("WhatsApp chatbot");
  });

  it("keeps About facts aligned in both locales", () => {
    expect(nl.about.factsHeading).toBe("In het kort");
    expect(nl.about.facts).toEqual([
      "20+ jaar software engineering",
      "10+ jaar technisch leiderschap",
      "Engineering Lead & Solution Architect",
      "Rosmalen, Nederland",
      "Nederlands & Engels",
    ]);
    expect(en.about.factsHeading).toBe("At a glance");
    expect(en.about.facts).toEqual([
      "20+ years software engineering",
      "10+ years technical leadership",
      "Engineering Lead & Solution Architect",
      "Rosmalen, the Netherlands",
      "Dutch & English",
    ]);
    expect([...nl.about.facts, ...en.about.facts].join(" ")).not.toContain(
      "Professional Scrum Master I",
    );
  });

  it("includes the 2017–2019 DELA assignment in earlier experience", () => {
    const delaNl = nl.experience.earlierExperience.find((item) =>
      item.title.includes("DELA Nederland"),
    );
    const delaEn = en.experience.earlierExperience.find((item) =>
      item.title.includes("DELA Nederland"),
    );

    expect(delaNl?.period).toBe("mei 2017 — feb 2019");
    expect(delaNl?.title).toContain("opdracht via DearNova");
    expect(delaNl?.role).toBe("Lead Sitecore Developer / Technical Lead");
    expect(delaEn?.period).toBe("May 2017 — Feb 2019");
    expect(delaEn?.title).toContain("engagement via DearNova");
    expect(delaEn?.role).toBe("Lead Sitecore Developer / Technical Lead");
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
