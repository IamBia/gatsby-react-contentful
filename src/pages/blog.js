import React from "react"
import { Link, graphql } from "gatsby"

const blog = ({data}) => {

const postContent = data.allContentfulPost.edges;

  return (
    <div className="container">
    <div className="d-flex row">
    
      { postContent.map(({ node: post }) => 
      
          <div className="col-4" key="post.id">
            {
              <Link to={`/blog/${post.slug}`}>
              <article>
                <img src={post.image.fluid.src} alt=""></img>
                <h2>{post.title}</h2>
                <p>{post.subtitle}</p>
                <p className="author uppercase">Author: {post.author}</p>
                {/* <div dangerouslySetInnerHTML={{__html: post.content.childContentfulRichText.html}}></div> */}
              </article>
            </Link>    
              }
          </div>
      )}
     
    </div>
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

  