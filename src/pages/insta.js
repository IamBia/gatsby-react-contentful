import React from "react"
import Layout from "../components/layout"
// import Header from "../components/header"
import SEO from "../components/seo"
import { injectIntl } from "gatsby-plugin-intl"



const insta = ({data}) => {
    const linkContent = data.allContentfulSocialLinks.edges;
    return(
        <Layout>
             <div className="my-5">
            <SEO title="Links"/>
           
            <h1>Links</h1>
            { linkContent.map(({ node: post }, index) => 

                <div className="col-12" key={index}>
            {
                <article key={post.id} className="instaLinks d-flex align-items-center my-3">
                <a href={post.link}>
                <h2>{post.title}</h2>
                </a>
                </article>   
                }
            </div>
            )}
            </div>
        </Layout>
    )
}

export default injectIntl(insta)


export const query = graphql`
query instaQuery($locale: String){
  allContentfulSocialLinks (filter: { node_locale: { eq: $locale } }){
    edges{
      node{
      title
      link
  }
}
}
}
  
  `;