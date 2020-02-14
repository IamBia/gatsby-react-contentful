import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/biadev-logo-black-small.jpeg"
import Language from "../components/language";
import { injectIntl, FormattedMessage } from "gatsby-plugin-intl"

// import 'bootstrap/dist/css/bootstrap.min.css';


  const Header =() =>{
    return (
      <div className="header">
      <div className="top-bar d-flex justify-content-end py-2">
      <Language/>
      </div>
    <nav className="justify-content-between row pb-6">
      <div className="col-lg-3">
        <div className=" d-flex align-items-center justify-content-center justify-content-lg-start mr-6 h-100">
            <Link to="/" className="brand justify-content-center justify-content-lg-start d-flex">
              <img src={logo} className="logo" alt="Bia Dev"></img>
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
              <FormattedMessage id="Projects"/>
            </Link>
            <Link
              to={`/setup/`}
              className="li block mt-4 lg:inline-block lg:mt-0  pl-4"
            > Setup
            </Link>
          
        </ul>
        </div>
    </nav>
    </div>
  )
    }


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default injectIntl(Header)
