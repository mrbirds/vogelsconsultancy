---
date: 2026-10-09
language: nl-NL
title: PRD --- Vogels Consultancy website
version: 3.4
---

# PRD --- Vogels Consultancy website

## 1. Doel

Bouw een hoogwaardige, snelle, tweetalige website voor **Vogels
Consultancy**, de eenmanszaak van Robin Vogels.

De website is geen online cv en geen generieke IT-consultancywebsite.
Het primaire doel is om binnen enkele seconden duidelijk te maken:

1.  wie Robin is;
2.  op welk niveau hij opereert;
3.  welke problemen hij voor organisaties helpt oplossen;
4.  wat hem onderscheidt van zowel een puur strategisch consultant als
    een puur hands-on engineer;
5.  welke relevante ervaring zijn positionering onderbouwt;
6.  hoe een potentiële opdrachtgever contact kan opnemen.

De positionering moet passen bij Robins huidige profiel: **Technology &
Engineering Leader / Solution Architect / Independent Technology
Consultant** met een sterke software-engineeringachtergrond.

## 2. Bronnen en bronprioriteit

Gebruik voor inhoud uitsluitend deze bronnen, in deze volgorde:

1.  Dit PRD en de hierin goedgekeurde webcopy.
2.  De door Robin aangeleverde LinkedIn About-tekst en LinkedIn
    Experience-teksten.
3.  Het definitieve cv `20260925 CV Robin Vogels.docx`.
4.  Aangeleverde assets: Vogels Consultancy-logo en profielfoto.
5.  Officiële websites van opdrachtgevers uitsluitend voor hun actuele
    logo/brand asset.

**Niet doen:** zelf verantwoordelijkheden, resultaten, klantnamen,
aantallen, certificeringen, technologieën of testimonials verzinnen.
Copilot mag teksten technisch verwerken, maar mag geen nieuwe claims
toevoegen.

## 3. Positionering

### Kern

Robin is geen consultant die alleen adviesrapporten of
architectuurplaten oplevert en ook geen engineer die uitsluitend een
backlog uitvoert.

Zijn onderscheidende combinatie is:

-   technology & engineering leadership;
-   solution architecture;
-   digital/platform modernisation;
-   engineering excellence;
-   cloud & DevOps;
-   team leadership en capability building;
-   verbinding tussen business, product en technologie;
-   voldoende technische diepgang om dicht bij de uitvoering te blijven.

### Carrièreverhaal

Laat subtiel zien dat Robin zich gedurende ruim twintig jaar heeft
ontwikkeld van software engineering en solution architecture naar
technology leadership, engineering management en strategische technische
verantwoordelijkheid.

Gebruik **20+ jaar software engineering** en **10+ jaar technical
leadership** als credibility markers.

### Primaire doelgroepen

-   CTO, CIO, Head of Engineering / IT;
-   Engineering Managers en Technology Directors;
-   Product- en Digital Directors;
-   organisaties met complexe digitale platformen of
    moderniseringsvraagstukken;
-   organisaties die tijdelijk senior technology leadership, solution
    architecture of engineering improvement nodig hebben.

## 4. Merkidentiteit

### Logo

Gebruik uitsluitend het aangeleverde bestand:

`/public/images/vogels-consultancy-logo.png`

Het logo heeft een witte achtergrond. Plaats het daarom bij voorkeur op
wit. Geen recoloring, vervorming, schaduw, animatie of nagetekende
variant.

### Kleuren

De visuele identiteit moet rechtstreeks voortbouwen op het bestaande
logo.

Design tokens:

-   `--brand-blue: #3FA9F5`
-   `--ink: #0B0D10`
-   `--ink-muted: #66707A`
-   `--surface: #FFFFFF`
-   `--surface-subtle: #F5F7F9`
-   `--border: #DCE3E8`
-   `--surface-dark: #101820`

Bepaal daarnaast een donkerdere afgeleide van brand blue voor kleine
tekstlinks op wit die WCAG AA haalt.

Gebruik het heldere blauw als herkenbaar accent, niet als grote
achtergrondkleur. Geen turquoise of tweede concurrerende accentkleur
toevoegen.

### Typografie

Gebruik **Manrope** via `next/font/google`; Next.js moet het font
tijdens build optimaliseren/self-hosten.

-   H1: 48--64 px desktop, 38--44 px mobiel, 650--700.
-   H2: 34--44 px desktop, 30--34 px mobiel, 600--700.
-   H3: 20--24 px, 600.
-   Body: 17--18 px desktop, 16--17 px mobiel, line-height circa 1.6.
-   Metadata: minimaal 14 px.

Veel witruimte. Geen overmatig ALL CAPS. Geen serif als tweede
designfont.

### Visuele stijl

Premium, rustig, persoonlijk en technisch volwassen. Vermijd de
uitstraling van:

-   een SaaS-template;
-   een traditioneel detacheringsbureau;
-   een corporate consultancy met stockfoto's;
-   een developerportfolio met neon/terminal-esthetiek.

Gebruik geen generieke stockfotografie. De aangeleverde foto van Robin
is de primaire menselijke visual.

## 5. Informatiearchitectuur

Tweetalig met locale-routes:

-   `/nl`
-   `/en`

Pagina's:

-   Home
-   Expertise
-   Ervaring / Experience
-   Over mij / About
-   Contact
-   Privacy

Navigatie NL: `Expertise | Ervaring | Over mij | Contact | EN`

Navigatie EN: `Expertise | Experience | About | Contact | NL`

Logo linkt naar locale-home.

## 6. Homepage

Aanbevolen volgorde:

1.  Header
2.  Hero
3.  Credibility markers
4.  Waarmee ik help / How I help
5.  Mijn aanpak / My approach
6.  Selected experience + opdrachtgeverlogo's
7.  Geselecteerde praktijkervaring
8.  Over Robin
9.  Contact CTA
10. Footer

### 6.1 Hero --- Nederlands

Eyebrow:

**Technology & Engineering Leadership**

H1:

**Technisch leiderschap dat strategie, architectuur en engineering
verbindt.**

Intro:

> Ik help organisaties richting te geven aan complexe digitale
> omgevingen en hun engineering structureel te verbeteren. Van
> technologiestrategie en solution architecture tot
> platformmodernisering, engineering excellence en het versterken van
> teams.

Supporting line:

> Ruim 20 jaar ervaring in software engineering. Meer dan 10 jaar in
> technisch leiderschap.

CTA primair:

**Kennismaken**

CTA secundair:

**Bekijk mijn ervaring**

Plaats de aangeleverde profielfoto prominent naast de hero-copy op
desktop en logisch boven/onder de tekst op mobiel.

