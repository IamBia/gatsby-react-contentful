import React from "react"
import  {graphql}  from "gatsby"
import SEO from "../components/seo"


const projects = ({data}) => {
    const portfolioContent = data.allContentfulPortfolio.edges;
    return (
        <div className="container">
        <SEO title="Projects" />
        <h1 className="mb-5 text-center">Projects</h1>
        <div className="row">
        
        { portfolioContent.map(({ node: portfolio }) => 
        
        <div className="col-12 col-md-6 col-lg-4 mb-5" key="portfolio.id">
        {   
            <article className="portfolio d-flex flex-column">
            <h2>{portfolio.title}</h2>
            <p className="mt-2">{portfolio.description.description}</p>
            <a className="source_btn mt-auto" href={portfolio.link}><i class="fab fa-github mr-2"></i> Source</a>
            </article>
           
        }
        </div>
        )}
        
        </div>
        </div>
        
        )
    }
    
    export default projects
    
    export const query = graphql`
    query projectsPageQuery{
        allContentfulPortfolio{
            edges{
                node {
                    link
                    slug
                    title
                    description {
                        description
                    }
                }
            }
        }
    }
    `;
    