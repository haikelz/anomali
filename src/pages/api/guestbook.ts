import { prisma } from "@/lib/utils/prisma";
import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  try {
    const data = await prisma.guestbook.findMany({
      select: {
        id: true,
        created_at: true,
        email: false,
        username: true,
        message: true,
      },
    });

    return new Response(
      JSON.stringify({
        status_code: 200,
        message: "Success get guestbook!",
        data: data,
      })
    );
  } catch (err: any) {
    return new Response(
      JSON.stringify({
        status_code: 500,
        message: err.message,
      })
    );
  }
};
