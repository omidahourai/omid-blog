import React, { Component } from 'react'
import { map } from 'lodash'
import Link from 'gatsby-link'
import IconButton from 'common/components/IconButton'
import styles from './styles.module.css'
import { SocialLinksShare } from 'components'
import { FaFacebook, FaTwitter, FaPinterestP } from 'common/icons';

export const ArticleFooter = ({ id, title, tags, slug, category, imageUrl }) => (
  <footer className={styles['footer-article']}>
    <div className={styles['meta-tags']}>
    {map(tags, tag => {
      // TODO: CREATE TAG PAGE
      return (
        <Link
          key={tag}
          to={`/tag/${ tag }/`}
          rel="tag">
            {tag}
          </Link>
      )})}
    </div>	
    <p className={styles['share-text']}>Share this article</p>
    <div className={styles['meta-share']}>
      <SocialLinksShare
        id={id}
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