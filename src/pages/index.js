import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { injectIntl, FormattedMessage, FormattedHTMLMessage } from "gatsby-plugin-intl"


const IndexPage = ({intl}) => (
  
  <Layout>
    <SEO title={intl.formatMessage({ id: "title" })}/>
    <div className="intro row">
      <div className="col-12 text-center uppercase">
        <h1>Bia dot dev</h1>
        <p><FormattedMessage id="fullstack developer"/></p>
      </div>
    </div>

    <div className="about py-5 d-none d-lg-block">
   
      <div className="row">
        <div className="col-12">
          <h2 className="mb-3"><FormattedMessage id="about"/></h2>
          <p>
            __ Bia <FormattedMessage id="is a"/> <span className="blue"><FormattedHTMLMessage id="fullstack developer"/></span> <FormattedHTMLMessage id="and"/> <span className="pink"><FormattedMessage id="content creator"/></span> <br/>
            ___<FormattedMessage id="second line"/><br/>
            ____ <FormattedMessage id="I have an account on"/> <span className="pink">Instagram</span> <FormattedMessage id="where I share my daily life not only a"/> <span className="blue"><FormattedMessage id="developer"/></span>, <br/>
            ____ <FormattedMessage id="but also as a mother"/>
          </p><br/>
          <p>
            _____ <FormattedMessage id="besides instagram"/><br/>
            ______ <span className="pink">YouTube</span>, <FormattedMessage id="where share"/> <br/>
            _______ <FormattedMessage id="experiences dev"/> <span className="blue"><FormattedMessage id="developer"/></span>.
          </p><br/>
          <p>
            _______ <FormattedMessage id="born in brazil"/><br/>
            ______ <FormattedMessage id="i work"/> <span className="blue"><FormattedMessage id="developer"/></span> <FormattedMessage id="company"/> <span className="pink"><FormattedMessage id="communication"/> </span><FormattedMessage id="student"/><br/>
            _____ <FormattedMessage id="mother of a boy"/>
          </p><br/>
          <p>
            ____ <FormattedMessage id="know more"/> <br/>
            ___ <FormattedMessage id="connect with me on"/> Instagram, <span className="blue">Github</span>,<br/>
            __ <span className="pink">Twitter</span>, Youtube, LinkedIn <FormattedMessage id="or"/> Unsplash.
          </p>
        </div>
      </div>
    </div>

    <div className="about d-block d-lg-none py-5">
      <div className="row">
        <div className="col-12">
        <h2 className="mb-3"><FormattedMessage id="about"/></h2>
          <p>
            Bia <FormattedMessage id="is a"/> <span className="blue"><FormattedHTMLMessage id="fullstack developer"/></span> <FormattedHTMLMessage id="and"/> <span className="pink"><FormattedMessage id="content creator"/></span> <br/>
            <FormattedMessage id="second line"/><br/>
            <FormattedMessage id="I have an account on"/> <span className="pink">Instagram</span> <FormattedMessage id="where I share my daily life not only a"/> <span className="blue"><FormattedMessage id="developer"/></span>, <br/>
            <FormattedMessage id="but also as a mother"/>
          </p><br/>
          <p>
             <FormattedMessage id="besides instagram"/><br/>
            <span className="pink">YouTube</span>, <FormattedMessage id="where share"/> <br/>
            <FormattedMessage id="experiences dev"/> <span className="blue"><FormattedMessage id="developer"/></span>.
          </p><br/>
          <p>
            <FormattedMessage id="born in brazil"/><br/>
            <FormattedMessage id="i work"/> <span className="blue"><FormattedMessage id="developer"/></span> <FormattedMessage id="company"/> <span className="pink"><FormattedMessage id="communication"/> </span><FormattedMessage id="student"/><br/>
            <FormattedMessage id="mother of a boy"/>
          </p><br/>
          <p>
            <FormattedMessage id="know more"/> <br/>
            <FormattedMessage id="connect with me on"/> Instagram, <span className="blue">Github</span>,<br/>
           <span className="pink">Twitter</span>, Youtube, LinkedIn <FormattedMessage id="or"/> Unsplash.
          </p>
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