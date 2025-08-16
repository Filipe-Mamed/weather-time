import React, { useCallback, useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { SearchForm } from "./components/SearchForm";
import { LocationInfo } from "./components/LocationInfo";
import { TemperatureDisplay } from "./components/TemperatureDisplay";
import { WeatherDetails } from "./components/WeatherDetails";
import {
  fetchWeather,
  type WeatherData,
} from "../../shared/services/api/weatherApi";
import { fetchCityImages } from "../../shared/services/api/unsplashApi";
import { useBackground } from "../../shared/hooks";

export function WeatherTime() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isInputError, setIsInputError] = useState(false);

  const { setBackgroundImage } = useBackground();

  const handleOnChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setCity(e.target.value);
      if (isInputError) setIsInputError(false);
    },
    [setCity, isInputError]
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setError(null);
      try {
        const data = await fetchWeather(city);
        setWeather(data);

        const images = await fetchCityImages(city);
        if (images && images.length > 0) {
          const randomIndex = Math.floor(Math.random() * images.length);
          const imageUrl = images[randomIndex].urls.regular;
          if (imageUrl) {
            setBackgroundImage(imageUrl);
          } else {
            setBackgroundImage(null);
          }
        } else {
          setBackgroundImage(null);
        }
      } catch (error) {
        setWeather(null);
        setError("Cidade não encontrada");
        setIsInputError(true);
        setBackgroundImage(null);
        console.log(error);
      }
    },
    [city, setBackgroundImage]
  );

  return (
    <Flex minH="100vh" justify="center" align="center" px={4}>
      <Box
        as="main"
        w="100%"
        maxW="30rem"
        bg="blue.600"
        color="teal.50"
        borderRadius="md"
        p={5}
        boxShadow="lg"
        textAlign="center"
      >
        <Text fontSize="xl" fontWeight="bold" mb={4}>
          Confira o clima de uma cidade:
        </Text>
        <SearchForm
          city={city}
          onChange={handleOnChange}
          onSubmit={handleSubmit}
          hasError={isInputError}
        />

        {weather ? (
          <>
            <Box height="1px" bg="teal.100" my={4}></Box>
            <LocationInfo city={weather.name} country={weather.sys.country} />
            <TemperatureDisplay
              temp={weather.main.temp}
              description={weather.weather[0].description}
              icon={weather.weather[0].icon}
            />
            <WeatherDetails
              humidity={weather.main.humidity}
              windSpeed={weather.wind.speed}
            />
          </>
        ) : error ? (
          <Text
            color="yellow.400"
            textShadow="1px 1px 2px rgba(0, 0, 0, 0.8)"
            mt={4}
          >
            {error}
          </Text>
        ) : (
          <Text mt={4} color="teal.100">
            Digite para saber o clima de uma cidade
          </Text>
        )}
      </Box>
    </Flex>
  );
}
