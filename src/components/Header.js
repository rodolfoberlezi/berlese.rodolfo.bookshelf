import React from "react";
import { Container, Divider } from "@chakra-ui/react";

import HeaderLogo from "../content/HeaderLogo";
import Menu from "./Menu";

const Header = () => {
  return (
    <>
      <HeaderLogo></HeaderLogo>
      <Divider border={1} bg={"gray.200"}></Divider>
      <Menu></Menu>
      <Divider border={1} bg={"gray.200"}></Divider>
    </>
  );
};

export default Header;
