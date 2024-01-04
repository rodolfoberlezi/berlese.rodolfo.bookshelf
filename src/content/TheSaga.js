import React from 'react'
import { Button, Center, Container, Flex, Heading, Image, Link, Stack } from '@chakra-ui/react'
import TranslatedLabel from '../components/TranslatedLabel'
import TranslatedHeading from '../components/TranslatedHeading'
import { powerHeart } from '../utils/links.json'
import bookWithEffects from '../images/bookCovers/bookWithEffects.png'

const TheSaga = () => {
    const books = [
        {
            title: 'thesaga.ph1',
            launched: true,
            link: powerHeart.ph1Kindle,
        },
        {
            title: 'thesaga.ph2',
            launched: false,
        },
        {
            title: 'thesaga.ph3',
            launched: false,
        },
    ]

    const getButtonLabel = (launched) => launched ? 'thesaga.actionButton' : 'thesaga.disabledButton'

    return (
        <Stack width={['100vw', '80vw']} minHeight={410} gap={10} my={10} py={2} mx="auto">
            <Center>
                <TranslatedHeading text={'thesaga.title'} />
            </Center>
            <Center justifyContent="space-evenly">
                {books.map((book) => {
                    return (
                        <Stack gap={5} >
                            <Center>
                                <Image width={40} src={bookWithEffects} />
                            </Center>
                            <Center >
                                <strong>
                                    <TranslatedLabel props={{ fontSize: 26 }} text={book.title} />
                                </strong>
                            </Center>
                            <Link href={book.link} isExternal>
                                <Button width="100%" isDisabled={!book.launched} backgroundColor="black" color="white" fontSize={26} fontWeight={600} borderRadius={50} _hover={{
                                    backgroundColor: 'var(--chakra-colors-yellow-500)',
                                }}>
                                    <TranslatedLabel text={getButtonLabel(book.launched)} />
                                </Button>
                            </Link>
                        </Stack>
                    )
                })}
            </Center>
        </Stack>
    )
}

export default TheSaga
