import { compose, withProps } from 'recompose'
import { graphql } from 'gatsby'
import ArticleHeader from 'components/ArticleHeader'
import * as selectors from 'selectors'

export const query = graphql`
  fragment ArticleHeaderFragment on ContentfulArticle {
    title
    slug
    publishedOn
    category { name }
    author { firstName lastName }
  }
`

export default compose(
  withProps(({ data }) => ({
    categoryUrl: selectors.getCategoryUrl(data),
    categoryName: selectors.getCategoryName(data),
    publishDate: selectors.getArticlePublishDate(data),
    authorUrl: selectors.getAuthorUrl(data),
    authorName: selectors.getAuthorName(data),
  })),
  process.env.DEBUG && withProps(props => console.log('{props} [containers/ArticleHeader]', props))
)(ArticleHeader)
