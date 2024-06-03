import React from 'react'
import { Button, Center, Image, Link, Stack } from '@chakra-ui/react'
import TranslatedLabel from '../components/TranslatedLabel'
import TranslatedHeading from '../components/TranslatedHeading'
import { powerHeart } from '../utils/links.json'
import bookWithEffects from '../images/bookCovers/bookWithEffects.png'
import bookComingSoon from '../images/bookCovers/book_coming_soon-no-bg.png'
import phLogoPB from '../images/power-heart/logo-ph-pb.png'
import phLogoCor from '../images/power-heart/logo-ph-cor.png'

const AboutSaga = () => (
  <>
    <Center maxWidth="90%" textAlign="center" mx={2} height="80vh">
      <TranslatedHeading text="aboutsaga.presenting" />
    </Center>
    <Center maxWidth="90%" textAlign="center" mx={2} height="80vh">
      <TranslatedHeading text="aboutsaga.time" />
    </Center>
    <Center maxWidth="90%" textAlign="center" mx={2} height="80vh">
      <TranslatedHeading text="aboutsaga.soul" />
    </Center>
    <Center maxWidth="90%" textAlign="center" mx={2} height="90vh">
      <TranslatedHeading text="aboutsaga.heart" />
    </Center>
    <Center maxWidth="90%" textAlign="center" mx={2} height="80vh" px={20} mb={2}>
      <Image src={phLogoPB} />
    </Center>
    <Center maxWidth="90%" textAlign="center" mx={2} height="80vh" px={20} mb={2}>
      <Image src={phLogoCor} />
    </Center>
  </>
)

const TheSaga = () => {
  const books = [
    {
      title: 'thesaga.ph1',
      launched: true,
      link: powerHeart.ph1Kindle,
      image: bookWithEffects,
    },
    {
      title: 'thesaga.ph2',
      launched: false,
      image: bookComingSoon,
    },
    {
      title: 'thesaga.ph3',
      launched: false,
      image: bookComingSoon,
    },
  ]

  const getButtonLabel = (launched) => (launched ? 'thesaga.actionButton' : 'thesaga.disabledButton')

  return (
    <>
      <AboutSaga />
      <Stack id="books" width={{ md: '100vw', lg: '80vw' }} minHeight={510} gap={10} my={10} py={2} mx="auto">
        <Stack mb={{ md: 0, lg: 10 }}>
          <Center>
            <TranslatedHeading text={'thesaga.title'} />
          </Center>
          <Center>
            <TranslatedLabel text={'thesage.available'} />
          </Center>
        </Stack>
        <Center flexDirection={{ md: 'column', lg: 'row' }} justifyContent="space-evenly">
          {books.map((book) => {
            return (
              <Stack key={book.title} gap={5} mt={{ md: 20, lg: 0 }}>
                <Center>
                  <Image width={40} src={book.image} />
                </Center>
                <Center>
                  <strong>
                    <TranslatedLabel props={{ fontSize: 26 }} text={book.title} />
                  </strong>
                </Center>
                <Link href={book.link} isExternal>
                  <Button
                    width="100%"
                    isDisabled={!book.launched}
                    backgroundColor="black"
                    color="white"
                    fontSize={26}
                    fontWeight={600}
                    borderRadius={50}
                    _hover={{
                      backgroundColor: 'var(--chakra-colors-yellow-500)',
                    }}
                  >
                    <TranslatedLabel text={getButtonLabel(book.launched)} />
                  </Button>
                </Link>
              </Stack>
            )
          })}
        </Center>
      </Stack>
    </>
  )
}

export default TheSaga
