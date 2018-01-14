import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import { lowerFirst, first, map, result } from 'lodash'
import ArticlePreviewList from '../components/ArticlePreviewList'
import styles from './styles.module.css'

class HomePage extends Component {
    componentDidMount() {
        this.props.updateLayout({
            instagram: this.props.pathContext.instagram,
        })
    }

    getMetaData() {
        return {
            title: `Omid Ahourai's Blog`,
            meta: [
                { name: 'description', content: 'Omid Ahourai is an Entrepreneur, Web and Mobile Apps and Games Developer, and Digital Nomad.' },
                { name: 'keywords', content: 'omid ahourai, omid, ahourai, digital nomad, ardentkid, storyfork' },
                // { property: 'og:site_name', content: `Blog - Omid Ahourai` },
                // { property: 'og:type', content: 'article' },
                // { property: 'og:title', content: title },
                // { property: 'og:description', content: summary },
                // { property: 'og:url', content: `http://omid.com/articles/${slug}` },
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
            ]
        }
    }
    
    render() {
        const { data } = this.props
        console.log('data',data)
        if ( !data ) {
            return <div>No Data :(</div>
        }
        return (
            <div className="article-previews">
                <Helmet {...this.getMetaData()}/>
                <ArticlePreviewList edges={data.us.edges} />
            </div>
        )
    }
}

export default HomePage

HomePage.PropTypes = {
    data: PropTypes.shape({
        us: PropTypes.object,
    })
}

export const pageQuery = graphql`
  query getAllArticles {
    us: allContentfulArticle(sort: { order: DESC, fields: [createdAt] }, filter: { node_locale: { eq: "en-US" } }) {
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