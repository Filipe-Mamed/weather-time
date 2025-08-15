import axios from "axios";

const OPENWEATHER_API_KEY = import.meta.env.VITE_API_KEY_OPENWEATHER;

const OPENWEATHER_BASE_URL = import.meta.env.VITE_BASE_URL_OPENWEATHER;

export interface WeatherData {
  name: string;
  sys: {
    country: string;
  };
  weather: {
    description: string;
    icon: string;
  }[];
  main: {
    temp: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
}

export async function fetchWeather(city: string): Promise<WeatherData> {
  const response = await axios.get(OPENWEATHER_BASE_URL, {
    params: {
      q: city,
      appid: OPENWEATHER_API_KEY,
      units: "metric",
      lang: "pt_br",
    },
  });

  return response.data;
}
