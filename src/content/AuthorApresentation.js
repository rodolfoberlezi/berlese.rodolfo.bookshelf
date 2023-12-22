import React from 'react'
import { Box, Center, Heading, Stack, Image } from '@chakra-ui/react'
import TranslatedLabel from '../components/TranslatedLabel'
import author from '../images/author/cafezinho.png'

const AuthorApresentation = () => {
    return (
        <Center
            alignItems='center'
            backgroundColor='black'
            borderRadius={10}
            minHeight={410}
            width={['100vw', '80vw']}
            my={2}
            py={2}
        >
            <Stack
                color='white'
                direction={{ base: 'column', md: 'row' }}
                maxWidth='90%'
                fontSize={[23, 33]}
                height='100%'
                mx='auto'
            >
                <Center>
                    <Image
                        borderRadius='full'
                        maxW={'350px'}
                        mr={[0, 8]}
                        src={author}
                        alt={'Rodolfo Berlese photo'}
                    />
                </Center>
                <Stack>
                    <Heading variant='h4' mb={2.5}>
                        Rodolfo Berlese
                    </Heading>
                    <Stack fontSize={[13, 18]}>
                        <Box mb={1.5}>
                            <TranslatedLabel text='WhoAmIP1' />
                        </Box>
                        <TranslatedLabel text='WhoAmIP2' />
                    </Stack>
                </Stack>
            </Stack>
        </Center>
    )
}

export default AuthorApresentation
