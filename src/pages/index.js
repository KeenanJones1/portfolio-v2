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
  const {
    allStrapiProjects:{ nodes: projects},
    allStrapiBlogs: { nodes: blogs }
} = data

  return(
  <Layout>
    <Hero />
    <Jobs />
    <Projects projects={projects} title="featured projects" showLink/>
    <Blogs blogs={blogs} title="blog" showLink />
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
