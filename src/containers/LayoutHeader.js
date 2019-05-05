import LayoutHeader from 'components/LayoutHeader'
import { withTheme } from 'styled-components'
import { compose, withProps, withHandlers } from 'recompose'

export default compose(
  withTheme,
  withHandlers({
    onToggleTheme: props => props.theme.toggleMode
  }),
  process.env.DEBUG && withProps(props => console.log('{props} [containers/LayoutHeader]', props))
)(LayoutHeader)
