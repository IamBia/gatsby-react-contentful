import React from "react"
import bia from "../../images/bia.png"

// import { injectIntl, FormattedMessage, FormattedHTMLMessage } from "gatsby-plugin-intl"
// import SEO from "../seo"

const aboutMe = () => {
  return (
    <div className="about py-0 pt-md-5 py-lg-5">
      <div className="row pt-5 mt-md-5">
        <div className="col-md-5">
          <div className="about__photo d-flex justify-content-end">
            <img className="img-fluid" src={bia} alt="bianca"></img>
          </div>
        </div>
        <div className="col-md-7">
          <h2>
            Bia. <br />
            <span className="about__bia-who">Who?</span>
          </h2>
          <span className="about__multiply-text">Developer</span>
          <p className="about__paragraph">

            With a feeling for web content creation, great organization skills
            and ambition, I thrive to make the best websites and applicaties
            with clean, maintainable and scalable code. Through the fast
            learning ability and passion for always keep learning, I grow fast
            in the projects I am involved with and make sure it is done with
            excellence and effectiveness.
            
          </p>
        </div>
      </div>
    </div>
  )
}

export default aboutMe
