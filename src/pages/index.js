import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  
  <Layout>
    <SEO title="Home" />
    <div className="intro row">
      <div className="col-12 text-center uppercase">
        <h1>Bia dot dev</h1>
        <p>Fullstack Developer</p>
      </div>
    </div>

    {/* <div className="intro mt-5">
        <div className="row">
          <div className="col-12 text-center">
              <p>Hey you! How cool that you are here! Welcome to my blog.</p>
          </div>
        </div>
    </div> */}

    <div className="about py-5">
      <div className="row">
        <div className="col-12">
          <h2>About Bia</h2>
          <p>
            __ Bia is a fullstack developer currently learning and coding the MERN stack.<br/>
            ___ Also, I have an account on Instagram where I share my daily life not only as developer, <br/>
            ____ but also as a mother, student, imigrant and person.
          </p><br/>
          <p>
            _____ Besides Instagram, I also have a channel on<br/>
            ______ YouTube, where I share knowlogy and <br/>
            _______ experiences of the daily life as a developer.
          </p><br/>
          <p>
            _______ I was born in Brazil and I live 4 years in the Netherlands.<br/>
            ______ I work for a company, study Communication and Design and<br/>
            _____ I am a mother of one boy.
          </p><br/>
          <p>
            ____ If you want to know more about me, <br/>
            ___ connect with me on Instagram,<br/>
            __ Twitter, Youtube or LinkedIn.
          </p>
        </div>
      </div>
    </div>

  </Layout>
)

export default IndexPage
