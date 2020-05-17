import React from "react"
import AboutMe from "../components/home/aboutMe"
import Hero from "../components/home/hero"
import Stack from "../components/home/stack"
// import Newsletter from "../components/home/newsletter"
import Footer from "../components/footer"


// import { injectIntl, FormattedMessage, FormattedHTMLMessage } from "gatsby-plugin-intl"


const IndexPage = ({intl}) => {
 
  return(
  <div>
  <Hero/>
  <AboutMe/>
  <Stack/>
  {/* <Newsletter/> */}
  <Footer/>

    </div>
  
)
  }

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