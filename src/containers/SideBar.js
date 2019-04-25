import SideBar from 'components/SideBar'
import { compose, withProps } from 'recompose'
import { result } from 'lodash'

const getAuthorThumbnail = props => {
  const width = 250
  const height = 250
  const r = width * 0.5
  const r2x = r * 2
  const width2x = width * 2
  const height2x = height * 2
  const photoUrl = props.author.altPhoto.file.photoUrl
  return {
    width,
    height,
    title: props.author.shortTitle,
    alt: props.author.shortTitle,
    src: `${photoUrl}?w=${width}&h=${height}&r=${r}&q=70`,
    srcSet: `${photoUrl}?w=${width2x}&h=${height2x}&r=${r2x}&q=70 2x`,
  }
}

export default compose(
  withProps(props => ({
    igImageData: props.instagram.map(item => {
      let text = result(item, 'caption.text') || ''
      if (text.length > 50) {
        text = text.slice(0, 50) + '...'
      }
      return {
        text,
        key: item.id,
        url: item.images.standard_resolution.url,
        width: item.images.standard_resolution.width,
        height: item.images.standard_resolution.height,
        likes: item.likes.count,
        link: item.link,
      }
    }),
    authorThumbnail: getAuthorThumbnail(props),
  })),
  withProps(props => {
    console.log('{props} [containers/Sidebar]',props)
  }),
)(SideBar)