import React, { useContext } from 'react'
import { Button, Center, Grid, GridItem, Image, Link, Stack } from '@chakra-ui/react'
import TranslatedLabel from '../components/TranslatedLabel'
import TranslatedHeading from '../components/TranslatedHeading'
import links from '../utils/links.json'
import ph1CoverDetailed from '../images/bookCovers/bookCoverDetailed.jpg'
import ph1CoverDetailedEn from '../images/bookCovers/bookCoverDetailed-En.jpg'
import { amazonButtonColor } from '../utils/constants'
import { I18nextContext } from 'gatsby-plugin-react-i18next'

const TheSaga = () => {
  const { language } = useContext(I18nextContext)
  const { powerHeart } = links

  const books = [
    { title: 'thesaga.ph1', launched: true, link: powerHeart[language].ph1Kindle, image: language === 'pt' ? ph1CoverDetailed : ph1CoverDetailedEn },
    { title: 'thesaga.ph2', launched: false, image: 'bookComingSoon', status: 'thesaga.reviewing', expected: '2026' },
    { title: 'thesaga.ph3', launched: false, image: 'bookComingSoon', status: 'thesaga.writing', expected: '2027' },
    { title: 'thesaga.ph4', launched: false, image: 'bookComingSoon', status: 'thesaga.structuring', expected: '2029' },
  ]

  const getButtonLabel = (launched) => (launched ? 'thesaga.actionButton' : 'thesaga.disabledButton')

  return (
    <>
      <Stack id="books" width={['100vw', '80vw']} minHeight={510} gap={10} mt={5} py={2} mx="auto">
        <Stack>
          <Center>
            <TranslatedHeading props={{ fontSize: 48 }} text={'thesaga.title'} />
          </Center>
          <Center>
            <TranslatedHeading props={{ fontSize: 56 }} text={'thesaga.name'} />
          </Center>
          <Center>
            <TranslatedLabel props={{ fontSize: 32 }} text={'thesage.available'} />
          </Center>
        </Stack>
        <Grid templateColumns={{ lg: 'repeat(2, 1fr)' }}>
          {books.map((book) => {
            return (
              <GridItem key={book.title} m={5}>
                <Center mb={5}>
                  <strong>
                    <TranslatedLabel props={{ fontSize: 26 }} text={book.title} />
                  </strong>
                </Center>
                <Center mb={5}>
                  {book.launched ? (
                    <Image border={'solid'} borderColor={'black'} width={320} height={480} src={book.image} />
                  ) : (
                    <Center
                      width={320}
                      height={480}
                      background={'black'}
                      color={'white'}
                      textAlign={'center'}
                      fontSize={24}
                      fontWeight={600}
                      border={'solid'}
                      borderColor={'black'}
                    >
                      <Stack>
                        <TranslatedLabel text={book.status} />
                        <span>{book.expected}</span>
                      </Stack>
                    </Center>
                  )}
                </Center>
                <Link href={book.link} isExternal>
                  <Button
                    width="100%"
                    isDisabled={!book.launched}
                    color="black"
                    bg={amazonButtonColor}
                    fontSize={26}
                    fontWeight={600}
                    p={8}
                    border={3}
                    borderRadius={10}
                    borderStyle={'solid'}
                    borderColor={'orange.200'}
                    _hover={{ color: 'white', bg: 'orange.500', transform: 'translateY(-2px)' }}
                  >
                    <TranslatedLabel text={getButtonLabel(book.launched)} />
                  </Button>
                </Link>
              </GridItem>
            )
          })}
        </Grid>
      </Stack>
    </>
  )
}

export default TheSaga
