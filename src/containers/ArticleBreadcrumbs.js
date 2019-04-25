import { lowerFirst } from 'lodash'
import { compose, withProps } from 'recompose'
import ArticleBreadcrumbs from 'components/ArticleBreadcrumbs'

export default compose(
  withProps(props => ({
    categoryUrl: `/${lowerFirst(props.categoryName)}/`,
  })),
)(ArticleBreadcrumbs)
