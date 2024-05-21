import React from 'react'
import { Center, Stack } from '@chakra-ui/react'
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
      key: 'mateus',
      name: 'Mateus',
    },
    {
      key: 'giuseppe',
      name: 'Giuseppe',
    },
  ]

  return (
    <Stack id="characters" width={['100vw', '80vw']} minHeight={410} gap={10} my={10} py={2} mx="auto">
      <Center mb={10}>
        <TranslatedHeading text={'rating.title'} />
      </Center>
      <Center alignItems="start" justifyContent="space-evenly" fontSize={24}>
        {ratingsDetails.map((rate) => (
          <Stack key={rate.key} gap={2} mx={3} textAlign="center">
            <Center>
              <strong>
                <TranslatedLabel props={{ fontSize: 26 }} text={`rating.${rate.key}`} />
              </strong>
            </Center>
            <Center>
              <TranslatedLabel text={rate.name} />
            </Center>
          </Stack>
        ))}
      </Center>
    </Stack>
  )
}

export default Ratings
