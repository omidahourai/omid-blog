import ArticleBreadcrumbs from 'components/ArticleBreadcrumbs'
import { compose, withProps } from 'recompose'
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
  })),
  process.env.DEBUG && withProps(props => console.log('{props} [containers/ArticleBreadcrumbs]', props))
)(ArticleBreadcrumbs)
