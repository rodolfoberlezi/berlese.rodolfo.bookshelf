import React from 'react'
import { Center, Heading, Stack, Image } from '@chakra-ui/react'
import TranslatedLabel from '../components/TranslatedLabel'
import author from '../images/author/charuto.jpg'
import TranslatedHeading from '../components/TranslatedHeading'

const AuthorApresentation = () => {
  return (
    <Center id="about" alignItems="center" backgroundColor="black" borderRadius={10} minHeight={410} width={['100vw', '80vw']} my={2} py={2}>
      <Stack color="white" direction={{ base: 'column', md: 'row' }} maxWidth="90%" fontSize={[23, 33]} height="100%" mx="auto">
        <Center>
          <Image borderRadius="10" maxW={250} mr={{ md: 8 }} src={author} alt={'Rodolfo Berlese photo'} />
        </Center>
        <Stack justifyContent={'center'} p={4}>
          <Heading variant="h4" mb={2.5} fontFamily={'Cinzel'}>
            Rodolfo Berlese
            <TranslatedHeading
              props={{
                fontSize: 18,
              }}
              text="who.am.i.values"
            />
          </Heading>
          <Stack fontSize={[13, 18]} gap={5}>
            <TranslatedLabel text="who.am.i.p1" />
            <TranslatedLabel text="who.am.i.p2" />
            <TranslatedLabel text="who.am.i.p3" />
            <TranslatedLabel text="who.am.i.p4" />
          </Stack>
        </Stack>
      </Stack>
    </Center>
  )
}

export default AuthorApresentation
