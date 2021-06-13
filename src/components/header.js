import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Language from "./header/language"
import { injectIntl } from "gatsby-plugin-intl"

// import { injectIntl, FormattedMessage } from "gatsby-plugin-intl"
import Burger from "./header/burger"
import Menu from "./header/Menu"
import { useState } from "react"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const openHandler = () => {
    if (!menuOpen) {
      setMenuOpen(true)
    } else {
      setMenuOpen(false)
    }
  }
  let menu

  if (menuOpen) {
    menu = <Menu />
  }

  return (
    <header className="header">
      {menu}
      <div className="row">
        <div className="col-6 d-flex align-items-center">
          <Link to="/" className="brand justify-content-start d-flex">
            <h1 className="logo mt-3">biadev</h1>
          </Link>
        </div>
        <div className="col-6">
          <div className="header__navigation d-flex justify-content-end">
            <Language />
            <Burger click={openHandler} />
          </div>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default injectIntl(Header)
