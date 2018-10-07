import React, { Component } from 'react'
import { Link } from 'gatsby'
import styles from './styles.module.css'

export const LayoutHeader = ({ children }) => (
  <header className={styles.header}>
    <div className={styles.topWrapper}>
      <div className={styles.top}>
        <Link to="/">Blog | Omid Ahourai</Link>
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
