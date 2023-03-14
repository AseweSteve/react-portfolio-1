import React from 'react'
import "./services.css"
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services_container'>
        <article className="service">
          <div className="service_head">
            <h3>WEB DEVELOPMENT</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Best & attractive Portfolio designs.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Personal websites.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>School and organizational websites.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Task Management systems.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Business websites.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>And many more according to customer's specification.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>All with authentications.</p>
            </li>
          </ul>
        </article>
                    {/* ============================ END OF WEB-DEVELOPMENT =======================*/}

        <article className="service">
          <div className="service_head">
            <h3>GRAPHIC DESIGN</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Poster designs.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Magazine creation.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Logo designs.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>All kinds of cards e.g. invitations, weddings, fundraising.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Adverts.</p>
            </li>

          </ul>
        </article>
                    {/* ============================ END OF GRAPHIC DESIGN=======================*/} 

       <article className="service">
          <div className="service_head">
            <h3>CONTENT CREATION</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Videography.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Social Media Management.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Photography.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Blogging.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Video editing.</p>
            </li>
  
          </ul>
        </article>
                    {/* ============================ END OF CON'T CREATION =======================*/}                        
      </div>
    </section>
  )
}

export default Services