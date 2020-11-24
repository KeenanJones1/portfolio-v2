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
       <h1>Keenan</h1>
       <h4>I build things for the Web</h4>
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