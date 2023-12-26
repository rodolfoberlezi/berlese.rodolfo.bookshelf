import React from 'react'
import { Center, Container, Flex, Heading } from '@chakra-ui/react'
import TranslatedLabel from '../components/TranslatedLabel'
import TranslatedHeading from '../components/TranslatedHeading'
import { powerHeart } from '../utils/links.json'

const TheSaga = () => {
    const books = [
        {
            title: 'PH1',
            launched: true,
            link: powerHeart.ph1Kindle,
        },
        {
            title: 'PH2',
            launched: false,
        },
        {
            title: 'PH3',
            launched: false,
        },
    ]

    return (
        <Stack>
            <Flex>
                <Center>
                    <TranslatedHeading text={'Saga'} />
                </Center>
            </Flex>
            <Flex></Flex>
        </Stack>
    )
}

export default TheSaga