### 6.2 Hero --- English

Eyebrow:

**Technology & Engineering Leadership**

H1:

**Technology leadership connecting strategy, architecture and
engineering.**

Intro:

> I help organisations set direction in complex digital environments and
> improve engineering in a sustainable way --- from technology strategy
> and solution architecture to platform modernisation, engineering
> excellence and stronger teams.

Supporting line:

> 20+ years in software engineering. 10+ years in technology leadership.

CTA:

**Let's talk**

Secondary:

**View my experience**

### 6.3 Credibility markers

Gebruik rustige typografische markers, geen grote marketingcijfers:

-   20+ years software engineering
-   10+ years technology leadership
-   Leadership across multidisciplinary engineering teams
-   Strategy to hands-on technical depth

Vertaal correct naar NL.

## 7. Expertise

Presenteer expertise vanuit klantproblemen en resultaten, niet als
technology-tag cloud.

### 7.1 Technology & Engineering Leadership

NL:

> Richting geven aan technologie en engineering over teams heen. Ik help
> organisaties technische keuzes, architectuur, engineeringstandaarden
> en productambities bij elkaar te brengen en creëer duidelijkheid waar
> meerdere teams en stakeholders samenkomen.

EN:

> Providing direction across technology and engineering. I help
> organisations align technology choices, architecture, engineering
> standards and product ambitions, creating clarity where multiple teams
> and stakeholders come together.

### 7.2 Solution Architecture & Digital Platforms

NL:

> Complexe digitale landschappen terugbrengen tot heldere, duurzame
> keuzes. Van web- en API-architectuur tot cloudplatformen, integraties,
> identity en de modernisering van legacy.

EN:

> Turning complex digital landscapes into clear, sustainable technology
> choices --- across web and API architecture, cloud platforms,
> integrations, identity and legacy modernisation.

### 7.3 Platform Modernisation

NL:

> Moderniseren zonder de continuïteit uit het oog te verliezen. Ik help
> organisaties evolueren van legacy en monolithische oplossingen naar
> beter schaalbare, onafhankelijk deploybare en beheersbare digitale
> services.

EN:

> Modernising without losing sight of continuity. I help organisations
> evolve legacy and monolithic solutions towards more scalable,
> independently deployable and maintainable digital services.

### 7.4 Engineering Excellence

NL:

> Engineeringkwaliteit structureel verbeteren via CI/CD,
> testautomatisering, observability, Infrastructure-as-Code, security,
> technische standaarden en aandacht voor technical debt.

EN:

> Structurally improving engineering quality through CI/CD, automated
> testing, observability, Infrastructure-as-Code, security, engineering
> standards and active management of technical debt.

### 7.5 Teams & Engineering Capability

NL:

> Sterkere engineeringteams bouwen door duidelijke richting, coaching,
> eigenaarschap, recruitment en het ontwikkelen van technische leiders
> en engineers.

EN:

> Building stronger engineering teams through clear direction, coaching,
> ownership, recruitment and the development of technical leaders and
> engineers.

### 7.6 Technology Advisory

NL:

> Product Owners, business stakeholders en management helpen om ambities
> te vertalen naar haalbare technische keuzes, roadmaps en investeringen
> --- inclusief leveranciers- en platformselectie, security en
> compliance.

EN:

> Helping Product Owners, business stakeholders and management translate
> ambitions into feasible technology choices, roadmaps and investments
> --- including vendor and platform selection, security and compliance.

## 8. Mijn aanpak / My approach

Deze sectie moet persoonlijk voelen en rechtstreeks aansluiten bij
Robins leadership philosophy.

### Nederlands

Titel:

**Duidelijke richting. Vertrouwen in teams. Technisch dichtbij.**

Intro:

> Ik geloof dat sterke engineering begint met duidelijkheid: waar willen
> we naartoe, waarom is dat belangrijk en welke keuzes horen daarbij?
> Vanuit die richting geef ik teams ruimte om beslissingen te nemen en
> verantwoordelijkheid te pakken. Tegelijk blijf ik technisch dichtbij
> genoeg om complexe keuzes te doorgronden en mee te helpen wanneer dat
> waarde toevoegt.

Vier principes:

**1. Begrijpen**\
\> Eerst de context begrijpen: businessdoelen, productambities,
architectuur, teams, afhankelijkheden en de knelpunten die verbetering
in de weg staan.

**2. Richting geven**\
\> Complexiteit terugbrengen tot heldere keuzes en een technische koers
die ambitieus én uitvoerbaar is.

**3. Eigenaarschap creëren**\
\> Teams presteren het beste wanneer mensen begrijpen waar ze naartoe
werken, autonomie hebben om beslissingen te nemen en vertrouwd worden om
verantwoordelijkheid te nemen voor het resultaat.

**4. Samen verbeteren**\
\> Niet vanaf de zijlijn adviseren. Ik werk met engineers, Product
Owners, architecten, business en partners om verbeteringen daadwerkelijk
te realiseren en kennis duurzaam in de organisatie te verankeren.

Closing statement:

**Strategisch waar het nodig is. Technisch dichtbij waar het helpt.**

### English

Title:

**Clear direction. Trust in teams. Close to the technology.**

Intro:

> I believe strong engineering starts with clarity: where are we going,
> why does it matter and which choices will get us there? From that
> direction, I give teams the space to make decisions and take
> ownership, while staying close enough to the technology to understand
> complex choices and contribute where it adds value.

Principles:

**Understand** --- Understand the business goals, product ambitions,
architecture, teams, dependencies and obstacles before deciding on the
solution.

**Set direction** --- Turn complexity into clear choices and a
technology direction that is both ambitious and executable.

**Create ownership** --- Give people clarity, autonomy and trust so they
can make decisions and take responsibility for outcomes.

**Improve together** --- Work alongside engineers, Product Owners,
architects, business stakeholders and partners to turn direction into
actual improvement and leave stronger capabilities behind.

Closing:

**Strategic where needed. Close to the technology where it helps.**

Vormgeving: rustige vierstappen-flow. Geen funnels, maturity-model
graphics of generieke consultancy-iconografie.

## 9. Selected experience

Gebruik officiële, actuele logo's van opdrachtgevers indien rechtmatig
beschikbaar. Sla lokale, geoptimaliseerde versies op; hotlink niet.

Prioriteit homepage:

1.  DELA
2.  Essent
3.  Freo

Optioneel in een tweede, subtielere rij: EAGE, VZVZ, Achmea, ANWB,
Unigarant, Interpolis, Zilveren Kruis.

Logo's zijn bewijs van ervaring, geen impliciete endorsement. Gebruik
geen tekst zoals "trusted by" tenzij expliciet toegestaan.

