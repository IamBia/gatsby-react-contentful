import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

function Header({ siteTitle }) {
  const [isExpanded, toggleExpansion] = useState(false)

  return (
    <nav className="flex items-center justify-between flex-wrap py-6">
      <div className="w-3/12">
        <div className="flex items-center flex-shrink-0 text-black mr-6">
            <Link to="/" className="brand text-black">
              Bia DEV
            </Link>
        </div>
      </div>
      <div className=" w-12-12 lg:w-9/12 flex flex-col lg:flex justify-end">
        <div className="flex lg:hidden">
          <button
            onClick={() => toggleExpansion(!isExpanded)}
            className="flex items-center px-3 py-2 border rounded text-black border-black-400 hover:text-black hover:border-black"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className={`${
            isExpanded ? `block` : `hidden`
          } w-full flex flex-grow lg:flex lg:items-center lg:w-auto`}
        >
          <div className="text-md lg:flex-grow lg:flex justify-end">
            <Link
              to={`/`}
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-black-200 hover:text-black mr-4"
            >
              Home
            </Link>
            <Link
              to={`/blog/`}
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-black-200 hover:text-black mr-4"
            >
              Blog
            </Link>
            <Link
              to={`/projects/`}
              className="block mt-4 lg:inline-block lg:mt-0 text-black-200 hover:text-black mr-4"
            >
              Projects
            </Link>
          </div>
        </div>
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
