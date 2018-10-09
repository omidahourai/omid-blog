import React from 'react'
import { map } from 'lodash'
import * as Gatsby from 'gatsby'
import { SocialLinksShare } from 'components'
import styled from 'styled-components'
import { theme } from 'common/styles'

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
  <Link key={label} to={`/tag/${label}/`} rel="tag">
    {label}
  </Link>
)

export const ArticleFooter = ({
  id,
  title,
  tags,
  slug,
  category,
  imageUrl,
}) => (
  <Wrapper key={id}>
    <MetaTags>
      {map(tags, label => (
        <Tag label={label} />
      ))}
    </MetaTags>
    <Text>Share this article</Text>
    <ShareWrapper>
      <SocialLinksShare
        id={id}
        slug={slug}
        title={title}
        tags={tags}
        category={category}
        imageUrl={imageUrl}
      />
    </ShareWrapper>
  </Wrapper>
)

export default ArticleFooter