### 9.1 DELA

Rol:

**Technology & Engineering Lead / Solution Architect**

Periode:

**2021 -- present**

Homepage summary EN:

> Technology and engineering leadership for DELA's online domain,
> covering three multidisciplinary teams of approximately 18
> professionals and the technical evolution of customer-facing digital
> platforms.

Highlights:

-   Technology strategy, architecture and engineering standards across
    the online domain.
-   Translating business ambitions and product roadmaps into sustainable
    technology choices.
-   Leadership across three multidisciplinary teams together with
    Product Owners and Scrum Masters.
-   Platform modernisation towards independently deployable digital
    services.
-   Engineering excellence across CI/CD, quality, observability,
    security and technical debt.
-   Technology and vendor selection, including strategic platform and
    CMS decisions.
-   Recruitment and development of engineering capability.
-   Collaboration with business owners, marketing, architecture,
    security and technology partners.
-   Technology delivery in a regulated environment, including
    accessibility and compliance.
-   Support for international digital initiatives.

NL-webversie:

> Technisch leiderschap voor het online domein van DELA, met
> verantwoordelijkheid voor drie multidisciplinaire teams van circa 18
> professionals en de technische ontwikkeling van klantgerichte digitale
> platformen.

Maak vervolgens 4 compacte highlights: - technologiestrategie &
architectuur; - engineering leadership & capability; -
platformmodernisering & engineering excellence; - business, partners,
security & compliance.

Neem de langere details op de Experience-pagina op.

Leadership quote/paraphrase:

> Duidelijke richting, vertrouwen en eigenaarschap: teams presteren het
> beste wanneer mensen begrijpen waar ze naartoe werken, ruimte krijgen
> om beslissingen te nemen en verantwoordelijkheid dragen voor het
> resultaat.

Aanvullende cv-feiten die op de Experience-pagina mogen worden
gebruikt: - future-state modernisation van Sitecore/MVC naar moderne
web-, API- en Azure-architecturen; - CI/CD van tweewekelijkse releases
naar meerdere deployments per dag; - Infrastructure-as-Code; - Dynatrace
en Application Insights; - iDIN, eHerkenning, WWFT en EAA; -
selectie/evaluatie nieuw CMS-platform; - Generative AI in development,
code reviews, prototyping en tooling.

### 9.2 Essent

Rol:

**Lead Consultant**

Periode:

**Jun 2020 -- Apr 2022**

EN:

> Lead consultant responsible for the architecture, modernisation and
> technical quality of Essent's online platform.

> Worked on improving platform stability, performance and software
> quality while helping shape the transition towards a more modern,
> headless architecture. Combined solution architecture with hands-on
> engineering and technical guidance of the development team.

Key areas: - Solution architecture and technical direction. -
Modernisation towards a headless architecture. - Sitecore 9.3 to 10.1
migration. - Platform stability, performance and software quality. -
CI/CD and automated testing. - Technical guidance and support for
developers. - Hands-on software development where needed.

Technology:
`.NET / C#, Sitecore, Azure, Angular, CI/CD, automated testing`

NL:

> Verantwoordelijk voor architectuur, modernisering en technische
> kwaliteit van het online platform van Essent. Combineerde solution
> architecture met hands-on engineering en technische begeleiding van
> het developmentteam, met focus op stabiliteit, performance,
> softwarekwaliteit en de beweging naar een modernere headless
> architectuur.

### 9.3 Freo

Rol:

**Senior Team Lead**

Periode:

**Feb 2019 -- Jun 2020**

EN:

> Lead consultant responsible for the development and technical
> evolution of freo.nl, combining software engineering with technical
> leadership and delivery responsibilities.

> Worked on modernising the platform and development process, with a
> strong focus on software quality, automated delivery and
> maintainability. In addition to hands-on development, provided
> technical guidance to the team and contributed to the Scrum process.

Key areas: - Development and modernisation of freo.nl. - Technical
guidance within the development team. - CI/CD and automated testing. -
Personalisation and digital customer experience. - Software quality and
maintainability. - Scrum Master responsibilities alongside the technical
role.

Technology:
`Sitecore, C# / .NET, Azure DevOps, CI/CD, automated testing`

NL:

> Verantwoordelijk voor de ontwikkeling en technische evolutie van
> freo.nl, waarbij software engineering werd gecombineerd met technisch
> leiderschap en deliveryverantwoordelijkheid. Focus op modernisering,
> softwarekwaliteit, geautomatiseerde delivery en onderhoudbaarheid.

## 10. Earlier experience

Op de Experience-pagina compact opnemen:

-   **EAGE --- Lead Sitecore Developer / Technical Lead (2016--2017):**
    nieuwbouw digitaal platform, Microsoft Dynamics-integratie, webshop,
    testing en CI/CD.
-   **VZVZ --- Lead .NET Developer / Technical Lead (2015--2016):**
    portal voor medische gegevens, DigiD-integratie en codekwaliteit.
-   **DELA --- Lead .NET / Sitecore Developer / Scrum Master
    (2014--2015):** Technical Lead en Scrum Master van twee teams bij
    herbouw van dela.nl en mijn.dela.nl.
-   **Atos Origin / Achmea (2001--2013):** Senior .NET Developer / Scrum
    Master / Project Manager; opdrachten voor onder andere ANWB,
    Unigarant, Achmea, Interpolis en Zilveren Kruis.

LinkedIn toont daarnaast DearNova als werkgever met rollen Senior Team
Lead en Project Manager. Gebruik dit alleen als organisatorische
context; voeg zonder aanvullende bron geen niet-bevestigde
projectdetails toe.

## 11. Over Robin

### Nederlands

Titel:

**Van software engineering naar technology leadership**

Copy:

> Ik ben Robin Vogels, technology & engineering leader met ruim 20 jaar
> ervaring in software engineering en meer dan 10 jaar in technisch
> leiderschap.
>
> Mijn loopbaan begon dicht op de techniek, als software engineer en
> later solution architect. In de loop der jaren is mijn
> verantwoordelijkheid verbreed naar het leiden van teams, het bepalen
> van technische richting en het verbeteren van engineering binnen
> complexe digitale omgevingen.
>
> Ik werk graag op het snijvlak van technologie, product en business.
> Dat betekent dat ik met engineers en architecten de diepte in kan,
> maar net zo gemakkelijk met Product Owners, business stakeholders en
> management werk aan keuzes, prioriteiten en roadmaps.
>
> Mijn leiderschapsstijl draait om duidelijke richting, vertrouwen en
> eigenaarschap. Ik geloof dat sterke teams het beste presteren wanneer
> mensen begrijpen waar ze naartoe werken, ruimte krijgen om
> beslissingen te nemen en verantwoordelijkheid kunnen nemen voor het
> resultaat.
>
> Doordat ik jarenlang zelf software heb gebouwd, blijf ik graag dicht
> genoeg bij de techniek om keuzes echt te begrijpen. Ik voel me het
> meest thuis in omgevingen waar technologie belangrijk is voor de
> business, waar betekenisvolle complexiteit bestaat en waar de ambitie
> is om zowel het product als de engineeringorganisatie beter te maken.

