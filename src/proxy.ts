import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, isLocale } from "@/lib/locales";

const LOCALE_COOKIE = "NEXT_LOCALE";

export function detectLocale(request: NextRequest): string {
  const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value;
  if (cookieLocale && isLocale(cookieLocale)) {
    return cookieLocale;
  }

  const acceptLanguage = request.headers.get("accept-language");
  if (acceptLanguage) {
    const preferred = acceptLanguage
      .split(",")
      .map((part) => part.split(";")[0]?.trim().toLowerCase())
      .find((lang) => lang?.startsWith("nl") || lang?.startsWith("en"));

    if (preferred?.startsWith("nl")) return "nl";
    if (preferred?.startsWith("en")) return "en";
  }

  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const firstSegment = pathname.split("/")[1];

  if (isLocale(firstSegment)) {
    return NextResponse.next();
  }

  const locale = detectLocale(request);
  const targetPath = pathname === "/" ? `/${locale}` : `/${locale}${pathname}`;

  const url = request.nextUrl.clone();
  url.pathname = targetPath;

  const response = NextResponse.redirect(url);
  response.cookies.set(LOCALE_COOKIE, locale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
  });
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static, _next/image (Next.js internals)
     * - static files with an extension (favicon.ico, sitemap.xml, robots.txt, images, ...)
     */
    "/((?!api|_next/static|_next/image|.*\\..*).*)",
  ],
};
