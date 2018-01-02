import React, { Component } from "react"
import { map } from 'lodash'
import Link from "gatsby-link"
import * as PropTypes from "prop-types"
import Img from "gatsby-image"
import ArticleFooter from '../components/ArticleFooter'
import marked from 'marked'
import moment from 'moment'
import styles from './styles.module.css'

// import { rhythm } from "../utils/typography"

const propTypes = {
  data: PropTypes.object.isRequired,
}

class ArticleTemplate extends Component {
  componentDidMount() {
    this.props.updateLayout({
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
    } = article
    return (
      <article className={styles.article}>
        <header className={styles['header-article']}>
          <div className={styles['meta-categories']}>
            <span className={styles['category-prefix']}>In</span>
            <Link
              to={`/categories/${category.name}`}
              rel="category tag">
                {category.name}
            </Link>
          </div>
          <h2 className={styles['post-title']}>{title}</h2>
          <div className={styles['meta-author-date']}>
            <span className={styles['meta-date']}>
              {moment(createdAt).format('MMMM D, YYYY')}
            </span>
            <span className={styles['author-prefix']}>
              By
            </span>
            <Link
              className={styles['meta-author']}
              to="http://infinitythemes.ge/flex-blog/author/admin/"
              rel="author">
              {map(authors, author => `${ author.firstName } ${ author.lastName }`)}
            </Link>
          </div>
        </header>
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
