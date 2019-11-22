import React from "react"
import SbEditable from "storyblok-react"

const Post = props => {

  return (
    <SbEditable content={props.blok}>
      <div className="col-6">
        <h2>{props.story.content.title}</h2>
        <p>{props.blok.description}</p>
        <img src={props.blok.image}></img>
        <p>{props.blok.content}</p>
      </div>
    </SbEditable>
  )
}

export default Post
