const path = require('path')

exports.createPages = ({graphql, actions}) => {
  const { createPage } = actions
  const post = result.data.allContentfulBlogPost.edges.forEach(edge => {
    createPage({
      path: post.node.slug,
      component: blogPost,
      context: {
        slug: post.node.slug
      }
    });
  }).catch(error => {
  console.log("Error retrieving contentful data", error);
  });
  
  const blogPost = path.resolve(`.src/components/blogPost.js`)
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
  if (result.errors) {
    console.log("Error retrieving contentful data", result.errors);
}
})


}



