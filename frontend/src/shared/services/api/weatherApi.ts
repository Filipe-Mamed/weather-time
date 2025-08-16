import { backendAPI } from "./backendApi";

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
  const response = await backendAPI.get("/weather", {
    params: { city },
  });

  return response.data;
}
