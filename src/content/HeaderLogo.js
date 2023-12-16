import React from "react";
import { Container, Link, Image } from "@chakra-ui/react";

import titleImageWithSentences from "../images/header/name-title-action.png";

const HeaderLogo = () => {
  return (
    <Container centerContent>
      <Link to="/">
        <Image src={titleImageWithSentences} alt="Rodolfo Berlese"></Image>
      </Link>
    </Container>
  );
};

export default HeaderLogo;
