import React from "react";
import { Text } from "@chakra-ui/react";
import { Trans } from "gatsby-plugin-react-i18next";

const Characters = ({ text }) => {
  return (
    <Text>
      <Trans>{text}</Trans>
    </Text>
  );
};

export default Characters;
