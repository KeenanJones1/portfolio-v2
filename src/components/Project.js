import React from 'react'
import PropTypes from 'prop-types'
import Image from 'gatsby-image'
import { FaGithub, FaHome } from 'react-icons/fa'

const Project = ({desc, title, stack, img, github, url, index }) => {

 return (
  <article className="project">
   <Image className="project-img" fluid={img.childImageSharp.fluid}/>
   <div className="project-info">
     <span className="project-number">0{index + 1}</span>
     <h3>{title}</h3>
     <p className="project-desc">{desc}</p>
     <div className="project-stack">
      {stack.map((item) => {
       return <span key={item.id}>{item.title}</span>
      })}
     </div>
     <div className="project-links">
      <a href={github}>
       <FaGithub className="project-icon"/>
      </a>
      { url ? <a href={url}>
       <FaHome className="project-icon"/>
      </a> : null}
     </div>
   </div>
  </article>
 )
}

Project.propTypes = {}

export default Project