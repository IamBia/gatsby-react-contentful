
import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
import '../styles/main.scss'

import Header from "./header"
import Footer from "./footer"
import "./layout.scss"

import { injectIntl, FormattedMessage } from "gatsby-plugin-intl"

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
    
      <div className="container"
        style={{
          margin: `0 auto`,
          maxWidth: 1300,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <Header />
        <main>{children}</main>
         </div>
        <Footer/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
