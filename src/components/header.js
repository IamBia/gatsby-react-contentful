import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/biadev-logo-black-small.jpeg"


  const Header =() =>{
    return (
    <nav className="justify-content-center justify-content-between row py-6">
      <div className="col-lg-3 d-flex align-items-end justify-content-center justify-content-lg-start">
        <div className=" align-items-center mr-6">
            <Link to="/" className="brand justify-content-center justify-content-lg-start d-flex">
              <img src={logo} className="img-fluid"></img>
            </Link>
        </div>
      </div>
      <div className="col-12 col-lg-9 d-flex justify-content-center justify-content-lg-end">
        <ul className="d-flex justify-content-between">

            <Link
              to={`/`}
              href="#responsive-header"
              className="li block mt-4 lg:inline-block lg:mt-0  pr-4"
            >
              Home
            </Link>
            <Link
              to={`/blog/`}
              href="#responsive-header"
              className="li block mt-4 lg:inline-block lg:mt-0  px-2"
            >
              Blog
            </Link>
            <Link
              to={`/projects/`}
              className="li block mt-4 lg:inline-block lg:mt-0  pl-4"
            >
              Projects
            </Link>
          
        </ul>
        </div>
    </nav>
  )
    }


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
