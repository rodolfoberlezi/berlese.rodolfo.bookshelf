import React from "react";
import { Container } from "@chakra-ui/react";

const Body = ({ children }) => {
  return <Container maxW="container.xl">{children}</Container>;
};

export default Body;
