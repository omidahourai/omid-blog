import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

const AboutPage = () => (
  <div>
    <Helmet
      meta={[
        { name: 'robots', content: 'noindex, nofollow' },
    ]}/>

    <h1>Hi from the about page</h1>
    <p>Welcome to about me</p>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default AboutPage
