import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'

export default props => (
  <div>
    <Helmet meta={[{ name: 'robots', content: 'noindex, nofollow' }]} />
    <h1>Hi from the about page</h1>
    <p>Welcome to about me</p>
    <Link to="/">Go back to the homepage</Link>
  </div>
)
