import React from "react"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"

import { injectIntl, FormattedMessage } from "gatsby-plugin-intl"

// import Layout from "../components/layout";

const blog = ({data}) => {

const postContent = data.allContentfulPost.edges;
  return (
    <Layout>
  <div>

    <SEO title="Blog" />
    <div>
    <h1 className="mb-5">Blog</h1>
    <div className="row mb-5">
    
      { postContent.map(({ node: post }, index) => 

          <div className="col-12 col-md-6 col-lg-4 mb-5" key={index}>
            {
              <Link to={`/blog/${post.slug}/`}>
              <article className="blog d-flex flex-column" key={post.id}>
                <img src={post.image.fluid.src} alt={post.title}></img>
                <h2>{post.title}</h2>
                
                <p className="mb-3">{post.subtitle}</p>
                <p className="author uppercase mt-auto"><FormattedMessage id="author"/>: {post.author}</p>
                {/* <div dangerouslySetInnerHTML={{__html: post.content.childContentfulRichText.html}}></div> */}
              </article>
            </Link>    
              }
          </div>
      )}
    </div>
    </div>

    </div>
    </Layout>
  )
  }
export default injectIntl(blog)


export const query = graphql`
query pageQuery($locale: String){
  allContentfulPost (filter: { node_locale: { eq: $locale } }){
    edges{
      node{
      title
      author
      node_locale
      slug
      subtitle
      id
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
    }
  }
  `;

  