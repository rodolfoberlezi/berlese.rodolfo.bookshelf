import React from 'react'
import { graphql } from 'gatsby'
import { Container } from '@chakra-ui/react'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import Header from '../components/Header.js'
import Menu from '../components/Menu.js'
import Footer from '../components/Footer/index.js'
import AuthorApresentation from '../content/AuthorApresentation.js'
// import HeroBanner from '../content-no-use/HeroBanner.js'
import NosceTeIpsum from '../content/NosceTeIpsum.js'
// import ThreeColumns from '../content-no-use/ThreeColumns.js'
import FollowMe from '../content/FollowMe.js'
import WhatIsFreedom from '../content/WhatIsFreedom.js'
import TheSaga from '../content/TheSaga.js'
import '../styles/global.css'

const IndexPage = () => {
    useTranslation()

    return (
        <>
            <Menu />
            <Container maxW='container.full' p={0} bg={'white'} centerContent>
                <Header />
                <NosceTeIpsum />
                <AuthorApresentation />
                <WhatIsFreedom />
                <TheSaga />

                {/* sinopse power heart - modal de cada livro */}
                {/* chamada */}
                {/* acompanhe os personagens */}
                {/* explore */}
                {/* krian */}
                {/* avaliações */}

                <FollowMe />
                {/* me apoie - compra ou doacao */}
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
