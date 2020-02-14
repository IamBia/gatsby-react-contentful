import React from "react"
// import { injectIntl, FormattedMessage } from "gatsby-plugin-intl"
import Layout from "../components/layout";

const setup = ( ) => {
    return (
        <Layout>
        <div>
      
        <h1 className="mb-5 text-center">Setup</h1>
        <div className="row mb-5">
    
        <div className="col-12 mb-5">
            <article className="setup d-flex flex-column">
            <h2>Laptop</h2>
            <p className="mt-2">Macbook Pro 13" (2017)</p>

            <h2>Editor</h2>
            <p className="mt-2">VS Code</p>

            <h2>Monitors</h2>
            <p className="mt-2">Dell SE2416H</p>
            <p className="mt-2">Philips 243V7QDSB - Full HD IPS Monitor</p>

            <h2>Mouse</h2>
            <p className="mt-2">VicTsing Multi-mode Wireless Mouse</p>

            <h2>Keyboard</h2>
            <p className="mt-2">Apple Magic Keyboard with Numeric Keypad - Space Gray</p>

            </article>
        </div>

        
        </div>
       
      
        </div>
        
        </Layout>
        
        )
    }
    
    export default setup
    
    