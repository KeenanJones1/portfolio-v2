import React from 'react'
import Image from 'gatsby-image'
import {Link, graphql, useStaticQuery} from 'gatsby'
import SocialLinks from '../constants/socialLinks'


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
  const {file:{ childImageSharp:{ fluid }}} = useStaticQuery(query);

 return (
   <header className="hero">
    <div className="section-center hero-center">
    <article className="hero-info">
     <div>
      <div className="underline">
       <h3>my name is</h3>
       <h2>Keenan Jones</h2>
       <h4>I build things for the Web</h4>
       <p>I'm a software engineer based in Chicago, IL specializing in building (and occasionally designing) exceptional websites, applications, and everything in between.</p>
       <Link to="/contact" className="btn">Contact me</Link>
       <SocialLinks />
      </div>
     </div>
    </article>

     <div className="wrapper">
      <Image fluid={fluid} className="hero-img" />
     </div>
    </div>
   </header>
 )
}




export default Hero;