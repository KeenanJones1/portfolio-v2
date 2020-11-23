import React from 'react'
import Layout from '../components/Layout'
import Blogs from '../components/Blogs'
import {graphql} from 'gatsby'

const blog = ({data:{allStrapiBlogs:{nodes:blogs}}}) => {
 return (
  <Layout>
   <section className="blog-page">
    <Blogs blogs={blogs} title="blog"/>
   </section>
  </Layout>
 )
}


export const query = graphql`
  {
    allStrapiBlogs {
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


export default blog
