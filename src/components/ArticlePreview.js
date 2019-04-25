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

export const ArticlePreview = ({
  id,
  articleUrl,
  authorName,
  authorUrl,
  categoryName,
  categoryUrl,
  heroImgTitle,
  heroImgUrl,
  summaryHtml,
  publishedOn,
  updatedOn,
  title,
  tags,
  slug,
}) => {
  const dim = 1000
  const dim2x = dim * 2
  const heroImgMeta = {
    alt: heroImgTitle,
    title: title,
    src: `${heroImgUrl}?w=${dim}&h=${dim}&q=70`,
    srcSet: `${heroImgUrl}?w=${dim2x}&h=${dim2x}&q=70 2x`,
    height: { dim },
    width: { dim },
  }

  return (
    <Wrapper>
      <Hero>
        <Link to={articleUrl}>
          <img alt={''} {...heroImgMeta} />
        </Link>
      </Hero>
      <ArticlePreviewHeader
        articleUrl={articleUrl}
        authorName={authorName}
        authorUrl={authorUrl}
        categoryName={categoryName}
        categoryUrl={categoryUrl}
        isPreview={true}
        publishedOn={publishedOn}
        title={title}
      />
      <Content
        dangerouslySetInnerHTML={{
          __html: summaryHtml,
        }}
      />
      <Footer>
        <SocialLinksShare
          id={id}
          slug={slug}
          title={title}
          category={categoryName}
          imageUrl={`http:${heroImgUrl}?w=1000&h=1000`}
          tags={tags}
        />
      </Footer>
    </Wrapper>
  )
}

export default ArticlePreview
