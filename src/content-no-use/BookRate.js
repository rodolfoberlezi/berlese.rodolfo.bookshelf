import React from 'react'
import { Center, Flex, Container } from '@chakra-ui/react'
import { BsStarFill, BsStarHalf } from 'react-icons/bs'

import Carousel from '../components/Carousel'
import TranslatedLabel from '../components/TranslatedLabel'
import TranslatedHeading from '../components/TranslatedHeading'

export default function BookRate() {
  const renderStars = (rating) => {
    return Array(4)
      .fill('')
      .map((_, i) => <BsStarFill key={i} size={24} color={i < rating ? 'yellow' : 'gray.300'} />)
      .concat(<BsStarHalf size={24} color="yellow"></BsStarHalf>)
  }

  return (
    <Container maxW="container.lg" py={20}>
      <Center>
        <Flex direction="column">
          <TranslatedHeading text={'Avaliações'}></TranslatedHeading>
          <Center>
            <TranslatedLabel text={'Nota média de 4,6!'}></TranslatedLabel>
          </Center>
          <Center mt="2">{renderStars(4)}</Center>
        </Flex>
      </Center>
      <Center py={6}>
        <Carousel></Carousel>
      </Center>
    </Container>
  )
}
