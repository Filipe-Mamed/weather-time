import { Box, Text, Image } from "@chakra-ui/react";

interface Props {
  temp: number;
  description: string;
  icon: string;
}

export function TemperatureDisplay({ temp, description, icon }: Props) {
  const capitalize = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <Box textAlign="center" mt={4}>
      <Text fontSize="lg" fontWeight="bold">
        Temperatura {Math.round(temp)}°C
      </Text>
      <Box mt={3}>
        <Text
          fontSize="lg"
          fontWeight="medium"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {capitalize(description)}{" "}
          <Image
            src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
            alt="Ícone do clima"
            boxSize={12}
            ml={2}
          />
        </Text>
      </Box>
    </Box>
  );
}
