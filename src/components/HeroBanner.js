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

import nameTitleImage from "../images/header/name-title.png";
import TranslatedLabel from "./TranslatedLabel";
import AmazonButtons from "./AmazonButtons";

const HeroBanner = () => {
  return (
    <Container maxW="container.lg" height={400} width={"100%"}>
      <Stack width={"100%"} direction={{ base: "column", md: "row" }}>
        <Flex flex={1} align={"center"} justify={"center"}>
          <Stack spacing={6} w={"full"} maxW={"lg"}>
            <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
              <TranslatedLabel text="Lorem ipsum"></TranslatedLabel>
            </Heading>
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
                alt={"Login Image"}
                src={
                  "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                }
              ></Image>
            </Box>
          </Stack>
        </Flex>
      </Stack>
    </Container>
  );
};

export default HeroBanner;
