"use client";

import type { Category } from "@prisma/client";
import type { Locale } from "@/types";

import { useEffect, useState } from "react";
import { useCategory } from "@/hooks/blog";
import { Articles } from "@/components/Blog";

export default function CategoryPage({
  params: {
    locale,
    slug,
  },
}: Readonly<{
  params: {
    locale: Locale,
    slug: string,
  };
}>) {
  const articles = useCategory(slug);
  const [category, setCategory] = useState<Category>();

  useEffect(() => {
    if (articles.length > 0) setCategory(articles[0].category);
  }, [articles]);

  return (
    <main className="py-24 sm:py-32">
      <div className="mx-auto px-6 max-w-7xl lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {category?.name}
          </h1>
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
