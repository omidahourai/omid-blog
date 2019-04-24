import React from 'react'
import * as Gatsby from 'gatsby'
import { SocialLinksShare } from 'components'
import styled from 'styled-components'
import { theme } from 'styles'

const Link = styled(Gatsby.Link)`
  background-color: #f8f8f8;
  border-color: #e8e8e8;
  color: #000;
  font-size: 11px;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 7px 8px 8px 9px;
  margin-right: 6px;
  margin-bottom: 9px;
  display: inline-block;
  border-style: solid;
  border-width: 1px;
  text-decoration: none;
  &:hover {
    color: ${theme.color.primary};
  }
`
const Wrapper = styled.footer`
  text-align: center;
  display: block;
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  margin-bottom: 2rem;
`
const MetaTags = styled.div`
  color: #aaaaaa;
  font-size: 12px;
  text-transform: uppercase;
  margin-bottom: 20px;
  font-family: ${theme.font.sansSerif};
  line-height: 0.65rem;
`
const Text = styled.p`
  width: 100%;
  margin-bottom: 0.5rem;
  font-family: ${theme.font.sansSerif};
  text-transform: uppercase;
  font-size: 0.8rem;
  font-weight: 400;
  letter-spacing: 2px;
`
const ShareWrapper = styled.div`
  display: inline-block;
  position: relative;
  &:before {
    right: 100%;
    margin-right: 15px;
  }
  &:after {
    left: 100%;
    margin-left: 15px;
  }
  &:before,
  &:after {
    border-color: #e8e8e8;
    content: '';
    position: absolute;
    height: 1px;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    top: 50%;
    width: 1000px;
    box-sizing: border-box;
  }
`

const Tag = ({ label }) => (
  <Link to={`/tag/${label}/`} rel="tag">
    {label}
  </Link>
)

export default props => (
  <Wrapper key={props.article.id}>
    <MetaTags>
      {props.article.tags.map(({name}) => (
        <Tag key={name} label={name} />
      ))}
    </MetaTags>
    <Text>Share this article</Text>
    <ShareWrapper>
      <SocialLinksShare
        id={props.article.id}
        slug={props.article.slug}
        title={props.article.title}
        tags={props.article.tags}
        category={props.category}
        imageUrl={`http:${props.article.hero.file.url}?w=1000&h=1000`}
      />
    </ShareWrapper>
  </Wrapper>
)