import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { map, result } from 'lodash'
import ArticlePreview from '../components/ArticlePreview'
import styles from './styles.module.css'

const ArticlePreviewList = ({ edges }) => {
    return (
        <ul className={styles['articles-preview']}>
            {map(edges, ({node}) => (
            <li key={node.id}>
                <ArticlePreview {...node} summary={result(node, 'summary.summary') || ''} />
            </li>
            ))}
        </ul>
    )
}

const HomePage = ({ data }) => {
    console.log('data',data)
    if ( !data ) {
        return <div>No Data :(</div>
    }
    return (
        <div>
            <ArticlePreviewList edges={data.us.edges} />
        </div>
    )
}

export default HomePage

HomePage.PropTypes = {
    data: PropTypes.shape({
        us: PropTypes.object,
    })
}

export const pageQuery = graphql`
  query getAllArticles {
    us: allContentfulArticle(filter: { node_locale: { eq: "en-US" } }) {
      edges {
        node {
          summary {
            id
            summary
          }
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
          tags {
              name
          }
          slug
          createdAt
          updatedAt
        }
      }
    }
  }
`