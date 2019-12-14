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
            ______ I work as a front-end <span className="blue"><FormattedMessage id="developer"/></span> for a company, study Communication and Design and<br/>
            _____ I am a mother of one boy.
          </p><br/>
          <p>
            ____ <FormattedMessage id="know more"/> <br/>
            ___ <FormattedMessage id="connect with me on"/> Instagram, <span className="blue">Github</span>,<br/>
            __ <span className="pink">Twitter</span>, Youtube, LinkedIn or Unsplash.
          </p>
        </div>
      </div>
    </div>

    <div className="about d-block d-lg-none py-5">
      <div className="row">
        <div className="col-12">
          <h2 className="mb-3">About Bia</h2>
          <p>
            Bia is a fullstack <span className="blue">developer</span> and <span className="pink">content creator</span> <br/>
            currently learning and coding the MERN stack.<br/>
             I have an account on <span className="pink">Instagram</span> where I share my daily life not only as <span className="blue">developer</span>, <br/>
            but also as a mother, as a woman in tech, as a Brazilian living abroad and hardware enthousiast.
          </p><br/>
          <p>
             Besides Instagram, I also have a channel on<br/>
             <span className="pink">YouTube</span>, where I share knowledge and <br/>
            experiences of my daily life as a <span className="blue">developer</span>.
          </p><br/>
          <p>
            I was born in Brazil and I live for a couple of years in the Netherlands.<br/>
            I work as a front-end <span className="blue">developer</span> for a company, study Communication and Design and<br/>
             I am a mother of one boy.
          </p><br/>
          <p>
            If you want to know more about me, <br/>
            connect with me on Instagram,<br/>
            <span className="pink">Twitter</span>, Youtube or LinkedIn.
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