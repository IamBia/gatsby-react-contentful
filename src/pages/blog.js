import React from "react"
import { Link } from "gatsby"

const blog = ({data}) => {

const postContent = data.allContentfulPost.edges;

  return (
    <div className="flex flex-wrap">
      <div className="col">
      { postContent.map((info) => 
      
          <div className="col w-6/12" key="info.id">
            {
              <Link to={info.slug}>
              <article>
                <img src={info.image} alt=""></img>
                <h2>{info.title}</h2>
                <p>{info.subtitle}</p>
                <p>{info.author}</p>
                <div dangerouslySetInnerHTML={{__html: info.content.childContentfulRichtext.html}}></div>
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

export const pageQuery = graphql`
query($slug: String!) {
  
  contentfulPost(slug: { eq: $slug }) {
      title
      author
      subtitle
      id
      content{
        childContentfulRichText{
          html
        }
      }
    }
  }
  `;

  