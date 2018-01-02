import React, { Component } from "react"
import { first, join, map } from 'lodash'
import Link from "gatsby-link"
import * as PropTypes from "prop-types"
import Img from "gatsby-image"
import ArticleFooter from '../components/ArticleFooter'
import ArticleHeader from '../components/ArticleHeader'
import styles from './styles.module.css'
import Helmet from 'react-helmet'

// import { rhythm } from "../utils/typography"

const propTypes = {
  data: PropTypes.object.isRequired,
}

class ArticleTemplate extends Component {
  componentDidMount() {
    this.props.updateLayout({
      title: this.props.data.contentfulArticle.title,
      category: this.props.data.contentfulArticle.category.name,
      authors: this.props.data.contentfulArticle.authors,
    })
  }
  render() {
    const article = this.props.data.contentfulArticle
    const {
        title,
        content,
        image,
        authors,
        category,
        createdAt,
        summary,
        tags,
    } = article
    const author = first(authors);
    return (
      <article className={styles.article}>
        <Helmet
          title={`Omid Ahourai's Blog | ${ title }`}
          meta={[
            { name: 'description', content: `${ summary.summary }` },
            { name: 'keywords', content: join(map(tags, ({ name }) => name), ', ') },
          ]}
        />
        <ArticleHeader
          firstName={author.firstName}
          lastName={author.lastName}
          category={category.name}
          createdAt={createdAt}
          title={title} />
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{
          __html: content.childMarkdownRemark.html
        }}/>
        <ArticleFooter />
      </article>
    )
  }
}

ArticleTemplate.propTypes = propTypes

export default ArticleTemplate

export const pageQuery = graphql`
  query ArticleQuery($id: String!) {
    contentfulArticle(id: { eq: $id }) {
      title
      summary {
        id
        summary
      }
      content {
        childMarkdownRemark {
          html
        }
      }
      authors {
        id
        firstName
        lastName
        description {
          description
        }
        photo {
          file {
            url
          }
        }
      }
      category {
        name
      }
      slug
      createdAt
      tags {
        name
      }
    }
  }
`
