import React from 'react'
import { lowerFirst, map } from 'lodash'
import ArticlePreview from '../ArticlePreview'
import styles from './styles.module.css'

const parseNode = ({
    author,
    hero,
    slug,
    title,
    category : { name : categoryName },
    createdAt : publishDate,
    summary : { summary },
}) => {
    const authorName = `${ author.firstName } ${ author.lastName }`
    const authorUrl = `/author/${ (`${ author.firstName }${ author.lastName }`).toLowerCase() }`
    const categoryUrl = `/categories/${ lowerFirst(categoryName) }`
    const articleUrl = `/articles/${slug}/`
    return {
        articleUrl,
        authorUrl,
        authorName,
        categoryName,
        categoryUrl,
        heroImgTitle: hero.title,
        heroImgUrl: hero.file.url,
        summary,
        title,
        publishDate,
    }
}

const ArticlePreviewList = ({ edges }) => (
    <ul className={styles.articles}>
        {map(edges, ({node}) => (
            <li key={node.id}>
                <ArticlePreview {...parseNode(node)}/>
            </li>
        ))}
    </ul>
)

export default ArticlePreviewList