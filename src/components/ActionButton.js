import React from 'react'
import { Button, Link, Center } from '@chakra-ui/react'
import TranslatedLabel from './TranslatedLabel'

const ActionButton = ({ link, label }) => {
  const styleProps = {
    bg: 'linear-gradient(180deg, #F6C587 0%, #E99221 100%)',
    p: 8,
    width: '100%',
    fontSize: 24,
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
