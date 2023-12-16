import React from "react";
import { Container, Divider } from "@chakra-ui/react";

import HeaderLogo from "../content/HeaderLogo";
import Menu from "./Menu";

const Header = () => {
  return (
    <>
      <Menu />
      <Divider h={0.5} bg={"black"} />
      <HeaderLogo />
    </>
  );
};

export default Header;
