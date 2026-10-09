import type { Content } from "./types";

export const en: Content = {
  locale: "en",
  htmlLang: "en",
  meta: {
    home: {
      title: "Robin Vogels | Technology & Engineering Leader | Vogels Consultancy",
      description:
        "Technology leadership that helps organisations move forward. Independent expertise in solution architecture, platform modernisation and stronger engineering teams.",
    },
    expertise: {
      title: "Expertise | Vogels Consultancy",
      description:
        "Technology & Engineering Leadership, Solution Architecture, Platform Modernisation and Engineering Excellence.",
    },
    experience: {
      title: "Experience | Vogels Consultancy",
      description:
        "Selected experience at DELA, Essent and Freo, complemented by earlier roles at EAGE, VZVZ and Atos Origin / Achmea.",
    },
    about: {
      title: "About | Vogels Consultancy",
      description:
        "From software engineering to technology leadership: the background, way of working and leadership style of Robin Vogels.",
    },
    contact: {
      title: "Contact | Vogels Consultancy",
      description:
        "Get in touch with Robin Vogels for independent technology and engineering consultancy or interim expertise.",
    },
    privacy: {
      title: "Privacy | Vogels Consultancy",
      description: "Privacy statement of Vogels Consultancy.",
    },
  },
  nav: {
    expertise: "Expertise",
    experience: "Experience",
    about: "About",
    contact: "Contact",
    skipToContent: "Skip to content",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    languageSwitchLabel: "Switch to Dutch",
  },
  hero: {
    eyebrow: "Independent technology consultancy",
    heading: "Technology leadership for organisations moving forward.",
    intro:
      "I help organisations modernise digital platforms, make complex technology decisions and strengthen engineering teams for the long term. From strategy and architecture through to delivery.",
    ctaPrimary: "Explore my expertise",
    ctaSecondary: "Get in touch",
  },
  credibility: {
    label: "Experience and expertise",
    line: "20+ years' experience · Technology Leadership · Solution Architecture · Engineering Excellence",
  },
  expertise: {
    eyebrow: "Expertise",
    heading: "How I help",
    items: [
      {
        id: "leadership",
        title: "Technology & Engineering Leadership",
        body: "I set direction for technology and engineering, bringing product goals, teams and stakeholders together. I also help technical leaders and engineers grow.",
      },
      {
        id: "architecture",
        title: "Solution Architecture",
        body: "I turn complex challenges into clear, maintainable architecture for digital platforms, APIs, cloud and integrations.",
      },
      {
        id: "modernisation",
        title: "Platform Modernisation",
        body: "I help modernise legacy platforms and applications step by step, balancing continuity, scalability and a practical path forward.",
      },
      {
        id: "engineering-excellence",
        title: "Engineering Excellence",
        body: "I improve software quality and engineering practice through fit-for-purpose CI/CD, automated testing, observability, security and maintainable ways of working.",
      },
    ],
  },
  approach: {
    eyebrow: "My approach",
    heading: "Clear direction. Trust in teams. Close to the technology.",
    intro:
      "I believe strong engineering starts with clarity: where are we going, why does it matter and which choices will get us there? From that direction, I give teams the space to make decisions and take ownership, while staying close enough to the technology to understand complex choices and contribute where it adds value.",
    principles: [
      {
        title: "Understand",
        body: "Understand the business goals, product ambitions, architecture, teams, dependencies and obstacles before deciding on the solution.",
      },
      {
        title: "Set direction",
        body: "Turn complexity into clear choices and a technology direction that is both ambitious and executable.",
      },
      {
        title: "Create ownership",
        body: "Give people clarity, autonomy and trust so they can make decisions and take responsibility for outcomes.",
      },
      {
        title: "Improve together",
        body: "Work alongside engineers, Product Owners, architects, business stakeholders and partners to turn direction into actual improvement and leave stronger capabilities behind.",
      },
    ],
    closing: "Strategic where needed. Close to the technology where it helps.",
  },
  experience: {
    eyebrow: "Experience",
    heading: "Selected practical experience",
    selectedHeading: "Selected experience",
    companies: [
      {
        id: "dela",
        company: "DELA",
        role: "Technology & Engineering Lead / Solution Architect",
        period: "2021 — present",
        homepageSummary:
          "Technology leadership for three multidisciplinary teams of around 18 people, guiding the evolution of customer-facing digital platforms.",
        homepageHighlights: [
          "Moved from fortnightly releases to multiple deployments a day.",
          "Modernised Sitecore/MVC towards web, API and Azure architecture.",
          "Set technical direction across three teams in a regulated environment.",
        ],
        webSummary:
          "Led the technical direction and evolution of DELA's online domain. I guided three multidisciplinary teams of around 18 people, connecting product goals with sustainable architecture choices.",
        keyAreas: [
          "Set technology strategy, architecture and engineering standards for the online domain, translating product goals into sustainable choices.",
          "Led three multidisciplinary teams with Product Owners and Scrum Masters; recruited and developed engineering capability.",
          "Modernised Sitecore/MVC towards modern web, API and Azure architectures.",
          "Improved CI/CD from fortnightly releases to multiple deployments a day; introduced Infrastructure-as-Code, Dynatrace and Application Insights.",
          "Worked with business, marketing, architecture, security and technology partners on platform choices and delivery in a regulated environment.",
          "Worked with iDIN, eHerkenning, Wwft and EAA; evaluated a new CMS and generative AI for development and prototyping.",
        ],
        quote:
          "Clear direction, trust and ownership: teams perform best when people understand where they are going, have the freedom to make decisions and are trusted to take responsibility for outcomes.",
      },
      {
        id: "essent",
        company: "Essent",
        role: "Lead Consultant",
        period: "Jun 2020 — Apr 2022",
        homepageSummary:
          "Shaped the architecture and modernisation of the online platform, including a move to headless architecture and an upgrade from Sitecore 9.3 to 10.1.",
        homepageHighlights: [
          "Set technical direction for the online platform.",
          "Helped move the platform towards headless architecture.",
          "Upgraded Sitecore from 9.3 to 10.1.",
        ],
        webSummary:
          "Lead consultant responsible for the architecture, modernisation and technical quality of Essent's online platform. Worked on improving platform stability, performance and software quality while helping shape the transition towards a more modern, headless architecture. Combined solution architecture with hands-on engineering and technical guidance of the development team.",
        keyAreas: [
          "Solution architecture and technical direction.",
          "Modernisation towards a headless architecture.",
          "Sitecore 9.3 to 10.1 migration.",
          "Platform stability, performance and software quality.",
          "CI/CD and automated testing.",
          "Technical guidance and support for developers.",
          "Hands-on software development where needed.",
        ],
        technology: ".NET / C#, Sitecore, Azure, Angular, CI/CD, automated testing",
      },
      {
        id: "freo",
        company: "Freo",
        role: "Senior Team Lead",
        period: "Feb 2019 — Jun 2020",
        homepageSummary:
          "Led the technical evolution of freo.nl, focusing on modernisation, software quality and automated releases.",
        homepageHighlights: [
          "Modernised the platform and development practices.",
          "Improved CI/CD and automated testing.",
          "Provided technical guidance to the team.",
        ],
        webSummary:
          "Lead consultant responsible for the development and technical evolution of freo.nl, combining software engineering with technical leadership and delivery responsibilities. Worked on modernising the platform and development process, with a strong focus on software quality, automated delivery and maintainability. In addition to hands-on development, provided technical guidance to the team and contributed to the Scrum process.",
        keyAreas: [
          "Development and modernisation of freo.nl.",
          "Technical guidance within the development team.",
          "CI/CD and automated testing.",
          "Personalisation and digital customer experience.",
          "Software quality and maintainability.",
          "Scrum Master responsibilities alongside the technical role.",
        ],
        technology: "Sitecore, C# / .NET, Azure DevOps, CI/CD, automated testing",
      },
    ],
    earlierHeading: "Earlier experience",
    earlierIntro:
      "Before my current assignments, I worked in a range of lead, architecture and delivery roles across digital platforms and software development.",
    earlierExperience: {
      period: "2014–2019",
      title: "DearNova — technical leadership and project delivery",
      body: "As Senior Team Lead and Project Manager, I also held technical leadership roles at organisations including DELA, EAGE and VZVZ. My work increasingly shifted from software development towards technical leadership, architecture and team development.",
    },
    careerFoundation: {
      period: "2001–2014",
      title: "Foundation in software engineering and architecture",
      body: "I began as a software engineer and grew into architecture and project leadership. Work with Netaspect, Atos Origin, Interpolis and Achmea gave me a broad foundation in software development and complex organisations.",
    },
    technologyHeading: "Technology",
    technologyList: [
      "Microsoft Azure",
      "Azure DevOps",
      "Infrastructure-as-Code",
      "C# / .NET",
      "React / Next.js",
      "REST APIs / Azure API Management",
      "Sitecore XP / SXA",
      "Dynatrace",
      "Application Insights",
      "Azure AD B2C",
      "iDIN",
      "eHerkenning",
      "Generative AI & MCP",
    ],
    viewAllCta: "Explore my experience",
  },
  about: {
    eyebrow: "About",
    heading: "From software engineer to technology leader",
    paragraphs: [
      "I am Robin Vogels. Over more than 20 years, I have grown from software engineer and solution architect into a technology leader, with more than a decade of experience setting direction for teams and technology.",
      "I enjoy working in complex organisations where different interests and dependencies meet. I connect technology, product and business goals, helping teams and stakeholders make clear decisions.",
      "What energises me is bringing people, technology and ambition together: making complex challenges easier to act on, helping teams grow, and seeing improvements deliver real results.",
      "After many years building software myself, I still like to stay close to the technology. I set direction and build trust, helping teams take ownership of outcomes that last.",
    ],
    factsHeading: "At a glance",
    facts: [
      "Rosmalen, the Netherlands",
      "Higher Informatics — Fontys University of Applied Sciences",
      "Professional Scrum Master I",
      "Dutch / English",
    ],
    photoAlt: "Portrait photo of Robin Vogels",
  },
  contact: {
    eyebrow: "Contact",
    heading: "Technology challenges that call for direction and experience?",
    intro:
      "Whether you are modernising a platform, making complex architecture choices or strengthening an engineering team, I would be glad to help shape an approach. Vogels Consultancy provides independent consultancy and interim expertise.",
    emailLabel: "Email",
    linkedinLabel: "LinkedIn",
    locationLabel: "Location",
    ctaEmail: "Send an email",
    ctaLinkedin: "View LinkedIn",
  },
  footer: {
    tagline: "Independent Technology Consultant",
    privacy: "Privacy",
    rightsReserved: (year: number) => `© ${year} Vogels Consultancy. All rights reserved.`,
  },
  privacy: {
    heading: "Privacy",
    intro:
      "Vogels Consultancy treats personal data with care. This page explains which data is processed and why.",
    sections: [
      {
        heading: "Contact details",
        body: [
          "When you get in touch by email or LinkedIn, the information you provide is used solely to respond to your message.",
        ],
      },
      {
        heading: "Analytics and cookies",
        body: [
          "This website only uses analytics when explicitly configured, and only after you have given consent. Without consent, no analytics or marketing cookies are placed.",
          "When analytics is active, Google Analytics 4 is used with Google Consent Mode v2 and privacy-friendly defaults. You can change your preference at any time.",
        ],
      },
      {
        heading: "Your rights",
        body: [
          "You have the right to request access to, correction of, or deletion of your data. Please get in touch via robin@vogelsconsultancy.nl.",
        ],
      },
    ],
  },
  cookieConsent: {
    message:
      "This website only uses analytics with your consent. Without consent, no analytics cookies are placed.",
    acceptAll: "Accept",
    rejectAll: "Reject",
    settingsLink: "More information",
  },
  notFound: {
    heading: "Page not found",
    body: "The page you are looking for does not exist or has moved.",
    cta: "Back to home",
  },
};
