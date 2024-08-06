import axios from "axios";

export const api = axios.create({
  baseURL: process.env.GHOST_API_URL,
  params: {
    key: process.env.GHOST_API_KEY,
  },
});

export const getFeaturedPosts = async () => {
  try {
    const response = await api.get("/posts/", {
      params: {
        1: Number,
        filter: "featured:true",
        include: ["tags", "authors"],
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
};

export const getPosts = async (page: number, limit: number, filter: string) => {
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
};

export const getPage = async (slug: string) => {
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
};

export const searchPosts = async () => {
  try {
    const response = await api.get("/posts/");
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
};

export const getPost = async (slug: string) => {
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
};

export const getTags = async () => {
  try {
    const response = await api.get("/tags/");
    return new Response(JSON.stringify(response.data.tags), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error }), {
      headers: { "Content-Type": "application/json" },
      status: 500,
    });
  }
};
