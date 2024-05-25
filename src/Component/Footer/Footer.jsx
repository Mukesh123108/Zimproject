import React from 'react'
import "./Footer.css";
import Facebook from "../img/facebook.png";
import Intra from "../img/instagram.png";
import git from "../img/github.png";
import logo from "../img/genzeal-logo.png";
const Footer = () => {
  return (
    <>
        <div className="footer-container">
         
        <hr/>
                <div className="footer">
                  <div className="social-link">
                    <img src={Facebook} alt="" />
                    <img src={Intra} alt="" />
                    <img src={git} alt="" />
                    </div>
                    <div className="f-logo">
                    <img src={logo} alt="" />
                </div>
                </div>
                <div className="blur foot-b-1"></div>
                <div className="blur foot-b-2"></div>
        </div>
    </>
  )
}

export default Footer