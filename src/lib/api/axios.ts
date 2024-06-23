import axios from "axios";
import api from "./ghost";

// const api = axios.create({
//   baseURL: "https://demo.ghost.io/ghost/api/content", // Base URL of the Ghost API
//   params: {
//     key: "22444f78447824223cefc48062", // Your Ghost API key
//   },
// });

// export async function fetchPosts() {
//   //   try {
//   //     const response = await api.get("/posts/");
//   //     return response.data.posts;
//   //   } catch (error) {
//   //     console.error("Error fetching posts:", error);
//   //     throw error;
//   //   }
// }

// export async function fetchFeaturedPost(limit: number = 1) {
//   try {
//     const response = await api.get("/posts/", {
//       params: {
//         limit,
//         featured: true,
//       },
//     });
//     return response.data.posts;
//   } catch (error) {
//     console.error("Error fetching posts:", error);
//     throw error;
//   }
// }

// export async function fetchPost(slug: any) {
//   try {
//     const response = await api.get("/posts/slug", {
//       params: {
//         slug,
//       },
//     });
//     return response.data.posts;
//   } catch (error) {
//     console.error("Error fetching posts:", error);
//     throw error;
//   }
// }
