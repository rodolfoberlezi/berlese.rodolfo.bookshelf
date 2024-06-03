import React from 'react'
import { graphql } from 'gatsby'
import { Container } from '@chakra-ui/react'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import Header from '../components/Header.js'
import Menu from '../components/Menu.js'
import Footer from '../components/Footer/index.js'
import AuthorApresentation from '../content/AuthorApresentation.js'
import NosceTeIpsum from '../content/NosceTeIpsum.js'
import FollowMe from '../content/FollowMe.js'
import WhatIsFreedom from '../content/WhatIsFreedom.js'
import TheSaga from '../content/TheSaga.js'
import Characters from '../content/Characters.js'
import Ratings from '../content/Ratings.js'
import ActionButton from '../components/ActionButton.js'

import '../styles/global.scss'

const IndexPage = () => {
  useTranslation()

  return (
    <>
      <Menu />
      <Container maxW="container.full" p={0} bg={'white'} centerContent>
        <Header />
        <WhatIsFreedom />
        <AuthorApresentation />
        <TheSaga />
        <Characters />
        <ActionButton label={'button.knowmore'} />
        <Ratings />
        <ActionButton label={'button.readmore'} />
        <FollowMe />
        <NosceTeIpsum />
        <Footer />
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
