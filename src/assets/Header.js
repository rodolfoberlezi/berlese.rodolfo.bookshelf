import React from "react";
import { Container, Divider } from "@chakra-ui/react";

import HeaderLogo from "../components/HeaderLogo";
import Menu from "../components/Menu";
import LanguagesMenu from "../components/LanguagesMenu.js";

// talvez um Menu de redes sociais no topo + a troca de lingua

const Header = () => {
  return (
    <Container maxW="container.xl">
      <HeaderLogo></HeaderLogo>
      <Divider></Divider>
      <Menu></Menu>
      <h1>
        <LanguagesMenu title="Choose Language" />
      </h1>
    </Container>
  );
};

export default Header;
