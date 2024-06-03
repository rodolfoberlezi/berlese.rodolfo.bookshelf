import React from 'react'
import { Box, Center, Heading, Stack } from '@chakra-ui/react'
import TranslatedLabel from '../components/TranslatedLabel'
import TranslatedHeading from '../components/TranslatedHeading'

const WhatIsFreedomForAuthor = () => (
  <Stack width="100%" direction="row" height="95vh">
    <Box width="100%" backgroundColor="black" color="white" fontSize={24}>
      <Center flexDirection="column" height="100%" gap={4}>
        <TranslatedHeading text="Para o autor" />
        <TranslatedLabel text={'A liberdade esta em Deus.'} />
      </Center>
    </Box>
  </Stack>
)

const WhatIsFreedomForCharacters = () => (
  <Stack width="100%" direction="row" height="95vh">
    <Box width="50%" fontSize={24}>
      <Center flexDirection="column" height="100%" gap={4}>
        <TranslatedHeading text="Para Krian" />
        <Box textAlign="center">
          <TranslatedLabel text={'A liberdade esta relacionada com seu desejo.'} />
        </Box>
      </Center>
    </Box>
    <Box backgroundColor="black" color="white" width="50%" fontSize={24}>
      <Center flexDirection="column" height="100%" gap={4}>
        <TranslatedHeading text="Para Olexa" />
        <Box textAlign="center">
          <TranslatedLabel text={'A liberdade esta relacionada com seu livre arbítrio.'} />
        </Box>
      </Center>
    </Box>
  </Stack>
)

const WhatIsFreedom = () => {
  return (
    <>
      <Box backgroundColor="black" height={510} width="100%">
        <Stack alignItems="center" justifyContent="center" color="white" fontSize={[23, 33]} height="100%">
          <Heading fontSize={[43, 66]} variant="h2" textAlign="center">
            <TranslatedLabel text={'WhatIsFreedom'} />
          </Heading>
        </Stack>
      </Box>
      <WhatIsFreedomForCharacters />
      <WhatIsFreedomForAuthor />
    </>
  )
}

export default WhatIsFreedom
