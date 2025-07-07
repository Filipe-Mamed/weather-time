import { Card, CardTitle, Container } from "react-bootstrap";
import { _SearchForm } from "./components/SearchForm";
import { _LocationInfo } from "./components/LocationInfo";
import { _TemperatureDisplay } from "./components/TemperatureDisplay";
import { _WeatherDetails } from "./components/WeatherDetails";
import React, { useCallback, useState } from "react";
import {
  fetchWeather,
  type WeatherData,
} from "../../shared/services/api/weatherApi";
import { $Message, $MessageError, $Title } from "./WeatherTime.Styled";
import { fetchCityImages } from "../../shared/services/api/unsplashApi";
import { useBackground } from "../../shared/hooks";

export function WeatherTime() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const {setBackgroundImage} = useBackground()

  const handleOnChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setCity(e.target.value);
    },
    [setCity]
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setError(null);
      try {
        const data = await fetchWeather(city);
        setWeather(data);

        const images = await fetchCityImages(city);
        if (images.length > 0) {
          const randomIndex = Math.floor(Math.random() * images.length);
          const imageUrl = images[randomIndex].urls.regular;

          setBackgroundImage(imageUrl);
        }
      } catch (error) {
        setWeather(null);
        setError("Cidade não encontrada");
        setBackgroundImage(null);
        console.log(error);
      }
    },
    [city, setBackgroundImage]
  );

  return (
    <Container className="vh-100">
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <Card
          className="w-100 border-black border-opacity-25 bg-primary"
          style={{ maxWidth: "30rem", color: "#F5FFFA" }}
        >
          <CardTitle className="mt-3 mb-3">
            <$Title>Confira o clima de uma cidade:</$Title>
          </CardTitle>
          <_SearchForm
            city={city}
            onChange={handleOnChange}
            onSubmit={handleSubmit}
          />
          {weather ? (
            <>
              <hr className="text-white" />
              <_LocationInfo
                city={weather.name}
                country={weather.sys.country}
              />
              <_TemperatureDisplay
                temp={weather.main.temp}
                description={weather.weather[0].description}
                icon={weather.weather[0].icon}
              />
              <_WeatherDetails
                humidity={weather.main.humidity}
                windSpeed={weather.wind.speed}
              />
            </>
          ) : error ? (
            <div>
              <$MessageError>{error}</$MessageError>
            </div>
          ) : (
            <div>
              <$Message>Digite para saber o clima de uma cidade</$Message>
            </div>
          )}
        </Card>
      </div>
    </Container>
  );
}
