import ArticleNextPrev from 'components/ArticleNextPrev'
import { graphql } from 'gatsby'
import { compose, withProps } from 'recompose'
import { lowerFirst } from 'lodash'
import * as selectors from 'selectors'

export const queryArticleFields = graphql`
  fragment ArticleNextPrevFieldsFragment on ContentfulArticle {
    id
    title
    slug
    updatedOn
    publishedOn
    category { name }
    hero { id title description file { url } }
  }
`

export default compose(
  process.env.DEBUG && withProps(props => console.log('{props} [containers/ArticleNextPrev]', props)),
  withProps(({ data }) => ({
    prevArticle: {
      ...data.prevArticle,
      link: {
        alt: data.prevArticle.title,
        title: data.prevArticle.title,
        to: selectors.getArticleUrl({article: data.prevArticle}),
      },
      thumbImageMeta: selectors.getArticleThumbImageMeta({article: data.prevArticle}),
    },
    nextArticle: {
      ...data.nextArticle,
      link: {
        alt: data.nextArticle.title,
        title: data.nextArticle.title,
        to: selectors.getArticleUrl({article: data.nextArticle}),
      },
      thumbImageMeta: selectors.getArticleThumbImageMeta({article: data.nextArticle}),
    },
  })),
  process.env.DEBUG && withProps(props => console.log('{props} [containers/ArticleNextPrev]', props))
)(ArticleNextPrev)
