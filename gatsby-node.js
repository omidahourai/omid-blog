const { forEach } = require('lodash')
// const Promise = require(`bluebird`)
const path = require('path')
const slash = require('slash')
const axios = require('axios')
// const marked = require('marked')

// const IG_CLIENT_ID = 'de8e2627b5ef4a1cba8847faee64535c'
// const IG_CLIENT_SECRET = '213548d4c97647ceaed49d21134d5323'
const IG_ACCESS_TOKEN = '403340749.de8e262.ed321a7e075b4152b2663b39f5b6be61'
// get https://api.instagram.com/v1/users/self/media/recent/?access_token=403340749.de8e262.ed321a7e075b4152b2663b39f5b6be61

let instagram = require('./src/data/instagram.json')
exports.onPreBootstrap = () => {
    return new Promise((resolve, reject) => {
        if ( process.env.NODE_ENV === 'development' ) {
            return resolve()
        }
        return axios.get(`https://api.instagram.com/v1/users/self/media/recent/?access_token=${ IG_ACCESS_TOKEN }`)
            .then(response => {
                console.log(response.data);
                instagram = response.data
                resolve();
            })
            .catch(error => {
                console.log('err',error)
                reject(error)
            })
    })
}

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
    const { createPage, deletePage } = boundActionCreators
    return new Promise((resolve, reject) => {
        createPage({
            layout: 'index',
            path: '/',
            component: slash(path.resolve(`./src/pages/home.js`)),
            context: { instagram }
        })

        graphql(ARTICLES_QUERY).then(({errors, data}) => {
            if (errors) {
                reject(errors)
            }

            console.log('got articles',JSON.stringify(data, null, '\t'))

            const template = path.resolve(`./src/templates/article.js`)
            forEach(data.allContentfulArticle.edges, edge => {
                const { id, slug } = edge.node
                createPage({
                    layout: 'article',
                    path: `/articles/${slug}/`,
                    component: slash(template),
                    context: { id, slug },
                })
            })
            resolve()
        })
    })
}

// exports.onPostBootstrap = ({ boundActionCreators }) => {
//     const { deletePage } = boundActionCreators
//     return new Promise((resolve, reject) => {
//         deletePage({
//             path: '/home/',
//             component: slash(path.resolve('./src/pages/home')),
//         })
//         resolve()
//     })
// }