Kleine facts: - Rosmalen, Nederland - Hogere Informatica --- Fontys
Hogescholen - Professional Scrum Master I - Nederlands / English

### English

Title:

**From software engineering to technology leadership**

Use the user's supplied LinkedIn About as the semantic source. The
English website may use this polished web version:

> I am a technology and engineering leader with a background in software
> engineering, solution architecture and digital platforms. Over the
> course of my career, I have moved from building software and designing
> solutions to leading teams, shaping technology strategy and driving
> engineering improvement across complex digital environments.
>
> I enjoy working where technology, product and business meet. I can
> move comfortably between strategic discussions and technical depth,
> working with engineers and architects as well as Product Owners,
> business stakeholders and management.
>
> My leadership style is based on clear direction, trust and ownership.
> I believe strong teams perform best when people understand where they
> are going, have the freedom to make decisions and are trusted to take
> responsibility.
>
> Having spent many years close to software engineering, I stay close
> enough to the technology to understand complex choices and contribute
> where it adds value. I particularly enjoy environments where
> technology matters to the business, where there is meaningful
> complexity and where there is ambition to improve both the product and
> the engineering organisation.

Gebruik de aangeleverde profielfoto:
`/public/images/robin-vogels-profile.jpg`

Crop zorgvuldig; gezicht niet agressief bijsnijden.

## 12. Technology

Technologie ondersteunt de positionering maar domineert de website niet.

Selectie: - Microsoft Azure - Azure DevOps - Infrastructure-as-Code - C#
/ .NET - React / Next.js - REST APIs / Azure API Management - Sitecore
XP / SXA - Dynatrace - Application Insights - Azure AD B2C - iDIN -
eHerkenning - Generative AI & MCP

Geen bewegende logo-cloud.

## 13. Contact

Primair doel: laagdrempelige zakelijke kennismaking.

NL:

**Een technisch vraagstuk of behoefte aan ervaren technology
leadership?**

> Neem gerust contact op voor een kennismaking over technology
> leadership, solution architecture, platformmodernisering of
> engineering improvement.

EN:

**A technology challenge or need for experienced technology
leadership?**

> Get in touch to discuss technology leadership, solution architecture,
> platform modernisation or engineering improvement.

Contactgegevens: - `robin@vogelsconsultancy.nl` - LinkedIn:
`linkedin.com/in/robinvogels` - Rosmalen, Nederland

Toon telefoonnummer niet prominent op de publieke website tenzij later
expliciet gewenst.

Contactformulier optioneel. Als er geen backend/mailservice is
geconfigureerd, toon geen nepformulier; gebruik mailto en LinkedIn.

## 14. Meertaligheid

Volledig Nederlands en Engels. Geen client-side vertaalmachine.

Eisen: - locale routes `/nl` en `/en`; - correcte `lang` attributen; -
locale-aware navigation; - `hreflang` voor `nl-NL`, `en` en
`x-default`; - canonical URLs; - locale metadata; - taalkeuze bewaren in
cookie of localStorage zonder tracking; - root `/` mag browsertaal
gebruiken en anders naar `/nl` gaan.

## 15. Technische stack

Gebruik bij implementatie de **nieuwste stabiele, onderling compatibele
versies op dat moment**. Pin versies in `package.json`; gebruik geen
beta, RC of canary zonder expliciete reden.

Voorkeursstack: - Next.js --- nieuwste stable, App Router - React ---
nieuwste stable compatible met gekozen Next.js - TypeScript --- nieuwste
stable - Tailwind CSS --- nieuwste stable - ESLint --- actuele
Next.js-compatible configuratie - `next/font` - `next/image` - bij
voorkeur zo min mogelijk dependencies

Architectuur: - Server Components standaard. - Client Components alleen
waar interactie vereist is. - Static generation waar mogelijk. - Geen
CMS voor v1; content in typed locale/content files zodat later een CMS
kan worden toegevoegd. - Geen database nodig. - Deploybaar naar Vercel
of Azure Static Web Apps/App Service zonder inhoudelijke afhankelijkheid
van één hoster.

## 16. Google Analytics & privacy

Analytics moet optioneel implementeerbaar zijn via environment
variables:

-   `NEXT_PUBLIC_GA_ID`
-   `NEXT_PUBLIC_ENABLE_ANALYTICS`

Wanneer niet geconfigureerd: laad geen Google Analytics-code.

Wanneer geconfigureerd: - GA4; - Google Consent Mode v2; - analytics pas
activeren conform gegeven toestemming; - privacyvriendelijke defaults; -
cookievoorkeuren kunnen later worden aangepast; - geen marketingcookies
in v1 tenzij expliciet toegevoegd.

Voeg een eenvoudige privacy/cookie component toe die alleen verschijnt
wanneer tracking daadwerkelijk is ingeschakeld.

Gebruik geen analytics voor development/preview deployments tenzij
expliciet ingesteld.

## 17. SEO

Per locale: - unieke title en meta description; - canonical; - Open
Graph; - Twitter/X metadata; - sitemap.xml; - robots.txt; - hreflang; -
Organization/Person/ProfessionalService structured data waar feitelijk
correct.

Voorbeeld NL title:
`Robin Vogels | Technology & Engineering Leadership | Vogels Consultancy`

Voorbeeld EN:
`Robin Vogels | Technology & Engineering Leader | Vogels Consultancy`

Geen keyword stuffing.

## 18. Accessibility

Doel: WCAG 2.2 AA.

Minimaal: - semantische HTML; - correcte heading-hiërarchie; - keyboard
navigation; - zichtbare focus; - skip link; - voldoende contrast; -
alt-tekst; - respecteer `prefers-reduced-motion`; - buttons en links
correct onderscheiden; - minimaal 44x44px interactieve touch targets
waar passend; - formulieren met labels en toegankelijke foutmeldingen.

## 19. Performance

Streef naar: - Lighthouse Performance ≥ 95; - Accessibility ≥ 95; - Best
Practices ≥ 95; - SEO ≥ 95; - Core Web Vitals in groene zone.

