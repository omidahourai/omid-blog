import React, { Component } from 'react'
import { lowerFirst, join, map } from 'lodash'
import { graphql } from 'gatsby'
import * as PropTypes from 'prop-types'
import './article.css'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { theme } from 'common/styles'

// import { ArticleLayout, ArticleHeader, ArticleFooter } from 'components'
import { ArticleHeader, ArticleFooter } from 'components'
import {
  ArticleBreadcrumbs,
  LayoutHeader,
  ArticleAuthor,
  ArticleNextPrev,
  SiteFooter,
  SideBar,
} from 'components'

// import { rhythm } from "../utils/typography"
const Wrapper = styled.div`
  display: grid;
  grid-template-areas: 'header header header' 'padLeft main padRight' 'footer footer footer';
  grid-template-columns: 0 minmax(200px, 979px) 0;
  grid-template-rows: auto 1fr auto;
  grid-column-gap: 10px;
  min-height: 100vh;

  @media only screen and (min-width: 980px) {
    grid-template-columns: minmax(0, 1fr) minmax(980px, 1185px) minmax(0, 1fr);
  }
`

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
      // flex-basis: 0;
      // flex-grow: 1;
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
const FooterWrapper = styled.div`
  grid-area: footer;
  display: flex;
  flex-direction: column;
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
`

const parseHeroImgMeta = hero => {
  const dim = 1000
  const dim2x = dim * 2
  return {
    alt: hero.title,
    title: hero.title,
    src: `${hero.file.url}?w=${dim}&h=${dim}&q=70`,
    srcSet: `${hero.file.url}?w=${dim2x}&h=${dim2x}&q=70 2x`,
  }
}

class ArticleTemplate extends Component {
  constructor() {
    super()
    this.state = {}
  }
  componentDidMount() {
    // const {
    //   next,
    //   prev,
    //   categories,
    //   article: {
    //     title,
    //     author,
    //     category: { name: categoryName },
    //   },
    // } = this.props.data
    // const instagramData = result(this, 'props.pageContext.instagram.data') || []
    // this.props.updateLayout({
    //   next,
    //   prev,
    //   categories,
    //   categoryName,
    //   title,
    //   author,
    //   instagramData,
    // })
  }

  getMetaData() {
    const {
      slug,
      title,
      author,
      tags,
      hero,
      category: { name: categoryName },
      summary: { summary },
    } = this.props.data.article
    return {
      title: `Omid Ahourai's Blog | ${title}`,
      meta: [
        { name: 'description', content: `${summary}` },
        {
          name: 'keywords',
          content: join(map(tags, ({ name }) => name), ', '),
        },
        { property: 'og:site_name', content: `Blog - Omid Ahourai` },
        { property: 'og:type', content: 'article' },
        { property: 'og:title', content: title },
        { property: 'og:description', content: summary },
        {
          property: 'og:url',
          content: `http://www.omid.com/${lowerFirst(categoryName)}/${slug}`,
        },
        {
          property: 'og:image',
          content: `http:${hero.file.url}?w=1200&h=630&q=70`,
        },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: summary },
        {
          name: 'twitter:url',
          content: `http://www.omid.com/${lowerFirst(categoryName)}/${slug}`,
        },
        { name: 'twitter:image', content: `http:${hero.file.url}?w=1200&q=70` },
        { name: 'twitter:label1', content: 'Written by' },
        {
          name: 'twitter:data1',
          content: `${author.firstName} ${author.lastName}`,
        },
        { name: 'twitter:label2', content: 'Filed under' },
        { name: 'twitter:data2', content: categoryName },
      ],
    }
  }

  render() {
    console.log('props', this.props)
    const {
      id,
      author,
      content,
      hero,
      tags,
      title,
      slug,
      publishedOn,
      updatedOn,
      category: { name: categoryName },
    } = this.props.data.article
    const { categories, prev, next } = this.props.data

    const authorName = `${author.firstName} ${author.lastName}`
    // const authorUrl = `/author/${`${author.firstName}${
    //   author.lastName
    // }`.toLowerCase()}`
    const categoryUrl = `/${lowerFirst(categoryName)}/`
    return (
      <Wrapper>
        <LayoutHeader category={this.state.category} title={this.state.title}>
          <ArticleBreadcrumbs
            categoryName={this.state.categoryName}
            title={this.state.title}
          />
        </LayoutHeader>

        <ArticleLayout className={`article`}>
          <Helmet {...this.getMetaData()} />
          <ArticleHero>
            <img {...parseHeroImgMeta(hero)} />
          </ArticleHero>
          <ArticleHeader
            authorName={authorName}
            categoryName={categoryName}
            categoryUrl={categoryUrl}
            publishedOn={publishedOn}
            updatedOn={updatedOn}
            title={title}
          />
          <ArticleContent
            dangerouslySetInnerHTML={{
              __html: content.childMarkdownRemark.html,
            }}
          />
          <ArticleFooter
            id={id}
            category={categoryName}
            imageUrl={`http:${hero.file.url}?w=1000&h=1000`}
            tags={map(tags, t => t.name)}
            title={title}
            slug={slug}
          />
          {author ? (
            <ArticleAuthor
              key={author.id}
              firstName={author.firstName}
              lastName={author.lastName}
              description={author.description.text}
              photoUrl={author.photo.file.photoUrl}
            />
          ) : null}
          {prev || next ? (
            <ArticleNextPrev prevData={prev} nextData={next} />
          ) : null}
          <SideBarWrapper>
            {author ? (
              <SideBar
                isStatic={this.state.isSidebarFixed}
                instagramData={this.state.instagramData}
                categories={this.state.categories}
                {...author}
              />
            ) : null}
          </SideBarWrapper>
        </ArticleLayout>
        <FooterWrapper>
          <SiteFooter />
        </FooterWrapper>
      </Wrapper>
    )
  }
}

ArticleTemplate.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ArticleTemplate

export const pageQuery = graphql`
  query($id: String!, $nextId: String, $prevId: String) {
    article: contentfulArticle(id: { eq: $id }) {
      id
      title
      slug
      hero {
        id
        title
        description
        file {
          url
        }
      }
      summary {
        id
        summary
      }
      content {
        childMarkdownRemark {
          html
        }
      }
      author {
        id
        firstName
        lastName
        shortTitle
        description {
          text: description
        }
        photo {
          file {
            photoUrl: url
          }
        }
        altPhoto {
          file {
            photoUrl: url
          }
        }
        shortDescription
        facebookHandle
        twitterHandle
        instagramHandle
        linkedinHandle
        emailAddress
      }
      category {
        name
      }
      publishedOn
      updatedOn
      tags {
        name
      }
    }
    categories: allContentfulCategory {
      edges {
        node {
          categoryName: name
          article {
            id
          }
        }
      }
    }
    prev: contentfulArticle(id: { eq: $prevId }) {
      id
      title
      slug
      category {
        name
      }
      hero {
        id
        title
        description
        file {
          url
        }
      }
      publishedOn
      updatedOn
    }
    next: contentfulArticle(id: { eq: $nextId }) {
      id
      title
      slug
      category {
        name
      }
      hero {
        id
        title
        description
        file {
          url
        }
      }
      publishedOn
      updatedOn
    }
  }
`
