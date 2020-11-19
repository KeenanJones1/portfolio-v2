import React from 'react'
import Image from 'gatsby-image'
import {Link, graphql, useStaticQuery} from 'gatsby'
import SocialLinks from '../constants/soicalLinks'

const query = graphql`
{
  file(relativePath: {eq: "hero-img.jpg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`


 const Hero = () => {
  const {file:{ childImageSharp:{ fluid }}} = useStaticQuery(query)
 return (
   <header className="hero">
    <div className="section-center hero-center">
    <article className="hero-info">
     <div>
      <div className="underline">
       <h1>I'm Keenan</h1>
       <h4>Freelance Web developer</h4>
       <Link to='/contact'></Link>
      </div>
     </div>
    </article>

    <div className="hero-container">
     <Image fluid={fluid} className="hero-img" />
    </div>
    </div>
   </header>
 )
}


export default Hero;