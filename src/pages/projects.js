import React from "react"
import  {graphql}  from "gatsby"
import SEO from "../components/seo"
import Header from "../components/header";
import Footer from "../components/footer";
import { injectIntl, FormattedMessage } from "gatsby-plugin-intl"



const projects = ({data, intl}) => {
    const portfolioContent = data.allContentfulPortfolio.edges;
    return (
        <div className="container">
        <Header/>
        <SEO title={intl.formatMessage({ id: "projects" })} />
        <h1 className="mb-5 text-center"><FormattedMessage id="projects"/></h1>
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
        <Footer/>
        </div>
        
        
        
        )
    }
    
    export default injectIntl(projects)
    
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
    