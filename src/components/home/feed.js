import React from "react"
import InstagramFeed from "react-ig-feed"
import "react-ig-feed/dist/index.css"

const Feed = () => {
  return (
    <div className="insta-feed py-lg-5">
      <h2>Instagram</h2>
      <p>biadev</p>
      <InstagramFeed
        token="IGQVJVekhwWGl2bVFBdzhLVUpUc1V1QlVJNWczM1RPZAXJSZA3IzVWw5TGFXZAGV6X0JpdXl0WGZAfb3NYNHlGSm8zNFRBOEo3ZADJ4RjhMTzFFOEpNanZA5c1FYT0xWc0NCV1lBN0VSOW5WUXlOVUg4c1NFUwZDZD"
        counter="6"
      />
    </div>
  )
}

export default Feed