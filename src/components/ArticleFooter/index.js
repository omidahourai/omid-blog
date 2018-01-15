import React, { Component } from 'react'
import { map } from 'lodash'
import Link from 'gatsby-link'
import IconButton from 'common/components/IconButton'
import styles from './styles.module.css'
import ButtonCircle from 'common/components/ButtonCircle'
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
      <ButtonCircle 
        className={styles.btn}
        onClick={() => window.open(`https://facebook.com/sharer/sharer.php?u=${ decodeURIComponent( `http://www.omid.com/article/${ slug }` )}`)}
        title="Share on Facebook">
        <FaFacebook />
      </ButtonCircle>
      <ButtonCircle 
        className={styles.btn}
        onClick={() => window.open(`https://twitter.com/share?text=Check out this article by @omidahourai: ${ title }&hashtags=${ tags.join(',') }&url=${ `http://www.omid.com/article/${ slug }` }`)}
        title="Share on Twitter">
        <FaTwitter />
      </ButtonCircle>
    </div>
  </footer>
)

  export default ArticleFooter