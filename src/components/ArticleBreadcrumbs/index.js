import React from 'react'
import { lowerFirst } from 'lodash'
import { Link } from 'gatsby'
import styles from './styles.module.css'

export const ArticleBreadcrumbs = ({ categoryName, title }) => (
  <ul className={styles.breadcrumbs}>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li className={styles.separator}>
      <span>&gt;</span>
    </li>
    <li>
      <Link to={`/${lowerFirst(categoryName)}/`}>{categoryName}</Link>
    </li>
    <li className={styles.separator}>
      <span>&gt;</span>
    </li>
    <li className={styles.current}>
      <span>{title}</span>
    </li>
  </ul>
)

export default ArticleBreadcrumbs
