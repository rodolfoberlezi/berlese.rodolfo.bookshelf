import React from "react";
import {
  Avatar,
  Box,
  Button,
  Center,
  Container,
  Heading,
  Flex,
  Stack,
  Text,
  Link,
} from "@chakra-ui/react";

import TranslatedLabel from "./TranslatedLabel";
import { socialNetworks } from "../utils/links.json";

const AuthorApresentation = () => {
  return (
    <Container maxW="container.lg" py={20}>
      <Center mb={20}>
        <Heading fontSize={"2xl"}>O Autor</Heading>
      </Center>
      <Stack direction={{ base: "column", md: "row" }}>
        <Flex width={"50%"}>
          <Center>
            <Box>
              <Avatar
                size={"4xl"}
                src={
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                }
                alt={"Author"}
                css={{
                  border: "2px solid white",
                }}
              />
            </Box>
          </Center>
          <Box p={6}>
            <Stack spacing={0} align={"center"} mb={5}>
              <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
                Rodolfo Berlezi
              </Heading>
              <Text color={"gray.500"}>Escritor e Otaku</Text>
            </Stack>

            <Link
              href={socialNetworks.instagram}
              _hover={{ textDecoration: "none" }}
              isExternal
            >
              <Button
                w={"full"}
                mt={8}
                bg={"blue.400"}
                border={2}
                borderStyle={"solid"}
                borderColor={"blue.200"}
                color={"white"}
                rounded={"md"}
                _hover={{
                  bg: "blue.600",
                  boxShadow: "lg",
                  transform: "translateY(-2px)",
                }}
              >
                <TranslatedLabel
                  props={{ as: "span" }}
                  text="Follow"
                ></TranslatedLabel>
              </Button>
            </Link>
          </Box>
        </Flex>
        <Flex>
          <TranslatedLabel text="WhoAmI"></TranslatedLabel>
        </Flex>
      </Stack>
    </Container>
  );
};

export default AuthorApresentation;
