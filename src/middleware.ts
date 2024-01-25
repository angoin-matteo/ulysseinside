import type { NextRequest } from "next/server";

import Negotiator from "negotiator";
import { match } from "@formatjs/intl-localematcher";
import i18n from "../i18n.config";

function getLocale(request: NextRequest): string | undefined {
  const headers: Record<string, string> = {};
  request.headers.forEach((value, key) => headers[key] = value);

  const { locales } = i18n
  const languages = new Negotiator({ headers }).languages(locales);

  return match(languages, locales, i18n.defaultLocale);
}

export function middleware(request: NextRequest): Response | undefined {
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = i18n.locales.some(locale => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`));

  if (pathnameHasLocale) return;

  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;

  return Response.redirect(request.nextUrl);
}

export const config = { matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'] };
