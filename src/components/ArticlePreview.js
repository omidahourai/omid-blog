import React from 'react'
import styled from 'styled-components'
import LinksArticleShare from 'containers/LinksArticleShare'
import ArticlePreviewHeader from 'containers/ArticlePreviewHeader'
import * as Gatsby from 'gatsby'

const Link = styled(Gatsby.Link)`
  ${({theme}) => theme.link}
`
const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  height: 100%;
`
const Hero = styled.div`
  margin-bottom: 1rem;
  position: relative;
  padding-top: 60%;
  & img {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    height: 100%;
    object-fit: cover;
  }
`
const Content = styled.div`
  font-family: ${({theme}) => theme.font.sansSerif};
  font-size: 0.85rem;
  line-height: 1.35rem;
  margin-bottom: 1rem;
  & > p {
    text-align: justify;
  }
  & h2 {
    margin-bottom: 1rem;
  }
`

const Footer = styled.div`
  text-align: center;
  overflow: hidden;
  flex-grow: 1;
  margin-top: auto;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`

export default props => (
  <Wrapper>
    <Link to={props.articleUrl}>
      <Hero>
        <img alt={props.articleThumbnail.alt} {...props.articleThumbnail} />
      </Hero>
    </Link>
    <ArticlePreviewHeader {...props} />
    <Content
      dangerouslySetInnerHTML={{
        __html: props.summaryHtml,
      }}
    />
    <Footer>
      <LinksArticleShare {...props} />
    </Footer>
  </Wrapper>
)
