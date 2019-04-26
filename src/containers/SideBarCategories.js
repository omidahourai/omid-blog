import SideBarCategories from 'components/SideBarCategories'
import { compose, withProps } from 'recompose'
import { theme } from 'styles'

export const query = graphql`
  fragment SideBarCategoryFragment on ContentfulCategory {
    name
    article {
      id
    }
  }
`
export default compose(
  withProps(props => ({
    theme,
  })),
  process.env.DEBUG && withProps(props => console.log('{props} [containers/SideBarCategories]',props)),
)(SideBarCategories)