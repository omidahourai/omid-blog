import ArticleBreadcrumbs from 'components/ArticleBreadcrumbs'
import { compose, withProps, withHandlers } from 'recompose'
import * as selectors from 'selectors'

export const query = graphql`
  fragment ArticleBreadcrumbsFragment on ContentfulArticle {
    category { name }
  }
`

export default compose(
  withProps(({ data }) => ({
    categoryUrl: selectors.getCategoryUrl(data),
    categoryName: selectors.getCategoryName(data),
    title: selectors.getArticleTitle(data),
  })),
  process.env.DEBUG && withProps(props => console.log('{props} [containers/ArticleBreadcrumbs]', props))
)(ArticleBreadcrumbs)
