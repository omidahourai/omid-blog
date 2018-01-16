import React, { Component } from 'react'
import { map } from 'lodash'
import Link from 'gatsby-link'
import IconButton from 'common/components/IconButton'
import styles from './styles.module.css'
import { AnchorCircleIcon } from 'common/components'
import { FaFacebook, FaTwitter, FaInstagram } from 'common/icons';

const ArticleFooter = ({ title, tags, slug }) => (
  <footer className={styles['footer-article']}>
    <div className={styles['meta-tags']}>
    {map(tags, tag => {
      // TODO: CREATE TAG PAGE
      // const tagUrl = `/tag/${ tag }/`
      const tagUrl = '#'
      return (
        <Link
          key={tag}
          to={tagUrl}
          rel="tag">
            {tag}
          </Link>
      )})}
    </div>	
    <p className={styles['share-text']}>Share this article</p>
    <div className={styles['meta-share']}>
      <AnchorCircleIcon 
        className={styles.btn}
        href={`https://facebook.com/sharer/sharer.php?u=${ decodeURIComponent( `http://www.omid.com/article/${ slug }`)}`}
        rel="external"
        title="Share on Facebook">
        <FaFacebook />
      </AnchorCircleIcon>
      <AnchorCircleIcon 
        className={styles.btn}
        href={`https://twitter.com/share?text=Check out this article by @omidahourai: ${ title }&hashtags=${ tags.join(',') }&url=${ `http://www.omid.com/articles/${ slug }` }`}
        rel="external"
        title="Share on Twitter">
        <FaTwitter />
      </AnchorCircleIcon>
    </div>
  </footer>
)

  export default ArticleFooter