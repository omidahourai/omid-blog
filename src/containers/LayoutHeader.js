import LayoutHeader from 'components/LayoutHeader'
import { compose, withProps } from 'recompose'

export default compose(
  process.env.DEBUG && withProps(props => console.log('{props} [containers/LayoutHeader]',props)),
)(LayoutHeader)