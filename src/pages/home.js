import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import { forEach, lowerFirst, first, map, result } from 'lodash'
import {
    ArticlePreviewList,
    SideBar,
} from 'components'
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
                { name: 'description', content: 'Read about my life! Omid Ahourai is an Entrepreneur, Web and Mobile Apps and Games Developer, and Digital Nomad.' },
                { name: 'keywords', content: 'omid ahourai, omid, ahourai, digital nomad, ardentkid, storyfork' },
                { property: 'og:site_name', content: `Blog - Omid Ahourai` },
                { property: 'og:type', content: 'website' },
                { property: 'og:title', content: `Omid Ahourai's Blog` },
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
        // console.log('data',data)
        if ( !data ) {
            return <div>No Data :(</div>
        }
        console.log(data.author)
        data.author.fullName = `${ data.author.firstName } ${ data.author.lastName }`
        forEach(data.articles.edges, edge => edge.node.author.fullName = `${ edge.node.author.firstName } ${ edge.node.author.lastName }`)
        return (
            <div className={styles.wrapper}>
                <Helmet {...this.getMetaData()}/>
                <div className={`article-previews ${ styles.articles }`}>
                    <ArticlePreviewList edges={data.articles.edges} />
                </div>
                <div className={`sidebar ${ styles.sidebar }`}>
                    {this.props.pathContext.instagram ? (
                        <SideBar
                            instagramData={this.props.pathContext.instagram.data}
                            {...data.author} />
                    ) : ''}
                </div>
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
  query getAllBlogData {
        author: contentfulAuthor(firstName: {eq: "Omid"}, lastName: {eq: "Ahourai"}){
            firstName
            lastName
            shortTitle
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
            description {
                text: description
            }
            facebookHandle
            twitterHandle
            instagramHandle
            linkedinHandle
            emailAddress
        }
        articles: allContentfulArticle(sort: { order: DESC, fields: [publishedOn] }, filter: { node_locale: { eq: "en-US" } }) {
        edges {
            node {
                id
                title
                summary {
                    childMarkdownRemark {
                        html
                    }
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
                publishedOn
                updatedOn
            }
        }
    }
  }
`