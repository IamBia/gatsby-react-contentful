import React from "react"

const footer = () => {
  const footer = {
    height: "25vh",
    backgroundColor: "#1e2021",
    color: '#fff'
  }

  return (
    <footer style={footer}>
      <div className="container ">
        <div className="row py-4">
          <div className="col-12">
          <div className="d-flex flex-column align-items-center justify-content-center">
            <p className="align-items-center">Connect with me</p>
            <ul className="d-flex align-items-center ">
              <li>
                <a href="https://www.instagram.com/bia.dev/">
                  <i className="fab fa-instagram fa-2x"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/bia.dev/">
                  <i className="fab fa-twitter fa-2x"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/bia.dev/">
                  <i className="fab fa-linkedin fa-2x"></i>
                </a>
              </li>
            </ul>
          </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center">
            <p className="py-3">
              This website is created with love by{" "}
              <a href="https://instagram.com/bia.dev">@bia.dev</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default footer
