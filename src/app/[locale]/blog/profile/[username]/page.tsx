"use client";

import type { ExtendedArticle, Locale } from "@/types";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useProfile } from "@/hooks/blog";
import { Articles } from "@/components/Blog";

export default function ProfilePage({
  params: {
    locale,
    username,
  },
}: Readonly<{
  params: {
    locale: Locale,
    username: string,
  };
}>) {
  const router = useRouter();
  const profile = useProfile(username);
  const [articles, setArticles] = useState<ExtendedArticle[]>([]);

  useEffect(() => {
    if (profile === null) router.push(`/${locale}/blog`);

    const _articles: ExtendedArticle[] = [];

    profile?.articles.forEach(article => {
      _articles.push({
        ...article,
        category: {
          id: article.categoryId,
          slug: article.categorySlug,
          name: article.categoryName,
        },
        profile: {
          id: "",
          username: profile.username,
          role: profile.role,
        },
      });
    });

    setArticles(_articles);
  }, [locale, profile, router, username]);

  return (
    <main className="py-24 sm:py-32">
      <div className="mx-auto px-6 max-w-7xl lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {profile?.username}
          </h1>
          <p className="mt-2 text-lg leading-8 text-slate-500">
            {profile?.role}
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
