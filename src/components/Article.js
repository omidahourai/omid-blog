import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { theme } from 'styles'
import { Wrapper, LayoutFooter } from 'components/Tag'
import ArticleAuthor from 'containers/ArticleAuthor'
import ArticleBreadcrumbs from 'containers/ArticleBreadcrumbs'
import ArticleFooter from 'containers/ArticleFooter'
import ArticleHeader from 'components/ArticleHeader'
import ArticleNextPrev from 'components/ArticleNextPrev'
import LayoutHeader from 'components/LayoutHeader'
import SideBar from 'containers/SideBar'
import SiteFooter from 'components/SiteFooter'

const ArticleHero = styled.div`
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

const ArticleLayout = styled.article`
  grid-area: main;
  overflow: hidden;
  margin: 0 auto;
  max-width: 835px;
  margin-bottom: 2rem;

  & .img-row {
    margin-bottom: 1.45rem;
    display: flex;
    flex-wrap: wrap;
    padding: 0 5px;
    & .img-wrapper {
      width: 100%;
    }
    & img {
      margin: 0;
      width: 100%;
    }
    & figcaption {
      display: none;
      font-size: 0.6rem;
      line-height: 0.9rem;
    }
  }
`
const SideBarWrapper = styled.div`
  display: none;
`
const ArticleContent = styled.div`
  font-family: ${theme.font.sansSerif};
  font-size: 0.85rem;
  line-height: 1.35rem;
  & a {
    text-decoration: none;
    color: primary;
    &:hover {
      color: ${theme.color.primaryHighlight};
    }
  }
  ${({category}) => category === 'Poetry' && `
    text-align: center;
    font-style: italic;
  `}
`

export default props => {
  console.log('sidebar props>>>',props)
  return (
  <Wrapper>
    <LayoutHeader theme={props.theme}>
      <ArticleBreadcrumbs
        categoryName={props.category.name}
        title={props.article.title}
      />
    </LayoutHeader>
    <ArticleLayout>
      <Helmet {...props.meta} />
      <ArticleHero>
        <img alt={props.heroImageMeta.alt} {...props.heroImageMeta} />
      </ArticleHero>
      <ArticleHeader
        category={props.category}
        article={props.article}
        author={props.author}
      />
      <ArticleContent
        category={props.category.name}
        dangerouslySetInnerHTML={{
          __html: props.article.content.childMarkdownRemark.html,
        }}
      />
      <ArticleFooter
        article={props.article}
        category={props.category}
      />
      <ArticleAuthor
        author={props.author}
        firstName={props.author.firstName}
        lastName={props.author.lastName}
        description={props.author.description.text}
        photoUrl={props.author.photo.file.photoUrl}
      />
      {(props.prev || props.next) && (
        <ArticleNextPrev prevData={props.prev} nextData={props.next} />
      )}
      <SideBarWrapper>
        {props.author && (
          <SideBar
            instagram={props.instagram}
            categories={props.categories}
            author={props.author}
          />
        )}
      </SideBarWrapper>
    </ArticleLayout>
    <LayoutFooter>
      <SiteFooter />
    </LayoutFooter>
  </Wrapper>
)}