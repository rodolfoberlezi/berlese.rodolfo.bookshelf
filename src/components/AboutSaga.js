import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { Trans } from "gatsby-plugin-react-i18next";

const AboutSaga = ({ text }) => {
  return (
    <Box>
      <Text>A Saga</Text>
      <Text>
        <Trans>{text}</Trans>
      </Text>
    </Box>
  );
};

export default AboutSaga;
