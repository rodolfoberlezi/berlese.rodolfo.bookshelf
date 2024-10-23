import React from 'react'
import { Button, Center, Flex, Link, Stack, Text } from '@chakra-ui/react'
import { FaBook } from 'react-icons/fa'
import { FcKindle } from 'react-icons/fc'
import TranslatedLabel from '../components/TranslatedLabel'
import { powerHeart } from '../utils/links.json'
import { amazonButtonColor } from '../utils/constants'

const AmazonButton = () => {
  const styleProps = {
    bg: amazonButtonColor,
    p: 8,
    width: '100%',
    fontSize: 24,
    color: 'black',
    border: 3,
    borderStyle: 'solid',
    borderColor: 'orange.200',
    _hover: {
      color: 'white',
      bg: 'orange.500',
      transform: 'translateY(-2px)',
    },
  }

  return (
    <Stack width={'100%'} direction={{ base: 'column', md: 'row' }} spacing={4}>
      <Link href={powerHeart.ph1Kindle} _hover={{ textDecoration: 'none' }} isExternal>
        <Button leftIcon={<FcKindle size={32} />} {...styleProps}>
          <Text as={'span'}>Kindle eBook</Text>
        </Button>
      </Link>

      <Flex direction={'column'}>
        <Link href={powerHeart.ph1CommonCover} _hover={{ textDecoration: 'none' }} isExternal>
          <Button disabled leftIcon={<FaBook size={32} />} {...styleProps}>
            <TranslatedLabel props={{ as: 'span' }} text="CommonCover" />
          </Button>
        </Link>
        <Center>
          <TranslatedLabel props={{ as: 'span' }} text="Soon" />
        </Center>
      </Flex>
    </Stack>
  )
}

export default AmazonButton
