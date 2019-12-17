const path = require(`path`);
// const slash = require(`slash`);

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

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;
    // we use the provided allContentfulBlogPost query to fetch the data from Contentful
    return graphql(
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
    ).then(result => {
        if (result.errors) {
            console.log("Error retrieving contentful data", result.errors);
        }
        
        // Resolve the paths to our template
        const blogPost = path.resolve("./src/templates/blogPost.js");
        
        // Then for each result we create a page.
        result.data.allContentfulPost.edges.forEach(edge => {
      
            createPage({
                path: `/blog/${edge.node.slug}/`,
                component: blogPost,
                id: edge.node.id,
                context: {
                slug: edge.node.slug
                },
            });
        });
    })
    .catch(error => {
        console.log("Error retrieving contentful data", error);
    });

    
};

// npm 