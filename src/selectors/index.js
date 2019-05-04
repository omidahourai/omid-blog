import { createSelector } from 'reselect'
import { lowerFirst } from 'lodash'
import moment from 'moment'

const getAuthor = data => data.author
const getArticle = data => data.article
const getCategory = data => data.category || getArticle(data).category

// const createSelector = (fn, res) => args => res(fn(args))

export const getCategoryUrl = createSelector(getCategory,
  category => category ? `/${lowerFirst(category.name)}` : ''
)
export const getCategoryName = createSelector(getCategory,
  category => category.name
)


export const getArticlePublishDate = createSelector(getArticle,
  article => moment(article.publishedOn).format('MMMM D, YYYY')
)
export const getArticleUrl = createSelector(getArticle,
  article => `${lowerFirst(article.category.name)}/${article.slug}`
)
export const getArticleFullUrl = createSelector(getArticleUrl,
  articleUrl => `http://www.omid.com/${articleUrl}`
)
export const getArticleTitle = createSelector(getArticle,
  article => article.title
)
export const getArticleSummary = createSelector(getArticle,
  article => article.summary.summary
)
export const getArticleTags = createSelector(getArticle,
  article => article.tags
)
export const getArticleTagNames = createSelector(getArticleTags,
  tags => tags.map(({name}) => name)
)
export const getArticleHeroBase = createSelector(getArticle,
  article => article.hero.file.url
)
export const getArticleHero = createSelector(getArticleHeroBase,
  heroBaseUrl => `http:${heroBaseUrl}?w=1200&h=630&q=70`
)
export const getArticleHeroShare = createSelector(getArticleHeroBase,
  heroBaseUrl => `http:${heroBaseUrl}?w=1000&h=1000`
)
export const getArticleShareUrl = createSelector(getArticle,
  article => `http://omid.com/article/${article.id}/`
)


export const getAuthorUrl = createSelector(getAuthor,
  author => '#'
)
export const getAuthorName = createSelector(getAuthor,
  author => author ? `${author.firstName} ${author.lastName}` : ''
)