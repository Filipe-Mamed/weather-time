import React from "react";
import { Box } from "@chakra-ui/react";

interface GlobalWrapperProps {
  backgroundImage: string | null;
  children?: React.ReactNode;
}

export function GlobalWrapper({
  backgroundImage,
  children,
}: GlobalWrapperProps) {
  return (
    <Box
      minH="100vh"
      bgColor={backgroundImage ? "transparent" : "#ADD8E6"} // Cor de fundo padrão
      bgImage={backgroundImage ? `url(${backgroundImage})` : "#ADD8E6"}
      bgSize="cover"
      bgPos="center"
      bgRepeat="no-repeat"
      transition="background-image 0.5s ease-in-out"
    >
      {children}
    </Box>
  );
}
