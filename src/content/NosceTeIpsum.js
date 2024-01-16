import React from 'react'
import { Box, Heading, Stack } from '@chakra-ui/react'
import TranslatedLabel from '../components/TranslatedLabel'

const NosceTeIpsum = () => {
  return (
    <Box backgroundColor="black" borderRadius={10} height={510} width="100vw" my={2}>
      <Stack alignItems="center" justifyContent="center" color="white" fontSize={[23, 33]} height="100%">
        <Heading fontSize={[43, 66]} variant="h2">
          Nosce te Ipsum
        </Heading>
        <TranslatedLabel text={'NosceTeIpsum'} />
      </Stack>
    </Box>
  )
}

export default NosceTeIpsum
