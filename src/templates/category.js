import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import { map } from 'lodash'
import { ArticlePreviewList, LayoutHeader, SiteFooter } from 'components'
// import styled from 'styled-components'

import { Wrapper, LayoutArticles, LayoutFooter } from './tag'

class CategoryTemplate extends Component {
  getMetaData(categoryName) {
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
        {
          property: 'og:title',
          content: `Omid Ahourai Blog - ${categoryName}`,
        },
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
    const { category } = data
    const { articles, name: categoryName } = category
    const articlesData = map(articles, article => ({
      ...article,
      author: article.author
        ? {
            ...article.author,
            fullName: `${article.author.firstName} ${article.author.lastName}`,
          }
        : null,
    }))

    return (
      <Wrapper>
        <Helmet {...this.getMetaData(categoryName)} />
        <LayoutHeader />
        <LayoutArticles>
          <ArticlePreviewList articles={articlesData} />
        </LayoutArticles>
        <LayoutFooter>
          <SiteFooter />
        </LayoutFooter>
      </Wrapper>
    )
  }
}

// CategoryTemplate.PropTypes = {
//   data: PropTypes.shape({
//     category: PropTypes.object,
//   }),
// }

export default CategoryTemplate

export const pageQuery = graphql`
  query($categoryName: String!) {
    category: contentfulCategory(name: { eq: $categoryName }) {
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
