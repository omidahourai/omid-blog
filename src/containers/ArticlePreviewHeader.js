import ArticlePreviewHeader from 'components/ArticlePreviewHeader'
import { compose, withProps } from 'recompose'
import { graphql } from 'gatsby'
import * as selectors from 'selectors'

export const query = graphql`
  fragment ArticlePreviewHeaderFragment on ContentfulArticle {
    title
    publishedOn
    category { name }
    author { firstName lastName }
  }
`

export default compose(
  withProps(({data}) => ({
    title: selectors.getArticleTitle(data),
    articleUrl: selectors.getArticleUrl(data),
    authorName: selectors.getAuthorName(data),
    authorUrl: selectors.getAuthorUrl(data),
    categoryUrl: selectors.getCategoryUrl(data),
    categoryName: selectors.getCategoryName(data),
    publishDate: selectors.getArticlePublishDate(data),
  })),
  process.env.DEBUG && withProps(props => console.log('{props} [containers/ArticlePreviewHeader]', props))
)(ArticlePreviewHeader)
