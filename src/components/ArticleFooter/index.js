import React, { Component } from 'react'
import Link from 'gatsby-link'
import IconButton from '../../common/components/IconButton'
import styles from './styles.module.css'

const ArticleFooter = () => (
  <footer className={styles['footer-article']}>
    <div className={styles['meta-tags']}>
      <Link to="http://infinitythemes.ge/flex-blog/tag/time/" rel="tag">time</Link>
      <Link to="http://infinitythemes.ge/flex-blog/tag/trendy/" rel="tag">trendy</Link>
      <Link to="http://infinitythemes.ge/flex-blog/tag/trip/" rel="tag">trip</Link>
    </div>	
    <div className={styles['meta-share']}>
    <IconButton
        icon="facebook"
        onClick={() => window.open('http://facebook.com/omidahourai')}
        title="Like Omid Ahourai on Facebook" />
    <IconButton
        icon="twitter"
        onClick={() => window.open('http://twitter.com/omidahourai')}
        title="Follow Omid Ahourai on Twitter" />
    <IconButton
        icon="instagram"
        onClick={() => window.open('http://instagram.com/omidahourai')}
        title="Follow Omid Ahourai on Instagram" />
    </div>
  </footer>
)

  export default ArticleFooter