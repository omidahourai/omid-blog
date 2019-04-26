import ArticleBreadcrumbs from 'components/ArticleBreadcrumbs'
import { lowerFirst } from 'lodash'
import { compose, withProps } from 'recompose'

export default compose(
  withProps(props => ({
    categoryUrl: `/${lowerFirst(props.categoryName)}/`,
  })),
)(ArticleBreadcrumbs)
