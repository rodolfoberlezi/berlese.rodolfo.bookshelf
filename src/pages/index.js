import React from "react";
import { graphql } from "gatsby";
import { Container } from "@chakra-ui/react";
import { useTranslation } from "gatsby-plugin-react-i18next";

import Header from "../assets/Header.js";
import Footer from "../assets/Footer.js";

import AboutSaga from "../components/AboutSaga";
import AvaliationCards from "../components/BookRate";
import AuthorApresentation from "../components/AuthorApresentation";
import HeroBanner from "../components/HeroBanner";
import Sinopse from "../components/Sinopse";
import ThreeColumns from "../components/ThreeColumns.js";

import "../styles/global.css";

const IndexPage = () => {
  const { t } = useTranslation();

  return (
    <Container maxW="container.full" p={0} bg={"white"} centerContent>
      <Header></Header>

      <ThreeColumns></ThreeColumns>

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
