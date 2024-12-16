import React from 'react'
import { Center, Container, Flex, Image, Stack, Text } from '@chakra-ui/react'
import bookEffect from '../images/bookCovers/bookWithEffects.png'
import AmazonButtons from '../components/AmazonButtons'
import TranslatedHeading from '../components/TranslatedHeading'

const HeroBanner = () => {
  return (
    <Container maxW="container.lg" mb={20} width={'100%'}>
      <Stack width={'100%'} direction={{ base: 'column', md: 'row' }}>
        <Flex flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <TranslatedHeading text="POWER HEART"></TranslatedHeading>
            <TranslatedHeading props={{ fontSize: '1.75rem' }} text={'Livro 1 - O Recomeço da Alma'}></TranslatedHeading>
            <Text position={'relative'}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever
              since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </Text>

            <AmazonButtons></AmazonButtons>
          </Stack>
        </Flex>
        <Center p={12}>
          <Image alt={'Power Heart'} src={bookEffect}></Image>
        </Center>
      </Stack>
    </Container>
  )
}

export default HeroBanner
