import React, { Component } from 'react'
import { lowerFirst, join, map } from 'lodash'
import { graphql } from 'gatsby'
import * as PropTypes from 'prop-types'
import './article.css'
import styles from './article.module.css'
import Helmet from 'react-helmet'
import { ArticleHeader, ArticleFooter } from 'components'

// import { rhythm } from "../utils/typography"

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
    const authorName = `${author.firstName} ${author.lastName}`
    // const authorUrl = `/author/${`${author.firstName}${
    //   author.lastName
    // }`.toLowerCase()}`
    const categoryUrl = `/${lowerFirst(categoryName)}/`
    return (
      <article className={`article ${styles.article}`}>
        <Helmet {...this.getMetaData()} />
        <div className={styles.hero}>
          <img {...parseHeroImgMeta(hero)} />
        </div>
        <ArticleHeader
          authorName={authorName}
          categoryName={categoryName}
          categoryUrl={categoryUrl}
          publishedOn={publishedOn}
          updatedOn={updatedOn}
          title={title}
        />
        <div
          className={styles.content}
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
      </article>
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
