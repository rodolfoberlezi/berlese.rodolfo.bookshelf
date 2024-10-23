import React from 'react'
import { Button, Link, Center } from '@chakra-ui/react'
import TranslatedLabel from './TranslatedLabel'
import { amazonButtonColor } from '../utils/constants'

const ActionButton = ({ link, label }) => {
  const styleProps = {
    bg: amazonButtonColor,
    p: 10,
    width: '100%',
    fontSize: 32,
    color: 'black',
    border: 3,
    borderRadius: 10,
    borderStyle: 'solid',
    borderColor: 'orange.200',
    _hover: {
      color: 'white',
      bg: 'orange.500',
      transform: 'translateY(-2px)',
    },
  }

  return (
    <Center mt={10} mb={20}>
      <Link href={link} _hover={{ textDecoration: 'none' }} isExternal>
        <Button {...styleProps}>
          <TranslatedLabel props={{ as: 'span' }} text={label} />
        </Button>
      </Link>
    </Center>
  )
}

export default ActionButton
