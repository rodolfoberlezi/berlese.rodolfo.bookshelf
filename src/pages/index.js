import React from "react";
import { graphql } from "gatsby";
import { Link, Trans, useTranslation } from "gatsby-plugin-react-i18next";

import Header from "../assets/Header.js";
import Body from "../assets/Body.js";
import Footer from "../assets/Footer.js";

import TranslatedLabel from "../components/TranslatedLabel";
import AvaliationCards from "../components/AvaliationCards.js";
import AuthorApresentation from "../components/AuthorApresentation.js";
import SocialNetworks from "../components/SocialNetworks.js";

const IndexPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header></Header>
      <Body>
        <h1>
          <TranslatedLabel text={"Hi people"}></TranslatedLabel>
        </h1>
        <p>
          <TranslatedLabel
            text={"Welcome to your new Gatsby site."}
          ></TranslatedLabel>
        </p>
        <p>
          <TranslatedLabel
            text={"Now go build something great."}
          ></TranslatedLabel>
        </p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>

        <AvaliationCards></AvaliationCards>

        <AuthorApresentation></AuthorApresentation>

        <SocialNetworks></SocialNetworks>

        <Link to="/sobre/">
          <TranslatedLabel text={"Go to page 2"}></TranslatedLabel>
        </Link>
      </Body>
      <Footer></Footer>
    </>
  );
};

export default IndexPage;

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
