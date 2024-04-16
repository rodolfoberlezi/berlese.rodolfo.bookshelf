import React from 'react'
import { Center, Flex, Image, Link } from '@chakra-ui/react'
import TranslatedLabel from '../TranslatedLabel'
import SocialNetworks from './SocialNetworks'
import rbLogo from '../../images/header/rb-circle.png'

const Footer = () => {
  return (
    <Flex
      align="center"
      as="footer"
      bg="white"
      flexDir={{
        base: 'column',
        sm: 'row',
      }}
      py="4"
      px="8"
      w="full"
    >
      <Link href="/">
        <Image boxSize="50px" src={rbLogo} />
      </Link>
      <Center mx="auto">
        <TranslatedLabel text="footer.allRights" />
      </Center>
      <SocialNetworks sizeButton="sm" />
    </Flex>
  )
}

export default Footer
