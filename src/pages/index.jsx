import React from 'react'
import { graphql } from 'gatsby'
import { Container } from '@chakra-ui/react'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import Header from '../components/Header.js'
import Menu from '../components/Menu.js'
import Footer from '../components/Footer.js'
import HeroBanner from '../content/HeroBanner.js'
import ThreeColumns from '../content/ThreeColumns.js'
import AuthorApresentation from '../content/AuthorApresentation.js'
import '../styles/global.css'

const IndexPage = () => {
    useTranslation()

    return (
        <>
            <Menu />
            <Container maxW='container.full' p={0} bg={'white'} centerContent>
                <Header />
                <AuthorApresentation />
                <ThreeColumns />
                <HeroBanner />
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