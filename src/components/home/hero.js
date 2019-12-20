import React from 'react'
import SEO from "../seo"
import { injectIntl, FormattedMessage } from "gatsby-plugin-intl"

const Hero = ({intl}) =>{
    return(
        <div className="hero">
            <SEO title={intl.formatMessage({ id: "title" })}/>
            <div className="intro row">
            <div className="col-12 text-center uppercase">
                <h1>Bia Dev</h1>
                <p><FormattedMessage id="fullstack developer"/></p>
            </div>
            </div>
        </div>
    )
}

export default injectIntl(Hero)