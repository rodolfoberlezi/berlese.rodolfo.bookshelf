import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { Trans } from "gatsby-plugin-react-i18next";

const Sinopse = ({ text }) => {
  return (
    <Box>
      <Text>Sinopse</Text>
      <Text>
        <Trans>{text}</Trans>
      </Text>
    </Box>
  );
};

export default Sinopse;
