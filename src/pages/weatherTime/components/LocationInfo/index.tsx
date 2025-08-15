import { HStack, Text, Image } from "@chakra-ui/react";

interface Props{
  city: string
  country: string
}

import { FaLocationDot } from "react-icons/fa6";
export function LocationInfo({city, country}: Props) {
  return (
    <>
      <HStack
         gap={3}
         justify="center"
         mt={3}
      >
        <Text fontSize="2xl" fontWeight="bold" display="flex" alignItems="center">
          <FaLocationDot color="#f6e05e" style={{ marginBottom: "2px", marginRight: "4px" }} /> {city}
        </Text>
        <Image src={`https://flagsapi.com/${country}/flat/48.png`} alt={`Bandeira de ${country}`} />
      </HStack>
    </>
  );
}
