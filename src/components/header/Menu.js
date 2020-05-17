import React, {useState, useEffect, useRef} from "react"
import { Link } from 'gatsby'

import {TweenMax} from 'gsap'

const Menu = (props) => {
    const [menuClass] = useState(props.menu)
    let menuRef = useRef(null)

    useEffect(() => {
        TweenMax.to (menuRef, 0, {css: {visibility: 'visible'}})
        console.log(menuRef)
    })

    return(


        <div className={menuClass} ref={el => menuRef = el}>
            <div className="container-fluid">
            <div className="menu h-100">
    
            <div className="row h-100">
                <div className="col-md-5 d-none d-md-flex">
                    
                    <div className="menu__overlay">
                    <div className="d-flex justify-content-start pl-5">
                                <h2>Bia.</h2>
                            </div>
                        <div className="menu__img h-100"></div>
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="menu__navigation">
                    
                        <ul className="menu__navigation-ul">
                            <Link  to="/" >
                                <li>Home.</li>
                            </Link>
                            <Link to="/blog">
                                <li>Blog.</li>
                            </Link>
                            <Link to="/projects">
                                <li>Projects.</li>
                            </Link>
                            <Link to="/setup">
                                <li>Setup.</li>
                            </Link>
                            <Link to="/insta">
                                <li>Links.</li>
                            </Link>
                        </ul>
                        
                    </div>
                    <div className="d-flex">
                        <ul className="menu__social-links">
                            <li><a href="https://instagram.com/biadev"><i className="fab fa-instagram d-block"></i></a></li>
                            <li><a href="https://twitter.com/bia_dev"><i className="fab fa-twitter d-block"></i></a></li>
                            <li><a href="https://youtube.com/biaintech"><i className="fab fa-youtube d-block"></i></a></li>
                            <li><a href="https://github.com/iambia"><i className="fab fa-github d-block"></i></a></li>
                            <li><a href="https://unsplash.com/biancaschuurman"><i className="fas fa-camera d-block"></i></a></li>
                            <li><a href="https://linkedin.com/biaintech"><i className="fab fa-linkedin d-block"></i></a></li>
                            <li><a href="https://tiktok.com/thisisbia"><i className="fas fa-video d-block"></i></a></li>
                        </ul>
                      </div>
                </div>
     
            </div>

           
            </div>
            </div>
        </div>

    )
} 

export default Menu