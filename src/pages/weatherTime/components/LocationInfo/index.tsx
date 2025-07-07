import { Stack } from "react-bootstrap";

interface Props{
  city: string
  country: string
}

import { FaLocationDot } from "react-icons/fa6";
export function _LocationInfo({city, country}: Props) {
  return (
    <>
      <Stack
        direction="horizontal"
        gap={3}
        className="justify-content-center mt-3"
      >
        <span className="fs-3 fw-bolder">
          <FaLocationDot className="text-warning mb-1" /> {city}
        </span>
        <img src={`https://flagsapi.com/${country}/flat/48.png`} alt={`Bandeira de ${country}`} />
      </Stack>
    </>
  );
}
