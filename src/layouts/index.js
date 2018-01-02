import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { map, result } from 'lodash'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import ArticlePreview from '../components/ArticlePreview'

import './index.css'
import styles from './styles.module.css'

const DefaultHeader = () => (
  <header>
    <div className={styles['header-top']}>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}>
          {`</>`}
        </Link>
      </h1>
    </div>
  </header>
)

const TemplateWrapper = (props) => {
  console.log('template props',props)
  return (
    <div id={styles.site}>
      <Helmet
        title="Gatsby Default Starter"
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      <DefaultHeader />
      <main className={styles['main-layout']}>
        {props.children()}
      </main>
      <footer className={styles['footer-layout']}>
        Footer
      </footer>
    </div>
  )
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
