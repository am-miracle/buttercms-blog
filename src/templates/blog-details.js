import { Avatar, Box, Container, Heading, HStack, Image, Stack, Text } from '@chakra-ui/react';
import { graphql } from 'gatsby';
import React from 'react'
import Layout from '../components/Layout';

const BlogDetails = ({data}) => {
  const post = data.allButterPage.edges[0].node;
  return (
    <Layout>
      <Container maxW='900px'>
        <Stack py={10}>
          <Heading>{post.title}</Heading>
          <Text color={'gray.500'}>{new Date(post.meta.published).toLocaleDateString(undefined, {
              day:   'numeric',
              month: 'short',
              year:  'numeric',
            })}
          </Text>
          <Image h={'300px'} src={post.featured_image} alt={`${post.title} image`} />
          <Text as={'p'} py={6} dangerouslySetInnerHTML={{__html: post.body}} />
          <HStack w={'800px'} gap={4}>
            <Avatar src={post.author.picture} />
            <Box>
              <Heading fontSize={'lg'} as={'p'}>{post.author.first_name} {post.author.last_name}</Heading>
              <Text>{post.author.bio}</Text>
            </Box>
          </HStack>
        </Stack>
      </Container>
    </Layout>
  )
}

export default BlogDetails;

export const query = graphql`
  query BlogDetail($slug: String) {
    allButterPage(filter: {slug: {eq: $slug}}) {
      edges {
        node {
          id
          slug
          title
          featured_image
          body
          author {
            first_name
            last_name
            bio
            picture
          }
          meta{
            published
          }
        }
      }
    }
  }
`