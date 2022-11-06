import { Box, Grid } from '@chakra-ui/react';
import { graphql } from 'gatsby';
import React from 'react';
import BlogCard from '../components/BlogCard';
import Layout from '../components/Layout';

const index = ({data}) => {
  const posts = data.home.edges
  return (
    <Layout>
      <Box px={20} py={15}>
        <Grid templateColumns={{ md: 'repeat(3, 1fr)' }} gap={6} pt={6}>
          {posts && posts.map((post) => <BlogCard key={post.node.id} post={post} />)}
        </Grid>
      </Box>
    </Layout>
  )
}

export default index;

export const query = graphql`
  {
    home: allButterPage(filter: {page_type: {eq: "gatsby_blog"}}) {
      edges {
        node {
          id
          slug
          title
          description
          featured_image
          author {
            first_name
            last_name
            picture
          }
          meta {
            published
          }
        }
      }
    }
  }
`
