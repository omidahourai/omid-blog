import React from 'react'
import { Link } from 'gatsby'
import moment from 'moment'
import styles from './styles.module.css'

export const ArticleHeader = ({
  articleUrl,
  authorName,
  authorUrl,
  categoryName,
  categoryUrl,
  publishedOn,
  title,
}) => {
  authorUrl = '#'
  return (
    <header className={styles.headerArticle}>
      <div className={styles.metaCategories}>
        <span className={styles.categoryPrefix}>In</span>
        <Link to={categoryUrl} rel="category tag">
          {categoryName}
        </Link>
      </div>
      <h2 className={styles.postTitle}>{title}</h2>
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

export default ArticleHeader
