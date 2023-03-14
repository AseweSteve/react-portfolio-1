import React from 'react'
import "./about.css"
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
  <section id='about'>
    <h5>Get To Know</h5>
    <h2>About Me</h2>

    <div className="container about_container">
      <div className="about_me">
        <div className="about_me-image">
          <img src={ME} alt="About Img" />
        </div>

      </div>

      <div className="about_content">
         <div className="about_cards">
          <article className='about_card'>
            <FaAward className='about_icon'/>
            <h5>Experience</h5>
            <small>2+ Years Working</small>
          </article>
          <article className='about_card'>
            <FiUsers className='about_icon'/>
            <h5>Clients</h5>
            <small>10+ Nationally</small>
          </article>
          <article className='about_card'>
            <VscFolderLibrary className='about_icon'/>
            <h5>Projects</h5>
            <small>5+ Projects</small>
          </article>
         </div>

         <p>
         I'm an ambitious, self-disciplined, hardworking and committed young Kenyan. Currently, I serve as a Project Administrator and Curriculum Developer at Project Digital Kenya, where I have gained experience in managing projects and developing courses. I have also received additional training at Power Learn Project, where I have honed my skills as a software developer. I have expertise in programming languages such as Javascript, HTML, CSS, React, NodeJs, Npm etc.. In addition, I am a Google Developer with a certification in Responsive Web Specialist, which has strengthened my skills in web development. I am also a talented graphic designer, creating posters, banners, and other visual aids. My video editing skills have enabled me to create high-quality content for events.
<br />

As an accredited journalist by the Media Council of Kenya (MCK), I have honed my writing and reporting skills. I have experience in radio presentation and production, having hosted several radio shows that have earned me accolades. I am proficient in English and Swahili, which have helped me in communicating effectively with a diverse audience. I have also pursued cybersecurity training at ITExperience Inc., IBM Skills Build, and Fortinet, which has equipped me with the knowledge and skills to identify vulnerabilities, ethical hacking, and security protocols.
<br />

Apart from my professional endeavors, I have volunteered at Asembo Skills for Hope, an organization where I served as an IT consultant, records manager, and transcriptor. In my free time, I enjoy exploring new tech and media trends, playing football, and traveling. I am also an avid reader, keeping up with the latest news and trends through various publications and online forums.
<br />

In conclusion, my diverse background in technology and media, combined with my passion for innovation and exploration, makes me an asset to any organization. I possess skills and expertise in software development, web design, graphic design, video editing, journalism, radio production, and cybersecurity, making me well-rounded and adaptable to various projects.
 <br /> Please click the link in the homepage for my (CV DOWNLOAD) .
         </p>

         <a href="#contact" className='btn btn-primary'>Let's Talk.</a>
      </div>
    </div>
  </section>
  )
}

export default About