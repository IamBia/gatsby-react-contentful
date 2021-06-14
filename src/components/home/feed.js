import React from "react"
import InstagramFeed from "react-ig-feed"
import "react-ig-feed/dist/index.css"

const Feed = () => {
  return (
    <div className="insta-feed py-lg-5">
      <h2
        data-sal="slide-up"
        data-sal-duration="1000"
        data-sal-delay="300"
        data-sal-easing="ease"
      >
        Instagram
      </h2>
      <div className="d-flex w-50 mb-3">
        <p
          data-sal="slide-up"
          data-sal-duration="1000"
          data-sal-delay="300"
          data-sal-easing="ease"
        >
          @biadev
        </p>
        <a
          href="https://instagram.com/biadev"
          target="_blank"
          className="insta-feed__follow ml-5 align-self-right d-flex"
        >
          Follow<i class="fas fa-arrow-right ml-2"></i>
        </a>
      </div>

      <InstagramFeed
        token="IGQVJVekhwWGl2bVFBdzhLVUpUc1V1QlVJNWczM1RPZAXJSZA3IzVWw5TGFXZAGV6X0JpdXl0WGZAfb3NYNHlGSm8zNFRBOEo3ZADJ4RjhMTzFFOEpNanZA5c1FYT0xWc0NCV1lBN0VSOW5WUXlOVUg4c1NFUwZDZD"
        counter="6"
      />
    </div>
  )
}

export default Feed
