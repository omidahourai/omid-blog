import ArticleFooter from 'components/ArticleFooter'
import { compose, withProps } from 'recompose'
import * as selectors from 'selectors'

export const query = graphql`
  fragment ArticleFooterFragment on ContentfulArticle {
    id
    tags { name }
  }
`

export default compose(
  withProps(({ data }) => ({
    articleId: selectors.getArticleId(data),
    tags: selectors.getArticleTagNames(data),
  }))
)(ArticleFooter)
