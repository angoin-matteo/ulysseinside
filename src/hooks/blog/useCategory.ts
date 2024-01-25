"use client";

import type { ExtendedArticle } from "@/types";

import { useEffect, useState } from "react";

export default function useCategory(slug: string): ExtendedArticle[] | [] {
  const [articles, setArticles] = useState<ExtendedArticle[]>([]);

  useEffect(() => {
    fetch(`/api/blog/categories/${slug}`)
      .then(response => response.json())
      .then(data => setArticles(data.articles));
  });

  return articles;
}
