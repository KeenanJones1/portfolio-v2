import React from 'react'
import PropTypes from 'prop-types'
import Image from 'gatsby-image'
import {Link} from 'gatsby'

const Blog = ({category, slug, desc, date, image, title, id}) => {
 return (
  <Link to={`/blogs/${slug}`} key={id} className="blog">
   <article>
   <Image fluid={image.childImageSharp.fluid} className="blog-img" />
   <div className="blog-card">
   <h4>{title}</h4>
   <p>{desc}</p>
   <div className="blog-footer">
    <p>{category}</p>
   </div>
   </div>
   </article>
  </Link>
 )
}

// Blog.PropTypes={}

export default Blog

