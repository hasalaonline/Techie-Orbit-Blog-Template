import { api } from "@/lib/api/api";
import { NextRequest } from "next/server";

export async function GET(request: Request | NextRequest) {
  const url = new URL(request.url.toString());

  const slug = url.searchParams.get("slug");

  try {
    const response = await api.get("/pages/slug/" + slug);

    return new Response(JSON.stringify(response.data.pages), {
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
