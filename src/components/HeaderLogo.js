import React from "react";
import { Box, Link, Image } from "@chakra-ui/react";

import titleImageWithSentences from "../images/header/name-title-action.png";

const HeaderLogo = () => {
  return (
    <Box>
      <Link to="/">
        <Image src={titleImageWithSentences} alt="Rodolfo Berlese"></Image>
      </Link>
    </Box>
  );
};

export default HeaderLogo;
