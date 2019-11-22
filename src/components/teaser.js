import React from 'react'
import Link from 'gatsby-link'
import SbEditable from 'storyblok-react'

const second_line_style = {
    marginBottom: '10px'
}

const Teaser = (props) => (
  <SbEditable content={props.blok}>
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">{ props.blok.headline }</h1>
        <p className="lead" style={second_line_style}>{props.blok.second_line}</p>
        <p className="lead">
          <Link className="btn btn-primary" to={'/blog/'}>
            Blog Posts
          </Link>
        </p>
      </div>
    </div>
  </SbEditable>
)

export default Teaser