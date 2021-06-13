import React from "react"
import  { graphql }  from "gatsby"
import SEO from "../components/seo"
// import Header from "../components/header";
// import Footer from "../components/footer";
import { injectIntl, FormattedMessage } from "gatsby-plugin-intl"



const projects = ({data, intl}) => {
    const portfolioContent = data.allContentfulPortfolio.edges;
    return (
        <div className="mt-5">
      
        <SEO title={intl.formatMessage({ id: "Projects" })} />
        <h1 className="mb-5 text-center"><FormattedMessage id="Projects"/></h1>
        <div className="row mb-5">
        
        { portfolioContent.map(({ node: portfolio }, index) => 
        
        <div className="col-lg-3 mb-5 port" key={index}>
        {   
            <article className="portfolio d-flex flex-column"   data-sal="slide-up"
            data-sal-duration="1000"
            data-sal-delay="100"
            data-sal-easing="ease">
            <h2>{portfolio.title}</h2>
            <p className="mt-2">{portfolio.description.description}</p>
            <a className="neu-btn mt-3 mt-md-auto neu_btn" href={portfolio.link}><i className="fab fa-github mr-2"></i> Source</a>
            </article>
            
        }
        </div>
        )}
        
        </div>   
        </div>

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
    