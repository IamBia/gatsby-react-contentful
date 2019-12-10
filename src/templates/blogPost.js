import React from "react"
import { Link } from "gatsby"


const blogPost = ({ data }) => {

const { title, author, image, subtitle, content } = data.contentfulPost;

  return (
  
    <div className="container my-5">
    <div className="row">
      <div className="col-12">
      <div className="d-flex justify-content-center align-items-center">
          <article>
          
            <h2>{title}</h2>
            <p>{subtitle}</p>
          
            <img src={image.fluid.src} alt={title} className="my-3"></img>
           
            <div dangerouslySetInnerHTML={{__html: content.childContentfulRichText.html}}></div>
            <p className="author mt-5">Author: {author}</p>
          </article>
          </div>
      </div>

      <Link to="/blog" className="uppercase mt-3">Back to Blog</Link>
    </div>
    </div>
  )
  }
export default blogPost
export const pageQuery = graphql`
    query ($slug: String!){
  contentfulPost(slug: {eq:$slug }){
      title
      slug
      author
      subtitle
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
