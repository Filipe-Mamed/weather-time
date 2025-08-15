import { createSystem, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      breakpoints: {
        sm: { value: "480px" },
        md: { value: "768px" },
        lg: { value: "1024px" },
      },
    },
  },
});

export const system = createSystem(config);
