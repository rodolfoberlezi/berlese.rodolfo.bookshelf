import React from "react";
import { Divider } from "@chakra-ui/react";

import HeaderLogo from "../components/HeaderLogo";
import Menu from "../components/Menu";

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
