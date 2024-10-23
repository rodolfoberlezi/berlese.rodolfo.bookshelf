import React from 'react'
import { Center, Grid, GridItem, Stack } from '@chakra-ui/react'
import TranslatedLabel from '../components/TranslatedLabel'
import TranslatedHeading from '../components/TranslatedHeading'

const Ratings = () => {
  const ratingsDetails = [
    {
      key: 'lorena',
      name: 'Lorena',
    },
    {
      key: 'junio',
      name: 'Junio',
    },
    {
      key: 'giuseppe',
      name: 'Giuseppe',
    },
    {
      key: 'mateus',
      name: 'Mateus',
    },
  ]

  return (
    <Stack id="characters" width={['100vw', '80vw']} minHeight={410} gap={10} mt={20} py={2} mx="auto">
      <Center mb={10} textAlign={'center'}>
        <TranslatedHeading props={{ fontSize: 32 }} text={'rating.title'} />
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
    </Stack>
  )
}

export default Ratings