Optimaliseer: - `next/image`; - correcte `sizes`; - AVIF/WebP waar
passend; - font subsets; - minimale JS; - geen zware animation
libraries; - logo/SVG-assets waar officieel beschikbaar; - lazy loading
onder de fold.

## 20. Opdrachtgeverlogo's

Gebruik actuele officiële logo's van de genoemde organisaties, bij
voorkeur uit officiële brand/media-assets.

Regels: - geen logo reconstrueren; - geen Google Images-downloads; -
geen hotlinks; - behoud aspect ratio; - gebruik uniforme visuele hoogte,
niet uniforme breedte; - waar mogelijk SVG; - respecteer
merkvoorwaarden; - indien gebruiksrecht onduidelijk is, laat
implementatie de asset eenvoudig vervangbaar maken en noteer dit in
README.

Logo's mogen desgewenst visueel rustig/grayscale worden weergegeven,
maar alleen via CSS als dat de merkrichtlijnen niet schendt; bij hover
kan origineel verschijnen. Geen logo's recoloren in het Vogels-blauw.

## 21. Motion & interactie

Subtiel: - kleine fade/translate bij secties; - zachte hover states; -
max circa 150--250 ms; - geen parallax; - geen scroll-jacking; - geen
grote animated gradients; - respecteer reduced motion.

## 22. Footer

Bevat: - compact Vogels Consultancy-logo; - Robin Vogels; - Independent
Technology Consultant; - e-mail; - LinkedIn; - Privacy; - taalwissel; -
copyright huidig jaar.

Geen social icons behalve LinkedIn tenzij later gevraagd.

## 23. Content die niet op de site hoort

Niet publiceren: - uurtarief; - telefoonnummer zonder expliciete
keuze; - interne DELA-informatie; - namen van individuele
stakeholders; - toekomstige ondernemings-/BV-plannen; -
beschikbaarheidsclaim zonder expliciete bevestiging; -
privé-informatie; - testimonials die niet expliciet voor websitegebruik
zijn goedgekeurd.

## 24. Implementatiestructuur

Voorgesteld:

``` text
src/
  app/
    [locale]/
      page.tsx
      expertise/page.tsx
      experience/page.tsx
      about/page.tsx
      contact/page.tsx
      privacy/page.tsx
      layout.tsx
  components/
    Header.tsx
    Hero.tsx
    ExpertiseGrid.tsx
    Approach.tsx
    ExperienceLogos.tsx
    ExperienceCard.tsx
    AboutPreview.tsx
    ContactCTA.tsx
    Footer.tsx
    LanguageSwitch.tsx
    Analytics.tsx
    CookieConsent.tsx
  content/
    nl.ts
    en.ts
  lib/
    analytics.ts
    metadata.ts
public/
  images/
    vogels-consultancy-logo.png
    robin-vogels-profile.jpg
    clients/
```

Pas structuur aan als de nieuwste Next.js-conventies een betere
oplossing bieden.

## 25. Tests en kwaliteit

Minimaal: - TypeScript strict. - ESLint zonder errors. - production
build zonder errors/warnings die aandacht vereisen. - tests voor
language switch, primaire navigatie en analytics-consentlogica. -
controleer beide locales op ontbrekende keys. - Lighthouse-check. -
responsive controle op minimaal 375, 768, 1024 en 1440 px. - geen
horizontale overflow.

## 26. README

Documenteer: - lokale installatie; - benodigde Node-versie; -
development/build/start; - deployment; - analytics configuratie; -
toevoegen/vervangen klantlogo's; - aanpassen content; - toevoegen van
nieuwe locale; - privacy-impact van analytics.

## 27. Definition of Done

De site is gereed wanneer:

-   NL en EN volledig werken;
-   alle pagina's responsive zijn;
-   aangeleverd Vogels-logo correct wordt gebruikt;
-   profielfoto correct wordt gebruikt;
-   content overeenkomt met dit PRD;
-   DELA, Essent en Freo correct als selected experience zijn
    uitgewerkt;
-   overige ervaring correct is opgenomen;
-   officiële klantlogo's lokaal zijn geïntegreerd of duidelijk als
    ontbrekende asset zijn gemarkeerd;
-   SEO/hreflang/sitemap/robots werken;
-   analytics optioneel en consent-aware is;
-   toegankelijkheid en performance op niveau zijn;
-   er geen verzonnen claims of placeholder-copy staat;
-   de website professioneel voelt als persoonlijke senior technology
    consultancy, niet als cv of detacheringsbureau.

# 28. Opdracht aan GitHub Copilot

Bouw de volledige production-ready website op basis van dit PRD.

Werk zelfstandig door tot de Definition of Done is bereikt. Lees eerst
het volledige PRD en inspecteer de aangeleverde assets. Gebruik de
nieuwste stabiele, onderling compatibele versies van de beschreven stack
op het moment van implementatie.

Behandel de goedgekeurde copy in dit document als inhoudelijke bron.
Verzin geen zakelijke claims. Als een officieel klantlogo niet
betrouwbaar of rechtmatig kan worden verkregen, gebruik dan geen
nagemaakt logo maar implementeer een nette tijdelijke tekstweergave en
documenteer welke asset nog nodig is.

Prioriteiten, in volgorde:

1.  correcte inhoud en positionering;
2.  sterke responsive UX en visuele kwaliteit;
3.  accessibility;
4.  performance;
5.  SEO en internationalisation;
6.  onderhoudbaarheid en eenvoudige configuratie;
7.  optionele privacyvriendelijke analytics.

De einduitkomst moet voelen als de website van een ervaren Technology &
Engineering Leader die zelfstandig organisaties adviseert en leidt ---
persoonlijk, inhoudelijk sterk, technisch geloofwaardig en zonder
consultancyclichés.


---

# 29. Bindende correcties v3.1 — favicon, opdrachtgeverlogo's en volledige loopbaan

Deze sectie heeft **voorrang** op eerdere bepalingen over de ervaringensectie en favicon.

## 29.1 Favicon en app icons — verplicht

In dit pakket zijn de volgende **echte, gegenereerde assets** aanwezig:

- `src/app/icon.png`: transparant favicon gebaseerd op uitsluitend de blauwe vleugels uit het originele Vogels-logo;
- `public/favicon.ico`: multi-resolution ICO (16, 32, 48 en 64 pixels);
- `public/favicon-512.png`: 512x512 PNG voor high-resolution icon use;
- `public/apple-touch-icon.png`: 180x180 Apple touch icon;
- `public/images/vogels-consultancy-logo.png`: originele, niet aangepaste bedrijfslogo;
- `public/images/robin-vogels-profile.jpg`: originele profielfoto.

