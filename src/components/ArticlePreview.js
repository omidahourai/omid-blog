import React from 'react'
import SocialLinksShare from 'containers/SocialLinksShare'
import styled from 'styled-components'
import ArticlePreviewHeader from 'containers/ArticlePreviewHeader'
import { Link } from 'gatsby'

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  height: 100%;
  & a {
    text-decoration: none;
  }
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
  font-family: ${props => props.theme.font.sansSerif};
  font-size: 0.85rem;
  line-height: 1.35rem;
  margin-bottom: 1rem;
  & > p {
    text-align: justify;
  }
  & h2 {
    margin-bottom: 1rem;
  }
  h2, p {
    color: #333;
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
    <Hero>
      <Link to={props.articleUrl}>
        <img alt={''} {...props.heroImageMeta} />
      </Link>
    </Hero>
    <ArticlePreviewHeader {...props} />
    <Content
      dangerouslySetInnerHTML={{
        __html: props.summaryHtml,
      }}
    />
    <Footer>
      <SocialLinksShare {...props} />
    </Footer>
  </Wrapper>
)