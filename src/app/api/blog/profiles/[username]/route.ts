import type { ExtendedProfile } from "@/types";

import prisma from '@/prisma'

export async function GET(
  request: Request,
  { params: { username } }: Readonly<{ params: { username: string } }>,
) {
  let profile: ExtendedProfile | null = null;

  try {
    /* @ts-ignore */
    profile = await prisma.profile.findUnique({
      include: { articles: true },
      where: { username },
    });
  } catch (error) {
    console.error(error);
    prisma.$disconnect();
  }

  return Response.json({ profile });
}
