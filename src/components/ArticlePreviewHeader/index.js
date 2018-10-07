import React from 'react'
import { Link } from 'gatsby'
import moment from 'moment'
import styles from './styles.module.css'

export const ArticlePreviewHeader = ({
  articleUrl,
  authorName,
  authorUrl,
  categoryName,
  categoryUrl,
  publishedOn,
  title,
}) => {
  // TODO: CREATE THESE PAGES
  authorUrl = '#'
  return (
    <header className={`entry-header ${styles.header}`}>
      <div className={`entry-category ${styles.category}`}>
        <span>In</span>
        <Link to={categoryUrl} rel="category tag">
          {categoryName}
        </Link>
      </div>
      <h2 className={styles.postTitle}>
        <Link className={styles.postLink} to={articleUrl}>
          {title}
        </Link>
      </h2>
      <div className={styles.metaAuthorDate}>
        <span className={styles.metaDate}>
          {moment(publishedOn).format('MMMM D, YYYY')}
        </span>
        <span className={styles.authorPrefix}>By</span>
        <Link
          className={styles.metaAuthor}
          to={authorUrl}
          title={`Articles by ${authorName}`}
          rel="author"
        >
          {authorName}
        </Link>
      </div>
    </header>
  )
}

export default ArticlePreviewHeader
