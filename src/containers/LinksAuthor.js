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
    authorFacebookHandle: 'Omid-Ahourai-296038887569459',
    authorTwitterHandle: 'omidahourai',
    authorInstagramHandle: 'omidahourai',
    authorLinkedinHandle: 'omidahourai',
    authorEmail: 'hello@omid.com',
  }))
)(LinksAuthor)
