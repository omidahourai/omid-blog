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

const propTypes = {
  data: PropTypes.object.isRequired,
}

class ArticleTemplate extends Component {
  componentDidMount() {
    this.props.updateLayout({
      title: this.props.data.contentfulArticle.title,
      categoryName: this.props.data.contentfulArticle.category.name,
      author: this.props.data.contentfulArticle.author,
    })
  }
  render() {
    const {
        author,
        content,
        hero,
        tags,
        title,
        category,
        category : { name : categoryName },
        createdAt : publishDate,
        summary : { summary },
    } = this.props.data.contentfulArticle
    const authorName = `${ author.firstName } ${ author.lastName }`
    const authorUrl = `/author/${ (`${ author.firstName }${ author.lastName }`).toLowerCase() }`
    const categoryUrl = `/categories/${ lowerFirst(categoryName) }`

    const dim = 1000
    const dim2x = dim * 2
    const heroImgMeta = {
        alt: hero.title,
        title: hero.title,
        src: `${ hero.file.url }?w=${ dim }&h=${ dim }&q=70`,
        srcSet: `${ hero.file.url }?w=${ dim2x }&h=${ dim2x }&q=70 2x`,
    }

    return (
      <article className={styles.article}>
        <Helmet
          title={`Omid Ahourai's Blog | ${ title }`}
          meta={[
            { name: 'description', content: `${ summary }` },
            { name: 'keywords', content: join(map(tags, ({ name }) => name), ', ') },
          ]}
        />
        <div className={styles.hero}>
          <img {...heroImgMeta} />
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

ArticleTemplate.propTypes = propTypes

export default ArticleTemplate

export const pageQuery = graphql`
  query ArticleQuery($id: String!) {
    contentfulArticle(id: { eq: $id }) {
      title
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
