import type { ExtendedArticle } from "@/types";

import prisma from "@/prisma";

export async function GET(
  request: Request,
  { params: { slug } }: Readonly<{ params: { slug: string } }>,
) {
  let articles: ExtendedArticle[] = [];

  try {
    articles = await prisma.article.findMany({
      include: {
        category: true,
        profile: true,
      },
      where: { categorySlug: slug },
    });
  } catch (error) {
    console.error(error);
    prisma.$disconnect();
  }

  return Response.json({ articles });
}
