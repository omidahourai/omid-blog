import SideBarInstagram from 'components/SideBarInstagram'
import { compose, withProps } from 'recompose'
import { withTheme } from 'styled-components'
import * as selectors from 'selectors'

export default compose(
  withTheme,
  withProps(({ pageContext }) => ({
    instagram: selectors.getInstagramImageMeta(pageContext, 0, 9)
  })),
  // process.env.DEBUG && withProps(props => console.log('{props} [containers/SidebarInstagram]', props))
)(SideBarInstagram)
