import React from 'react'
import { Box } from '@chakra-ui/react'

import HeaderLogo from '../components/HeaderLogo'
import Menu from '../components/Menu'

const Header = () => {
    return (
        <Box height='100vh'>
            <Menu />
            <HeaderLogo />
        </Box>
    )
}

export default Header
