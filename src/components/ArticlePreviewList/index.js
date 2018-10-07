import React from 'react'
import { result, lowerFirst, map } from 'lodash'
import { ArticlePreview } from 'components'
import styles from './styles.module.css'

const parseNode = ({
  id,
  author,
  hero,
  slug,
  title,
  tags,
  publishedOn,
  updatedOn,
  category,
  summary,
}) => {
  hero = hero || { file: {} }
  category = category || {}
  author = author || {
    firstName: 'AUTHOR',
    lastName: 'NOT SET',
  }
  const categoryName = category.name
  const summaryHtml =
    result(summary, 'childMarkdownRemark.html') || 'SUMMARY NOT SET'
  const authorName = `${author.firstName} ${author.lastName}`
  const authorUrl = `/author/${`${author.firstName}${
    author.lastName
  }`.toLowerCase()}`
  const categoryUrl = `/${lowerFirst(categoryName)}/`
  const articleUrl = `/article/${id}/`
  return {
    id,
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
        <ArticlePreview {...parseNode(article)} />
      </li>
    ))}
  </ul>
)

export default ArticlePreviewList
