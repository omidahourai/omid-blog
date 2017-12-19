import React, { Component } from "react"
import { map } from 'lodash'
import Link from "gatsby-link"
import * as PropTypes from "prop-types"
import Img from "gatsby-image"

// import { rhythm } from "../utils/typography"

const propTypes = {
  data: PropTypes.object.isRequired,
}

class ArticleTemplate extends Component {
  render() {
    const article = this.props.data.contentfulArticle
    const {
        title,
        content,
        image,
        authors,
    } = article
    return (
      <div>
        <h2>{title}</h2>
        <br/>
        <br/>
        {content.content}
        <br/>
        <br/>
        {image}
        <br/>
        <br/>
        {map(authors, author => `${ author.firstName } ${ author.lastName }`)}
        {/*
          <Img resolutions={image[0].resolutions} />
          <h4>{productName}</h4>
        </div>
        <h1>{productName}</h1>
        <h4>Made by {brand.companyName.companyName}</h4>
        <div>
          <span>Price: ${price}</span>
          <div
            dangerouslySetInnerHTML={{
              __html: productDescription.childMarkdownRemark.html,
            }}
          />
          <div>
            <span>See other: </span>
            <ul>
              {categories.map((category, i) => (
                <li key={i}>
                  <Link key={i} to={`/categories/${category.id}`}>
                    {category.title.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
            */}
      </div>
    )
  }
}

ArticleTemplate.propTypes = propTypes

export default ArticleTemplate

export const pageQuery = graphql`
  query articleQuery($id: String!) {
    contentfulArticle(id: { eq: $id }) {
      title
      content {
          id
          content
      }
      authors {
        id
        firstName
        lastName
      }
      slug
    }
  }
`
