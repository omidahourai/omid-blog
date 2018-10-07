import React from 'react'
import { map } from 'lodash'
import { Link } from 'gatsby'
import styles from './styles.module.css'
import { SocialLinksShare } from 'components'

export const ArticleFooter = ({
  id,
  title,
  tags,
  slug,
  category,
  imageUrl,
}) => (
  <footer className={styles.footerArticle}>
    <div className={styles.metaTags}>
      {map(tags, tag => {
        // TODO: CREATE TAG PAGE
        return (
          <Link key={tag} to={`/tag/${tag}/`} rel="tag">
            {tag}
          </Link>
        )
      })}
    </div>
    <p className={styles.shareText}>Share this article</p>
    <div className={styles.metaShare}>
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
