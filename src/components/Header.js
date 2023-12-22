import React from 'react'
import { Box, Container, Image } from '@chakra-ui/react'
import titleImageWithSentences from '../images/header/name-title-action.png'

const HeaderLogo = () => {
    return (
        <Container maxWidth='container.xl'>
            <Box mt={['60px', '40px', '0px']} height={['auto', '75vh', '90vh']}>
                <Image
                    src={titleImageWithSentences}
                    alt='Rodolfo Berlese, essência, liberdade e vontade através de histórias.'
                    objectFit={'cover'}
                />
            </Box>
        </Container>
    )
}

export default HeaderLogo
