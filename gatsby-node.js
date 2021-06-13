const path = require(`path`)
// const slash = require(`slash`);
const mygraph = require("graphql")

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions
  deletePage(page)
  // You can access the variable "locale" in your page queries now
  createPage({
    ...page,
    context: {
      ...page.context,
      locale: page.context.intl.language,
    },
  })
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // we use the provided allContentfulBlogPost query to fetch the data from Contentful

  const mygraph = await graphql(
    `
      {
        allContentfulPost {
          edges {
            node {
              title
              subtitle
              id
              slug
              node_locale
              author
              content {
                childContentfulRichText {
                  html
                }
              }
              image {
                fluid {
                  src
                }
                title
              }
            }
          }
        }
      }
    `
  )
    .then(result => {
      if (result.errors) {
        console.log("Error retrieving contentful data", result.errors)
      }

      // Resolve the paths to our template
      const blogPost = path.resolve(`./src/templates/blogPost.js`)

      // Then for each result we create a page.
      result.data.allContentfulPost.edges.forEach(edge => {
        createPage({
          path: `/blog/${edge.node.slug}/`,
          component: blogPost,
          id: edge.node.id,
          context: {
            slug: edge.node.slug,
          },
        })
      })
    })
    .catch(error => {
      console.log("Error retrieving contentful data", error)
    })

    // const posts = result.data.allContentfulPost.edges
    // const postsPerPage = 9
    // const numPages = Math.ceil(posts.length / postsPerPage)
    // Array.from({ length: numPages }).forEach((_, i) => {
    //   createPage({
    //     path: i === 0 ? `/blog` : `/blog/${i + 1}`,
    //     component: path.resolve("./src/templates/blogPost.js"),
    //     context: {
    //       limit: postsPerPage,
    //       skip: i * postsPerPage,
    //       numPages,
    //       currentPage: i + 1,
    //     },
    //   })
    // }) pagination
}

// npm
