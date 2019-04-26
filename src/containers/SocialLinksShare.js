import SocialLinksShare from 'components/SocialLinksShare'
import { compose, withProps } from 'recompose'
import { graphql } from 'gatsby'

export const query = graphql`
  fragment SocialLinksFragment on ContentfulArticle {
    id
    title
    tags { name }
    hero { title description file { url } }
  }
`

export default compose(
  withProps(props => ({
    tags: props.tags.map(({name}) => name),
    url: `http://omid.com/article/${props.id}/`,
    imageUrl: `http:${props.hero.file.url}?w=1000&h=1000`,
    linkStyles: {
      width: '2.2rem',
      height: '2.2rem',
      margin: '0 4px',
      padding: '0.6rem',
    }
  })),
  withProps(props => ({
    hashtags: props.tags.join(','),
    facebookTitle: 'Share on Facebook',
    twitterTitle: 'Share on Twitter',
    pinterestTitle: 'Share on Pinterest',
    pinterestUrl: `https://pinterest.com/pin/create/button/?url=${props.url}/&media=${props.imageUrl}`,
    twitterUrl: encodeURI(`https://twitter.com/share?text=Check out this article by @omidahourai: ${props.title}&hashtags=${props.hashtags}&url=${props.url}`),
    facebookUrl: encodeURI(`https://facebook.com/sharer/sharer.php?u=${decodeURIComponent(props.url)}`),
  })),
  process.env.DEBUG && withProps(props => {console.log('{props} [containers/SocialLinksShare]',props)}),
)(SocialLinksShare)