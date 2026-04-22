import React, { useContext } from 'react'
import { graphql } from 'gatsby'
import { Container } from '@chakra-ui/react'
import { I18nextContext, useTranslation } from 'gatsby-plugin-react-i18next'
import { SpeedInsights } from '@vercel/speed-insights/react'
import Menu from '../components/Menu/index.js'
import Footer from '../components/Footer/index.js'
import AuthorApresentation from '../content/AuthorApresentation.js'
import NosceTeIpsum from '../content/NosceTeIpsum.js'
import FollowMe from '../content/FollowMe.js'
import WhatIsFreedom from '../content/WhatIsFreedom.js'
import PowerHeartBooks from '../content/PowerHeartBooks.js'
import Characters from '../content/Characters.js'
import Ratings from '../content/Ratings.js'
import ActionButton from '../components/ActionButton.js'
import links from '../utils/links.json'
import SoulPowers from '../content/SoulPowers.js'
import '../styles/global.scss'

const IndexPage = () => {
  useTranslation()
  const { language } = useContext(I18nextContext)
  const { powerHeart } = links

  return (
    <>
      <Menu />
      <Container maxW="container.full" p={0} bg={'white'} centerContent>
        <WhatIsFreedom />

        <PowerHeartBooks />

        <Characters />

        <ActionButton label={'button.characters'} link={powerHeart[language].ph1Kindle} />

        <SoulPowers />

        <ActionButton label={'button.knowmore'} link={powerHeart[language].ph1Kindle} />

        <Ratings />

        <ActionButton label={'button.verify'} link={powerHeart[language].ph1Kindle} />

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
