import LinksAuthor from 'components/LinksAuthor'
import { compose, withProps } from 'recompose'
import { graphql } from 'gatsby'
import * as selectors from 'selectors'

export const fragmentAuthor = graphql`
  fragment LinksAuthorFragment on ContentfulAuthor {
    firstName
    lastName
    facebookHandle
    twitterHandle
    instagramHandle
    linkedinHandle
    emailAddress
  }
`

export default compose(
  withProps(({ data }) => ({
    authorName: selectors.getAuthorName(data),
    facebookHandle: 'Omid-Ahourai-296038887569459',
    twitterHandle: 'omidahourai',
    instagramHandle: 'omidahourai',
    linkedinHandle: 'omidahourai',
    emailAddress: 'hello@omid.com',
  }))
)(LinksAuthor)
