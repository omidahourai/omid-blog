import React from 'react'
import { lowerFirst, map } from 'lodash'
import { ArticlePreview } from 'components'
import styles from './styles.module.css'

const parseNode = ({
    author,
    hero,
    slug,
    title,
    tags,
    publishedOn,
    updatedOn,
    category: { name: categoryName },
    summary: { childMarkdownRemark: { html: summaryHtml } },
}) => {
    const authorName = `${ author.firstName } ${ author.lastName }`
    const authorUrl = `/author/${ (`${ author.firstName }${ author.lastName }`).toLowerCase() }`
    const catLower = lowerFirst(categoryName)
    const categoryUrl = `/${ catLower }/`
    const articleUrl = `/${catLower}/${slug}/`
    return {
        articleUrl,
        authorUrl,
        authorName,
        categoryName,
        categoryUrl,
        heroImgTitle: hero.title,
        heroImgUrl: hero.file.url,
        summaryHtml,
        title,
        publishedOn,
        updatedOn,
        tags,
        slug,
    }
}

export const ArticlePreviewList = ({ articles }) => (
    <ul className={styles.articles}>
        {map(articles, article => (
            <li key={article.id}>
                <ArticlePreview {...parseNode(article)}/>
            </li>
        ))}
    </ul>
)

export default ArticlePreviewList