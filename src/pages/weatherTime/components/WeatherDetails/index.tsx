import { Stack } from "react-bootstrap";

import { WiHumidity } from "react-icons/wi";
import { FaWind } from "react-icons/fa6";

interface Props{
  humidity: number
  windSpeed: number
}

export function _WeatherDetails({humidity, windSpeed}: Props) {
  return (
    <>
      <Stack
        direction="horizontal"
        gap={3}
        className="justify-content-center me-5 fw-semibold"
      >
        <p>
          Umidade <WiHumidity /> {humidity}%
        </p>
        <div className="vr mb-2"></div>
        <p>
          <FaWind /> {windSpeed}km/h
        </p>
      </Stack>
    </>
  );
}
