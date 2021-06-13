import React from "react"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { fas, faCamera } from '@fortawesome/free-solid-svg-icons'
import { dom } from '@fortawesome/fontawesome-svg-core'
import { injectIntl, FormattedMessage } from "gatsby-plugin-intl"


dom.watch()

library.add(fab, fas, faInstagram, faCamera)

const footer = () => {


  return (
    <footer className="footer mt-lg-5">
        <div className="row pb-4">
          <div className="col-12">
          <div className="footer__wrapper">
            <h2><span className="pink">Lets.</span> get social</h2>
            <ul className="d-flex flex-wrap justify-content-start pl-0">
              <li>
                <a href="https://www.instagram.com/biadev/">
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
            </ul>
          </div>
          </div>
        </div>
       
        <div className="row mt-auto">
          <div className="col-12">
          <div className="credit pt-5 justify-content-center d-flex">
            <p className="credits mt-auto">
             <FormattedMessage id="credit"/><a href="https://instagram.com/biadev"> Bia</a>
            </p>
            </div>
          </div>
        </div>
    </footer>
  )
}

export default injectIntl(footer)
