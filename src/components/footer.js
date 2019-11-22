import React from "react"

const footer = () => {
  const footer = {
    height: "30vh",
    backgroundColor: "#f0f0f0",
  }

  return (
    <footer style={footer}>
      <div className="container ">
        <div className="flex flex-row py-5 mt-5">
          <div className="flex flex-col col w-12/12">
            <p className="self-center">Connect with me</p>
            <ul className="flex self-center">
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
        <div className="flex flex-wrap">
          <div className="col w-12/12 text-center">
            <p>
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
