import React from "react"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { fas, faCamera } from '@fortawesome/free-solid-svg-icons'
import { dom } from '@fortawesome/fontawesome-svg-core'
import { injectIntl, FormattedMessage } from "gatsby-plugin-intl"


dom.watch()

library.add(fab, fas, faInstagram, faCamera)

const footer = () => {
  const footer = {
    height: "25vh",
    backgroundColor: "#1e2021",
    color: '#fff'
  }

  return (
    <footer style={footer}>
      <div className="container ">
        <div className="row pb-4">
          <div className="col-12">
          <div className="d-lg-flex d-flex flex-column flex-column align-items-center justify-content-center">
            <h2 className="align-items-center mb-3"><FormattedMessage id="connect me"/></h2>
            <ul className="d-flex align-items-center ">
              <li>
                <a href="https://www.instagram.com/bia.dev/">
                <span className="d-none d-lg-block">Instagram</span>
                  <i className="fab fa-instagram d-block d-lg-none"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/Bia_Dev">
                     <span className="d-none d-lg-block ">Twitter</span>
                  <i className="fab fa-twitter d-block d-lg-none"></i>
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/channel/UCvn_yhz5Ar0ISKaWMtcOLLg">
                     <span className="d-none d-lg-block ">YouTube</span>
                  <i className="fab fa-youtube d-block d-lg-none"></i>
                </a>
              </li>
              <li>
                <a href="https://github.com/IamBia">
                     <span className="d-none d-lg-block">Github</span>
                  <i className="fab fa-github d-block d-lg-none"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/bianca-schuurman-62812151/">
                     <span className="d-none d-lg-block">LinkedIn</span>
                  <i className="fab fa-linkedin d-block d-lg-none"></i>
                </a>
              </li>
              <li>
                <a href="https://unsplash.com/@bia_dev">
                     <span className="d-none d-lg-block">Unsplash</span>
                  <i className="fas fa-camera d-block d-lg-none"></i>
                </a>
              </li>
            </ul>
          </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center">
            <p className="py-3 credits">
              This website is created with love by{" "}
              <a href="https://instagram.com/bia.dev">Bia</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default injectIntl(footer)
