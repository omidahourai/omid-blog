import SideBar from 'components/SideBar'
import { compose, withProps } from 'recompose'
import { graphql } from 'gatsby'
import { withTheme } from 'styled-components'
import * as selectors from 'selectors'

export const fragmentCategories = graphql`
  fragment SideBarCategoriesFragment on ContentfulCategoryConnection {
    edges { node { ...SideBarCategoryFragment } }
  }
`
export const fragmentAuthor = graphql`
  fragment SideBarAuthorFragment on ContentfulAuthor {
    firstName
    lastName
    shortTitle
    shortDescription
    photo { file { url } }
    altPhoto { file { url } }
    description { text: description }
    ...LinksAuthorFragment
  }
`

export default compose(
  withTheme,
  withProps(({ data }) => ({
    authorThumbnail: selectors.getAuthorThumbImageMeta(data),
    authorTitle: selectors.getAuthorShortTitle(data),
    authorDescription: selectors.getAuthorShortDescription(data),
  })),
  // process.env.DEBUG && withProps(props => console.log('{props} [containers/Sidebar]', props))
)(SideBar)
