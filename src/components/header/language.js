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

  const Language = () => {

    return(
    <div className="language-switch align-items-center pt-md-2">
      <IntlContextConsumer>
        {
        ({ languages, language: currentLocale }) =>
          languages.map(language => (
            <button
            href=""
              key={language}
              onClick={e => languageClick(e, language)}
              style={{
                color: currentLocale === language ? `white` : `#ff004d`,
                backgroundColor: currentLocale === language ? `#ff004d` : `#101820`,
                margin: 10,
                cursor: `pointer`,
              }}
            
              
            >
              {languageName[language]}
            </button>
          ))
        }
      </IntlContextConsumer>
    </div>
    )
      }
  
  export default Language