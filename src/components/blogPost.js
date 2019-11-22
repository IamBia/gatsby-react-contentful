import React from "react"
import { Link } from "gatsby"

const blogPost = props => {

  return (
    <div className="flex flex-wrap">
      <div className="col">
        <Link to={props.id}>
          <article>
            <img src={props.image} alt=""></img>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
          </article>
        </Link>
      </div>
    </div>
  )
}
export default blogPost
