import React from 'react'
import SEO from "../seo"
import { injectIntl, FormattedMessage } from "gatsby-plugin-intl"

const Hero = ({intl}) =>{
    return(
        <div className="hero d-flex justify-content-center ">
            <SEO title={intl.formatMessage({ id: "title" })}/>
            <div className="row w-100">
             <div className="col-12">
                 <div className="d-flex flex-column upercase justify-content-center h-100 align-content-start">
                    <h1>Bianca Schuurman</h1>
                    <p><FormattedMessage id="fullstack developer"/></p>
                 </div>
            </div>
            </div>
        </div>
    )
}

export default injectIntl(Hero)