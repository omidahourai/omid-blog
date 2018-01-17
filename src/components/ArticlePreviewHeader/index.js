import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { lowerFirst, map } from 'lodash'
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
  categoryUrl = '#'
  authorUrl = '#'
  return (
    <header className={`entry-header ${styles.header}`}>
      <div className={`entry-category ${styles.category}`}>
        <span>In</span>
        <Link
          to={categoryUrl}
          rel="category tag">
            {categoryName}
        </Link>
      </div>
      <h2 className={styles['post-title']}>
        <Link className={styles['post-link']} to={articleUrl}>
          {title}
        </Link>
      </h2>
      <div className={styles['meta-author-date']}>
        <span className={styles['meta-date']}>
          {moment(publishedOn).format('MMMM D, YYYY')}
        </span>
        <span className={styles['author-prefix']}>
          By
        </span>
        <Link
          className={styles['meta-author']}
          to={authorUrl}
          title={`Articles by ${ authorName }`}
          rel="author">
          {authorName}
        </Link>
      </div>
    </header>
  )
}

 export default ArticlePreviewHeader