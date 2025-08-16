import { backendAPI } from "./backendApi";

export async function fetchCityImages(city: string) {
  const response = await backendAPI.get("/unsplash", {
    params: { city },
  });
  return response.data;
}