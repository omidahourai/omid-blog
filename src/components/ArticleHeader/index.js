import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import styles from './styles.module.css'

const ArticleHeader = ({ category } = {}) => (
    <header className={styles['header-article']}>
      <div className={styles.top}>
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: 'blue',
              textDecoration: 'none',
            }}>
            {`</>`}
          </Link>
        </h1>
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
        &gt;
        </li>
        <li>
          <Link className={styles.active} to={`/categories/`}>
            {category}
          </Link>
        </li>
      </ul>
    </header>
  )

  export default ArticleHeader