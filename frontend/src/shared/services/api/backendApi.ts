import axios from "axios";

export const backendAPI = axios.create({
  baseURL: import.meta.env.VITE_API_BACKEND,
  headers: {
    "Content-Type": "application/json",
  },
});
