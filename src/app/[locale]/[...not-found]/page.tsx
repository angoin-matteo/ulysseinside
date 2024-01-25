"use client";

import type { Locale } from "@/types";

import { useArticles } from "@/hooks/blog";
import { useDictionary } from "@/hooks/locales";
import { Articles } from "@/components/Blog";

export default function NotFoundPage({
  params: { locale },
}: Readonly<{
  params: { locale: Locale };
}>) {
  const articles = useArticles();
  const dictionary = useDictionary(locale);

  return (
    <main className="py-24 sm:py-32">
      <div className="mx-auto px-6 max-w-7xl lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {dictionary.app.notFoundPage.title}
          </h1>
          <p className="mt-2 text-lg leading-8 text-slate-500">
            {dictionary.app.notFoundPage.subTitle}
          </p>
        </div>
        <div className="grid grid-cols-1 mx-auto mt-10 pt-10 gap-y-16 max-w-2xl border-t border-slate-500 sm:mt-16 lg:mx-0 lg:grid-cols-3 lg:max-w-none">
          <Articles
            articles={articles}
            locale={locale}
          />
        </div>
      </div>
    </main>
  );
}
