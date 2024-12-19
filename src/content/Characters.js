import React from 'react'
import { Center, Grid, GridItem, Image, Stack } from '@chakra-ui/react'
import TranslatedLabel from '../components/TranslatedLabel'
import TranslatedHeading from '../components/TranslatedHeading'
import krian from '../images/bookCovers/krian.jpg'
import olexa from '../images/bookCovers/olexa.jpg'

const Characters = () => {
  const charsDetails = [
    {
      name: 'Krian Heart',
      description: 'characters.krian',
      image: krian,
    },
    {
      name: 'characters.olexa.name',
      description: 'characters.olexa',
      image: olexa,
    },
    {
      name: 'Zacky Warmsoul',
      description: 'characters.zacky',
    },
    {
      name: 'Havel Steam',
      description: 'characters.havel',
    },
  ]

  return (
    <Stack id="characters" width={['100vw', '80vw']} minHeight={410} gap={10} mt={40} py={2} mx="auto">
      <Center mb={5}>
        <TranslatedHeading props={{ fontSize: 56 }} text={'characters.title'} />
      </Center>
      <Grid templateColumns={{ lg: 'repeat(2, 1fr)' }} fontSize={24}>
        {charsDetails.map((char) => (
          <GridItem key={char.name} m={10} textAlign="center">
            {char.image && (
              <Center>
                <Image width={40} src={char.image} />
              </Center>
            )}
            <Center>
              <strong>
                <TranslatedLabel props={{ fontSize: 26 }} text={char.name} />
              </strong>
            </Center>
            <Center>
              <TranslatedLabel text={char.description} />
            </Center>
          </GridItem>
        ))}
      </Grid>
      <Center flexDirection="row" alignItems="center" textAlign="center" mx="auto" fontSize={24} p={4}>
        <TranslatedLabel text={'characters.more'} />
      </Center>
    </Stack>
  )
}

export default Characters
