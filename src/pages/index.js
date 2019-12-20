import React from "react"
import Layout from "../components/layout"
import AboutMe from "../components/home/aboutMe"

// import { injectIntl, FormattedMessage, FormattedHTMLMessage } from "gatsby-plugin-intl"


const IndexPage = ({intl}) => (
  
  <Layout>
  <AboutMe/>
  </Layout>
)

export default IndexPage

export const query = graphql `
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