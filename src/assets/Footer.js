import React from "react";
import { chakra, Container, Flex, Image, Link } from "@chakra-ui/react";

import TranslatedLabel from "../components/TranslatedLabel";
import SocialNetworks from "../components/SocialNetworks";

import rbLogo from "../images/header/rb-circle.png";

const Footer = () => {
  return (
    <Container maxW="container.xl">
      <Flex
        w="full"
        bg="#edf3f8"
        _dark={{
          bg: "#3e3e3e",
        }}
        p={50}
        alignItems="center"
        justifyContent="center"
      >
        <Flex
          w="full"
          as="footer"
          flexDir={{
            base: "column",
            sm: "row",
          }}
          align="center"
          justify="space-between"
          px="6"
          py="4"
          bg="white"
          _dark={{
            bg: "gray.900",
          }}
        >
          <Link href="/">
            <Image boxSize="50px" src={rbLogo}></Image>
          </Link>

          <TranslatedLabel text="FooterRights"></TranslatedLabel>
          
          <SocialNetworks sizeButton="sm"></SocialNetworks>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Footer;
