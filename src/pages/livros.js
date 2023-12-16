import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { Container } from "@chakra-ui/react";

import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import TranslatedLabel from "../components/TranslatedLabel";

const BooksPage = () => {
  const { t } = useTranslation();

  return (
    <Container maxW="container.xl" bg={"white"}>
      <Header></Header>

      <h1>
        <TranslatedLabel text={"Hi people"}></TranslatedLabel>
      </h1>

      <Footer></Footer>
    </Container>
  );
};

export default BooksPage;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
