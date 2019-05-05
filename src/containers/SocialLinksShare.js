import SocialLinksShare from 'components/SocialLinksShare'
import { compose, withProps } from 'recompose'
import { graphql } from 'gatsby'
import * as selectors from 'selectors'

export const query = graphql`
  fragment SocialLinksFragment on ContentfulArticle {
    id
    title
    tags {
      name
    }
    hero {
      title
      description
      file {
        url
      }
    }
  }
`

export default compose(
  process.env.DEBUG &&
    withProps(props => {
      console.log('{props} [containers/SocialLinksShare]', props)
    }),

  withProps(props => ({
    title: selectors.getArticleTitle(props.data),
    hashtags: selectors.getArticleTagNames(props.data).join(','),
    url: selectors.getArticleShareUrl(props.data),
    imageUrl: selectors.getArticleHeroShare(props.data),
    linkStyles: {
      width: '2.2rem',
      height: '2.2rem',
      margin: '0 4px',
      padding: '0.6rem',
    },
  })),
  withProps(props => ({
    facebookTitle: 'Share on Facebook',
    twitterTitle: 'Share on Twitter',
    pinterestTitle: 'Share on Pinterest',
    pinterestUrl: `https://pinterest.com/pin/create/button/?url=${
      props.url
    }/&media=${props.imageUrl}`,
    twitterUrl: encodeURI(
      `https://twitter.com/share?text=Check out this article by @omidahourai: ${
        props.title
      }&hashtags=${props.hashtags}&url=${props.url}`
    ),
    facebookUrl: encodeURI(
      `https://facebook.com/sharer/sharer.php?u=${decodeURIComponent(
        props.url
      )}`
    ),
  })),
  process.env.DEBUG &&
    withProps(props => {
      console.log('{props} [containers/SocialLinksShare]', props)
    })
)(SocialLinksShare)
