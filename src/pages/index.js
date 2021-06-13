import React from "react"
import AboutMe from "../components/home/aboutMe"
import Hero from "../components/home/hero"
import Footer from "../components/footer"

import Feed from "../components/home/feed"

// import { injectIntl, FormattedMessage, FormattedHTMLMessage } from "gatsby-plugin-intl"

const IndexPage = ({ intl }) => {
  return (
    <div>
      <Hero />
      <AboutMe />
      <Feed />
      <Footer />
    </div>
  )
}

export default IndexPage

export const query = graphql`
  query ContentFulPosts($locale: String) {
    allContentfulPost(filter: { node_locale: { eq: $locale } }) {
      nodes {
        contentful_id
        title
        slug
      }
    }
  }
`
