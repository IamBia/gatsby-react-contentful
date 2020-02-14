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
    color: '#fff',
    margin: `0 auto`,
    maxWidth: 960,
    padding: `0px 1.0875rem 1.45rem`
    }

  return (
    <footer style={footer}>
        <div className="row pb-4">
          <div className="col-12">
          <div className="d-flex flex-column">
            <h2 className="d-flex  mb-3 headline justify-content-center justify-content-lg-start"><FormattedMessage id="connect me"/></h2>
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
        
        {/* <div className="row">
        <h3>Receive content on your e-mail</h3>

         <p>Subscribe to my newsletter to get notified every time I write a new article about design, development or personal projects. They will not be regular and I'll always try to give you the highest possible quality.</p>
          </div>
            <div id="mc_embed_signup">
            <form action="https://gmail.us3.list-manage.com/subscribe/post?u=51c5e3ba068f0030571cef965&amp;id=870014b453" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
             <div id="mc_embed_signup_scroll">
            	<input type="email" value="" name="EMAIL" className="email d-flex" id="mce-EMAIL" placeholder="email address" required/>
            <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button"/></div>
            </div>
          </form>
          </div> */}
       
        <div className="row mt-auto">
          <div className="col-12">
          <div className="credit h-100 py-3">
            <p className="credits text-center mt-auto">
             <FormattedMessage id="credit"/><a href="https://instagram.com/biadev"> Bia</a>
            </p>
            </div>
          </div>
        </div>
    </footer>
  )
}

export default injectIntl(footer)
