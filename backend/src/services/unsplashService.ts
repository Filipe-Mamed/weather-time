import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const unsplashClient = axios.create({
  baseURL: process.env.BASE_URL_UNSPLASH,
  timeout: 5000,
  params: {
    client_id: process.env.API_KEY_UNSPLASH,
  },
});

export async function getUnsplash(city: string) {
  const response = await unsplashClient.get("/search/photos", {
    params: { query: city, per_page: 10 },
  });
  return response.data.results;
}
