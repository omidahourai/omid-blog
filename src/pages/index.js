import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { lowerFirst, first, map, result } from 'lodash'
import ArticlePreview from '../components/ArticlePreview'
import styles from './styles.module.css'

const ArticlePreviewList = ({ edges }) => {
    return (
        <ul>
            {map(edges, ({node}) => {
                const {
                    author,
                    hero,
                    slug,
                    title,
                    category : { name : categoryName },
                    id : key,
                    createdAt : publishDate,
                    summary : { summary },
                } = node
                const authorName = `${ author.firstName } ${ author.lastName }`
                const authorUrl = `/author/${ (`${ author.firstName }${ author.lastName }`).toLowerCase() }`
                const categoryUrl = `/categories/${ lowerFirst(categoryName) }`
                const articleUrl = `/articles/${slug}/`
            
                return (
                    <li key={key}>
                        <ArticlePreview
                            articleUrl={articleUrl}
                            authorUrl={authorUrl}
                            authorName={authorName}
                            categoryName={categoryName}
                            categoryUrl={categoryUrl}
                            heroImgTitle={hero.title}
                            heroImgUrl={hero.file.url}
                            summary={summary}
                            title={title}
                            publishDate={publishDate}
                        />
                    </li>
                )}
            )}
        </ul>
    )
}

const HomePage = ({ data }) => {
    console.log('data',data)
    if ( !data ) {
        return <div>No Data :(</div>
    }
    return (
        <div className={styles['article-previews']}>
            <ArticlePreviewList edges={data.us.edges} />
        </div>
    )
}

export default HomePage

HomePage.PropTypes = {
    data: PropTypes.shape({
        us: PropTypes.object,
    })
}

export const pageQuery = graphql`
  query getAllArticles {
    us: allContentfulArticle(filter: { node_locale: { eq: "en-US" } }) {
      edges {
        node {
            id
            title
            summary {
                id
                summary
            }
            hero {
                id
                title
                description
                file {
                  url
                }
              }
            category {
                name
            }
            content {
                id
                content
            }
            author {
                id
                firstName
                lastName
                description {
                    description
                }
            }
            tags {
                name
            }
            slug
            createdAt
        }
      }
    }
  }
`