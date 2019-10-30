const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const countryTemplate = path.resolve("./src/templates/country.js")
  const res = await graphql(`
    query {
      allContentfulPays {
        edges {
          node {
            slug
            title
          }
        }
      }
      allContentfulDestination {
        edges {
          node {
            slug
            title
          }
        }
      }
    }
  `)

  res.data.allContentfulPays.edges.forEach(edge => {
    createPage({
      component: countryTemplate,
      path: `/blog/pays/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
        title: edge.node.title,
      },
    })
  })

  const destinationTemplate = path.resolve("./src/templates/destination.js")

  res.data.allContentfulDestination.edges.forEach(edge => {
    createPage({
      component: destinationTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
