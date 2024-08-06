import { api } from "@/lib/api/api";
import { NextRequest } from "next/server";

export async function GET(request: Request | NextRequest) {
  const url = new URL(request.url.toString());

  const page = Number(url.searchParams.get("page")) || 1;
  const limit = Number(url.searchParams.get("limit")) || 9;
  const filter = url.searchParams.get("filter") || "";

  try {
    const response = await api.get("/posts/", {
      params: {
        limit,
        page,
        include: "count.posts",
        filter: filter,
      },
    });
    return new Response(JSON.stringify(response.data), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error }), {
      headers: { "Content-Type": "application/json" },
      status: 500,
    });
  }
}
