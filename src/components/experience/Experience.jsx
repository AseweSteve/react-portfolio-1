import React from 'react'
import "./experience.css"
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I have?</h5>
      <h2>My Experience</h2>

    <div className=".container experience_container">
      <div className="experience_frontend">
        <h3>IT-(Software Development)</h3>
        <div className="experience_content">
          <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icon' />
            <div>
            <h4>HTML</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>

          <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icon' />
            <div>
            <h4>CSS</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>

          <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icon' />
            <div>
            <h4>JavaScript</h4>
            <small className='text-light'>Experience</small>
            </div>
          </article>

          <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icon' />
            <div>
            <h4>React</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>

          <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icon' />
            <div>
            <h4>Database/MySQL</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>

          <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icon' />
            <div>
            <h4>CyberSecurity(FORTINET&IBM)</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>

          <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icon' />
            <div>
            <h4>CyberIntelligence</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>

          <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icon' />
            <div>
            <h4>Information Systems</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>
        </div>
      </div>
{/*====================================================END OF IT XP=======================================*/}

      <div className="experience_backend">
      <h3>Journalism & Media</h3>
        <div className="experience_content">
          <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icon' />
            <div>
            <h4>Broadcasting</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>

          <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icon' />
            <div>
            <h4>Radio Production</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>

          <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icon' />
            <div>
            <h4>Editing & Publishing</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>

          <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icon' />
            <div>
            <h4>Transcription</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>

          <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icon' />
            <div>
            <h4>Podcasting</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>

          <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icon' />
            <div>
            <h4>Video-Editing</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>

          <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icon' />
            <div>
            <h4>Graphic Designs</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>

          <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icon' />
            <div>
            <h4>Records & Archives Management</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>
          
          <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icon' />
            <div>
            <h4>Library Science</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>
          
          <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icon' />
            <div>
            <h4>Photographics</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>
        </div>
      </div>
   </div>
    </section>
  )
}

export default Experience