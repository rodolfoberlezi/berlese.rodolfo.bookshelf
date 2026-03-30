import React from 'react'
import phLogoCor from '../images/power-heart/logo-ph-cor.png'

const AboutSaga = () => (
  <>
    <Center maxWidth="90%" textAlign="center" mx={2} height="80vh">
      <TranslatedHeading props={{ fontSize: 42 }} text="aboutsaga.presenting" />
    </Center>
    <Center maxWidth="90%" textAlign="center" mx={2} height="80vh">
      <TranslatedHeading props={{ fontSize: 42 }} text="aboutsaga.time" />
    </Center>
    <Center maxWidth="90%" textAlign="center" mx={2} height="80vh">
      <TranslatedHeading props={{ fontSize: 42 }} text="aboutsaga.soul" />
    </Center>
    <Center maxWidth="90%" textAlign="center" mx={2} height="90vh">
      <TranslatedHeading props={{ fontSize: 42 }} text="aboutsaga.heart" />
    </Center>
    <Center maxWidth="90%" textAlign="center" mx={2} height="80vh" px={{ lg: 20 }} mb={{ lg: 20 }}>
      <Image src={phLogoCor} />
    </Center>
  </>
)

export default AboutSaga
