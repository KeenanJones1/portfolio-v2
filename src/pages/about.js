import React from 'react'
import Layout from '../components/Layout'
import {graphql} from 'gatsby'
import Title from '../components/Title'
import Image from 'gatsby-image'
import SEO from '../components/SEO'

const about = ({data:{about:{nodes}}}) => {
console.log(nodes[0]);

const {title, img, info, stack} = nodes[0];

 return (
  <Layout>
    <SEO title="About me" description="about keenan"/>
   <section className="about-page">
    <div className="section-center about-center">
     <Image fluid={img.childImageSharp.fluid}  className="about-img"/>
     <article className="about-text">
      <Title title={title}/>
      <p>{info}</p>
      <div className="about-stack">
       {stack.map(item => {
        return <span key={item.id}>
         {item.title}
        </span>
       })}
      </div>
     </article>
    </div>
   </section>
  </Layout>
 )
}


export const query = graphql`
  {
    about:allStrapiAbout {
      nodes {
        title
        info
        stack {
         id
         title
       }
        img {
          childImageSharp {
            fluid {
             ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default about
