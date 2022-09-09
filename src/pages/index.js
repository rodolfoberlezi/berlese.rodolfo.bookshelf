import React from "react";
import { graphql } from "gatsby";
import { Link, Trans, useTranslation } from "gatsby-plugin-react-i18next";

import LanguagesMenu from "../components/LanguagesMenu.js";

// import Layout from "../components/layout";
// import Image from "../components/image";
// import SEO from "../components/seo";

const IndexPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <h1>
        <LanguagesMenu title="Choose Language" />
      </h1>
      <h1>
        <Trans>Hi people</Trans>
      </h1>
      <p>
        <Trans>Welcome to your new Gatsby site.</Trans>
      </p>
      <p>
        <Trans>Now go build something great.</Trans>
      </p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
      <Link to="/page-2/">
        <Trans>Go to page 2</Trans>
      </Link>
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
