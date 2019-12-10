const path = require('path')

exports.createPages = ({graphql, actions}) => {
  const { createPage } = actions
  const blogPost = path.resolve(`.src/pages/blogPost.js`)
  const post = result.data.allContentfulPost.edges.forEach(edge => {
    createPage({
      path: edge.node.slug,
      component: blogPost,
      context: {
        slug: post.node.slug
      }
    });
  }).catch(error => {
  console.log("Error retrieving contentful data", error);
  });
  
  
  return graphql(
    ` allContentfulPost {
      edges {
        node {
          title
          subtitle
          slug
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
          
`).then(result => {
  if(result.errors) {
      throw result.errors
}
})





}


