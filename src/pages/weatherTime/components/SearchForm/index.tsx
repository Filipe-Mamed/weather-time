import React, { useState } from "react";
import { Box, HStack, Input, Button, Text } from "@chakra-ui/react";
import { IoIosSearch } from "react-icons/io";

interface Props {
  city: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  hasError: boolean;
}

export function SearchForm({ city, onChange, onSubmit, hasError }: Props) {
  const [isFocused, setIsFocused] = useState(false);
  const shouldFloat = isFocused || city.length > 0;

  return (
    <Box as="form" w="100%" px={5} onSubmit={onSubmit}>
      <HStack gap={2} justify="flex-end">
        <Box pos="relative" w="full">
          <Input
            size="lg"
            placeholder=" "
            value={city}
            onChange={onChange}
            bg="white"
            color="black"
            borderRadius="md"
            p={4}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            _focus={{
              border: hasError ? "2px solid #dc2626" : "2px solid #051b24",
            }}
            borderWidth="2px"
            borderStyle="solid"
            borderColor={hasError ? "red.500" : "gray.300"}
          />
          <Text
            pos="absolute"
            left="1rem"
            top={shouldFloat ? "-0.75rem" : "0.5rem"}
            fontSize={shouldFloat ? "sm" : "md"}
            color={shouldFloat ? "black" : "gray.500"}
            bg={shouldFloat ? "white" : "transparent"}
            px={1}
            pointerEvents="none"
            zIndex={1}
            transition="all 0.2s"
          >
            Procurar uma cidade
          </Text>
        </Box>
        <Button
          type="submit"
          bg="gray.100"
          color="black"
          p={4}
          borderRadius="md"
          h="45px"
          border="2px solid #71717a"
          _hover={{
            bg: "gray.200",
          }}
        >
          <IoIosSearch size={25} />
        </Button>
      </HStack>
    </Box>
  );
}
