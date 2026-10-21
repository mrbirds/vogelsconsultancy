/**
 * Shared content shape for both locales. Keep `nl.ts` and `en.ts`
 * semantically equivalent and structurally identical to this interface
 * so a missing translation key is caught at compile time.
 */

export interface PageMeta {
  title: string;
  description: string;
}

export interface NavContent {
  expertise: string;
  experience: string;
  about: string;
  contact: string;
  skipToContent: string;
  menuOpen: string;
  menuClose: string;
  languageSwitchLabel: string;
}

export interface HeroContent {
  eyebrow: string;
  heading: string;
  intro: string;
  ctaPrimary: string;
  ctaSecondary: string;
}

export interface CredibilityContent {
  label: string;
  line: string;
}

export interface ExpertiseItem {
  id: string;
  title: string;
  body: string;
}

export interface ExpertiseContent {
  eyebrow: string;
  heading: string;
  /**
   * Optional: the PRD only approves the eyebrow/heading copy for this
   * section, so no intro paragraph is set by default. Add one in
   * nl.ts/en.ts only if genuinely approved copy becomes available.
   */
  intro?: string;
  items: ExpertiseItem[];
}

export interface ExpertisePageArea {
  id: string;
  title: string;
  statement: string;
  capabilities: string[];
}

export interface ExpertisePageContent {
  eyebrow: string;
  heading: string;
  intro: string;
  areasLabel: string;
  areas: ExpertisePageArea[];
  proofHeading: string;
  proofPoints: string[];
  experienceLink: string;
  ctaLabel: string;
  ctaHeading: string;
  ctaIntro: string;
  ctaButton: string;
}

export interface ApproachPrinciple {
  title: string;
  body: string;
}

export interface ApproachContent {
  eyebrow: string;
  heading: string;
  intro: string;
  principles: ApproachPrinciple[];
  closing: string;
}

export interface CompanyExperience {
  id: string;
  company: string;
  role: string;
  period: string;
  homepageSummary: string;
  /** Concise homepage bullets — maximum three, per PRD §32. */
  homepageHighlights: string[];
  webSummary: string;
  caseStudy:
    | {
        kind: "featured";
        labels: {
          leadership: string;
          architecture: string;
          engineering: string;
          business: string;
        };
        leadership: string;
        architecture: string;
        business: string;
        result: string;
        resultDetail: string;
        engineeringMaturity: string;
      }
    | {
        kind: "narrative";
        contributions: string[];
      };
}

export interface ExperiencePeriodBlock {
  period: string;
  title: string;
  role: string;
  body: string;
}

export interface ExperienceContent {
  eyebrow: string;
  heading: string;
  /** See ExpertiseContent.intro — optional, no approved copy by default. */
  intro?: string;
  selectedHeading: string;
  /** See ExpertiseContent.intro — optional, no approved copy by default. */
  selectedIntro?: string;
  companies: CompanyExperience[];
  earlierHeading: string;
  earlierIntro: string;
  /** Client engagements before the selected cases, kept visually subordinate. */
  earlierExperience: ExperiencePeriodBlock[];
  /** Earlier career foundation, deliberately the least prominent section. */
  careerFoundation: ExperiencePeriodBlock[];
  technologyHeading: string;
  /** No approved copy for this section's intro paragraph; keep optional. */
  technologyIntro?: string;
  technologyList: string[];
  viewAllCta: string;
}

export interface AboutContent {
  eyebrow: string;
  heading: string;
  paragraphs: string[];
  factsHeading: string;
  facts: string[];
  photoAlt: string;
}

export interface ContactContent {
  eyebrow: string;
  heading: string;
  intro: string;
  emailLabel: string;
  linkedinLabel: string;
  locationLabel: string;
  ctaEmail: string;
  ctaLinkedin: string;
}

export interface FooterContent {
  tagline: string;
  privacy: string;
  cookieSettings: string;
  rightsReserved: (year: number) => string;
}

export interface PrivacyContent {
  heading: string;
  intro: string;
  sections: { heading: string; body: string[] }[];
}

export interface CookieConsentContent {
  title: string;
  body: string;
  accept: string;
  reject: string;
  privacyPolicy: string;
  close: string;
}

export interface NotFoundContent {
  heading: string;
  body: string;
  cta: string;
}

export interface Content {
  locale: "nl" | "en";
  htmlLang: string;
  meta: {
    home: PageMeta;
    expertise: PageMeta;
    experience: PageMeta;
    about: PageMeta;
    contact: PageMeta;
    privacy: PageMeta;
  };
  nav: NavContent;
  hero: HeroContent;
  credibility: CredibilityContent;
  expertise: ExpertiseContent;
  expertisePage: ExpertisePageContent;
  approach: ApproachContent;
  experience: ExperienceContent;
  about: AboutContent;
  contact: ContactContent;
  footer: FooterContent;
  privacy: PrivacyContent;
  cookieConsent: CookieConsentContent;
  notFound: NotFoundContent;
}
