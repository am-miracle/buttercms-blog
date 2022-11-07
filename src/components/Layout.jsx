import { Box, Flex, Heading, HStack, Input, Spacer, Text, useColorModeValue } from '@chakra-ui/react'
import { Link } from 'gatsby'
import React from 'react'

const Layout = ({children}) => {
  return (
    <Box>
      <Box bg={useColorModeValue('blue.900', 'blue.900')} py={3} px={10}>
        <Flex h={16} minWidth='max-content' alignItems='center' gap='2'>
          <Link p='2'to='/'>
          <Heading fontSize={'3xl'} color={'white'} fontWeight={'700'}>ButterCMS Blog</Heading>
          </Link>
          <Spacer />
          {/* <HStack gap={10}>
            <Link to='/author'>
              <Text color={'white'} fontWeight={'extrabold'}>Authors</Text>
            </Link>
            <Link to='/categories'>
              <Text color={'white'} fontWeight={'extrabold'}>UI/UX</Text>
            </Link>
            <Link to='/categories'>
              <Text color={'white'} fontWeight={'extrabold'}>Web Development</Text>
            </Link>
          </HStack> */}
          <Input htmlSize={20} bg={'white'} width='auto' placeholder='Search for blog post' />
        </Flex>
      </Box>
      <Box>
        {children}
      </Box>
    </Box>
  )
}

export default Layout;