import LayoutHeader from 'components/LayoutHeader'
import { withTheme } from 'styled-components'
import { compose, withProps } from 'recompose'

export default compose(
  withTheme,
  process.env.DEBUG && withProps(props => console.log('{props} [containers/LayoutHeader]',props)),
)(LayoutHeader)