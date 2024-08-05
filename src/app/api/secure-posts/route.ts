import axios from "axios";

const api = axios.create({
  baseURL: "https://demo.ghost.io/ghost/api/content",
  params: {
    key: process.env.GHOST_API_KEY,
  },
});

export async function GET(request: { url: string | URL; }) {
  const baseURL = process.env.BASE_URL || "http://localhost:3000";
  const url = new URL(request.url, baseURL);

  const page = Number(url.searchParams.get("page")) || 1;
  const limit = Number(url.searchParams.get("limit")) || 9;

  try {
    const response = await api.get("/posts/", {
      params: {
        limit,
        page,
      },
    });
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
