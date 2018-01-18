import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import { forEach, lowerFirst, first, map, result } from 'lodash'
import {
    ArticlePreviewList,
    SideBar,
} from 'components'
import styles from './tag.module.css'

class TagTemplate extends Component {
    getMetaData(tagName) {
        return {
            title: `Omid Ahourai's Blog`,
            meta: [
                { name: 'description', content: 'Read about my life! Omid Ahourai is an Entrepreneur, Web and Mobile Apps and Games Developer, and Digital Nomad.' },
                { name: 'keywords', content: 'omid ahourai, omid, ahourai, digital nomad, ardentkid, storyfork' },
                { property: 'og:site_name', content: `Blog - Omid Ahourai` },
                { property: 'og:type', content: 'website' },
                { property: 'og:title', content: `Omid Ahourai Blog - ${tagName}` },
                { property: 'og:description', content: 'Read about my life! Omid Ahourai is an Entrepreneur, Web and Mobile Apps and Games Developer, and Digital Nomad.' },
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
            ]
        }
    }
    
    render() {
        const { data } = this.props
        if ( !data ) {
            return <div>No Data :(</div>
        }
        const { tag } = data
        const { articles, name: tagName } = tag
        forEach(articles, article => article.author.fullName = `${ article.author.firstName } ${ article.author.lastName }`)
        console.log('cat data>>',tag,articles)
        return (
            <div className={styles.wrapper}>
                <Helmet {...this.getMetaData(tagName)}/>
                <div className={`article-previews ${ styles.articles }`}>
                    <ArticlePreviewList articles={articles} />
                </div>
            </div>
        )
    }
}

export default TagTemplate

TagTemplate.PropTypes = {
    data: PropTypes.shape({
        tag: PropTypes.object,
    })
}

export const pageQuery = graphql`
  query TagQuery($tagName: String!) {
    tag: contentfulTag(name: {eq: $tagName}) {
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
}`