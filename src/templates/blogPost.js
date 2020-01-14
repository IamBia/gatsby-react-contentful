import React from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"
import { injectIntl, FormattedMessage } from "gatsby-plugin-intl"

const blogPost = ({ pageContext, data }) => {

const { title, author, image, content } = data.contentfulPost;


  return (
    <Layout>
    <div className="row my-5">
      <div className="col-12">
      <div className="blog-post d-flex flex-column">
          <article className="d-flex flex-column">
            <h1>{title}</h1>
            <img src={image.fluid.src} alt={title} className="my-4"/>
           
            <div dangerouslySetInnerHTML={{__html: content.childContentfulRichText.html}}></div>
            <p className="author mt-5"><FormattedMessage id="author"/>: {author}</p>
          </article>
          <Link to="/blog" className="uppercase mt-3 d-flex">Back to Blog</Link>
          </div>
         
      </div>  
    </div>
    </Layout>
   
  
  )
  }

export const pageQuery = graphql`
    query blogpost($slug: String!, $locale: String){
    contentfulPost(slug: { eq:$slug }, node_locale: { eq: $locale }){
      title
      slug
      author
      node_locale
      image{
        fluid{
          src
        }
      }
      content{
        childContentfulRichText{
          html
        }
      }
    
    }
  }
  `
 export default injectIntl(blogPost)