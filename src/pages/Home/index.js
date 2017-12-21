import React from 'react'
import Link from 'gatsby-link'
import { map, result } from 'lodash'
import ArticlePreview from '../../components/ArticlePreview'
import styles from './styles.module.css'

const ArticlePreviewList = ({ edges }) => (
  <ul>
    {map(edges, ({node}) => (
      <li key={node.id}>
        <ArticlePreview {...node} summary={result(node, 'summary.summary') || ''} />
      </li>
    ))}
  </ul>
)

const HomePage = ({ data }) => (
  <div>
    <ArticlePreviewList edges={data.us.edges} />
  </div>
)

const homePageQuery = graphql`
  query HomePageQuery {
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
          slug
          createdAt
          updatedAt
        }
      }
    }
  }
`

export {
    HomePage,
    homePageQuery,
}