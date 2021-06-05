import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
import "../styles/main.scss"

import Header from "../components/header"
import "./layout.scss"
import Transition from "../components/transition"

const Layout = ({ children, location }) => {
  return (
    <>
      <div
        className="container main-container"
        style={{
          margin: `0 auto`,
          maxWidth: "1300px",
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
          height: `100%`,
          width: `100%`,
          overflowX: `hidden`,
        }}
      >
        <Header />

        <Transition location={location}>{children}</Transition>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
