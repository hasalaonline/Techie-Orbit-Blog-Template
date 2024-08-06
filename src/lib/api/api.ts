import axios from "axios";

export const api = axios.create({
  baseURL: process.env.GHOST_API_URL,
  params: {
    key: process.env.GHOST_API_KEY,
  },
});