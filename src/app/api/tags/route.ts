import axios from "axios";

const api = axios.create({
  baseURL: "https://demo.ghost.io/ghost/api/content",
  params: {
    key: process.env.GHOST_API_KEY,
  },
});

export async function GET() {
  try {
    const response = await api.get("/tags/");
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
