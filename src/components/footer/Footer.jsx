import React from 'react'
import "./footer.css"
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
import {FaGithub} from 'react-icons/fa'
import {BsLinkedin } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
    <a href="#" className='footer_logo'>ASEWE CREATIVES</a>         

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experiences</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li> 
      </ul>

      <div className='footer_socials'>
      <a href="https://www.linkedin.com/in/stephene-asewe-334082201/" target="_blank"> <BsLinkedin /></a>
        <a href="https://github.com/AseweSteve" target="_blank"><FaGithub/></a>
        <a href="https://web.facebook.com/profile.php?id=100088667111988" target="_blank"><FaFacebookF /></a>
        <a href="https://instagram.com/AseweSteve?igshid=YmMyMTA2M2Y=" target="_blank"><FiInstagram /></a>
        <a href="https://twitter.com/AseweSteve" target="_blank"><IoLogoTwitter /></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Asewe Creatives. All Rights Reserved (2023).</small>
      </div>
    </footer>
  )
}

export default Footer