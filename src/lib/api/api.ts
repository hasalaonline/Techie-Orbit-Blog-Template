import axios from "axios";

export const api = axios.create({
  baseURL: "https://demo.ghost.io/ghost/api/content",
  params: {
    key: process.env.GHOST_API_KEY,
  },
});