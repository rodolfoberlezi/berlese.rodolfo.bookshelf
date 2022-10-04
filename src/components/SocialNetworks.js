import React from "react";
import { Flex, Link, IconButton } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const SocialNetworks = ({
  directionFlow = "row",
  sizeButton = "lg",
  marginAround = "5",
}) => {
  return (
    <Flex
      minWidth={150}
      minH={{
        base: "150",
        sm: "50",
      }}
      flexDir={{
        base: "column",
        sm: "row",
      }}
      direction={directionFlow}
      align="center"
      justifyContent="space-between"
    >
      <Link
        href="https://www.facebook.com/rodolfopowerheart/"
        margin={directionFlow !== "row" ? marginAround : "0"}
        isExternal
      >
        <IconButton
          size={sizeButton}
          aria-label="Facebook"
          colorScheme="facebook"
          icon={<FaFacebook />}
        ></IconButton>
      </Link>

      <Link
        href="https://www.instagram.com/rodolfoberlezi/"
        margin={directionFlow !== "row" ? marginAround : "0"}
        isExternal
      >
        <IconButton
          size={sizeButton}
          aria-label="Instagram"
          colorScheme="pink"
          icon={<FaInstagram />}
        ></IconButton>
      </Link>

      <Link
        href="https://twitter.com/rodolfoberlezi/"
        margin={directionFlow !== "row" ? marginAround : "0"}
        isExternal
      >
        <IconButton
          size={sizeButton}
          aria-label="Twitter"
          colorScheme="twitter"
          icon={<FaTwitter />}
        ></IconButton>
      </Link>

      <Link
        href="https://www.youtube.com/channel/UCjnBm9RnjvdLC3ni6olOz8g"
        margin={directionFlow !== "row" ? marginAround : "0"}
        isExternal
      >
        <IconButton
          size={sizeButton}
          aria-label="Youtube"
          colorScheme="red"
          icon={<FaYoutube />}
        ></IconButton>
      </Link>
    </Flex>
  );
};

export default SocialNetworks;
