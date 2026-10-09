import type { ReactNode } from "react";
import { Manrope } from "next/font/google";
import { notFound } from "next/navigation";
import { locales, isLocale, htmlLang, type Locale } from "@/lib/locales";
import { getContent } from "@/content";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SkipLink } from "@/components/SkipLink";
import { Analytics } from "@/components/Analytics";
import { CookieConsent } from "@/components/CookieConsent";
import { buildPersonJsonLd, buildProfessionalServiceJsonLd } from "@/lib/structured-data";
import "../globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;

  if (!isLocale(rawLocale)) {
    notFound();
  }

  const locale: Locale = rawLocale;
  const content = getContent(locale);
  const personJsonLd = buildPersonJsonLd(locale);
  const serviceJsonLd = buildProfessionalServiceJsonLd(locale);

  return (
    <html lang={htmlLang[locale]} className={`${manrope.variable} h-full`}>
      <body className="flex min-h-full flex-col font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
        />
        <SkipLink label={content.nav.skipToContent} />
        <Header locale={locale} nav={content.nav} />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer locale={locale} content={content.footer} languageSwitchLabel={content.nav.languageSwitchLabel} />
        <Analytics />
        <CookieConsent content={content.cookieConsent} locale={locale} />
      </body>
    </html>
  );
}
