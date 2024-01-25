import type { ExtendedArticle } from "@/types";

import prisma from "@/prisma";

export async function GET() {
  let articles: ExtendedArticle[] = [];

  try {
    articles = await prisma.article.findMany({
      include: {
        category: true,
        profile: true,
      },
    });
  } catch (error) {
    console.error(error);
    prisma.$disconnect();
  }

  return Response.json({ articles });
}
