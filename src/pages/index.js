import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";

import Header from "../assets/Header.js";
import Body from "../assets/Body.js";
import Footer from "../assets/Footer.js";

import AboutSaga from "../components/AboutSaga";
import AvaliationCards from "../components/AvaliationCards";
import AuthorApresentation from "../components/AuthorApresentation";
import HeroBanner from "../components/HeroBanner";
import Sinopse from "../components/Sinopse";
import SocialNetworks from "../components/SocialNetworks";
import TranslatedLabel from "../components/TranslatedLabel";

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

        <HeroBanner></HeroBanner>

        <AboutSaga></AboutSaga>

        <Sinopse></Sinopse>

        <AvaliationCards></AvaliationCards>

        <AuthorApresentation></AuthorApresentation>

        <SocialNetworks></SocialNetworks>
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
