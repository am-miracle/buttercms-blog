import { Avatar, Box, Heading, Image, LinkBox, LinkOverlay, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

const BlogCard = ({post}) => {
  return (
    <LinkBox as={'article'}
      maxW={'445px'}
      w={'full'}
      bg={useColorModeValue('white', 'gray.900')}
      rounded={'md'}
      _hover={{ boxShadow: 'xl'}}
      overflow={'hidden'}>
      <Box>
        <Image
          transform="scale(1.0)"
          transition="0.3s ease-in-out"
          src={post.node.featured_image}
          alt={post.node.title}
          _hover={{
            transform: 'scale(1.05)',
          }}
        />
      </Box>
      <Stack p={6}>
        <Stack>
        <Heading
          color={useColorModeValue('gray.700', 'white')}
          fontSize={'2xl'}
          fontFamily={'body'}>
          <LinkOverlay href={`/${post.node.slug}`}>{post.node.title}</LinkOverlay>
        </Heading>
        <Text color={'gray.500'}>{post.node.description}</Text>
        </Stack>
        <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
          <Avatar
            src={post.node.author.picture}
            alt={'Author'}
          />
          <Stack direction={'column'} spacing={0} fontSize={'sm'}>
            <Text fontWeight={600}>{post.node.author.first_name} {post.node.author.last_name}</Text>
            <Text as={'time'} dateTime={post.node.meta.published} color={'gray.500'}>{new Date(post.node.meta.published).toLocaleDateString(undefined, {
                day:   'numeric',
                month: 'short',
                year:  'numeric',
              })}
            </Text>
          </Stack>
        </Stack>
      </Stack>
    </LinkBox>
  )
}

export default BlogCard