import React from "react"
import bia from "../../images/bia.png"
import Stack from "../home/stack"

// import { injectIntl, FormattedMessage, FormattedHTMLMessage } from "gatsby-plugin-intl"
// import SEO from "../seo"

const aboutMe = () => {
  return (
    <div className="about py-0 pt-md-5 py-lg-0">
      <div className="row pt-5 pt-lg-0 mt-md-5">
        <div className="col-lg-5">
          <div
            className="about__photo d-flex justify-content-end"
            data-sal="slide-up"
            data-sal-duration="2000"
            data-sal-delay="200"
            data-sal-easing="ease"
          >
         
            {/* <img className="img-fluid" src={bia} alt="bianca"></img> */}
          </div>
        </div>
        <div className="col-lg-7">
          <h2
            data-sal="slide-left"
            data-sal-duration="1000"
            data-sal-delay="100"
            data-sal-easing="ease"
          >
            Bianca Schuurman <br />
            <span
              className="about__bia-who"
              data-sal="slide-left"
              data-sal-duration="1000"
              data-sal-delay="300"
              data-sal-easing="ease"
            >
              Front-end Developer
            </span>
          </h2>
    
          <p
            className="about__paragraph"
            data-sal="slide-left"
            data-sal-duration="1000"
            data-sal-delay="700"
            data-sal-easing="ease"
          >
            With a feeling for web content creation, great organization skills
            and ambition, I thrive to make the best websites and applicaties
            with clean, maintainable and scalable code. Through the fast
            learning ability and passion for always keep learning, I grow fast
            in the projects I am involved with and make sure it is done with
            excellence and effectiveness.
          </p>
          <Stack/>
        </div>
  
      </div>
    
    </div>
  )
}

export default aboutMe
