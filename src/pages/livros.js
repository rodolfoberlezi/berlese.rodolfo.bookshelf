import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";

import Header from "../assets/Header.js";
import Body from "../assets/Body.js";
import Footer from "../assets/Footer.js";

import TranslatedLabel from "../components/TranslatedLabel";

const BooksPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header></Header>
      <Body>
        <h1>
          <TranslatedLabel text={"Hi people"}></TranslatedLabel>
        </h1>
      </Body>
      <Footer></Footer>
    </>
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
