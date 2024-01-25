"use client";

import type { Locale } from "@/types";

import dayjs from "dayjs";
import { Archivo_Black } from "next/font/google";
import { useArticle, useRelatedArticles } from "@/hooks/blog";
import { ExtendedImage } from "@/components";
import { BlueBadge } from "@/components/Badges";
import { Articles } from "@/components/Blog";
import "dayjs/locale/en";
import "dayjs/locale/fr";

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
});

export default function ArticlePage({
  params: { locale, slug },
}: Readonly<{
  params: {
    locale: Locale;
    slug: string;
  };
}>) {
  const article = useArticle(slug);
  const articles = useRelatedArticles(slug);

  return (
    article && (
      <main className="py-24 sm:py-32">
        <div className="mx-auto px-6 max-w-7xl lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {article.profile.username}
            </h1>
            <p className="mt-2 text-lg leading-8 text-slate-500">
              {article.profile.role}
            </p>
            <time
              className="mt-2 text-sm leading-6 text-slate-500"
              dateTime={article.timestamp.toString()}
            >
              {dayjs(article.timestamp).locale(locale).format("DD MMM YYYY")}
            </time>
          </div>
          <div className="mx-auto mt-10 pt-10 gap-y-16 max-w-2xl border-t border-slate-500 sm:mt-16 lg:mx-0 lg:max-w-none">
            <article className="flex-auto mx-auto w-full max-w-2xl">
              <header className="inline-flex items-center lg:mb-6">
                <div className="flex items-center mb-4 lg:mb-6">
                  <h1
                    className={`${archivoBlack.className} flex items-center text-2xl font-extrabold leading-tight lg:text-4xl`}
                  >
                    {article.title}
                  </h1>
                  <div className="ml-2.5">
                    <BlueBadge value={article.category.name} />
                  </div>
                </div>
              </header>
              <p>{article.body}</p>
            </article>
          </div>
        </div>

        <div className="mx-auto px-6 max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 mx-auto mt-10 pt-10 gap-y-16 max-w-2xl border-t border-slate-500 sm:mt-16 lg:mx-0 lg:grid-cols-3 lg:max-w-none">
            <Articles
              articles={articles}
              locale={locale}
            />
          </div>
        </div>
      </main>
    )
  );
}
