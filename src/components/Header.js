import React from "react";
import { Container, Divider } from "@chakra-ui/react";

import HeaderLogo from "../content/HeaderLogo";
import Menu from "./Menu";

const Header = () => {
  return (
    <>
      <Menu />
      <Divider border={1} bg={"gray.200"} />
      <HeaderLogo />
      <Divider border={1} bg={"gray.200"} />
    </>
  );
};

export default Header;
