import React from 'react'
import { Box, Heading, Stack } from '@chakra-ui/react'
import TranslatedLabel from '../components/TranslatedLabel'

const NosceTeIpsum = () => {
    return (
        <Box
            backgroundColor='black'
            borderRadius={10}
            height={510}
            width='80vw'
            my={2}
        >
            <Stack
                alignItems='center'
                color='white'
                fontSize={33}
                justifyContent='center'
                height='100%'
            >
                <Heading fontSize={66} variant='h2'>
                    Nosce te Ipsum
                </Heading>
                <TranslatedLabel text={'NosceTeIpsum'} />
            </Stack>
        </Box>
    )
}

export default NosceTeIpsum
