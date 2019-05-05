import InstagramBanner from 'components/InstagramBanner'
import { compose, withProps } from 'recompose'
import * as selectors from 'selectors'

export default compose(
  withProps(({ pageContext }) => ({
    instagram: selectors.getInstagramImageMeta(pageContext, 9, 0)
  })),
  process.env.DEBUG && withProps(props => console.log('{props} [containers/InstagramBanner]', props))
)(InstagramBanner)
