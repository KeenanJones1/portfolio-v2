import React from "react"
import { Link } from "gatsby"

import {graphql} from 'gatsby'
import Layout from "../components/Layout"
import Hero from '../components/Hero'
import Services from '../components/Services'
import Jobs from '../components/Jobs'
import Blogs from '../components/Blogs'
import Projects from '../components/Projects'

import SEO from "../components/seo"

export default () => (
  <Layout>
    <Hero />
  </Layout>
)

// ...GatsbyImageSharpFluid