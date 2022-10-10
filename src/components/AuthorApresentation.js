import React from "react";
import {
  Avatar,
  Box,
  Button,
  Center,
  Heading,
  Flex,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Trans } from "gatsby-plugin-react-i18next";

const AuthorApresentation = ({ text }) => {
  return (
    <Box p={8}>
      <Heading fontSize={"2xl"}>O Autor</Heading>
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
          <Text>
            <Trans>{text}</Trans>
            <Box p={6}>
              <Stack spacing={0} align={"center"} mb={5}>
                <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
                  Rodolfo Berlezi
                </Heading>
                <Text color={"gray.500"}>Escritor e Otaku</Text>
              </Stack>

              <Stack direction={"row"} justify={"center"} spacing={6}>
                <Stack spacing={0} align={"center"}>
                  <Text fontWeight={600}>23k</Text>
                  <Text fontSize={"sm"} color={"gray.500"}>
                    Followers
                  </Text>
                </Stack>
                <Stack spacing={0} align={"center"}>
                  <Text fontWeight={600}>23k</Text>
                  <Text fontSize={"sm"} color={"gray.500"}>
                    Followers
                  </Text>
                </Stack>
              </Stack>

              <Button
                w={"full"}
                mt={8}
                bg={useColorModeValue("#151f21", "gray.900")}
                color={"white"}
                rounded={"md"}
                _hover={{
                  transform: "translateY(-2px)",
                  boxShadow: "lg",
                }}
              >
                Follow
              </Button>
            </Box>
          </Text>
        </Flex>
        <Flex>
          <Text>Quem sou eu</Text>
        </Flex>
      </Stack>
    </Box>
  );
};

export default AuthorApresentation;
