import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import { forEach } from 'lodash'
import { ArticlePreviewList, LayoutHeader, SiteFooter } from 'components'
import styled from 'styled-components'

export const Wrapper = styled.div`
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

export const LayoutArticles = styled.main`
  display: flex;
  grid-area: main;
`

export const LayoutFooter = styled.div`
  grid-area: footer;
  display: flex;
  flex-direction: column;
`

class TagTemplate extends Component {
  getMetaData(tagName) {
    return {
      title: `Omid Ahourai's Blog`,
      meta: [
        {
          name: 'description',
          content:
            'Read about my life! Omid Ahourai is an Entrepreneur, Web and Mobile Apps and Games Developer, and Digital Nomad.',
        },
        {
          name: 'keywords',
          content:
            'omid ahourai, omid, ahourai, digital nomad, ardentkid, storyfork',
        },
        { property: 'og:site_name', content: `Blog - Omid Ahourai` },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: `Omid Ahourai Blog - ${tagName}` },
        {
          property: 'og:description',
          content:
            'Read about my life! Omid Ahourai is an Entrepreneur, Web and Mobile Apps and Games Developer, and Digital Nomad.',
        },
        { property: 'og:url', content: `http://www.omid.com/` },
        // { property: 'og:image', content: `${hero.file.url}?w=1200&q=70` },
        // { name: 'twitter:card', content: 'summary_large_image' },
        // { name: 'twitter:title', content: title },
        // { name: 'twitter:description', content: summary },
        // { name: 'twitter:url', content: `http://omid.com/articles/${slug}` },
        // { name: 'twitter:image', content: `${hero.file.url}?w=1200&q=70` },
        // { name: 'twitter:label1', content: 'Written by' },
        // { name: 'twitter:data1', content: `${ author.firstName } ${ author.lastName }` },
        // { name: 'twitter:label2', content: 'Filed under' },
        // { name: 'twitter:data2', content: category },
      ],
    }
  }

  render() {
    const { data } = this.props
    if (!data) {
      return <div>No Data :(</div>
    }
    const { tag } = data
    const { articles, name: tagName } = tag
    forEach(
      articles,
      article =>
        (article.author.fullName = `${article.author.firstName} ${
          article.author.lastName
        }`)
    )
    return (
      <Wrapper>
        <Helmet {...this.getMetaData(tagName)} />
        <LayoutHeader />
        <LayoutArticles>
          <ArticlePreviewList articles={articles} />
        </LayoutArticles>
        <LayoutFooter>
          <SiteFooter />
        </LayoutFooter>
      </Wrapper>
    )
  }
}

export default TagTemplate

TagTemplate.propTypes = {
  data: PropTypes.shape({
    tag: PropTypes.object,
  }),
}

export const pageQuery = graphql`
  query($tagName: String!) {
    tag: contentfulTag(name: { eq: $tagName }) {
      name
      articles: article {
        id
        title
        tags {
          name
        }
        summary {
          childMarkdownRemark {
            html
          }
        }
        hero {
          title
          description
          file {
            url
          }
        }
        category {
          name
        }
        author {
          firstName
          lastName
        }
        slug
        publishedOn
        updatedOn
      }
    }
  }
`
