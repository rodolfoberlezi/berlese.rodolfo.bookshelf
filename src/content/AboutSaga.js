import React from 'react'
import { Center } from '@chakra-ui/react'
import TranslatedHeading from '../components/TranslatedHeading'

const AboutSaga = () => (
  <>
    <Center maxWidth="90%" textAlign="center" mx={2} height="50vh">
      <TranslatedHeading props={{ fontSize: 42 }} text="aboutsaga.presenting" />
    </Center>
    <Center maxWidth="90%" textAlign="center" mx={2} height="50vh">
      <TranslatedHeading props={{ fontSize: 42 }} text="aboutsaga.time" />
    </Center>
    <Center maxWidth="90%" textAlign="center" mx={2} height="50vh">
      <TranslatedHeading props={{ fontSize: 42 }} text="aboutsaga.soul" />
    </Center>
    <Center maxWidth="90%" textAlign="center" mx={2} height="50vh" borderBottom={'solid'}>
      <TranslatedHeading props={{ fontSize: 42 }} text="aboutsaga.heart" />
    </Center>
  </>
)

export default AboutSaga
