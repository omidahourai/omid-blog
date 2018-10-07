import React from 'react'
import { Link } from 'gatsby'
import { ArticlePreviewHeader, SocialLinksShare } from 'components'
import styles from './styles.module.css'

export const ArticlePreview = ({
  id,
  articleUrl,
  authorName,
  authorUrl,
  categoryName,
  categoryUrl,
  heroImgTitle,
  heroImgUrl,
  summaryHtml,
  publishedOn,
  updatedOn,
  title,
  tags,
  slug,
}) => {
  const dim = 1000
  const dim2x = dim * 2
  const heroImgMeta = {
    alt: heroImgTitle,
    title: title,
    src: `${heroImgUrl}?w=${dim}&h=${dim}&q=70`,
    srcSet: `${heroImgUrl}?w=${dim2x}&h=${dim2x}&q=70 2x`,
    height: { dim },
    width: { dim },
  }

  return (
    <article className={`post ${styles.post}`}>
      <div className={`media ${styles.hero}`}>
        <Link to={articleUrl}>
          <img {...heroImgMeta} />
        </Link>
      </div>
      <ArticlePreviewHeader
        articleUrl={articleUrl}
        authorName={authorName}
        authorUrl={authorUrl}
        categoryName={categoryName}
        categoryUrl={categoryUrl}
        isPreview={true}
        publishedOn={publishedOn}
        title={title}
      />
      <div
        className={`content ${styles.content}`}
        dangerouslySetInnerHTML={{
          __html: summaryHtml,
        }}
      />
      <footer className={`footer ${styles.footer}`}>
        <SocialLinksShare
          id={id}
          slug={slug}
          title={title}
          category={categoryName}
          imageUrl={`http:${heroImgUrl}?w=1000&h=1000`}
          tags={tags}
        />
      </footer>
    </article>
  )
}

export default ArticlePreview
