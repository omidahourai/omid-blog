import React from 'react'
import * as Gatsby from 'gatsby'
import moment from 'moment'
import styled from 'styled-components'
import { theme } from 'styles'

const Wrapper = styled.header`
  text-align: center;
`
const Category = styled.div`
  margin-bottom: 0.5rem;
  & > a {
    font-family: ${theme.font.sansSerif};
    text-transform: uppercase;
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: 2px;
    text-decoration: none;
    color: ${theme.color.primary};
    &:hover {
      text-decoration: underline;
      color: ${theme.color.primaryHighlight};
    }
  }
`
const Prefix = styled.span`
  font-family: ${theme.font.serif};
  font-style: italic;
  font-weight: 400;
  font-style: italic;
  margin-right: 4px;
`
const Title = styled.h2`
  margin: 0;
  padding: 0;
  vertical-align: baseline;
  font-family: ${theme.font.serif};
  font-size: 2.5rem;
  line-height: 3rem;
  letter-spacing: 0.05rem;
  margin-bottom: 1rem;
  font-weight: 400;
`
const Meta = styled.div`
  color: #aaa;
  text-align: center;
  margin-bottom: 1.5rem;
`
const PublishDate = styled.span`
  font-size: 15px;
  margin-right: 5px;
  font-family: ${theme.font.sansSerif};
`
const AuthorPrefix = styled.span`
  font-family: 'Playpair Display';
  font-size: 15px;
  font-style: italic;
  margin-right: 4px;
  border-left-width: 1px;
  border-left-style: solid;
  padding-left: 5px;
`
const CategoryLink = styled(Gatsby.Link)``
const AuthorLink = styled(Gatsby.Link)`
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  color: ${theme.color.primary};
  font-family: ${theme.font.sansSerif};
  &:hover {
    color: ${theme.color.primaryHighlight};
    text-decoration: underline;
  }
`

export const ArticleHeader = ({
  articleUrl,
  authorName,
  authorUrl,
  categoryName,
  categoryUrl,
  publishedOn,
  title,
}) => {
  authorUrl = '#'
  return (
    <Wrapper>
      <Category>
        <Prefix>In</Prefix>
        <CategoryLink to={categoryUrl} rel="category tag">
          {categoryName}
        </CategoryLink>
      </Category>
      <Title>{title}</Title>
      <Meta>
        <PublishDate>{moment(publishedOn).format('MMMM D, YYYY')}</PublishDate>
        <AuthorPrefix>By</AuthorPrefix>
        <AuthorLink
          to={authorUrl}
          title={`Articles by ${authorName}`}
          rel="author"
        >
          {authorName}
        </AuthorLink>
      </Meta>
    </Wrapper>
  )
}

export default ArticleHeader
