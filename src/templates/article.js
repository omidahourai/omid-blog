import React, { Component } from "react"
import { lowerFirst, result, first, join, map } from 'lodash'
import Link from "gatsby-link"
import * as PropTypes from "prop-types"
import Img from "gatsby-image"
import ArticleFooter from '../components/ArticleFooter'
import ArticleHeader from '../components/ArticleHeader'
import styles from './article.module.css'
import Helmet from 'react-helmet'

// import { rhythm } from "../utils/typography"

const parseHeroImgMeta = (hero) => {
  const dim = 1000
  const dim2x = dim * 2
  return {
      alt: hero.title,
      title: hero.title,
      src: `${ hero.file.url }?w=${ dim }&h=${ dim }&q=70`,
      srcSet: `${ hero.file.url }?w=${ dim2x }&h=${ dim2x }&q=70 2x`,
  }
}

class ArticleTemplate extends Component {
  componentDidMount() {
    this.props.updateLayout({
      title: this.props.data.contentfulArticle.title,
      categoryName: this.props.data.contentfulArticle.category.name,
      author: this.props.data.contentfulArticle.author,
    })
  }

  getMetaData() {
    const {slug, title, author, tags, hero, category, summary : { summary }} = this.props.data.contentfulArticle
    return {
      title: `Omid Ahourai's Blog | ${ title }`,
      meta: [
        { name: 'description', content: `${ summary }` },
        { name: 'keywords', content: join(map(tags, ({ name }) => name), ', ') },
        { property: 'og:site_name', content: `Blog - Omid Ahourai` },
        { property: 'og:type', content: 'article' },
        { property: 'og:title', content: title },
        { property: 'og:description', content: summary },
        { property: 'og:url', content: `http://omid.com/articles/${slug}` },
        { property: 'og:image', content: `${hero.file.url}?w=1200&q=70` },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: summary },
        { name: 'twitter:url', content: `http://omid.com/articles/${slug}` },
        { name: 'twitter:image', content: `${hero.file.url}?w=1200&q=70` },
        { name: 'twitter:label1', content: 'Written by' },
        { name: 'twitter:data1', content: `${ author.firstName } ${ author.lastName }` },
        { name: 'twitter:label2', content: 'Filed under' },
        { name: 'twitter:data2', content: category },
      ]
    }
  }

  render() {
    const {
        author, content, hero, tags, title,
        category : { name : categoryName },
        createdAt : publishDate,
    } = this.props.data.contentfulArticle
    const authorName = `${ author.firstName } ${ author.lastName }`
    const authorUrl = `/author/${ (`${ author.firstName }${ author.lastName }`).toLowerCase() }`
    const categoryUrl = `/categories/${ lowerFirst(categoryName) }`

    return (
      <article className={styles.article}>
        <Helmet {...this.getMetaData()}/>
        <div className={styles.hero}>
          <img {...parseHeroImgMeta(hero)} />
        </div>
        <ArticleHeader
          authorName={authorName}
          categoryName={categoryName}
          categoryUrl={categoryUrl}
          publishDate={publishDate}
          title={title} />
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{
          __html: content.childMarkdownRemark.html
        }}/>
        <ArticleFooter tags={map(tags, t => t.name)} />
      </article>
    )
  }
}

ArticleTemplate.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ArticleTemplate

export const pageQuery = graphql`
  query ArticleQuery($id: String!) {
    contentfulArticle(id: { eq: $id }) {
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
        description {
          description
        }
        photo {
          file {
            url
          }
        }
      }
      category {
        name
      }
      createdAt
      tags {
        name
      }
    }
  }
`
