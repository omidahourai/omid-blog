import SideBarCategories from 'components/SideBarCategories'
import { compose, withProps } from 'recompose'
import { graphql } from 'gatsby'
import * as selectors from 'selectors'

export const query = graphql`
  fragment SideBarCategoryFragment on ContentfulCategory {
    name
    article { id }
  }
`

export default compose(
  withProps(({ data }) => ({
    categories: selectors.getValidCategories(data),
  })),
  // process.env.DEBUG && withProps(props => console.log('{props} [containers/SideBarCategories]', props))
)(SideBarCategories)
