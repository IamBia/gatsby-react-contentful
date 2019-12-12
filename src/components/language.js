import React from "react"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"

const languageName = {
  en: "EN",
  "pt-BR": "PT",
}

const languageClick = (e, language) => {
    e.preventDefault()
    changeLocale(language)
  }
  
  const Language = () => (
    <div>
      <IntlContextConsumer>
        {
        ({ languages, language: currentLocale }) =>
          languages.map(language => (
            <a
              key={language}
              onClick={e => languageClick(e, language)}
              style={{
                color: currentLocale === language ? `#ff004d` : `black`,
                margin: 10,
                cursor: `pointer`,
              }}
              href="/"
            >
              {languageName[language]}
            </a>
          ))
        }
      </IntlContextConsumer>
    </div>
  )
  
  export default Language