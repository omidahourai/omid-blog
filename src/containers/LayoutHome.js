import LayoutHome from 'components/LayoutHome'
import { compose, withProps } from 'recompose'
import * as selectors from 'selectors'
import 'styles/global.css'

export default compose(
  withProps(({ pageContext }) => ({
    instagram: selectors.getInstagram(pageContext),
  })),
  process.env.DEBUG &&
    withProps(props => console.log('{props} [containers/PageHome]', props))
)(LayoutHome)
