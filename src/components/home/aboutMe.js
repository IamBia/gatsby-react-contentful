import React from 'react'
import bia from "../../images/bia.png"

// import { injectIntl, FormattedMessage, FormattedHTMLMessage } from "gatsby-plugin-intl"
// import SEO from "../seo"

const aboutMe = () =>{
return(

<div className="about py-5 d-none d-lg-block">
  <div className="row pt-5">
    <div className="col-lg-5">
      <div className="about__photo d-flex justify-content-end">
      <img className="img-fluid" src={bia}></img>
      </div>
    </div>
    <div className="col-lg-7">
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

  <div className="row">
  <div className="col-md-4"></div>

    <div className="col-md-4">
       <div className="about__block mx-auto">
         <h3 className="mt-auto ml-auto">Front-end.<br/> developer</h3>
       </div>
    </div>
    <div className="col-md-4">
    <div className="about__block">
    <h3 className="mt-auto ml-auto">Content.<br/> creator</h3>
    </div>
    </div>
  </div>
  </div> 
   )}

{/* // Mobile version  */}
{/* <div className="about d-block d-lg-none py-5">
      <div className="row">
        <div className="col-12">
        <h2 className="mb-3"><FormattedMessage id="about"/></h2>
        <p>
            <FormattedMessage id="I am a"/> <span className="blue"><FormattedHTMLMessage id="fullstack developer"/></span> <FormattedHTMLMessage id="and"/> <span className="pink"><FormattedMessage id="content creator"/></span> <br/>
            <FormattedMessage id="second line"/><br/>
             <FormattedMessage id="third line"/> <span className="pink">Instagram</span>.<br/>
            <FormattedMessage id="there"/><span className="pink"> Instagram </span><FormattedMessage id="where I share my daily life not only a"/> <span className="blue"><FormattedMessage id="developer"/></span><br/>
            <FormattedMessage id="but also as a mother"/><br/>
            <FormattedMessage id="hardware"/>
          </p>
          <p>
            <FormattedMessage id="besides instagram"/><br/>
            <span className="pink">YouTube</span>, <FormattedMessage id="where share"/> <br/>
            <FormattedMessage id="experiences dev"/> <span className="blue"><FormattedMessage id="developer"/></span>.
          </p>
          <p>
            <FormattedMessage id="born in brazil"/><br/>
            <FormattedMessage id="i work"/> <span className="blue"><FormattedMessage id="developer"/></span> <FormattedMessage id="and studying"/> <span className="pink"><FormattedMessage id="communication"/>. </span><br/>
          </p><br/>
        </div>
      </div>
    </div>

 */}
 



export default aboutMe