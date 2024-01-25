"use client";

import type { ExtendedArticle } from "@/types";

import { useEffect, useState } from "react";

export default function useArticle(slug: string): ExtendedArticle | undefined {
  const [article, setArticle] = useState<ExtendedArticle>();

  useEffect(() => {
    fetch(`/api/blog/articles/${slug}`)
      .then(response => response.json())
      .then(data => setArticle(data.article));
  });

  return article;
}
