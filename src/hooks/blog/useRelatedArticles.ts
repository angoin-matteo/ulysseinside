"use client";

import type { ExtendedArticle } from "@/types";

import { useEffect, useState } from "react";

export default function useRelatedArticles(slug: string): ExtendedArticle[] | [] {
  const [articles, setArticles] = useState<ExtendedArticle[]>([]);

  useEffect(() => {
    fetch(`/api/blog/related/${slug}`)
      .then(response => response.json())
      .then(data => setArticles(data.articles));
  }, [slug]);

  return articles;
}
