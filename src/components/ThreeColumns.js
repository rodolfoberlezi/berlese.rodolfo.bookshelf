import React from "react";
import {
  Box,
  Center,
  Container,
  Flex,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

import TranslatedHeading from "./TranslatedHeading";

import bookCover from "../images/bookCovers/mainCover.jpg";

const ThreeColumns = () => {
  return (
    <Container maxW="container.lg" width={"100%"}>
      <Center>
        <TranslatedHeading text={"Os sonhos"}></TranslatedHeading>
      </Center>
      <Flex
        width={"100%"}
        direction={{ base: "column", md: "row" }}
        justifyContent={"space-between"}
      >
        <Stack width={"33%"} direction={{ base: "column", md: "row" }}>
          <Text>
            "Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum."
          </Text>
        </Stack>
        <Box maxWidth={"33%"}>
          <Image width={"100%"} src={bookCover}></Image>
        </Box>
        <Stack width={"33%"} direction={{ base: "column", md: "row" }}>
          <Text>
            "Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum."
          </Text>
        </Stack>
      </Flex>
    </Container>
  );
};

export default ThreeColumns;
