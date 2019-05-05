import SideBarCategories from 'components/SideBarCategories'
import { compose, withProps } from 'recompose'
import { graphql } from 'gatsby'

export const query = graphql`
  fragment SideBarCategoryFragment on ContentfulCategory {
    name
    article {
      id
    }
  }
`
export default compose(
  process.env.DEBUG &&
    withProps(props =>
      console.log('{props} [containers/SideBarCategories]', props)
    )
)(SideBarCategories)
