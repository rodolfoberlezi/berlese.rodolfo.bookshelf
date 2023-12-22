import React from 'react'
import { Box, Center, Heading, Flex, Stack, Image } from '@chakra-ui/react'
import TranslatedLabel from '../components/TranslatedLabel'
import author from '../images/author/cafezinho.png'

const AuthorApresentation = () => {
    return (
        <Box
            backgroundColor='black'
            borderRadius={10}
            height={410}
            width='80vw'
            my={2}
        >
            <Stack
                alignItems='center'
                color='white'
                direction={{ base: 'column', md: 'row' }}
                maxWidth='90%'
                fontSize={33}
                justifyContent='center'
                height='100%'
                mx='auto'
            >
                <Flex>
                    <Center>
                        <Image
                            borderRadius='full'
                            maxW={'350px'}
                            mr={8}
                            src={author}
                            alt={'Rodolfo Berlese photo'}
                        />
                    </Center>
                    <Stack>
                        <Heading variant='h4' mb={2.5}>
                            Rodolfo Berlese
                        </Heading>
                        <Stack fontSize={18}>
                            <Box mb={1.5}>
                                <TranslatedLabel text='WhoAmIP1' />
                            </Box>
                            <TranslatedLabel text='WhoAmIP2' />
                        </Stack>
                    </Stack>
                </Flex>
            </Stack>
        </Box>
    )
}

export default AuthorApresentation
