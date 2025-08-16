import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const weatherClient = axios.create({
  baseURL: process.env.BASE_URL_OPENWEATHER,
  timeout: 5000,
  params: {
    appid: process.env.API_KEY_OPENWEATHER,
    units: "metric",
    lang: "pt_br",
  },
});

export async function getWeather(city: string) {
  const response = await weatherClient.get("/weather", { params: { q: city } });
  return response.data;
}
