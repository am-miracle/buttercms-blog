exports.createPages = async function ({ actions, graphql }) {
    const { data } = await graphql(`
        query {
            allButterPage(filter: {page_type: {eq: "gatsby_blog"}}) {
                edges {
                    node {
                        id
                        slug
                    }
                }
            }
        }
    `)
    data.allButterPage.edges.forEach(data => {
      const slug = data.node.slug
      console.log(slug)
      actions.createPage({
        path: slug,
        component: require.resolve(`./src/templates/blog-details.js`),
        context: { slug: slug },
      })
    })
}