import React from 'react'
import { Center, Grid, GridItem, Image, Stack } from '@chakra-ui/react'
import TranslatedLabel from '../components/TranslatedLabel'
import TranslatedHeading from '../components/TranslatedHeading'
import poster from '../images/bookCovers/poster.jpg'

const Ratings = () => {
  const ratingsDetails = [
    { key: 'lorena', name: 'Lorena' },
    { key: 'junio', name: 'Junio' },
    { key: 'giuseppe', name: 'Giuseppe' },
    { key: 'mateus', name: 'Mateus' },
  ]

  return (
    <Stack id="characters" width={['100vw', '80vw']} minHeight={410} gap={10} mt={5} py={2} mx="auto" borderTop={'solid'}>
      <Center textAlign={'center'}>
        <TranslatedHeading props={{ fontSize: 36 }} text={'rating.title'} />
      </Center>
      <Grid templateColumns={{ lg: 'repeat(2, 1fr)' }}>
        {ratingsDetails.map((rate) => (
          <GridItem key={rate.key} gap={2} m={5} textAlign="center">
            <Center>
              <strong>
                <TranslatedLabel props={{ fontSize: 26 }} text={`rating.${rate.key}`} />
              </strong>
            </Center>
            <Center>
              <TranslatedLabel text={rate.name} />
            </Center>
          </GridItem>
        ))}
      </Grid>
      <Center>
        <Image src={poster} />
      </Center>
    </Stack>
  )
}

export default Ratings
