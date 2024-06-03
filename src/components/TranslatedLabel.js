import React from 'react'
import { Text } from '@chakra-ui/react'
import { Trans } from 'gatsby-plugin-react-i18next'

const TranslatedLabel = ({ props, text }) => {
  return (
    <Text fontFamily="Montserrat, sans-serif" {...props}>
      <Trans>{text}</Trans>
    </Text>
  )
}

export default TranslatedLabel
