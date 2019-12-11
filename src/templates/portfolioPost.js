import React from "react"
import { Link } from "gatsby"


const portfolioPost = ({ data }) => {

const { title, description, link } = data.contentfulPortfolio;

  return (
  
    <div className="container my-5">
    <div className="row">
      <div className="col-12">
      <div className="blog-posts d-flex justify-content-center align-items-center">
          <article>
            <h1>{title}</h1>
            <p>{description}</p>
            <a href={link}>Ga naar {title}</a>
          </article>
          </div>
          <Link to="/portfolio" className="uppercase mt-3 d-block d-lg-none">Back to Portfolio</Link>
      </div>

      <Link to="/portfolio" className="uppercase mt-5 d-none d-lg-block">Back to Portfolio</Link>
    </div>
    </div>
  )
  }
export default portfolioPost
export const pageQuery = graphql`
    query ($slug: String!){
  contentfulPortfolio(slug: {eq:$slug }){
      title
      slug
      description{
          description
      }
      link
    
    }
  }
  `
