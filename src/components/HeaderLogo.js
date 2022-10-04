import React from "react";
import { Container, Link, Image } from "@chakra-ui/react";

import nameTitleImage from "../images/header/name-title.png";

const HeaderLogo = () => {
  return (
    <Container maxHeight="225px" centerContent>
      <Link href="/">
        <Image src={nameTitleImage} alt="Rodolfo Berlezi"></Image>
      </Link>
    </Container>
  );
};

export default HeaderLogo;
