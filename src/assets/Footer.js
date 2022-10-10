import React from "react";
import { Flex, Image, Link } from "@chakra-ui/react";

import TranslatedLabel from "../components/TranslatedLabel";
import SocialNetworks from "../components/SocialNetworks";

import rbLogo from "../images/header/rb-circle.png";

const Footer = () => {
  return (
    <Flex
      w="full"
      bg="#edf3f8"
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
        px="8"
        py="4"
        bg="white"
      >
        <Link href="/">
          <Image boxSize="50px" src={rbLogo}></Image>
        </Link>

        <TranslatedLabel text="FooterRights"></TranslatedLabel>

        <SocialNetworks sizeButton="sm"></SocialNetworks>
      </Flex>
    </Flex>
  );
};

export default Footer;
