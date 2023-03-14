import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from  'react-icons/fa'
import {BsFacebook} from  'react-icons/bs'
import {BsInstagram} from  'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/stephene-asewe-334082201/" target="_blank"><BsLinkedin /> </a>
        <a href="https://github.com/AseweSteve" target="_blank"><FaGithub/></a>
        <a href="https://web.facebook.com/profile.php?id=100088667111988" target="_blank"><BsFacebook /> </a>
        <a href="https://instagram.com/AseweSteve?igshid=YmMyMTA2M2Y=" target="_blank"><BsInstagram /></a>
    </div>
  )
}

export default HeaderSocials