import React from "react";
import { Button, Text } from "@chakra-ui/react";
import { Trans } from "gatsby-plugin-react-i18next";

const ActionButton = ({ text }) => {
  return (
    <Button>
      <Text>
        <Trans>{text}</Trans>
      </Text>
    </Button>
  );
};

export default ActionButton;
