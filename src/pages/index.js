import React from "react";
import { graphql } from "gatsby";
import { Link, Trans, useTranslation } from "gatsby-plugin-react-i18next";

import LanguagesMenu from "../components/LanguagesMenu.js";
import SocialProfileWithImage from "../components/AvaliationsCard.js";
import TranslatedLabel from "../components/TranslatedLabel";
import Header from "../assets/Header.js";
import Footer from "../assets/Footer.js";
import Body from "../assets/Body.js";

const IndexPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header></Header>
      <Body>
        <SocialProfileWithImage></SocialProfileWithImage>
        <h1>
          <LanguagesMenu title="Choose Language" />
        </h1>
        <h1>
          <TranslatedLabel text={"Hi people"}></TranslatedLabel>
        </h1>
        <p>
          <Trans>Welcome to your new Gatsby site.</Trans>
        </p>
        <p>
          <Trans>Now go build something great.</Trans>
        </p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
        <Link to="/sobre/">
          <Trans>Go to page 2</Trans>
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
