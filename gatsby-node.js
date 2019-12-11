const path = require(`path`);
const slash = require(`slash`);

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
                component: slash(blogPost),
                context: {
                    slug: edge.node.slug,
                    id: edge.node.id
                }
            });
        });
    })
    .catch(error => {
        console.log("Error retrieving contentful data", error);
    });

    
};

// exports.createPages = ({ graphql, actions }) => {
//     const { createPage } = actions;
//     // we use the provided allContentfulPORTFOLIO query to fetch the data from Contentful
//     return graphql(
//         `
//         {
//             allContentfulPortfolio{
//                 edges{
//                     node {
//                         link
//                         slug
//                         title
//                         description {
//                             description
//                         }
//                     }
//                 }
//             }
//         }
//         }
    
//     `
//     ).then(result => {
//         if (result.errors) {
//             console.log("Error retrieving contentful data", result.errors);
//         }
        
//         // Resolve the paths to our template
//         const portfolioPost = path.resolve("./src/templates/portfolioPost.js");
        
//         // Then for each result we create a page.
//         result.data.allContentfulPortfolio.edges.forEach(edge => {
//             createPage({
//                 path: `/projects/${edge.node.slug}/`,
//                 component: slash(portfolioPost),
//                 context: {
//                     slug: edge.node.slug,
//                     id: edge.node.id
//                 }
//             });
//         });
//     })
//     .catch(error => {
//         console.log("Error retrieving contentful data", error);
//     });

    
// };