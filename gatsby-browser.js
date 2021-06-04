/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import "./src/styles/global.scss"


import * as createHistory from "history";

/**
 * Creates a history object that uses the HTML5 history API including
 * pushState, replaceState, and the popstate event.
 *
 */
const history = createHistory.createBrowserHistory();

export default history;

