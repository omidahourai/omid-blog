import React from 'react'
import styled from 'styled-components'
import { theme } from 'styles'
import * as Gatsby from 'gatsby'

const Link = styled(Gatsby.Link)``
const Wrapper = styled.header`
  text-align: center;
  margin-bottom: 0.5rem;
`
const Category = styled.div`
  margin-bottom: 0.5rem;

  span {
    font-family: ${theme.font.serif};
    font-style: italic;
    font-weight: 400;
    font-style: italic;
    margin-right: 4px;
  }
  ${Link} {
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
const Title = styled.h2`
  margin: 0;
  padding: 0;
  vertical-align: baseline;
  font-family: ${theme.font.serif};
  font-size: 1.5rem;
  line-height: initial;
  letter-spacing: 0.05rem;
  margin-bottom: 1rem;
  font-weight: 400;

  ${Link} {
    color: #111;
    &:visited {
      color: #111;
    }
    &:hover {
      color: ${theme.color.primary};
      text-decoration: none;
    }
  }
`
const Meta = styled.div`
  color: #aaa;
  text-align: center;
  margin-bottom: 2rem;

  ${Link} {
    font-size: 1rem;
    font-weight: 600;
    text-decoration: none;
    color: ${theme.color.primary};
    font-family: ${theme.font.sansSerif};
    &:hover {
      color: ${theme.color.primaryHighlight};
      text-decoration: underline;
    }
  }
`
const PublishDate = styled.span`
  font-size: 15px;
  margin-right: 5px;
  font-family: ${theme.font.sansSerif};
`
const Prefix = styled.span`
  font-family: 'Playpair Display';
  font-size: 15px;
  font-style: italic;
  margin-right: 4px;
  border-left-width: 1px;
  border-left-style: solid;
  padding-left: 5px;
`

export default props => (
  <Wrapper>
    <Category>
      <span>{'In'}</span>
      <Link to={props.categoryUrl} rel={'category tag'}>
        {props.categoryName}
      </Link>
    </Category>
    <Title>
      <Link to={props.articleUrl}>{props.title}</Link>
    </Title>
    <Meta>
      <PublishDate>{props.publishDate}</PublishDate>
      <Prefix>{'By'}</Prefix>
      <Link to={props.authorUrl}
        title={`Article by ${props.authorName}`}
        rel={'author'}>
        {props.authorName}
      </Link>
    </Meta>
  </Wrapper>
)