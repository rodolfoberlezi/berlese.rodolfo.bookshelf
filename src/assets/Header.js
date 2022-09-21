import React from "react";
import { Container, Divider } from "@chakra-ui/react";

import HeaderLogo from "../components/HeaderLogo";
import Menu from "../components/Menu";

const Header = () => {
  return (
    <Container maxW="container.xl">
      <HeaderLogo></HeaderLogo>
      <Divider></Divider>
      <Menu></Menu>
    </Container>
  );
};

export default Header;
