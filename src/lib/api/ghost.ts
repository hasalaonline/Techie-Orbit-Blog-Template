import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
  url: "https://demo.ghost.io",
  key: "22444f78447824223cefc48062",
  version: "v5.0",
});

export default api;

export async function fetchPosts() {
  const posts = await api.posts.browse({
    limit: "all",
    include: ["tags", "authors"],
  });
  return posts;
}

export async function fetchFeaturedPost(limit: number = 1) {
  try {
    const response = await api.posts.browse({
      limit,
      filter: "featured:true",
      include: ["tags", "authors"],
    });
    return response;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
}

export async function fetchPost(postSlug: string) {
    try {
        const response = await api.posts.read({slug: postSlug}, {formats: ['html', 'plaintext']});
        return response;
    } catch (error) {
        console.error("Error fetching posts:", error);
        throw error;
    }
}

export async function fetchTags() {
  try {
      const response = await api.tags.browse();
      return response;
  } catch (error) {
      console.error("Error fetching posts:", error);
      throw error;
  }
}

export async function searchPos() {
  try {
      const response = await api.tags.browse();
      return response;
  } catch (error) {
      console.error("Error fetching posts:", error);
      throw error;
  }
}