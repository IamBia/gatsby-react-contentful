
import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
import '../styles/main.scss'

import Header from "./header"
import "./layout.scss"


const Layout = ({ children }) => {

  return (
    <>

      <div className="container"
        style={{
          margin: `0 auto`,
          maxWidth: '1300px',
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
          height: `100%`,
          width: `100%`
        }}>
         <Header />

        <main>{children}</main>
      </div>  
  
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
