import React from 'react'
import Helmet from 'react-helmet'
import styled, { css } from 'styled-components'
import Theme from 'styled-theming'
import ArticleAuthor from 'containers/ArticleAuthor'
import ArticleBreadcrumbs from 'containers/ArticleBreadcrumbs'
import ArticleFooter from 'containers/ArticleFooter'
import ArticleHeader from 'containers/ArticleHeader'
import ArticleNextPrev from 'containers/ArticleNextPrev'
import LayoutHeader from 'containers/LayoutHeader'
import SiteFooter from 'components/SiteFooter'
import SideBar from 'containers/SideBar'
import { PageGrid } from 'components/LayoutPage'
import { LayoutFooter } from 'components/LayoutPage'

const ArticleHeroImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 100%;
  object-fit: cover;
`
const ArticleHero = styled.div`
  margin-bottom: 1rem;
  position: relative;
  padding-top: 60%;
`
const layoutArticleStyle = Theme('mode', {
  light: css`
    background-color: #FFF;
    border: 1px solid #FFF;
  `,
  dark: css`
    background-color: #111;
    box-shadow: rgba(0,0,0,0.5) 0px 4px 20px;
    border: 1px solid #FFF;
    &>*:not(:first-child){
      padding-left: 10px;
      padding-right: 10px;
      @media only screen and (min-width: 640px) {
        padding-left: 30px;
        padding-right: 30px;
      }
    }
  `
})
const LayoutArticle = styled.article`
  ${layoutArticleStyle}
  transition: background-color 0.5s ease-out;
  grid-area: main;
  overflow: hidden;
  margin: 0 auto;
  max-width: 835px;
  margin-bottom: 2rem;
`
const ArticleContent = styled.div`
  font-family: ${({ theme }) => theme.font.sansSerif};
  font-size: 0.85rem;
  line-height: 1.35rem;
  & a {
    text-decoration: none;
    color: primary;
    &:hover {
      color: ${({ theme }) => theme.color.primaryHighlight};
    }
  }
  ${({ category }) =>
    category === 'Poetry' &&
    `
    text-align: center;
    font-style: italic;
  `}
  .img-row {
    margin-bottom: 1.45rem;
    display: flex;
    flex-wrap: wrap;
    padding: 0 5px;
    img {
      width: 100%;
      margin: 0;
    }
    figcaption {
      display: none;
      font-size: 0.6rem;
      line-height: 0.9rem;
    }
    .img-wrapper {
      width: 100%;
    }
    @media only screen and (min-width: 420px) and (max-width: 979px) {
      .col-md-4 {
        width: 50%;
        padding: 0 5px;
      }
    }
    @media only screen and (min-width: 640px) {
      .col-md-4 {
        width: 25%;
        padding: 0 5px;
      }
    }
  }
`

export default props => (
  <React.Fragment>
    <Helmet title={props.pageTitle} meta={props.pageMeta} />
    <PageGrid>
      <LayoutHeader>
        <ArticleBreadcrumbs data={props.data} />
      </LayoutHeader>
      <LayoutArticle>
        <ArticleHero>
          <ArticleHeroImage alt={props.articleHero.alt} {...props.articleHero} />
        </ArticleHero>
        <ArticleHeader data={props.data} />
        <ArticleContent
          category={props.categoryName}
          dangerouslySetInnerHTML={{
            __html: props.articleContentHtml,
          }}
        />
        <ArticleFooter data={props.data} />
        <ArticleAuthor data={props.data} />
        <ArticleNextPrev data={props.data} />
        {/*
          <SideBar {...props} />
        */}
      </LayoutArticle>
      <LayoutFooter>
        <SiteFooter />
      </LayoutFooter>
    </PageGrid>
  </React.Fragment>
)
