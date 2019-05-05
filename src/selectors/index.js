import { createSelector } from 'reselect'
import { lowerFirst } from 'lodash'
import moment from 'moment'

const getAuthor = data => data.author
const getArticle = data => data.article
const getArticles = data => data.articles
const getCategory = data => data.category || getArticle(data).category
export const getCategory = data => data.categories
export const getInstagram = ctx => ctx.instagram ? ctx.instagram.data : []

const getImageMeta = ({ r, dim, baseUrl, title }) => ({
  width: r ? r*2 : dim,
  height: r ? r*2 : dim,
  alt: title,
  title: title,
  src: `${baseUrl}?w=${r ? r*2 : dim}&h=${r ? r*2 : dim}${r ? `&r=${r}` : ''}&q=70`,
  srcSet: `${baseUrl}?w=${r ? r*4 : dim*2}&h=${r ? r*4 : dim*2}${r ? `&r=${r*2}` : ''}&q=70 2x`,
})
// const createSelector = (fn, res) => args => res(fn(args))

export const getCategoryUrl = createSelector(
  getCategory,
  category => (category ? `/${lowerFirst(category.name)}` : '')
)
export const getCategoryName = createSelector(
  getCategory,
  category => category.name
)
export const getValidCategories = createSelector(
  getCategories,
  categories => categories.edges
    .filter(({ node }) => !!node.article)
    .map(({ node }) => node)
)

export const getCompletedArticles = createSelector(
  getArticles,
  articles =>
    articles.edges
      .map(({ node }) => node)
      .filter(
        article =>
          article.author &&
          article.category &&
          article.hero &&
          article.publishedOn &&
          article.slug &&
          article.tags &&
          article.title
      )
)

export const getArticleId = createSelector(
  getArticle,
  article => article.id
)
export const getArticlePublishDate = createSelector(
  getArticle,
  article => moment(article.publishedOn).format('MMMM D, YYYY')
)
export const getArticleUrl = createSelector(
  getArticle,
  article => `${lowerFirst(article.category.name)}/${article.slug}`
)
export const getArticleFullUrl = createSelector(
  getArticleUrl,
  articleUrl => `http://www.omid.com/${articleUrl}`
)
export const getArticleTitle = createSelector(
  getArticle,
  article => article.title
)
export const getArticleSummary = createSelector(
  getArticle,
  article => article.summary.summary
)
export const getArticleSummaryHtml = createSelector(
  getArticle,
  article => article.summary.childMarkdownRemark.html || 'SUMMARY NOT SET'
)
export const getArticleContentHtml = createSelector(
  getArticle,
  article => article.content.childMarkdownRemark.html || 'CONTENT EMPTY'
)
export const getArticleTags = createSelector(
  getArticle,
  article => article.tags
)
export const getArticleTagNames = createSelector(
  getArticleTags,
  tags => tags.map(({ name }) => name)
)
export const getArticleHeroBase = createSelector(
  getArticle,
  article => article.hero.file.url
)
export const getArticleHeroTitle = createSelector(
  getArticle,
  article => article.hero.title
)
export const getArticleHero = createSelector(
  getArticleHeroBase,
  heroBaseUrl => `http:${heroBaseUrl}?w=1200&h=630&q=70`
)
export const getArticleHeroShare = createSelector(
  getArticleHeroBase,
  heroBaseUrl => `http:${heroBaseUrl}?w=1000&h=1000`
)
export const getArticleHeroImageMeta = createSelector(
  [getArticleHeroBase, getArticleHeroTitle],
  (baseUrl, title) => getImageMeta({ dim: 1000, baseUrl, title })
)
export const getArticleThumbImageMeta = createSelector(
  [getArticleHeroBase, getArticleHeroTitle],
  (baseUrl, title) => getImageMeta({ dim: 75, baseUrl, title })
)

export const getArticleShareUrl = createSelector(
  getArticle,
  article => `http://omid.com/article/${article.id}/`
)
export const getArticleVariables = createSelector(
  getArticle,
  article => article.variables
)
export const getArticleMode = createSelector(
  getArticleVariables,
  variables => (variables && variables.mode) || 'light'
)

export const getAuthorUrl = createSelector(
  getAuthor,
  author => '#'
  // author => `/author/${(author.firstName + author.lastName).toLowerCase()}`
)
export const getAuthorName = createSelector(
  getAuthor,
  author => (author ? `${author.firstName} ${author.lastName}` : '')
)
export const getAuthorShortTitle = createSelector(
  getAuthor,
  author => author.shortTitle
)
export const getAuthorDescription = createSelector(
  getAuthor,
  author => author.description.text
)
export const getAuthorShortDescription = createSelector(
  getAuthor,
  author => author.shortDescription
)
export const getAuthorBaseImageUrl = createSelector(
  getAuthor,
  author => author.photo.file.url
)
export const getAuthorBaseAltImageUrl = createSelector(
  getAuthor,
  author => author.altPhoto.file.url
)
export const getAuthorImageMeta = createSelector(
  [getAuthorBaseImageUrl, getAuthorName],
  (baseUrl, title) => getImageMeta({ dim: 110, baseUrl, title })
)

export const getAuthorThumbImageMeta = createSelector(
  [getAuthorBaseAltImageUrl, getAuthorShortTitle],
  (baseUrl, title) => getImageMeta({ r: 125, baseUrl, title })
)

const parseCaption = caption => (
  (caption && caption.text && caption.text.length > 50)
    ? caption.text.slice(0, 50) + '...'
    : ''
)
export const getInstagramImageMeta = createSelector(
  [(ctx, start=9, end=0) => ({start, end}), getInstagram],
  (({start, end}), instagram) => instagram
    .slice(start, end)
    .map(item => ({
      text: parseCaption(item.caption),
      key: item.id,
      url: item.images.standard_resolution.url,
      width: item.images.standard_resolution.width,
      height: item.images.standard_resolution.height,
      likes: item.likes.count,
      link: item.link,
    }))
)
