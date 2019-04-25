import React from 'react'
import SocialLinksShare from 'components/SocialLinksShare'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { theme } from 'styles'
import { ArticlePreviewHeader } from 'components'

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
  font-family: ${theme.font.sansSerif};
  font-size: 0.85rem;
  line-height: 1.35rem;
  margin-bottom: 1rem;

  & > p {
    text-align: justify;
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
    <ArticlePreviewHeader
      articleUrl={props.articleUrl}
      authorName={props.authorName}
      authorUrl={props.authorUrl}
      categoryName={props.categoryName}
      categoryUrl={props.categoryUrl}
      isPreview={true}
      publishedOn={props.publishedOn}
      title={props.title}
    />
    <Content
      dangerouslySetInnerHTML={{
        __html: props.summaryHtml,
      }}
    />
    <Footer>
      <SocialLinksShare
        id={props.id}
        slug={props.slug}
        title={props.title}
        category={props.categoryName}
        imageUrl={`http:${props.heroImgUrl}?w=1000&h=1000`}
        tags={props.tags}
      />
    </Footer>
  </Wrapper>
)