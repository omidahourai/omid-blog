const { forEach } = require('lodash')
// const Promise = require(`bluebird`)
const path = require('path')
const slash = require('slash')

const ARTICLES_QUERY = `{
    allContentfulArticle(limit: 1000) {
        edges {
            node {
            id
            slug
            }
        }
    }
}`

exports.createPages = ({ graphql, boundActionCreators }) => {
    const { createPage } = boundActionCreators
    return new Promise((resolve, reject) => {
        graphql(ARTICLES_QUERY).then(({errors, data}) => {
            if (errors) {
                reject(errors)
            }

            const template = path.resolve(`./src/templates/article.js`)
            forEach(data.allContentfulArticle.edges, edge => {
                const { id, slug } = edge.node
                createPage({
                    path: `/articles/${slug}/`,
                    component: slash(template),
                    context: { id, slug },
                })
            })
            resolve()
        })
    })
}
