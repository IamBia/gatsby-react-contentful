import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import SEO from "../components/seo"
import { injectIntl, FormattedMessage, FormattedHTMLMessage } from "gatsby-plugin-intl"
// import bianca1 from '../images/bianca-1.png'
// import bianca2 from '../images/bianca-2.png'


const IndexPage = ({intl}) => (
  
  <Layout>
    <Header/>
    <SEO title={intl.formatMessage({ id: "title" })}/>
    <div className="intro row">
      <div className="col-12 text-center uppercase">
        <h1>Bia Dev</h1>
        <p><FormattedMessage id="fullstack developer"/></p>
      </div>
    </div>

    <div className="about py-5 d-none d-lg-block">
   
      <div className="row">
        <div className="col-12">
          <h2 className="mb-3"><FormattedMessage id="about"/></h2>
          <p>
            __ <FormattedMessage id="I am a"/> <span className="blue"><FormattedHTMLMessage id="fullstack developer"/></span> <FormattedHTMLMessage id="and"/> <span className="pink"><FormattedMessage id="content creator"/></span> <br/>
            ___<FormattedMessage id="second line"/><br/>
            ____ <FormattedMessage id="third line"/> <span className="pink">Instagram</span>.<br/>
            _____ <FormattedMessage id="there"/><span className="pink"> Instagram </span><FormattedMessage id="where I share my daily life not only a"/> <span className="blue"><FormattedMessage id="developer"/></span><br/>
            _______ <FormattedMessage id="but also as a mother"/><br/>
            ________<FormattedMessage id="hardware"/>
          </p>
          <p>
            ______ <FormattedMessage id="besides instagram"/><br/>
            _____ <span className="pink">YouTube</span>, <FormattedMessage id="where share"/> <br/>
            ____ <FormattedMessage id="experiences dev"/> <span className="blue"><FormattedMessage id="developer"/></span>.
          </p>
          <p>
            ___ <FormattedMessage id="born in brazil"/><br/>
            __ <FormattedMessage id="i work"/> <span className="blue"><FormattedMessage id="developer"/></span> <FormattedMessage id="and studying"/> <span className="pink"><FormattedMessage id="communication"/>. </span><br/>
          </p><br/>
        </div>
       
      </div>
    </div>

    <div className="about d-block d-lg-none py-5">
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

  </Layout>
)

export default injectIntl(IndexPage)

export const query = graphql `
      query ContentFulPosts($locale: String) {
        allContentfulPost(filter: { node_locale: { eq: $locale } }) {
          nodes {
            contentful_id
            title
            slug
          }
        }
      }
`