Gebruik de vleugels als favicon, niet het volledige woordmerk (dat wordt op 16x16 onleesbaar). De favicon is een afgeleide van het aangeleverde eigen logo, geen gegenereerd alternatief. Zorg voor juiste Next.js App Router metadata en favicon routing, en voorkom conflicterende oude Next.js default favicon assets. Controleer expliciet dat het zwarte Next.js N-icoon nergens meer wordt getoond. Browsercache kan een hard refresh vereisen.

## 29.2 Opdrachtgeverlogo's — verplichte kwaliteitscontrole

**Het pakket bevat momenteel geen opdrachtgeverlogo's.** Niet doen alsof die zijn meegeleverd. De ontwikkelaar moet alleen echte, officieel verkregen en voor deze toepassing toegestane logo-assets toevoegen. Geen tekst als vervanging presenteren als definitieve uitkomst. Als rechten of asset niet geregeld zijn: documenteer per organisatie het openstaande item en markeer de logo-integratie als niet afgerond.

Primaire prioriteit: DELA, Essent, Freo. Secundair: EAGE, VZVZ, Achmea. Overige organisaties hoeven niet allemaal een logo te krijgen. Vermijd overvolle logo-clouds. Gebruik assets lokaal in `public/images/clients/`, met behoud van verhoudingen en merkkleuren. Geen generieke logo-API's, ongecontroleerde scraping of nagemaakte beeldmerken.

**Rechten:** Opdrachtgever zijn geeft niet automatisch toestemming voor merkgebruik op een commerciële consultancywebsite. Controleer gebruiksvoorwaarden of vraag toestemming, met name bij Essent en Freo. Beschrijf werkervaring ook wanneer een logo nog niet geplaatst kan worden.

## 29.3 Homepage — ervaring kort houden

Op homepage maximaal drie uitgelichte opdrachten (DELA, Essent, Freo), met een compacte verwijzing `Bekijk mijn volledige ervaring` / `Explore my experience`. Toon hier geen twee losse rijen organisatienamen boven de cases. Gebruik bij de uitgelichte cases officiële logo's wanneer beschikbaar en toegestaan.

## 29.4 Ervaringspagina — volledige loopbaan zichtbaar

De Experience-pagina mag **niet** eindigen na DELA, Essent en Freo. Direct daaronder volgt `Eerdere ervaring` / `Earlier experience`, als rustige chronologische lijst of verticale timeline (geen extra grote cards). Gebruik deze exacte feitelijke basis:

- **2016–2017 — EAGE — Lead Sitecore Developer / Technical Lead.** NL: `Nieuwbouw van een digitaal platform, integratie met Microsoft Dynamics, webshop, testing en CI/CD.` EN: `Development of a new digital platform, Microsoft Dynamics integration, e-commerce, testing and CI/CD.`
- **2015–2016 — VZVZ — Lead .NET Developer / Technical Lead.** NL: `Ontwikkeling van een portal voor medische gegevens, DigiD-integratie en verbetering van codekwaliteit.` EN: `Development of a medical-data portal, DigiD integration and improvements to code quality.`
- **2014–2015 — DELA — Lead .NET / Sitecore Developer / Scrum Master.** NL: `Technical Lead en Scrum Master van twee teams bij de herbouw van dela.nl en Mijn DELA.` EN: `Technical Lead and Scrum Master for two teams during the redevelopment of dela.nl and Mijn DELA.`
- **2001–2013 — Atos Origin / Achmea — Senior .NET Developer / Scrum Master / Project Manager.** NL: `Ruim twaalf jaar ervaring in softwareontwikkeling en delivery, met opdrachten voor onder andere Achmea, ANWB, Unigarant, Interpolis en Zilveren Kruis.` EN: `Over twelve years of experience in software engineering and delivery, including assignments for Achmea, ANWB, Unigarant, Interpolis and Zilveren Kruis.`

LinkedIn vermeldt daarnaast DearNova als werkgever met de rollen Senior Team Lead (2016–2019) en Project Manager (2014–2017). Verwerk dit niet als een extra opdrachtgever of dubbel getelde opdracht zonder nadere context; de bovenstaande projecthistorie is leidend.

De gebruiker moet in maximaal één scroll op de Experience-pagina zien dat er substantiële ervaring vóór 2019 is. De ontwikkeling van engineer naar technology & engineering leader moet duidelijk zijn zonder de site in een letterlijk cv te veranderen.

## 29.5 Acceptatiecriteria aanvulling

- Het eigen logo en de profielfoto zijn echte, leesbare bestanden, niet leeg/corrupt.
- De browser-tab toont het blauwe vleugelsymbool, niet de Next.js default favicon.
- De Experience-pagina bevat **alle vier** vroegere periodes naast de drie uitgelichte cases.
- Op de homepage blijft de ervaring compact.
- Opdrachtgeverlogo's zijn echt, lokaal opgeslagen en rechten/bron zijn gedocumenteerd. Als logo's ontbreken, is dat een expliciet openstaand punt, geen verborgen 'done'.
- NL en EN hebben dezelfde inhoudelijke dekking.


## 30. Definitieve opdrachtgeverlogo-assets — update 3.2

De gebruiker heeft de onderstaande originele logo-afbeeldingen zelf aangeleverd en geeft aan toestemming voor gebruik te hebben. **Deze bestanden zijn nu daadwerkelijk inbegrepen in het pakket**. De oudere opmerking in §29.2 dat er nog geen logo's aanwezig zijn, is hiermee vervallen. Ook hoeft Copilot deze zes logo's niet meer van internet te halen.

| Organisatie | Lokaal bestand | Gebruik |
|---|---|---|
| DELA | `/public/images/clients/dela.png` | Primaire ervaring, en eerdere DELA-opdracht |
| Essent | `/public/images/clients/essent.png` | Primaire ervaring |
| Freo | `/public/images/clients/freo.jpg` | Primaire ervaring |
| EAGE | `/public/images/clients/eage.png` | Eerdere ervaring |
| VZVZ | `/public/images/clients/vzvz.png` | Eerdere ervaring |
| Achmea | `/public/images/clients/achmea.png` | Eerdere ervaring, periode Atos Origin/Achmea |

Er is een optionele tweede door de gebruiker aangeleverde EAGE-variant: `/public/images/clients/eage-alternative.webp`. Gebruik bij voorkeur `eage.png` voor de herkenbare volledige naam, maar kies de variant die op de beschikbare plek het best leesbaar is. **Niet beide varianten tegelijk tonen.**

### Presentatieregels

