import React from 'react'
import bia from "../../images/bia.png"

// import { injectIntl, FormattedMessage, FormattedHTMLMessage } from "gatsby-plugin-intl"
// import SEO from "../seo"

const aboutMe = () =>{
return(

<div className="about py-0 pt-md-5 py-lg-5">
  <div className="row pt-5 mt-md-5">
    <div className="col-md-5">
      <div className="about__photo d-flex justify-content-end">
      <img className="img-fluid" src={bia} alt="bianca"></img>
      </div>
    </div>
    <div className="col-md-7">
    <h2>Bia. <br/><span className="about__bia-who">Who?</span></h2>
      <span className="about__multiply-text">Developer</span>
      <p className="about__paragraph">I like to break the rules and hate well organized grids
          I am a fullstack developer and content creator
          currently learning web development
          and creating content related to development on Instagram.
          On Instagram I share my daily life not only as a developer
          but also as a mother, as a woman in tech, as a Brazilian living abroad
      </p>
    </div>
  </div>

  </div> 
   )}

export default aboutMe