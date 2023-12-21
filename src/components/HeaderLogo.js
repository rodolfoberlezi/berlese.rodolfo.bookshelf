import React from 'react'
import { Box, Image, AspectRatio } from '@chakra-ui/react'

import titleImageWithSentences from '../images/header/name-title-action.png'
import pptLogo from '../images/header/name-title-first-entrance.mp4'

const HeaderLogo = () => {
    return (
        <Box mt={'60px'} mb={4}>
            <Image
                src={titleImageWithSentences}
                alt='Rodolfo Berlese'
                objectFit={'cover'}
            />

            {/* <AspectRatio maxW={500} ratio={1}>
        <iframe title="naruto" src={pptLogo} allowFullScreen />
      </AspectRatio> */}
        </Box>
    )
}

export default HeaderLogo
