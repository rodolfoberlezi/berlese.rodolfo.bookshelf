import React from 'react'
import { Center, Image, Stack } from '@chakra-ui/react'
import TranslatedLabel from '../components/TranslatedLabel'
import TranslatedHeading from '../components/TranslatedHeading'

const Characters = () => {
  const charsDetails = [
    {
      name: 'Krian Heart',
      description: '',
      icon: <></>,
    },
    {
      name: 'Krian Heart',
      description: '',
      icon: <></>,
    },
    {
      name: 'Krian Heart',
      description: '',
      icon: <></>,
    },
    {
      name: 'Krian Heart',
      description: '',
      icon: <></>,
    },
  ]

  return (
    <Stack id="characters" width={['100vw', '80vw']} minHeight={410} gap={10} my={10} py={2} mx="auto">
      <Center>
        <TranslatedHeading text={'characters.title'} />
      </Center>
      <Center justifyContent="space-evenly">
        {charsDetails.map((char) => {
          return (
            <Stack key={char.name} gap={5}>
              <Center>
                <Image width={40} src={char.icon} />
              </Center>
              <Center>
                <strong>
                  <TranslatedLabel props={{ fontSize: 26 }} text={char.title} />
                </strong>
              </Center>
              <TranslatedLabel text={char.name} />
            </Stack>
          )
        })}
      </Center>
    </Stack>
  )
}

export default Characters
