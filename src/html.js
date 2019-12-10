import React from 'react';
import Header from './components/header'

export default class HTML extends React.Component {
  render() {
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {this.props.headComponents}
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css"
          />
          <link href="https://fonts.googleapis.com/css?family=Poppins:400,700,800,900|Bebas+Neue&display=swap" rel="stylesheet"/>
          <script src="https://kit.fontawesome.com/ecad5391d1.js" crossorigin="anonymous"></script>
        </head>
        <body >
          <div className="container">
          <Header />
          </div>
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
}