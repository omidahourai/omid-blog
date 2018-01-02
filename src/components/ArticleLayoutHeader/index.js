import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { lowerFirst } from 'lodash'
import Link from 'gatsby-link'
import styles from './styles.module.css'

const ArticleLayoutHeader = ({ category, title } = {}) => (
    <header className={styles['header-article']}>
      <div className={styles['top-wrapper']}>
        <div className={styles.top}>
          <Link to="/">
            Home
          </Link>
        </div>
      </div>
      <div className={styles.center}>
        <div className={styles.logo}>
          [ header bkgr img ]
        </div>
      </div>
      <ul className={styles.breadcrumbs}>
        <li>
          <Link to="/">
            Home
          </Link>
        </li>
        <li className={styles.separator}>
          <span>&gt;</span>
        </li>
        <li>
          <Link to={`/categories/${ lowerFirst(category) }`}>
            {category}
          </Link>
        </li>
        <li className={styles.separator}>
          <span>&gt;</span>
        </li>
        <li className={styles.current}>
            <span>{title}</span>
        </li>
      </ul>
    </header>
  )

  export default ArticleLayoutHeader