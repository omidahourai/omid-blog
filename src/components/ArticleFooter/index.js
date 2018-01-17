import React, { Component } from 'react'
import { map } from 'lodash'
import Link from 'gatsby-link'
import IconButton from 'common/components/IconButton'
import styles from './styles.module.css'
import { SocialLinksShare } from 'components'
import { FaFacebook, FaTwitter, FaPinterestP } from 'common/icons';

export const ArticleFooter = ({ title, tags, slug, category, imageUrl }) => (
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
      <SocialLinksShare
        slug={slug}
        title={title}
        tags={tags}
        category={category}
        imageUrl={imageUrl}
      />
    </div>
  </footer>
)

export default ArticleFooter