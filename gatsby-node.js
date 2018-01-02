const { forEach } = require('lodash')
// const Promise = require(`bluebird`)
const path = require('path')
const slash = require('slash')
// const marked = require('marked')

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

// exports.onCreateNode = ({ node }) => {
//     if (node.internal.type === `MarkdownRemark`) {
//         node.internal.content = marked(node.internal.content)
//         console.log('>>>',JSON.stringify(node, null, '\t'))
//     }
// }

// exports.createLayouts = ({ graphql, boundActionCreators }) => {
//     const { createLayout } = boundActionCreators
//     console.log('creatinglayout...')
//     return createLayout({
//         component: path.resolve(`./src/templates/article.js`),
//         id: 'layout2', // If no id is provided, the filename will be used as id.
//         context: {
//           title: `My New Layout`
//         }
//       })
// }

// exports.createLayouts = ({ graphql, boundActionCreators }) => {
//     const { createLayout } = boundActionCreators
//     return new Promise((resolve, reject) => {
//         graphql(ARTICLES_QUERY).then(({errors, data}) => {
//             if (errors) {
//                 reject(errors)
//             }

//             console.log('got articles',JSON.stringify(data, null, '\t'))

//             const template = path.resolve(`./src/templates/article.js`)
//             forEach(data.allContentfulArticle.edges, edge => {
//                 const { id, slug } = edge.node
//                 createLayout({
//                     id: 'layout2',
//                     component: slash(template),
//                     context: { title: 'hi', id, slug },
//                 })
//             })
//             resolve()
//         })
//     })
// }
exports.createPages = ({ graphql, boundActionCreators }) => {
    const { createPage } = boundActionCreators
    return new Promise((resolve, reject) => {
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

// exports.onCreatePage = async ({ page, boundActionCreators }) => {
//     const { createPage } = boundActionCreators;
  
//     return new Promise((resolve, reject) => {
//         console.log('page info',page)
//       if (page.path.match(/^\/articles/)) {
//         // It's assumed that `landingPage.js` exists in the `/layouts/` directory
//         page.layout = "layout2";
//         console.log('updating page...',page)
//         // Update the page.
//         createPage(page);
//       }
  
//       resolve();
//     });
//   };
  