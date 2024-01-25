"use client";

import type { ExtendedArticle, Locale } from "@/types";

import dayjs from "dayjs";
import { ExtendedImage, ExtendedLink } from "@/components";
import { BlueBadge } from "@/components/Badges";
import "dayjs/locale/en"
import "dayjs/locale/fr"

function Skeleton() {
  return (
    <article className="animate-pulse flex max-w-xl flex-col items-start justify-between">
      <div className="flex items-center gap-x-4 text-xs">
        <div className="h-3 w-20 rounded-lg bg-slate-500"></div>
        <div className="h-3 w-20 rounded-lg bg-slate-500"></div>
      </div>
      <div className="group relative">
        <h3 className="mt-3 h-6 w-44 rounded-lg bg-slate-500"></h3>
        <div className="mt-5">
          <div className="h-3 w-28 rounded-lg bg-slate-500"></div>
          <div className="my-3 h-3 w-44 rounded-lg bg-slate-500"></div>
          <div className="h-3 w-44 rounded-lg bg-slate-500"></div>
        </div>
      </div>
      <div className="relative mt-8 flex items-center gap-x-4">
        <div className="rounded-full h-10 w-10 bg-slate-500"></div>
        <div className="text-sm leading-6">
          <div className="h-2 w-[60px] rounded-lg bg-slate-500"></div>
          <div className="mt-2 h-2 w-[120px] rounded-lg bg-slate-500"></div>
        </div>
      </div>
    </article>
  )
}

export default function Articles({
  articles,
  locale,
}: Readonly<{
  articles: ExtendedArticle[],
  locale: Locale;
}>) {
  if (articles.length > 0) {
    return articles.map(article => (
      <article
        className="flex flex-col items-start justify-between max-w-xl"
        key={article.slug}
      >
        <div className="flex items-center gap-x-4 text-xs">
          <time
            className="text-slate-500"
            dateTime={article.timestamp.toString()}
          >
            {dayjs(article.timestamp).locale(locale).format("DD MMM YYYY")}
          </time>
          <ExtendedLink
            className="relative px-3 py-1.5"
            href={`/blog/category/${article.category.slug}`}
          >
            <BlueBadge value={article.category.name} />
          </ExtendedLink>
        </div>
        <div className="group relative">
          <h3 className="mt-3 text-lg font-semibold leading-6 group-hover:text-slate-500">
            <ExtendedLink href={`/blog/article/${article.slug}`}>
              {article.title}
            </ExtendedLink>
          </h3>
          <p className="mt-5 line-clamp-3 textsm leading-6 text-slate-500">
            {article.description}
          </p>
        </div>
        <div className="relative flex items-center mt-8 gap-x-4">
          <ExtendedImage
            alt={article.profile.username}
            className="h-10 w-10 rounded-full bg-slate-500"
            height={0}
            src={article.profile.username}
            width={0}
          />
          <div className="text-sm leading-6">
            <ExtendedLink
              className="block font-semibold"
              href={`/blog/profile/${article.profile.username}`}
            >
              {article.profile.username}
            </ExtendedLink>
            <span className="text-slate-500">
              {article.profile.role}
            </span>
          </div>
        </div>
      </article>
    ));
  }

  return <Skeleton />;
}
