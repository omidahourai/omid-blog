import React from 'react'
import Link from 'gatsby-link'
import { lowerFirst, result, map } from 'lodash'
import moment from 'moment'
import ArticleHeader from '../ArticleHeader'
import styles from './styles.module.css'

const ArticlePreview = ({
    articleUrl,
    authorName,
    authorUrl,
    categoryName,
    categoryUrl,
    heroImgTitle,
    heroImgUrl,
    summary,
    title,
    publishDate,
}) => {
    const dim = 1000
    const dim2x = dim * 2
    const heroImgMeta = {
        alt: heroImgTitle,
        title: heroImgTitle,
        src: `${ heroImgUrl }?w=${ dim }&h=${ dim }&q=70`,
        srcSet: `${ heroImgUrl }?w=${ dim2x }&h=${ dim2x }&q=70 2x`,
        height: {dim},
        width: {dim},
    }

    return (
        <article>
            <div className={styles.hero}>
                <img {...heroImgMeta} />
            </div>
            <ArticleHeader
                articleUrl={articleUrl}
                authorName={authorName}
                authorUrl={authorUrl}
                categoryName={categoryName}
                categoryUrl={categoryUrl}
                isPreview={true}
                publishDate={publishDate}
                title={title} />
            <div className={styles.content}>
                <p>{summary}</p>
            </div>
            <footer className={styles.footer}>
            </footer>
        </article>
    )
}

export default ArticlePreview