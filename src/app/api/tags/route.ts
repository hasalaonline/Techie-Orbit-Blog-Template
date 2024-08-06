import { api } from "@/lib/api/api";

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
