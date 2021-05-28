import React from "react"
import {graphql} from 'gatsby'
import Layout from "../components/Layout"
import Hero from '../components/Hero'
import Jobs from '../components/Jobs'
import Blogs from '../components/Blogs'
import Projects from '../components/Projects'

import SEO from "../components/SEO"

export default ({data}) => {
  const {
    allStrapiProjects:{ nodes: projects},
    allStrapiBlogs: { nodes: blogs }
} = data
console.log('index', projects)
  return(
  <Layout>
    <SEO title="Home" description="this is our home page"/>
    <Hero />
    <Jobs />
    <Projects projects={projects} title="featured projects" showLink/>
    <Blogs blogs={blogs} title="Latest Blogs" showLink />
  </Layout>
)}


export const query = graphql`
{
  allStrapiProjects(filter: {featured: {eq: true}}) {
    nodes {
      desc
      featured
      github
      url
      title
      id
      stack {
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

    allStrapiBlogs(sort: {fields: date, order: DESC}, limit: 3) {
      nodes {
        category
        slug
        content
        desc
        date(formatString: "MMMM Do YYYY")
        id
        title
        image {
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
