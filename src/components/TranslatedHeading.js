import React from 'react'
import { Heading } from '@chakra-ui/react'
import { Trans } from 'gatsby-plugin-react-i18next'

const TranslatedHeading = ({ props, text }) => {
  return (
    <Heading fontFamily="Cinzel, serif" fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} {...props}>
      <Trans>{text}</Trans>
    </Heading>
  )
}

export default TranslatedHeading
