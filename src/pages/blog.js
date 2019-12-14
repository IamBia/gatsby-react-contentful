import React from "react"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo"
import Header from "../components/header"
import Footer from "../components/footer"
// import Layout from "../components/layout";

const blog = ({data}) => {

const postContent = data.allContentfulPost.edges;

  return (
    <div className="container">
    <Header/>

   

    <SEO title="Blog" />
    <h1 className="mb-5 text-center">Blog</h1>

    <div className="row">
    
      { postContent.map(({ node: post }) => 
      
          <div className="col-12 col-md-6 col-lg-4 mb-5" key="post.id">
            {
              <Link to={`${post.node_locale}/blog/${post.slug}`}>
              <article className="blog d-flex flex-column">
                <img src={post.image.fluid.src} alt=""></img>
                <h2>{post.title}</h2>
                <p>{post.subtitle}</p>
                <p className="author uppercase mt-auto">Author: {post.author}</p>
                {/* <div dangerouslySetInnerHTML={{__html: post.content.childContentfulRichText.html}}></div> */}
              </article>
            </Link>    
              }
          </div>
      )}
     
    </div>
    <Footer/>
    </div>

   
  )
  }
export default blog

export const query = graphql`
query pageQuery{
  allContentfulPost {
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

  