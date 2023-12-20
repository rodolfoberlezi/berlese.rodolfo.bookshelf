import React from "react";
import { Divider } from "@chakra-ui/react";

import HeaderLogo from "../content/HeaderLogo";
import Menu from "../components/Menu";

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
