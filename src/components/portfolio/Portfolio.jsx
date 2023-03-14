import React from 'react'
import "./portfolio.css"
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='.container portfolio_container'>
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is my E-Commerce Website Project</h3>
          <div className="portfolio_item-cta">
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
          <a href="https://github.com/AseweSteve/AseweCre" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>On Action </h3>
          <div className="portfolio_item-cta">
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
          <a href="https://dribble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>My Magazine/Article</h3>
          <div className="portfolio_item-cta">
          <a href="https://www.youtube.com/channel/UCa7aDHgwTSX5FCntoqh1dLQ" className='btn' target='_blank'>YouTube</a>
          <a href="https://youtu.be/TiJwp6OPsZw" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
                <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>YouTube Content</h3>
          <div className="portfolio_item-cta">
          <a href="https://www.youtube.com/channel/UCa7aDHgwTSX5FCntoqh1dLQ" className='btn' target='_blank'>YouTube</a>
          <a href="https://youtu.be/THAy92Xkq9A" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

      </div>
    </section>
  )
}

export default Portfolio