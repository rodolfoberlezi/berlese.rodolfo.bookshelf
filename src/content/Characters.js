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
      description: 'o garoto virgem que sonha com o primeiro beijo.',
      image: krian,
    },
    {
      name: 'Olexa, a Ampulheta',
      description: 'a garota mercenária que sonha com um mundo onde todos podem viver livres.',
      image: olexa,
    },
    {
      name: 'Zacky Warmsoul',
      description: 'manhoso e malandro, esconde seus reais desejos de vingança.',
      image: '',
    },
    {
      name: 'Havel Steam',
      description: 'o vespertino da estalagem, sente falta de sua mestra e planeja um dia reencontra-la.',
      image: '',
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
      <Center flexDirection="row" alignItems="center" textAlign="center" mx="auto" fontSize={24}>
        e muitos outros mercenários em uma luta contra algozes na esperança de salvar as criaturas que vem de Astasy, o mundo exilado, o continente
        das criaturas não humanas como fadas, elfos, anões, selvagens e demônios. Tudo isso, é claro, sem deixarem de cumprir com a realização de seus
        próprios sonhos!
      </Center>
    </Stack>
  )
}

export default Characters
