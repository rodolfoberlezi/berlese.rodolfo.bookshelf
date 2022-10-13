import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";

import Header from "../assets/Header.js";
import Footer from "../assets/Footer.js";

import AboutSaga from "../components/AboutSaga";
import AvaliationCards from "../components/BookRate";
import AuthorApresentation from "../components/AuthorApresentation";
import HeroBanner from "../components/HeroBanner";
import Sinopse from "../components/Sinopse";
import TranslatedLabel from "../components/TranslatedLabel";

import "../styles/global.css";
import { Container } from "@chakra-ui/react";

const IndexPage = () => {
  const { t } = useTranslation();

  return (
    <Container maxW="container.2xl" p={0} bg={"white"} centerContent>
      <Header></Header>

      <HeroBanner></HeroBanner>

      <Sinopse></Sinopse>

      <AvaliationCards></AvaliationCards>

      <AboutSaga></AboutSaga>

      <AuthorApresentation></AuthorApresentation>

      <Footer></Footer>
    </Container>
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
