import React from 'react'
import ArticlePreview from 'containers/ArticlePreview'
import styled from 'styled-components'
import { result, lowerFirst, map } from 'lodash'

const Wrapper = styled.ul`
  list-style-type: none;
  margin: 0;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-bottom: 2rem;

  & li {
    width: 100%;
    margin-bottom: 1rem;

    padding-bottom: 1rem;
    // border-bottom: 1px solid #e8e8e8;
  }

  & h2 {
    margin-bottom: 1rem;
  }

  & a {
    text-decoration: none;
  }

  h2,
  p {
    color: #333;
  }

  @media only screen and (min-width: 640px) {
    flex-direction: row;

    & li {
      width: 50%;
      // margin-right: 1rem;

      padding: 1rem;
      // border: 1px solid #CCC;

      &:nth-of-type(2n + 2) {
        margin-right: 0;
      }
    }
  }
`

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

const ArticlePreviewList = ({ articles }) => (
  <Wrapper>
    {map(articles, article => (
      <li key={article.id}>
        <ArticlePreview {...parseNode(article)} />
      </li>
    ))}
  </Wrapper>
)

export default ArticlePreviewList
