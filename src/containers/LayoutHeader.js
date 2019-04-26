import LayoutHeader from 'components/LayoutHeader'
import { compose, withProps } from 'recompose'
import { theme } from 'styles'

export default compose(
  withProps(props => ({
    theme,
  })),
  process.env.DEBUG && withProps(props => console.log('{props} [containers/LayoutHeader]',props)),
)(LayoutHeader)