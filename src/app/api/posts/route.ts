import axios from "axios";
import { NextRequest } from "next/server";

const api = axios.create({
  baseURL: "https://demo.ghost.io/ghost/api/content",
  params: {
    key: process.env.GHOST_API_KEY,
  },
});

export async function GET(request: Request | NextRequest) {
  const baseURL = process.env.BASE_URL || "http://localhost:3000";
  const url = new URL(request.url.toString(), baseURL);

  const page = Number(url.searchParams.get("page")) || 1;
  const limit = Number(url.searchParams.get("limit")) || 9;

  try {
    const response = await api.get("/posts/", {
      params: {
        limit,
        page,
        include: "count.posts",
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
