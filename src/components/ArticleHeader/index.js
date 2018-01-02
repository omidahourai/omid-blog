import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { lowerFirst, map } from 'lodash'
import moment from 'moment'
import styles from './styles.module.css'

const ArticleHeader = ({ category, title, createdAt, firstName, lastName } = {}) => {
  const fullName = `${ firstName } ${ lastName }`
  const authorLink = {
    to: `/author/${ (firstName + lastName).toLowerCase() }/`,
    title: `Articles by ${ fullName }`,
    rel: `author`,
  }
  return (
    <header className={styles['header-article']}>
      <div className={styles['meta-categories']}>
        <span className={styles['category-prefix']}>In</span>
        <Link
          to={`/categories/${ lowerFirst(category) }`}
          rel="category tag">
            {category}
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
          {...authorLink}>
          {fullName}
        </Link>
      </div>
    </header>
  )
}

 export default ArticleHeader