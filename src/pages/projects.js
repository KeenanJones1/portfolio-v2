import React from 'react'
import Layout from '../components/Layout'
import {graphql} from 'gatsby'
import Projects from '../components/Projects'

const projects = ({data:{allStrapiProjects:{nodes:projects}}}) => {
 return (
  <Layout>
   <section className="project-page">
   <Projects projects={projects} title="all Projects" />
   </section>
  </Layout>
 )
}

export const query = graphql`
  {
    allStrapiProjects {
      nodes {
        github
        id
        desc
        title
        img {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          title
        }
      }
    }
  }
`


export default projects
