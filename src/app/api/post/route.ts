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

  const slug = url.searchParams.get("slug");

  try {
    const response = await api.get("/posts/slug/" + slug);

    return new Response(JSON.stringify(response.data.posts), {
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
