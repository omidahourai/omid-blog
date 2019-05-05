import ArticleBreadcrumbs from 'components/ArticleBreadcrumbs'
import { compose, withProps } from 'recompose'
import * as selectors from 'selectors'

export default compose(
  withProps(({ data }) => ({
    categoryUrl: selectors.getCategoryUrl(data),
    categoryName: selectors.getCategoryName(data),
  }))
)(ArticleBreadcrumbs)
