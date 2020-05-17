import React from "react"
import SEO from "../components/seo"
import banana from "../images/giphy.gif"


const NotFoundPage = () => (
<div>
    <SEO title="404: Not found" />
    <div className="d-flex flex-column justify-content-center align-items-center">
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>

    <p>But don't worry! Here is a dancing banana for you!</p>
    </div>
    <div className="d-flex justify-content-center my-5">
    <img src={banana} alt="dancing banana"></img>
    </div>

</div>
)

export default NotFoundPage
