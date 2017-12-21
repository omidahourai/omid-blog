import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { map, result } from 'lodash'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import ArticlePreview from '../components/ArticlePreview'

import './index.css'

const Header = () => (
  <header
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {`</>`}
        </Link>
      </h1>
    </div>
  </header>
)

// const TemplateWrapper = ({ children }) => (
class TemplateWrapper extends Component {

  render() {
    return (
      <div>
        <Helmet
          title="Gatsby Default Starter"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <Header />
        <main
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          {this.props.children()}
        </main>
        <footer>

        </footer>
      </div>
    )
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
