import React from 'react'
import { graphql } from 'gatsby'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import { Container } from '@chakra-ui/react'
import Header from '../content/Header.js'
import Footer from '../components/Footer.js'
import TranslatedLabel from '../components/TranslatedLabel.js'

const BooksPage = () => {
    useTranslation()

    return (
        <Container maxW='container.xl' bg={'white'}>
            <Header />
            <h1>
                <TranslatedLabel text={'Hi people'} />
            </h1>
            <Footer />
        </Container>
    )
}

export default BooksPage

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
