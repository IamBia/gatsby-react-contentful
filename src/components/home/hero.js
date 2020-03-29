import React from 'react'
import SEO from "../seo"
import { injectIntl, FormattedMessage } from "gatsby-plugin-intl"
import { Link } from "gatsby"

const Hero = ({intl}) =>{
    return(
        <div className="hero">
            <SEO title={intl.formatMessage({ id: "title" })}/>
            <div className="row h-100">
             <div className="col-12 col-lg-6">
                 <div className="hero__section d-flex flex-column upercase justify-content-center h-100 align-content-start">
                    <h1>Bia.</h1> 
                    <span>Dev</span>
                    <p><FormattedMessage id="fullstack developer"/></p>
                    <div className="hero__buttons mt-5">
                        <a className="neu-btn"><Link to="/blog">Blog</Link></a>
                        <a className="neu-btn"><Link to="/projects">Projects</Link></a>
                 </div>
                 </div>
            </div>
            <div className="col-12 col-lg-6">
                <div className="hero__svg">
                <svg xmlns="http://www.w3.org/2000/svg" width="150%" height="800" viewBox="0 0 1166.074 1113.33">
                <g id="Grupo_78" data-name="Grupo 78" transform="translate(-836.455 -160.656)">
                    <g id="_1" data-name="1" transform="translate(861.701 160.656)">
                    <path id="Caminho_68" data-name="Caminho 68" d="M600.631,73.3c110.805,36.78,269.314,34.021,316.715,95.321,47.7,61.3-15.4,187.27-18.417,333.163C895.608,647.98,952.369,814.1,895,877.853,837.639,941.911,666.148,903.6,542.36,865.287c-124.09-38.312-200.174-76.624-324.565-62.219-124.09,14.712-295.883,81.835-362.909,37.7-66.725-44.136-28.683-199.836,36.533-307.111s157.6-165.815,165.755-296.69C65.023,106.4-10.759-96.5,26.075-167.61c37.136-71.414,187.493-10.727,294.071,57.928S489.826,36.211,600.631,73.3Z" transform="translate(180.082 199.655)" fill="#ff004d"/>
                    </g>
                    <g id="_1-2" data-name="1" transform="translate(837.987 165.196)">
                    <path id="Caminho_68-2" data-name="Caminho 68" d="M634.135,72.182c115.56,36.63,280.871,33.882,330.307,94.931,49.751,61.049-16.059,186.505-19.208,331.8-3.464,145.6,55.733,311.046-4.093,374.537-59.827,63.8-238.678,25.641-367.778-12.515C443.949,822.782,364.6,784.627,234.87,798.973c-129.415,14.652-308.58,81.5-378.483,37.545-69.588-43.955-29.913-199.02,38.1-305.856S58.853,365.524,67.355,235.184C75.541,105.149-3.493-96.924,34.922-167.741c38.73-71.122,195.539-10.684,306.691,57.691S518.575,35.248,634.135,72.182Z" transform="translate(180.082 199.655)" fill="none" stroke="#ff004d" stroke-width="3"/>
                    </g>
                    <g id="Grupo_10" data-name="Grupo 10" transform="translate(1196.199 547.056)">
                    <g id="Retângulo_9" data-name="Retângulo 9" transform="translate(34.801 22.944)" fill="#151515" stroke="#ff0048" stroke-width="3">
                        <rect width="611" height="372" stroke="none"/>
                        <rect x="1.5" y="1.5" width="608" height="369" fill="none"/>
                    </g>
                    <g id="Retângulo_10" data-name="Retângulo 10" transform="translate(34.801 58.944)" fill="#151515" stroke="#ff0048" stroke-width="3">
                        <rect width="611" height="336" stroke="none"/>
                        <rect x="1.5" y="1.5" width="608" height="333" fill="none"/>
                    </g>
                    <g id="Grupo_3" data-name="Grupo 3" transform="translate(0 0)">
                        <g id="Retângulo_9-2" data-name="Retângulo 9" transform="translate(-0.199 -0.056)" fill="#151515" stroke="#ff0048" stroke-width="3">
                        <rect width="612" height="373" stroke="none"/>
                        <rect x="1.5" y="1.5" width="609" height="370" fill="none"/>
                        </g>
                        <g id="Grupo_6" data-name="Grupo 6" transform="translate(0 10.536)">
                        <g id="Retângulo_10-2" data-name="Retângulo 10" transform="translate(-0.199 24.408)" fill="#151515" stroke="#ff0048" stroke-width="3">
                            <rect width="612" height="338" stroke="none"/>
                            <rect x="1.5" y="1.5" width="609" height="335" fill="none"/>
                        </g>
                        <g id="Grupo_5" data-name="Grupo 5" transform="translate(24.232 0)">
                            <g id="Elipse_1" data-name="Elipse 1" transform="translate(-0.431 0.408)" fill="#151515" stroke="#ff004d" stroke-width="3">
                            <ellipse cx="8.5" cy="8" rx="8.5" ry="8" stroke="none"/>
                            <ellipse cx="8.5" cy="8" rx="7" ry="6.5" fill="none"/>
                            </g>
                            <g id="Elipse_2" data-name="Elipse 2" transform="translate(5.569 4.408)" fill="#151515" stroke="#ff004d" stroke-width="3">
                            <ellipse cx="3" cy="4" rx="3" ry="4" stroke="none"/>
                            <ellipse cx="3" cy="4" rx="1.5" ry="2.5" fill="none"/>
                            </g>
                            <g id="Elipse_3" data-name="Elipse 3" transform="translate(19.569 0.408)" fill="#151515" stroke="#ff004d" stroke-width="3">
                            <ellipse cx="8.5" cy="8" rx="8.5" ry="8" stroke="none"/>
                            <ellipse cx="8.5" cy="8" rx="7" ry="6.5" fill="none"/>
                            </g>
                            <g id="Elipse_4" data-name="Elipse 4" transform="translate(39.569 0.408)" fill="#151515" stroke="#ff004d" stroke-width="3">
                            <ellipse cx="8.5" cy="8" rx="8.5" ry="8" stroke="none"/>
                            <ellipse cx="8.5" cy="8" rx="7" ry="6.5" fill="none"/>
                            </g>
                        </g>
                        </g>
                    </g>
                    </g>
                    <path id="Icon_awesome-code" data-name="Icon awesome-code" d="M37.041,67.934l-8.1-2.351A1.6,1.6,0,0,1,27.851,63.6L45.98,1.155A1.6,1.6,0,0,1,47.959.066l8.1,2.351A1.6,1.6,0,0,1,57.149,4.4L39.02,66.845a1.591,1.591,0,0,1-1.979,1.089ZM21.9,53.032l5.777-6.162a1.594,1.594,0,0,0-.106-2.284L15.539,34,27.572,23.415a1.582,1.582,0,0,0,.106-2.284L21.9,14.968a1.6,1.6,0,0,0-2.258-.066L.5,32.831a1.583,1.583,0,0,0,0,2.324L19.643,53.1a1.584,1.584,0,0,0,2.258-.066Zm43.456.08L84.5,35.169a1.583,1.583,0,0,0,0-2.324L65.357,14.888a1.608,1.608,0,0,0-2.258.066l-5.777,6.163a1.594,1.594,0,0,0,.106,2.284L69.461,34,57.428,44.585a1.582,1.582,0,0,0-.106,2.284L63.1,53.032a1.6,1.6,0,0,0,2.258.08Z" transform="translate(1476.404 710.498)" fill="#fff"/>
                    </g>
                    </svg>
                </div>
            </div>
            </div>
        </div>
  
        // <div className="hero d-flex justify-content-center ">
        //     <SEO title={intl.formatMessage({ id: "title" })}/>
        //     <div className="row w-100">
        //      <div className="col-12">
        //          <div className="d-flex flex-column upercase justify-content-center h-100 align-content-start">
        //             <h1>Bianca Schuurman</h1>
        //             <p><FormattedMessage id="fullstack developer"/></p>
        //          </div>
        //     </div>
        //     </div>
        // </div>

    )
}

export default injectIntl(Hero)