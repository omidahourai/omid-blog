import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { lowerFirst } from 'lodash'
import Link from 'gatsby-link'
import styles from './styles.module.css'

const LayoutHeader = ({ children }) => (
    <header className={styles.header}>
      <div className={styles['top-wrapper']}>
        <div className={styles.top}>
          <Link to="/">
            Blog | Omid Ahourai
          </Link>
        </div>
      </div>
      {/*
      <div className={styles.center}>
        <div className={styles.logo}>
          [ header bkgr img ]
        </div>
      </div>
      */}
      {children}
    </header>
  )

  export default LayoutHeader