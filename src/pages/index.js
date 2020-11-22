import React from "react"
import { Link } from "gatsby"

import {graphql} from 'gatsby'
import Layout from "../components/Layout"
import Hero from '../components/Hero'
import Jobs from '../components/Jobs'
import Blogs from '../components/Blogs'
import Projects from '../components/Projects'

import SEO from "../components/seo"

export default ({data}) => {
  const { allStrapiProjects:{nodes:projects}} = data
  return(
  <Layout>
    <Hero />
    <Jobs />
    <Projects projects={projects} title="featured projects" showLink/>
    <Blogs />
  </Layout>
)}


export const query = graphql`
  {
    allStrapiProjects(filter: {featured: {eq: true}}) {
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
