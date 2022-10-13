import React from "react";
import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

import bookEffect from "../images/bookCovers/bookWithEffects.png";
import AmazonButtons from "./AmazonButtons";
import TranslatedHeading from "./TranslatedHeading";

const HeroBanner = () => {
  return (
    <Container maxW="container.lg" height={400} width={"100%"}>
      <Stack width={"100%"} direction={{ base: "column", md: "row" }}>
        <Flex flex={1} align={"center"} justify={"center"}>
          <Stack spacing={6} w={"full"} maxW={"lg"}>
            <TranslatedHeading text="Lorem ipsum"></TranslatedHeading>

            <Text position={"relative"}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Text>

            <AmazonButtons></AmazonButtons>
          </Stack>
        </Flex>
        <Flex width={"50%"} align={"center"} justify={"center"}>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Box p={12}>
              <Image
                w={300}
                h={300}
                alt={"Power Heart"}
                src={bookEffect}
              ></Image>
            </Box>
          </Stack>
        </Flex>
      </Stack>
    </Container>
  );
};

export default HeroBanner;