- **Geen tekst-only logo-rij** boven de geselecteerde ervaringen.
- DELA, Essent en Freo: toon het betreffende echte logo in de drie primaire experience-items.
- EAGE, VZVZ en Achmea: toon kleinere, rustige logo's bij de corresponderende items in `Eerdere ervaring` op de volledige Experience-pagina. Bij het Atos Origin/Achmea-item mag het Achmea-logo staan, maar laat de organisatienaam `Atos Origin / Achmea` tekstueel staan: niet suggereren dat Atos en Achmea dezelfde organisatie zijn.
- Bewaar originele beeldverhouding, gebruik `object-fit: contain` en een consistent logo-vak met eigen breedte/hoogte per asset. Gebruik voldoende witruimte. Snijd geen woordmerken af.
- Respecteer originele kleuren. **Niet** forceren naar blauw, niet vervormen, geen CSS-grayscale als standaard.
- Gebruik de transparante versies op wit of een zeer lichte achtergrond; controleer contrast. Het groene EAGE-logo bevat een eigen achtergrond en mag niet als transparant worden behandeld.
- Voorzie elk logo van alt-tekst met organisatienaam, bijvoorbeeld `DELA`, `Essent`, `Freo`, `EAGE`, `VZVZ`, `Achmea`. Indien de organisatienaam direct naast het logo in tekst staat en herhaling onnodig is, kan `alt=""` passend zijn.
- De logo's zijn bewijs van werkervaring en geen endorsement. Voeg geen `Trusted by`-claim toe.
- Gebruik de meegeleverde assets zonder downloaden, vervangen of genereren.

### Acceptatiecriteria 3.2

1. Alle zes primaire opdrachtgeverlogo's zijn lokaal aanwezig, openen correct en zijn zichtbaar op de juiste plaats.
2. Geen tekst-only logo-cloud boven de cases.
3. DELA/Essent/Freo blijven uitgelicht; eerdere loopbaan is beknopt en zichtbaar op de Experience-pagina.
4. De eigen Vogels Consultancy branding, profielfoto en favicon blijven intact.
5. De bestaande site wordt bijgewerkt; **niet opnieuw vanaf nul bouwen**.
6. Controleer de weergave op mobiel en desktop, beide talen en een succesvolle productiebuild.


# 31. Experience presentation — v3.3 (supersedes conflicting earlier instructions)

## Hierarchy
Do not give the full career equal visual weight. The website must communicate progression rather than reproduce LinkedIn.

1. **Selected experience:** DELA, Essent and Freo are the only prominent cases.
2. **Earlier relevant experience:** the DearNova period and selected client engagements are summarized compactly.
3. **Career foundation:** everything before DearNova is deliberately less prominent and summarized as one foundation block.

## Homepage
- Show only DELA, Essent and Freo.
- Use their supplied logos.
- Do not repeat the company name immediately below its logo.
- Per case: logo, period, role, one concise paragraph, maximum three highlights.
- Remove the standalone `Aanvullende context bij DELA` section. DELA details belong inside the DELA case.
- End with one link to the full Experience page.
- Do not show an additional client-logo strip.

## Logo treatment
Normalize logos by **perceived visual weight**, not by identical raw image height.
- Place each primary logo in an equal 180×64px desktop logo stage (smaller equivalent on mobile).
- `object-fit: contain`; preserve aspect ratio and original colours.
- Allow per-logo max-width/max-height tuning so DELA is not tiny beside Essent/Freo.
- Never stretch, crop, recolour or redraw.
- The role, not a duplicated company name, is the first prominent text below the logo.

## Full Experience page
Order:
1. Selected experience — DELA, Essent, Freo.
2. Earlier experience — compact.
3. Career foundation — very compact.

### Earlier experience
Do not render a long LinkedIn-style timeline and normally do not use logos here.

Dutch copy:

**Eerdere ervaring**

Voorafgaand aan mijn huidige opdrachten werkte ik in verschillende lead-, architectuur- en deliveryrollen aan digitale platformen en softwareontwikkeling.

**2014–2019 · DearNova — Technical leadership & project delivery**

Werkte als Senior Team Lead en Project Manager en vervulde technische leadrollen bij onder andere DELA, EAGE en VZVZ. In deze periode verschoof mijn focus steeds verder van softwareontwikkeling naar technisch leiderschap, architectuur, teambegeleiding en delivery.

Where useful, EAGE, VZVZ and the earlier DELA engagement may be mentioned as client engagements/projects. Do not present them as employers.

### Career foundation
Everything before DearNova should be deliberately less prominent.

Dutch copy:

**2001–2014 · Fundament in software engineering en architectuur**

Begonnen als Software Engineer bij Netaspect en vervolgens doorgegroeid via Lead Software Engineer en Lead Software Architect naar Project Manager. In deze periode werkte ik bij en voor organisaties als Atos Origin, Interpolis en Achmea.

Optional quiet progression line:

`Software Engineer → Lead Software Engineer → Lead Software Architect → Project Manager`

Do not show individual logos or full timeline rows for Netaspect, Atos Origin, Interpolis or Achmea. Do not make ANWB, Unigarant, Interpolis or Zilveren Kruis separate experience entries.

## Exact LinkedIn chronology — factual reference only
Use this chronology only when detail is required; do not automatically render every line:
- DearNova — Senior Team Lead — Feb 2016–Feb 2019
- DearNova — Project Manager — Apr 2014–Jan 2017
- Achmea — Project Manager — Apr 2010–Apr 2014
- Achmea — Lead Software Architect — Oct 2007–Apr 2010
- Interpolis — Lead Software Engineer — Jul 2005–Oct 2007
- Atos Origin — Lead Software Engineer — Apr 2005–Oct 2007
- Netaspect — Software Engineer — 2001–2005

The overlapping periods are intentional. Never 'correct' or infer them away.

## English
Create semantically equivalent English copy and preserve the same hierarchy and relative visual prominence.

## DELA detail
Any deeper DELA evidence belongs within the DELA case on the full Experience page. It may cover selected evidence such as platform modernisation, CI/CD, Infrastructure-as-Code, observability, identity/compliance, CMS/platform evaluation and practical Generative AI. Never place this content after Freo as a separate unrelated block.


# 32. Visual redesign & content refinement — v3.4

This section supersedes any conflicting earlier visual/layout instructions.

## 32.1 Design objective

The site must feel like a senior independent technology consultancy: calm, premium, technically credible and concise. It must not look like a personal CV/portfolio or a generic freelancer template.

Use a restrained consultancy aesthetic:
- predominantly white background;
- near-black typography;
- the blue from the Vogels Consultancy brand as the primary accent;
- generous whitespace;
- strong typography and clear hierarchy;
- minimal decorative effects;
- no oversized gradients, glassmorphism, decorative blobs or unnecessary animation.

