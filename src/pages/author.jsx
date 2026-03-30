import React from 'react'
import { graphql } from 'gatsby'
import { Container } from '@chakra-ui/react'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import { SpeedInsights } from '@vercel/speed-insights/react'
import Menu from '../components/Menu/index.js'
import Footer from '../components/Footer/index.js'
import AuthorApresentation from '../content/AuthorApresentation.js'
import NosceTeIpsum from '../content/NosceTeIpsum.js'
import FollowMe from '../content/FollowMe.js'
import '../styles/global.scss'

const IndexPage = () => {
  useTranslation()

  return (
    <>
      <Menu />
      <Container maxW="container.full" p={0} bg={'white'} centerContent>
        <AuthorApresentation />

        <FollowMe />

        <NosceTeIpsum />

        <Footer />

        <SpeedInsights />
      </Container>
    </>
  )
}

export default IndexPage

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
`
