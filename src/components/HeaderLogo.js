import React from "react";
import { Container, Image } from "@chakra-ui/react";

import nameTitleImage from "../images/header/name-title.png";

const HeaderLogo = () => {
  return (
    <Container maxHeight="225px" centerContent>
      <Image src={nameTitleImage} alt="Rodolfo Berlezi"></Image>
    </Container>
  );
};

export default HeaderLogo;
