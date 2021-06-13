import React, { useEffect, useRef } from "react"
import SEO from "../seo"
import { injectIntl, FormattedMessage } from "gatsby-plugin-intl"
import { Link } from "gatsby"
import laptops from "../../images/laptop-2.png"
import Grid from "./grid"
import { TweenMax } from "gsap"

const Hero = ({ intl }) => {
  let hero = useRef(null)
  useEffect(() => {
    TweenMax.to(hero, 0, { css: { visibility: "visible" } })

    console.log(hero, "works")
  })

  return (
    <div className="hero" ref={el => (hero = el)}>
      <SEO title={intl.formatMessage({ id: "title" })} />
      <div className="row h-100">
        <div className="col-12 col-md-6">
          <div className="hero__section d-flex flex-column upercase justify-content-center h-100 align-content-start">
            <h1
              data-sal="slide-up"
              data-sal-duration="1000"
              data-sal-delay="100"
              data-sal-easing="ease"
            >
              Bianca
            </h1>
            <span
              data-sal="slide-up"
              data-sal-duration="1000"
              data-sal-delay="300"
              data-sal-easing="ease"
            >
              Schuurman
            </span>
            <p
              data-sal="slide-up"
              data-sal-duration="2000"
              data-sal-delay="500"
              data-sal-easing="ease"
            >
              <FormattedMessage id="fullstack developer" />
            </p>
            <div
              className="hero__buttons d-flex mt-5"
              data-sal="slide-up"
              data-sal-duration="2000"
              data-sal-delay="700"
              data-sal-easing="ease"
            >
              <Link to="/blog" className="neu-btn">
                Blog
              </Link>
              <Link to="/projects" className="neu-btn">
                Projects
              </Link>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div
            className="hero__svg"
            data-sal="slide-left"
            data-sal-duration="1000"
            data-sal-delay="100"
            data-sal-easing="ease"
          >
            <img
              className="laptop img-fluid"
              src={laptops}
              alt="laptop"
              data-sal="slide-down"
              data-sal-duration="2000"
              data-sal-delay="200"
              data-sal-easing="ease"
            ></img>
            <Grid />
            <svg
              className="hero__svg--blob"
              xmlns="http://www.w3.org/2000/svg"
              width="150%"
              height="800"
              viewBox="0 0 1397 1330"
            >
              <g id="_1" data-name="1" transform="translate(180.082 199.655)">
                <path
                  id="Caminho_68"
                  data-name="Caminho 68"
                  d="M797.91,126.861c138.8,44,337.367,40.7,396.746,114.026,59.758,73.329-19.289,224.02-23.071,398.543-4.16,174.889,66.944,373.611-4.917,449.873-71.861,76.629-286.686,30.8-441.754-15.032-155.446-45.831-250.756-91.661-406.58-74.429-155.446,17.6-370.65,97.894-454.613,45.1-83.585-52.8-35.93-239.052,45.764-367.378S106.913,479.206,117.125,322.649c9.834-156.191-85.1-398.909-38.956-483.971,46.52-85.428,234.871-12.833,368.38,69.3S659.105,82.5,797.91,126.861Z"
                  transform="translate(0 0)"
                  fill="#ff004d"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default injectIntl(Hero)
