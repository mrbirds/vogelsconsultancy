export interface ClientLogo {
  id: string;
  name: string;
  tier: "primary" | "secondary";
  /** Relative path under /public to the official logo asset. */
  logoFile?: string;
  /** Intrinsic pixel dimensions of the source asset, used to render it at its original aspect ratio. */
  width?: number;
  height?: number;
  /** Small optical adjustment for differences in the supplied artwork's visual density. */
  visualScale?: number;
}

/**
 * These six logo assets were supplied directly by Robin Vogels, who has
 * confirmed the right to use them on this site (see
 * public/images/clients/README.md for provenance and permission notes).
 *
 * They are used exactly as supplied: original colours, proportions and
 * (where present) background are preserved. Nothing is downloaded,
 * recoloured, cropped or recreated. The EAGE logo in particular carries its
 * own teal background and is intentionally not treated as transparent.
 *
 * Only the organisations below have a usable logo asset. ANWB, Unigarant,
 * Interpolis and Zilveren Kruis — mentioned in the "Atos Origin / Achmea"
 * earlier-career entry — are referenced in text only, in line with the
 * PRD's instruction to avoid an oversized logo cloud.
 */
export const clientLogos: ClientLogo[] = [
  {
    id: "dela",
    name: "DELA",
    tier: "primary",
    logoFile: "/images/clients/dela-logo.png",
    width: 3500,
    height: 1057,
    visualScale: 1,
  },
  {
    id: "essent",
    name: "Essent",
    tier: "primary",
    logoFile: "/images/clients/essent.png",
    width: 1193,
    height: 272,
    visualScale: 1.08,
  },
  {
    id: "freo",
    name: "Freo",
    tier: "primary",
    logoFile: "/images/clients/freo.jpg",
    width: 815,
    height: 340,
    visualScale: 0.78,
  },
  {
    id: "eage",
    name: "EAGE",
    tier: "secondary",
    // The compact variant (wordmark only, no tagline) stays legible at the
    // small size used in the earlier-experience timeline; the PRD requires
    // using only one of the two supplied EAGE variants.
    logoFile: "/images/clients/eage-alternative.webp",
    width: 360,
    height: 280,
  },
  {
    id: "vzvz",
    name: "VZVZ",
    tier: "secondary",
    logoFile: "/images/clients/vzvz.png",
    width: 1202,
    height: 522,
  },
  {
    id: "achmea",
    name: "Achmea",
    tier: "secondary",
    logoFile: "/images/clients/achmea.png",
    width: 500,
    height: 500,
  },
];
