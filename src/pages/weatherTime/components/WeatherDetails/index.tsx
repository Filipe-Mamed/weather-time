import { Box, HStack, Text,} from "@chakra-ui/react";

import { WiHumidity } from "react-icons/wi";
import { FaWind } from "react-icons/fa6";

interface Props{
  humidity: number
  windSpeed: number
}

export function WeatherDetails({humidity, windSpeed}: Props) {
  return (
    <>
      <HStack
        gap={3}
        justify="center"
        me={5}
        fontWeight="bold"
        mb={2}
      >
        <Text display="flex" alignItems="center">
          Umidade <WiHumidity style={{ marginLeft: "4px", marginRight: "4px" }} /> {humidity}%
        </Text>
        <Box divideX="2px"></Box>
        <Text display="flex" alignItems="center">
          <FaWind style={{ marginRight: "4px" }} /> {windSpeed}km/h
        </Text>
      </HStack>
    </>
  );
}