The homepage must sell Robin's expertise and value first. His portrait is supporting material, not the hero.

## 32.2 Header / Vogels Consultancy logo

The current Vogels Consultancy logo is visually too small relative to the navigation.

Requirements:
- Increase the rendered brand logo by approximately 30–40% from the current implementation.
- Preserve its original proportions.
- Do not add a separate `Vogels Consultancy` text label next to it when the name is already present in the logo.
- Give it enough whitespace so it remains premium rather than cramped.
- Ensure the logo remains clearly legible on mobile.
- Do not crop, distort or recolour it.

The brand logo should have more visual authority than it has in the current implementation without turning the header into a large banner.

## 32.3 Portrait usage

The portrait must NOT appear in the homepage hero.

The portrait may appear exactly once on the public website:
- on the About / Over mij page.

Remove any second instance elsewhere, including homepage, experience page, CTA sections or footer.

On the About page, use the portrait as supporting content alongside the personal/professional story. It should not dominate the page.

## 32.4 Homepage structure

Use this order:

1. Header/navigation
2. Hero — no portrait
3. Compact credibility line
4. Expertise
5. Selected experience
6. Approach
7. Contact CTA
8. Footer

### Hero

Use a typography-led hero with substantial whitespace.

Dutch direction:

**Technisch leiderschap dat organisaties verder brengt.**

Ik help organisaties hun digitale platformen te moderniseren, complexe technologiekeuzes te maken en engineeringteams structureel te versterken. Van strategie en architectuur tot de daadwerkelijke uitvoering.

Primary CTA: `Bekijk mijn expertise`
Secondary CTA: `Neem contact op`

Do not place Robin's portrait next to this copy.

Below the hero, use one restrained credibility line rather than four competing claims:

`20+ jaar ervaring · Technology Leadership · Solution Architecture · Engineering Excellence`

English should be semantically equivalent and natural, not a literal word-for-word translation.

## 32.5 Expertise — reduce from six to four

The homepage must show four core expertise areas, not six:

1. **Technology & Engineering Leadership**
   Direction for technology, engineering organisations and multidisciplinary teams.

2. **Solution Architecture**
   Turning complex technology choices into clear, maintainable and future-ready architecture.

3. **Platform Modernisation**
   Modernising legacy and digital platforms, APIs, cloud architecture and delivery foundations.

4. **Engineering Excellence**
   Improving software quality, CI/CD, observability, maintainability, security and engineering practices.

`Teams & Engineering Capability` and `Technology Advisory` are not separate homepage pillars. Their relevant content should be incorporated naturally into the four areas above.

Keep each expertise item concise. Avoid long capability inventories.

## 32.6 Selected experience

Keep DELA, Essent and Freo as the three selected cases.

For each:
- logo;
- period;
- role;
- one concise paragraph;
- maximum three evidence/result-oriented highlights.

Do not repeat the company name directly below a logo.

Prefer outcomes/evidence over generic responsibilities where the source material supports them.

### DELA

The standalone `Aanvullende context bij DELA` block must not exist.

Relevant DELA evidence belongs inside the DELA case on the full Experience page. The homepage version remains concise.

The DELA logo must use the supplied asset `dela-logo.png` from this package as the single source of truth.

Important:
- show the complete logo;
- `object-fit: contain`;
- no crop;
- no clipping;
- no `object-fit: cover`;
- no CSS mask;
- no recreation of the logo in text/SVG/CSS;
- preserve transparent background and original colour.

Delete/stop using any older DELA logo asset in the site.

### Logo normalization

DELA, Essent and Freo must have comparable **perceived visual weight**, not blindly identical image heights.

Use an equal logo stage, approximately 180×64px desktop, and tune the contained image dimensions per logo when necessary. Preserve aspect ratio. Never stretch or crop.

## 32.7 Earlier career

Keep the v3.3 hierarchy:
- DearNova is secondary and compact.
- Pre-DearNova career is one concise career-foundation block.
- Do not turn the page into a LinkedIn timeline.
- Do not add employer/client logo rows to the earlier-career section.
- Do not make EAGE, VZVZ, Achmea, Atos Origin, Interpolis or Netaspect visually compete with DELA/Essent/Freo.

## 32.8 About / Over mij

The About page is the only page with Robin's portrait.

Keep the professional progression from software engineering to architecture and technology leadership, but make the page slightly more personal without becoming informal.

Include the motivation behind the work, along the lines of:

`Wat mij energie geeft, is het verbinden van mensen, technologie en ambities. Complexe vraagstukken terugbrengen tot heldere keuzes, teams helpen groeien en vervolgens zien dat verbeteringen daadwerkelijk resultaat opleveren.`

Also communicate experience in complex organisations and stakeholder environments.

Avoid repeating the complete Experience page.

## 32.9 Dutch editorial style

The Dutch site must read as native Dutch, not as an English consultancy site translated into Dutch.

Keep internationally established discipline names where they add value, especially in headings such as `Technology & Engineering Leadership`, `Solution Architecture` and `Engineering Excellence`.

In running Dutch copy, prefer natural Dutch wording. Avoid unnecessary hybrids such as:
- `deliveryverantwoordelijkheid`;
- `engineering improvement`;
- `independently deploybare services`;
- `recruitment` when `werving` is sufficient.

Do not translate technical terms such as CI/CD merely for the sake of translating them.

## 32.10 Contact proposition

Make it immediately clear that Vogels Consultancy provides independent consultancy/interim expertise.

Use a concise CTA that gives a concrete reason to make contact.

Dutch direction:

**Technische uitdagingen die om richting en ervaring vragen?**

Of het nu gaat om platformmodernisering, complexe architectuurkeuzes of het versterken van engineeringteams: ik denk graag mee over een passende aanpak.

Do not use aggressive sales language.

## 32.11 Visual consistency / responsive acceptance criteria

Before considering the update complete, visually inspect at least:
- desktop around 1440px;
- tablet around 768px;
- mobile around 390px.

Check:
- header logo is clearly legible and not undersized;
- no portrait on homepage;
- portrait occurs only once site-wide;
- DELA logo is complete and uncropped;
- DELA/Essent/Freo have comparable visual weight;
- no duplicated organisation names immediately below logos;
- no horizontal scrolling;
- no awkward text wrapping in headings;
- cards/columns have consistent spacing;
- mobile page does not become an excessive sequence of long text blocks;
- focus states and contrast remain accessible.

Run the production build after the visual review.

## 32.12 Do not overbuild

Do not redesign the site into an agency website and do not introduce unnecessary animation or decorative UI.

The desired impression is:
`senior technology leadership + strong engineering depth + calm confidence`.

The site should become shorter and clearer rather than gaining more content.
