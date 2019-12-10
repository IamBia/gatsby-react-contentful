import React from "react"
import { Link } from "gatsby"

const blog = ({data}) => {

const postContent = data.allContentfulPost.edges;

  return (
    <div className="flex flex-wrap">
      <div className="col">
      { postContent.map(({ node: post }) => 
      
          <div className="col w-6/12" key="post.id">
            {
              <Link to={`/blog/${post.slug}`}>
              <article>
                <img src={post.image.fluid.src} alt=""></img>
                <h2>{post.title}</h2>
                <p>{post.subtitle}</p>
                <p>{post.author}</p>
                <div dangerouslySetInnerHTML={{__html: post.content.childContentfulRichText.html}}></div>
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

  