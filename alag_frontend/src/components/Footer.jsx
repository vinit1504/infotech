/* eslint-disable no-unused-vars */
import React from 'react'
import "./footer.css"
import logo from "../assets/img/logo4.png"
import {
  FaFacebookF,
  // FaTwitter,
  FaInstagram,
  FaPinterest
} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import backgroundImage from "../assets/img/footerimg.svg"
import { Link } from 'react-router-dom';

const Footer = () => {
  let circleClasses = "inline-block p-4 rounded-full";
  let iconStyles = { color: "white", fontSize: "1.2em" };
  return (
    <footer
      className="footer bg-contain bg-no-repeat w-full min-h-72 flex flex-col justify-center pt-10  items-center mt-20 mb-5"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="footer-content">
        <div className=" footer-logo w-20 flex justify-center">
          <img src={logo} alt="Fynd Academy" className='w-10 h-20' />
        </div>
        <p className="footer-description">
          Alag Academy is an accelerated learning program for freshers and experienced professionals to build their skills and meaningfully contribute at work from day one.
        </p>
        <div className="footer-social-icons">
          <a href="#" className="social-icon"><span style={{ background: "#3B5998" }} className={circleClasses}>
            <FaFacebookF style={iconStyles} />
          </span></a>
          <a href="#" className="social-icon"> <span style={{ background: "black" }} className={circleClasses}>
            <BsTwitterX style={iconStyles} />
          </span></a>
          <a href="#" className="social-icon"><span style={{ background: "black" }} className={circleClasses}>
            <FaInstagram style={iconStyles} />
          </span></a>
          <a href="#" className="social-icon"><span style={{ background: "#BD081C" }} className={circleClasses}>
            <FaPinterest style={iconStyles} />
          </span></a>
        </div>
      </div>
      
      <div className="footer-links flex gap-10 mb-8 ">
        <Link to="/Aboutus">About us</Link>
        <a href="#">Privacy Policy</a>
        <a href="#">Caution Notice</a>
        <a href="#">Terms Of Use</a>
        <Link to='/contact'>Contact us</Link>
      </div>
      <div className="footer-bottom">
        <p>#MadeInIndia | &copy; 2024 Alag Academy Private Limited</p>
      </div>
    </footer>
  )
}

export default Footer