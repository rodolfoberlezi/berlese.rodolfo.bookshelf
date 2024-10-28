import React from 'react'
import { Box, Center, Heading, Stack, Image } from '@chakra-ui/react'
import TranslatedLabel from '../components/TranslatedLabel'
import author from '../images/author/charuto.jpg'

const AuthorApresentation = () => {
  return (
    <Center id="about" alignItems="center" backgroundColor="black" borderRadius={10} minHeight={410} width={['100vw', '80vw']} my={2} py={2}>
      <Stack color="white" direction={{ base: 'column', md: 'row' }} maxWidth="90%" fontSize={[23, 33]} height="100%" mx="auto">
        <Center>
          <Image borderRadius="10" maxW={250} mr={{ md: 8 }} src={author} alt={'Rodolfo Berlese photo'} />
        </Center>
        <Stack justifyContent={'center'}>
          <Heading variant="h4" mb={2.5}>
            Rodolfo Berlese
          </Heading>
          <Stack fontSize={[13, 18]}>
            <Box mb={1.5}>
              <TranslatedLabel text="who.am.i.p1" />
            </Box>
            <TranslatedLabel text="who.am.i.p2" />
          </Stack>
        </Stack>
      </Stack>
    </Center>
  )
}

export default AuthorApresentation
