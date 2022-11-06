require("dotenv").config({
  path: `.env`,
})
module.exports = {
  siteMetadata: {
    title: `buttercms-blog`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: '@chakra-ui/gatsby-plugin',
      options: {
        resetCSS: true,
        isUsingColorMode: true,
      },
    },
    {
      resolve: 'gatsby-source-buttercms',
      options: {
        authToken: process.env.BUTTERCMS_API_TOKEN,
        pageTypes: [`gatsby_blog`],
      }
    },
    // {
    //   resolve: `gatsby-source-graphql`,
    //   options: {
    //     typeName: "Buttercms",
    //     fieldName: "butter",
    //     url: process.env.BUTTERCMS_API_URL,
    //     headers: {
    //       Authorization: `Bearer ${process.env.BUTTERCMS_API_TOKEN}`
    //     }
    //   }
    // },
  ],
}
