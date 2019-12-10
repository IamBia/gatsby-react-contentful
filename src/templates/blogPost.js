import React from "react"


const blogPost = ({ data }) => {

const { title, author, image, subtitle, post } = data.contentfulPost;

  return (
    <div className="flex flex-wrap">
      <div className="col">
          <article>
            <img src={image.fluid.src} alt=""></img>
            <h2>{title}</h2>
            <p>{subtitle}</p>
            <p>{author}</p>
            <div dangerouslySetInnerHTML={{__html: post}}></div>
          </article>
        
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
