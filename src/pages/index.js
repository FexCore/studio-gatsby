import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to Studio Gatsby.</p>
    <Link to="/page-2/">Go to page 2</Link><br />
    <Link to="/home/">Go to home page</Link>
  </div>
)

export default IndexPage
