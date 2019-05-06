import React from 'react'
import styled, { css } from 'styled-components'
import Theme from 'styled-theming'
import LinksArticleShare from 'containers/LinksArticleShare'
import ArticlePreviewHeader from 'containers/ArticlePreviewHeader'
import * as Gatsby from 'gatsby'

const Link = styled(Gatsby.Link)`
  ${({theme}) => theme.link}
`
const wrapperStyle = Theme('mode', {
  dark: css`
    padding: 30px;
    border: 1px solid #FFF;
    border-width: 1px;
    background: #111;
  `
})
const Wrapper = styled.article`
  ${wrapperStyle}
  transition: padding 0.5s ease-out, border 0.5s ease-out, background 0.5s ease-out;
  display: flex;
  flex-direction: column;
  height: 100%;
`
const heroImgStyle = Theme('mode', {
  light: css`
    & img {
      box-shadow: none;
    }
  `,
  dark: css`
    margin-bottom: 10px !important;
    & img {
      box-shadow: black 2px 2px 10px 1px;
    }
  `
})

const Hero = styled.div`
  ${heroImgStyle}
  transition: margin 0.5s ease-out;
  position: relative;
  padding-top: 60%;
  & img {
    transition: box-shadow 0.5s ease-out;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    height: 100%;
    object-fit: cover;
  }
`
const contentStyle = Theme('mode', {
  light: css`
    font-size: 0.85rem;
  `,
  dark: css`
    font-size: 0.8rem;
  `
})
const Content = styled.div`
  ${contentStyle}
  transition: font-size 0.5s;
  font-family: ${({theme}) => theme.font.sansSerif};
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
