import React from "react";
import { Container, Divider } from "@chakra-ui/react";

import HeaderLogo from "../components/HeaderLogo";
import Menu from "../components/Menu";

// talvez um Menu de redes sociais no topo + a troca de lingua

const Header = () => {
  return (
    <>
      <HeaderLogo></HeaderLogo>
      <Divider bg={"gray.200"}></Divider>
      <Menu></Menu>
    </>
  );
};

export default Header;
