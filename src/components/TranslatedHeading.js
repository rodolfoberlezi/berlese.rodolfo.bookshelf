import React from "react";
import { Heading } from "@chakra-ui/react";
import { Trans } from "gatsby-plugin-react-i18next";

const TranslatedLabel = ({ props, text }) => {
  return (
    <Heading {...props}>
      <Trans>{text}</Trans>
    </Heading>
  );
};

export default TranslatedLabel;
