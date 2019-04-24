import SideBar from 'components/SideBar'
import { compose, withHandlers } from 'recompose'
import { result } from 'lodash'

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
    authorThumbnail: () => {
      const width = 250
      const height = 250
      const r = width * 0.5
      const r2x = r * 2
      const width2x = width * 2
      const height2x = height * 2
      const photoUrl = props.altPhoto.file.photoUrl
      const title = props.author.shortTitle
      return {
        title,
        width,
        height,
        alt: title,
        src: `${photoUrl}?w=${width}&h=${height}&r=${r}&q=70`,
        srcSet: `${photoUrl}?w=${width2x}&h=${height2x}&r=${r2x}&q=70 2x`,
      }
    }
  })),
  withHandlers({
    parseImgMeta: props => () => {
      const { shortTitle } = props
      const { photoUrl } = props.altPhoto.file
      const width = 250
      const height = 250
      const r = width * 0.5
      const r2x = r * 2
      const width2x = width * 2
      const height2x = height * 2
      return {
        width,
        height,
        title: shortTitle,
        alt: shortTitle,
        src: `${photoUrl}?w=${width}&h=${height}&r=${r}&q=70`,
        srcSet: `${photoUrl}?w=${width2x}&h=${height2x}&r=${r2x}&q=70 2x`,
      }
    },
    igImageData: props => () => props.instagramData.map(item => {
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
  }),
)(SideBar)