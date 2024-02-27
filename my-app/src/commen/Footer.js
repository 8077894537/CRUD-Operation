import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


function Footer() {
  return (
    <>
      <div className=' text-light'>
        <footer>
          <div className="content">
            <div className="top">
              <div className="logo-details">
                <i className="fab fa-slack"></i>
                <span className="logo_name">CRUD Operation</span>
              </div>
              <div className="media-icons">
                <Link to="https://www.facebook.com/"><FaFacebook /></Link>
                <Link to="https://twitter.com/"><FaTwitter /></Link>
                <Link to="https://www.instagram.com/"><FaInstagram /></Link>
                <Link to="https://in.linkedin.com/"><FaLinkedin /></Link>
                <Link to="https://www.youtube.com/"><FaYoutube /></Link>
              </div>
            </div>
            <div className="link-boxes">
              <ul className="box">
                <li className="link_name">Company</li>
                <li><Link to="#">Home</Link></li>
                <li><Link to="#">Contact us</Link></li>
                <li><Link to="#">About us</Link></li>
                <li><Link to="#">Get started</Link></li>
              </ul>
              <ul className="box">
                <li className="link_name">Services</li>
                <li><Link to="#">Profile</Link></li>
                <li><Link to="#">My account</Link></li>
                <li><Link to="#">Prefrences</Link></li>
                <li><Link to="#">Purchase</Link></li>
              </ul>
              <ul className="box">
                <li className="link_name">Courses</li>
                <li><Link to="#">HTML & CSS</Link></li>
                <li><Link to="#">JavaScript</Link></li>
                <li><Link to="#">Photography</Link></li>
                <li><Link to="#">Photoshop</Link></li>
              </ul>
              <ul className="box input-box">
                <li className="link_name">Subscribe</li>
                <li><input type="text" placeholder="Enter your email"/></li>
                <li><input type="button" value="Subscribe"/></li>
              </ul>
            </div>
          </div>
          <div className="bottom-details">
            <div className="bottom_text">
              <span className="copyright_text">Copyright © 2024 <Link to="#">CodingStella </Link>All rights reserved</span>
              <span className="policy_terms">
                <Link to="#">Privacy policy</Link>
                <Link to="#">Terms & condition</Link>
              </span>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Footer
