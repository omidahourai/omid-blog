import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { map } from 'lodash'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import ArticlePreview from '../components/ArticlePreview'

import './index.css'

const Header = () => (
  <div
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
  </div>
)

// const TemplateWrapper = ({ children }) => (
class TemplateWrapper extends Component {

  render() {
    const edges = this.props.data.us.edges
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
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
        {map(edges, ({node}) => (
          <ArticlePreview {...node} />
        ))}
          {this.props.children()}
        </div>
      </div>
    )
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

export const pageQuery = graphql`
  query PageQuery {
    us: allContentfulArticle(filter: { node_locale: { eq: "en-US" } }) {
      edges {
        node {
          id
          title
          content {
              id
              content
          }
          authors {
            id
            firstName
            lastName
          }
          slug
        }
      }
    }
  }
`