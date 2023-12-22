import React from 'react'
import { Container, Flex, Image, Link } from '@chakra-ui/react'
import TranslatedLabel from './TranslatedLabel'
import SocialNetworks from './SocialNetworks'
import rbLogo from '../images/header/rb-circle.png'

const Footer = () => {
    return (
        <Container maxW='container.2xl' p={0}>
            <Flex
                w='full'
                bg='#edf3f8'
                p={50}
                alignItems='center'
                justifyContent='center'
            >
                <Container maxW='container.xl'>
                    <Flex
                        w='full'
                        as='footer'
                        flexDir={{
                            base: 'column',
                            sm: 'row',
                        }}
                        align='center'
                        justify='space-between'
                        py='4'
                        px='8'
                        bg='white'
                    >
                        <Link href='/'>
                            <Image boxSize='50px' src={rbLogo}></Image>
                        </Link>

                        <TranslatedLabel text='FooterRights'></TranslatedLabel>

                        <SocialNetworks sizeButton='sm'></SocialNetworks>
                    </Flex>
                </Container>
            </Flex>
        </Container>
    )
}

export default Footer
