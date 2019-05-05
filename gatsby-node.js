const { lowerFirst, result, forEach } = require('lodash')
const path = require('path')
const slash = require('slash')
const axios = require('axios')
// const marked = require('marked')

// const IG_CLIENT_ID = 'de8e2627b5ef4a1cba8847faee64535c'
// const IG_CLIENT_SECRET = '213548d4c97647ceaed49d21134d5323'
const IG_ACCESS_TOKEN = '403340749.de8e262.ed321a7e075b4152b2663b39f5b6be61'
// get https://api.instagram.com/v1/users/self/media/recent/?access_token=403340749.de8e262.ed321a7e075b4152b2663b39f5b6be61

let instagram = require('./src/data/instagram.json')
exports.onPreBootstrap = () => new Promise((resolve, reject) => {
    if ( process.env.NODE_ENV === 'development' ) {
        return resolve()
    }
    return axios.get(`https://api.instagram.com/v1/users/self/media/recent/?access_token=${ IG_ACCESS_TOKEN }`)
        .then(response => {
            if ( process.env.NODE_ENV === 'development' ) {
                console.log('Instagram >>', JSON.stringify(response.data, null, '\t'));
            } else {
                console.log(`Instagram >> received data from ${ response.data.data.length } posts.`);
            }
            instagram = response.data
            resolve();
        })
        .catch(error => {
            console.log('err',error)
            reject(error)
        })
})

const ARTICLES_QUERY = `{
    allContentfulTag {
        edges {
            node {
                name
                article {
                    id
                }
            }
        }
    }
    allContentfulCategory {
        edges {
          node {
            name
            article {
              id
            }
          }
      }
    }
    allContentfulArticle(sort: { order: ASC, fields: [publishedOn] }, limit: 1000) {
        edges {
            node {
                id
                slug
                category {
                    name
                }
            }
        }
    }
}`

exports.createPages = ({ graphql, actions }) => {
    const { createPage, createRedirect, deletePage } = actions
    return new Promise((resolve, reject) => {
        createPage({
            path: '/',
            component: slash(path.resolve(`./src/containers/PageHome.js`)),
            context: { instagram }
        })

        createRedirect({
            fromPath: '/home',
            toPath: '/',
            isPermanent: true,
            redirectInBrowser: true,
        })

        resolve(
            graphql(ARTICLES_QUERY).then(({errors, data}) => {
                if (errors) {
                    reject(errors)
                }

                if ( process.env.NODE_ENV === 'development' ) {
                    console.log('Contentful >>',JSON.stringify(data, null, '\t'))
                } else {
                    console.log(`Contentful >> received data from ${ data.allContentfulArticle.edges.length } articles.`)
                }

                // ARTICLE PAGES
                forEach(data.allContentfulArticle.edges, (edge, index) => {
                    const { id, slug, category } = edge.node
                    if (!id || !slug || !category) {
                        return;
                    }
                    const categoryName =  category.name
                    const prevId = result(data.allContentfulArticle.edges, `[${index-1}].node.id`) || ''
                    const nextId = result(data.allContentfulArticle.edges, `[${index+1}].node.id`) || ''
                    const articlePath = `/${lowerFirst(categoryName)}/${slug}/`
                    console.log(`>> Creating Article Page: ${articlePath}`)
                    createPage({
                        path: `/${lowerFirst(categoryName)}/${slug}/`,
                        component: slash(path.resolve(`./src/containers/PageArticle.js`)),
                        context: { id, slug, prevId, nextId },
                    })
                })
                // CATEGORY PAGES
                forEach(data.allContentfulCategory.edges, ({node: {name: categoryName, article}}) => {
                    if (!article) return;
                    console.log(`>> Creating Category Page: /${lowerFirst(categoryName)}/`)
                    createPage({
                        path: `/${lowerFirst(categoryName)}/`,
                        component: slash(path.resolve(`./src/containers/PageCategory.js`)),
                        context: { categoryName },
                    })
                })
                // TAG PAGES
                forEach(data.allContentfulTag.edges, ({node: {name: tagName, article}}) => {
                    if (!article) return;
                    console.log(`>> Creating Tag Page: /tag/${tagName}/`)
                    createPage({
                        path: `/tag/${tagName}/`,
                        component: slash(path.resolve(`./src/containers/PageTag.js`)),
                        context: { tagName },
                    })
                })
                // REDIRECTS
                forEach(data.allContentfulArticle.edges, (edge, index) => {
                    const { id, slug, category } = edge.node
                    if (!id || !slug || !category) {
                        return;
                    }
                    const categoryName = category.name
                    const articlePath = `/${lowerFirst(categoryName)}/${slug}/`
                    console.log(`>> Creating Redirect: /article/${id}/ -> ${articlePath}`)
                    createRedirect({
                        fromPath: `/article/${id}/`,
                        toPath: articlePath,
                        isPermanent: true,
                        redirectInBrowser: true,
                    })
                    console.log(`>> Create Redirect: /articles/${slug}/ -> ${articlePath}`)
                    createRedirect({
                        fromPath: `/articles/${slug}/`,
                        toPath: articlePath,
                        isPermanent: true,
                        redirectInBrowser: true,
                    })
                })
            })
        )
    })
}

// exports.onPostBootstrap = ({ actions }) => {
//     const { deletePage } = actions
//     return new Promise((resolve, reject) => {
//         deletePage({
//             path: '/home/',
//             component: slash(path.resolve('./src/pages/home')),
//         })
//         resolve()
//     })
// }