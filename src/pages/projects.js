import React from "react"
import  { graphql }  from "gatsby"
import SEO from "../components/seo"
// import Header from "../components/header";
// import Footer from "../components/footer";
import { injectIntl, FormattedMessage } from "gatsby-plugin-intl"
import Layout from "../components/layout";



const projects = ({data, intl}) => {
    const portfolioContent = data.allContentfulPortfolio.edges;
    return (
        <Layout>
        <div className="full-height">
      
        <SEO title={intl.formatMessage({ id: "Projects" })} />
        <h1 className="mb-5 text-center"><FormattedMessage id="Projects"/></h1>
        <div className="row mb-5">
        
        { portfolioContent.map(({ node: portfolio }, index) => 
        
        <div className="col-12 col-md-6 col-lg-4 mb-5" key={index}>
        {   
            <article className="portfolio d-flex flex-column">
            <h2>{portfolio.title}</h2>
            <p className="mt-2">{portfolio.description.description}</p>
            <a className="source_btn mt-3 mt-md-auto" href={portfolio.link}><i className="fab fa-github mr-2"></i> Source</a>
            </article>
            
        }
        </div>
        )}
        
        </div>
       
      
        </div>
        
        </Layout>
        
        )
    }
    
    export default injectIntl(projects)
    
    export const query = graphql`
    query projectsPageQuery($locale: String){
        allContentfulPortfolio(filter: { node_locale: { eq: $locale } }){
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
    