import { NextRequest } from "next/server";

import prisma from "@/prisma";

export async function GET(request: NextRequest) {
  let success: boolean = false;
  const { searchParams } = (request.nextUrl as any);

  try {
    success = !!(await prisma.admin.findUnique({
      where: {
        username: searchParams.username,
        password: searchParams.password,
      },
    }));
  } catch (error) {
    console.error(error);
    prisma.$disconnect();
  }

  return Response.json({ success });
}
